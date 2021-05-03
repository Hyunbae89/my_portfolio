import _ from "lodash";

/**
 * copy values from source plain object to target plain object, there are some strategies can be used:
 *
 * `defaults` - if target is not *defined*, source value will be copied.
 *      ex) {'x': 0} <- {'x': 1, 'y': 1}
 *      // => {'x': 0, 'y': 1}
 *
 * `overwrite` - all source values will copied to target without concerning of availability in the target.
 *      ex) {'x': 0} <- {'x': 1, 'y': 1}
 *      // => {'x': 1, 'y': 1}
 *
 * `updates` - only when target value existing, source value will be copied.
 *      ex) {'x': 0} <- {'x': 1, 'y': 1}
 *      // => {'x': 1}
 *
 * @module
 */

function _default(target, source) {
    if (_.isPlainObject(target) && _.isPlainObject(source)) {
        _.forEach(source, (v, k) => {
            if (typeof target[k] === 'undefined')
                target[k] = v;
        });
    }
    return target;
}

function defaultDeep(target, source) {
    if (_.isPlainObject(target) && _.isPlainObject(source)) {
        _.forEach(source, (v, k) => {
            if (typeof target[k] === 'undefined')
            {
                if (_.isPlainObject(v))
                    target[k] = defaultDeep({}, v);
                else
                    target[k] = v;
            } else if (_.isPlainObject(target[k]))
                defaultDeep(target[k], v);
            }
        );
    }
    return target;
}

/**
 * Copy values from source, if target is not *defined*, source value will be copied.
 *   ex) {'x': 0, 'dict': {'x': 0}} <- {'x': 1, 'y': 1, dict: {'x': 1, 'y': 1}}, {'x': 2, 'z': 2, 'dict': {'x': 2, 'z': 2}}
 *   // => {'x': 0, 'y': 1, 'z': 2, 'dict': {'x': 0}}
 *
 * @param target
 * @param {...object} [sources]
 */
export function defaults(target, sources) {
    // return _.defaults.apply(undefined, arguments);
    _.forEach([...arguments].splice(1), source => {
        _default(target, source);
    });
    return target;
}

/**
 * Copy values from source, if target is not *defined*, source value will be copied.
 *   ex) {'x': 0, 'dict': {'x': 0}} <- {'x': 1, 'y': 1, dict: {'x': 1, 'y': 1}}, {'x': 2, 'z': 2, 'dict': {'x': 2, 'z': 2}}
 *   // => {'x': 0, 'y': 1, 'z': 2, 'dict': {'x': 0, 'y': 1, 'z': 2}}
 *
 * @param target
 * @param {...object} [sources]
 */
export function defaultsDeep(target, sources) {
    // return _.defaultsDeep.apply(undefined, arguments);
    _.forEach([...arguments].splice(1), source => {
        defaultDeep(target, source);
    });
    return target;
}

function overwrite(target, source) {
    if (_.isPlainObject(target) && _.isPlainObject(source)) {
        _.forEach(source, (v, k) => {
            target[k] = v;
        });
    }
    return target;
}

function overwriteDeep(target, source) {
    if (_.isPlainObject(target) && _.isPlainObject(source)) {
        _.forEach(source, (v, k) => {
            if (_.isPlainObject(target[k]) && _.isPlainObject(v)) {
                overwriteDeep(target[k], v)
            } else {
                target[k] = v;
            }
        });
    }
    return target;
}

/**
 * All source values will copied to target without concerning of availability in the target.
 *   ex) {'x': 0, 'dict': {'x': 0}} <- {'x': 1, 'y': 1, 'dict': {'x': 1, 'y': 1}}, {'x': 2, 'z': 2, 'dict': {'x': 2, 'z': 2}}
 *   // => {'x': 2, 'y': 1, 'z': 2, 'dict': {'x': 2, 'z': 2}}
 *
 * @param target
 * @param {...object} [sources]
 */
export function overwrites(target, sources) {
    _.forEach([...arguments].splice(1), source => {
        overwrite(target, source);
    });
    return target;
}

/**
 * All source values will copied to target without concerning of availability in the target.
 *   ex) {'x': 0, 'dict': {'x': 0}} <- {'x': 1, 'y': 1, 'dict': {'x': 1, 'y': 1}}, {'x': 2, 'z': 2, 'dict': {'x': 2, 'z': 2}}
 *   // => {'x': 2, 'y': 1, 'z': 2, 'dict': {'x': 2, 'y': 1, 'z': 2}}
 *
 * @param target
 * @param {...object} [sources]
 */
export function overwritesDeep(target, sources) {
    _.forEach([...arguments].splice(1), source => {
        overwriteDeep(target, source);
    });
    return target;
}

function update(target, source) {
    if (_.isPlainObject(target) && _.isPlainObject(source)) {
        _.forEach(target, (v, k) => {
            if (typeof v === 'undefined')
                return true; // continue without update
            target[k] = source[k];
        });
    }
    return target;
}

function updateDeep(target, source) {
    if (_.isPlainObject(target) && _.isPlainObject(source)) {
        _.forEach(target, (v, k) => {
            if (_.isPlainObject(v)) {
                updateDeep(v, source[k])
            } else {
                target[k] = source[k];
            }
        });
    }
    return target;
}

/**
 * Only when target value existing, source value will be copied.
 *   ex) {'x': 0, 'dict': {'x': 0}} <- {'x': 1, 'y': 1, 'dict': {'x': 1, 'y': 1}}, {'x': 2, 'z': 2, 'dict': {'x': 2, 'z': 2}}
 *   // => {'x': 2, 'dict': {'x': 2, 'z': 2}}
 *
 * @param target
 * @param {...object} [sources]
 */
export function updates(target, sources) {
    _.forEach([...arguments].splice(1), source => {
        update(target, source);
    });
    return target;
}

/**
 * Only when target value existing, source value will be copied.
 *   ex) {'x': 0, 'dict': {'x': 0}} <- {'x': 1, 'y': 1, 'dict': {'x': 1, 'y': 1}}, {'x': 2, 'z': 2, 'dict': {'x': 2, 'z': 2}}
 *   // => {'x': 2, 'dict': {'x': 2}}
 *
 * @param target
 * @param {...object} [sources]
 */
export function updatesDeep(target, sources) {
    _.forEach([...arguments].splice(1), source => {
        updateDeep(target, source);
    });
    return target;
}

/*
function test() {
    const args = [{x: 0, dict: {x: 0}},{x: 1, y: 1, dict: {x: 1, y: 1}}, {x: 2, z: 2, dict: {x: 2, z: 2}}];

    console.log("defaults");
    console.log(
        defaults(..._.cloneDeep(args))
    );

    console.log("defaultsDeep");
    console.log(
        defaultsDeep(..._.cloneDeep(args))
    );

    console.log("overwrites");
    console.log(
        overwrites(..._.cloneDeep(args))
    );

    console.log("overwritesDeep");
    console.log(
        overwritesDeep(..._.cloneDeep(args))
    );

    console.log("updates");
    console.log(
        updates(..._.cloneDeep(args))
    );

    console.log("updatesDeep");
    console.log(
        updatesDeep(..._.cloneDeep(args))
    );
}
*/