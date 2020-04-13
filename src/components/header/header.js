import React from "react";
import './header.css';
export default class HeaderComponent extends React.Component {
    constructor(){
        super();
        this.state = {
        }
    }
    render(){
        return (
            <div>
                <div className = "headerBar">
                    <div className = "headerName">
                        <h1>Mathematica</h1>
                    </div>
                    <div className = "headerOption">
                        <div className="headerOpButton">Sign Up</div>
                    </div>
                </div>
            </div>
        );
    };
}