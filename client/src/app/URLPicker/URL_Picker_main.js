import {Link} from "react-router-dom";
import {URLPickerList} from "./URL_Picker_list";
import React from "react";

export default function URLPicker(props){
    const url = props.match.url;


    return(
      <div className="url_picker">
          <div className="row pb-4">
              <div className="url_add_input_container">
                  <Link to={`${url}/add`} type="button" className="btn btn-secondary input_expand_button w-100">
                      <span>URL 추가하기</span>
                  </Link>
              </div>
          </div>
          <div className="row my-5">
                  <div className="col-12 text-center">
                      <blockquote className="blockquote rounded shadow url-picker-color py-4">
                          <div>중요한 것은 무엇이 주어졌는지가 아니라,<br/> 주어진 것을 어떻게 사용하는가이다.</div>
                          <footer className="blockquote-footer">알프레드 아들러</footer>
                      </blockquote>
                  </div>
              </div>
          <div className="row">
              <div className='col-12'>
                  <URLPickerList  {...props}/>
              </div>
          </div>
      </div>
    );
}