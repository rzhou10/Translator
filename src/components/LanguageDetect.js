import React, { Component } from "react";
import {colorCode} from "./colorCode";

class LanguageDetect extends Component{
    constructor(props){
        super(props);
        this.state = {
            language: props.language,
            color: colorCode[props.language]
        }
    }

    render(){
        return(
            //{this.state.language}
            <p>In: <span style={{color: this.state.color}}>{this.state.language}</span></p>
        )
    }
}

export default LanguageDetect;