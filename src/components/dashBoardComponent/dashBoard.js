import React from "react";
import './dashBoard.css';
import QuizCardComponent from "../QuizCardComponent/QuizCard";
export default class DashBoardComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render(){
        return(
            <div>
               <div className="headBox">
                    <div className="titleDiv">
                        <h3>Practice Math with our Quizes and master it !</h3>
                        <div className="buttonDiv">
                            <div className="dashButton">See Quizes</div>
                            <div className="dashButton">See Results</div>
                        </div>
                    </div>
               </div>
               <div className="dashboardContent">
                    <QuizCardComponent />
               </div>
            </div>
        );
    }
}