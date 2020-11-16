import React, {Component} from 'react';
import DizajnimiSoftuerit from './DizajnimiSoftuerit/DizajnimiSoftuerit';
import JavaOOP from './JavaOOP/JavaOOP';
import './Courses.css';


class Courses extends Component{
   quizContinued = () => {
        this.props.history.push('/QuizForm');
      };
      javaContinued = () => {
        this.props.history.push('/QuizJava');
      };
    render(){
        return(
           <div className="Courses">
               <h1>Click the Course to take the Online Quizes</h1>
               <DizajnimiSoftuerit clickeed={this.quizContinued}/>
               <JavaOOP clicked={this.javaContinued}/>
           </div>
        )
    }
}

export default Courses;