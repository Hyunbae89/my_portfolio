import React from "react";
import api from "../../lib/api";

export class QuoteList extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            data:[],
            search:null,
        }
    this.changeValue = this.changeValue.bind(this);
    }

    componentDidMount() {

        api.getQuoteList().catch(err=>{
            console.log(err);
        }).then(response=>{
            this.setState({
                data: response.data
            })
        })
    }

    changeValue(e){
        const value = e.target.value;
        this.setState({search : value});
    }

    render() {
        const {data,search} = this.state;
        const quoteList = data.filter((info)=>{
            if(search === null){
                return info
            }else if(info.content.toLowerCase().includes(search.toLowerCase()) || info.source.toLowerCase().includes(search.toLowerCase())){
                return info
            }
        }).map((info,index)=>(
            <blockquote key={index} className="blockquote rounded shadow about-me-color text-center py-4" >
                <pre >{info.content}</pre>
                <footer className="blockquote-footer">{info.source}</footer>
            </blockquote>
        ));
        return(
            <div>
                <div className="clearfix py-5">
                    <input type="text" className="float-right" placeholder="검색창" onChange={(e)=>this.changeValue(e)}/>
                </div>

                {data.length > 0 ?
                    quoteList
                : ""
                }
            </div>
        );



    }
}