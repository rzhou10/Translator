import React, { Component } from "react";
import {colorCode} from "./colorCode";

class LanguageDetect extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            //{this.state.language}
            <p>In: <span style={{color: colorCode[this.props.language]}}>{this.props.language}</span></p>
        )
    }
}

export default LanguageDetect;