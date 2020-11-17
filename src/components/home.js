import React from "react";
export default class Home extends React.Component{
    render(){
        const { set_num1,home}= this.props;
        return(
            <div>
                <input type="text" name="num1" onChange={(e)=>{set_num1(e.target.value)}}/>
                <input type="text" />
                {home.num1}
                <button >Submit</button>
            </div>
        )
    }
}