import React from "react";
import _ from "lodash";
import {defaultsDeep, overwritesDeep} from "../helpers/collection";

export default class Component extends React.Component {
    static defaultState = {};

    constructor(props) {
        super(props);
        this.setter = this.setter.bind(this);
        this.getter = this.getter.bind(this);
        this.passDown = this.passDown.bind(this);
        this.liftUp = this.liftUp.bind(this);

        this.fetch = this.fetch.bind(this);

        this.fetch();
    }

    /**
     *
     * @param path
     * @param value
     * @param upperSetter
     * @return {*} actually updated value
     */
    setter(path, value, upperSetter) {
        path = _.isArray(path) ? path : ((typeof path === 'string' && path.split('.')) || []);

        if (upperSetter) {
            return (event, overrideValue) => upperSetter(event, overrideValue, value);
        } else {
            // lookup in this.props.state.setter
            const upperSetterSet = _.get(this.props, 'state.setter');
            if (upperSetterSet) {
                let sub = null;
                for (let i = path.length; i >= 0; --i) {
                    upperSetter = upperSetterSet[path.slice(0, i).join('.')];
                    if (upperSetter)
                        sub = path.slice(i);
                }
                if (upperSetter) {
                    return (event, overrideValue) => {
                        return upperSetter(event, overrideValue, value, sub);
                    };
                }
            }
        }

        // create a new setter
        return (event, overrideValue, defaultValue, subPath = []) => {
            // `event` is volatile.
            const currentTarget = (event && event.currentTarget) || null;


            let x = (x => x);
            if (!_.isUndefined(overrideValue)) {
                x = overrideValue;
            } else if (!_.isUndefined(value)) {
                x = value;
            } else if (!_.isUndefined(defaultValue)) {
                x = defaultValue;
            }

            const fullPath = path.concat(subPath);

            this.setState(prev => {
                const prevX = _.get(prev, fullPath);

                if (typeof x === "function") {
                    x = x.call(currentTarget, prevX, fullPath, prev, this);
                    if (_.isUndefined(x))
                        return _.set(prev, fullPath, prevX);
                    _.set(prev, fullPath, x);
                }

                if (prevX === x)
                    return null;

                return _.set(prev, fullPath, x);
            });

            return x;
        };
    }

    set(path, value) {
        return this.setter(path)(null, value);
    }

    getter(path) {
        return () => this.get(path);
    }

    get(path, defaultValue) {
        const upper = _.get(this.props, 'state.init.' + path);
        if (_.isNil(upper))
            return _.get(this.state, path, defaultValue);
        return upper;
    }

    passDown(base, include = [""]) {
        const init = defaultsDeep({}, (base && _.get(this.state, base, {})) || this.state);
        const setter = _.get(this.props, 'stateSetter', {});

        _.forEach(include, (v, k) => {
            const isArray = typeof k === 'number';
            const sub = isArray ? v : k;
            const defaultSetter = this.setter(_.compact([base, sub]));
            if (!setter[sub])
                setter[sub] = isArray ? defaultSetter : (v || defaultSetter);
        });

        return {init, setter};
    }

    liftUp() {
        _.forEach(this.state, (v, k) => {
            if (v !== this.get(k))
                this.set(k, v);
        });
    }

    _bringUpperState(props = this.props) {
        const override = _.get(props, 'stateInit', {});
        const fetched = _.get(props, 'state.init', {});
        const defaultState = _.cloneDeep(this.constructor.defaultState);

        const upperState = defaultsDeep({}, override, fetched, defaultState);

        _.forEach(upperState, (v, k) => {
            if (typeof v === 'function') upperState[k] = v(fetched[k]);
        });

        return upperState;
    }

    /**
     * Bring down the upper state. May change current state and fire another React.Component updating procedure.
     */
    fetch() {
        const upperState = this._bringUpperState();

        if (_.get(this, 'state'))
            this.setState(prevState => {
                if (_.isMatch(prevState, upperState))
                    return null;
                return overwritesDeep(prevState, upperState);
            });
        else
            _.set(this, 'state', upperState)
    }
}
