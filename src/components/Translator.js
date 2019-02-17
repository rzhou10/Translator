import React, { Component } from "react";
import {keywords} from "./keywords";
import LanguageDetect from "./LanguageDetect";

class Translator extends Component{
    constructor(props){
        super(props);
        this.state = {
            from: "C++",
            fromKeyword: "boolean",
            to: "C++",
            toKeyword: "boolean",
            syntax: "",
            toDefinition: "",
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.fromKeyword !== this.state.toKeyword){
            alert("Key words need to be the same.")
        }
        else if (this.state.from === this.state.to){
            alert("Please select different languages")
        }
        else{
            if (keywords[this.state.from].hasOwnProperty(this.state.fromKeyword)){
                const syntax = keywords[this.state.to][this.state.toKeyword]["keyword"];
                const def = keywords[this.state.to][this.state.toKeyword]["definition"];
                this.setState({
                    syntax: syntax,
                    toDefinition: def
                })
            }
        }
    }

    renderDef = () => {
        if (this.state.toDefinition === ""){
            return <div></div>
        }
        return (
            <div>
                <LanguageDetect language={this.state.to}/>
                <p>Syntax: {this.state.syntax}</p>
                <p>Definition: {this.state.toDefinition}</p>
            </div>
        )
    }

    render(){
        console.log(this.state.to)
        return(
            <div className="container">
                <h1>Code Translator</h1>
                <p>Have you ever forgotten a specific syntax in a new language you're learning? Or you are you trying to get back and need a refresher? Code Translator will help you find what you need in what ever language you will need.</p>
                <div className="row">
                    <form onSubmit={this.onSubmit}>
                        <div className="cell">
                            <select name="from" value={this.state.from} onChange={this.handleChange}>
                                <option value="C++">C++</option>
                                <option value="Java">Java</option>
                            </select>
                            <select name="fromKeyword" value={this.state.fromKeyword} onChange={this.handleChange}>
                                <option value="boolean">boolean</option>
                                <option value="byte">byte</option>
                                <option value="char">char</option>
                                <option value="short">short</option>
                                <option value="int">int</option>
                                <option value="float">float</option>
                                <option value="long">long</option>
                                <option value="double">double</option>
                                <option value="print">print</option>
                                <option value="if">if</option>
                                <option value="elseif">else if</option>
                                <option value="else">else</option>
                                <option value="for">for</option>
                                <option value="while">while</option>
                                <option value="dowhile">do while</option>
                                <option value="foreach">foreach</option>
                                <option value="function">function</option>
                                <option value="class">class</option>
                            </select>
                        </div>
                        <div className="cell">
                            <input type="submit" value="Translate" />
                        </div>
                        <div className="cell">
                            <select name="to" value={this.state.to} onChange={this.handleChange}>
                                <option value="C++">C++</option>
                                <option value="Java">Java</option>
                            </select>
                            <select name="toKeyword" value={this.state.toKeyword} onChange={this.handleChange}>
                                <option value="boolean">boolean</option>
                                <option value="byte">byte</option>
                                <option value="char">char</option>
                                <option value="short">short</option>
                                <option value="int">int</option>
                                <option value="float">float</option>
                                <option value="long">long</option>
                                <option value="double">double</option>
                                <option value="if">if</option>
                                <option value="elseif">else if</option>
                                <option value="else">else</option>
                                <option value="for">for</option>
                                <option value="while">while</option>
                                <option value="dowhile">do while</option>
                                <option value="foreach">foreach</option>
                                <option value="function">function</option>
                                <option value="class">class</option>
                            </select>
                        </div>
                    </form>
                </div>
                {this.renderDef()}
            </div>
        )
    }

}

export default Translator;