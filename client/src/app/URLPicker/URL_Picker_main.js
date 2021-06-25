import {Link} from "react-router-dom";
import {URLPickerList} from "./URL_Picker_list";

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
          <div className="row">
              <div className='col-12'>
                  <URLPickerList  {...props}/>
              </div>
          </div>
      </div>
    );
}