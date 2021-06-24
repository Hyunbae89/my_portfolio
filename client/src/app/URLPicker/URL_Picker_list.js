import React from "react";
import api from "../../lib/api";


export class URLPickerList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            url_id: '',
            create_date: ''
        }

    }

    componentDidMount() {
        const user_id = this.props.user_id;

        api.getUrlList(user_id).catch(error => {
            console.log(error)
        }).then(
            response => {
                this.setState({
                    data: response.data
                })
            }
        )
    }

    render() {
        const {data} = this.state;
        const list = data.map(
            info => (<a key={info.id} href={info.address} target="_blank" className="list-group-item list-group-item-action">
                <div className="row">
                    <div className="col-6">
                        {info.title}
                    </div>
                    <div className="col-6">
                        {info.create_date}
                    </div>
                </div>
            </a>)
        )

        return (
            <div className="list-group">
                {list}


            </div>
        );
    }
}