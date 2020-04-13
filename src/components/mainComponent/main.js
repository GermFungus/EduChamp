import React from "react";
import './main.css';
import HeaderComponent from '../header/header'
import SignUpComponent from "../SignUp/SignUp"
import firstPic from "../../images/stock-vector-math-class-vector-flat-style-design-illustration-tiny-characters-doing-sums-using-big-calculator-1453020620.jpg";
import DashBoardComponent from "../../components/dashBoardComponent/dashBoard";
export default class MainComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            dashBoard : false,
        }
        this.display=this.display.bind(this);
    }
    changeState = (stateName , Value)=>{
        let temp = {};
        temp[`${stateName}`] = Value
        this.setState(temp);
    }

    display = () => {
       if(this.state.dashBoard === false){
           return (
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
                        <SignUpComponent changeState={this.changeState}/>
                    </div>
                </div>
            </div>
        );
       }
       if(this.state.dashBoard === true){
           return (
                <div>
                    < DashBoardComponent />
               </div>
            );
       }  
    }
    render(){
        return (
            <div>
                <HeaderComponent />
                <div className="displayDiv">
                   {this.display()}
                </div>
            </div>
        );
    };
}