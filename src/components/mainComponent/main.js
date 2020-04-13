import React from "react";
import './main.css';
import HeaderComponent from '../header/header'
import SignUpComponent from "../SignUp/SignUp"
import firstPic from "../../images/stock-vector-math-class-vector-flat-style-design-illustration-tiny-characters-doing-sums-using-big-calculator-1453020620.jpg"
export default class MainComponent extends React.Component {
    constructor(){
        super();
        this.state = {
        }
    }
    render(){
        return (
            <div>
                <HeaderComponent />
                <div className="displayDiv">
                    <div className="first">
                        <div className="imageContainer">
                            <img className="imgBox" src={firstPic} alt="Image"></img>
                        </div> 
                        <div className="formBox">
                            <div className="formTitle">
                                <h3>
                                    Sign Up
                                </h3>
                            </div>
                            <div className="">
                                <SignUpComponent/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}