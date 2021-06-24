import {Link} from "react-router-dom";
import {URLPickerList} from "./URL_Picker_list";

export default function URLPicker(props){
    const url = props.match.url;


    return(
      <div className="container-fluid">
          <div className="row">
            <div className="col-3">
                test
            </div>
              <div className="col-9" >
                  <div className="row">
                      <div id="content">
                          <div className="url_add_input_container">
                              <Link to={`${url}/add`}>

                                  <button className="btn btn-secondary input_expand_button" type={"button"}>
                                      <span>URL 추가하기</span>
                                  </button>
                              </Link>


                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className='col-12'>
                          <URLPickerList  {...props}/>
                      </div>

                  </div>
              </div>
          </div>

      </div>
    );
}