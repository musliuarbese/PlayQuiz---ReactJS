import React, {Component} from 'react';
import './DizajnimiSoftuerit.css';
import { FaAngleDoubleRight } from "react-icons/fa";
//import QuizForm from '../../../containers/QuizForm/QuizForm';

class DizajnimiSoftuerit extends Component{
    
    render(){
        return(
           <div className="Dizajni">
               <button 
                     className="dizajnquiz"
                     onClick = {this.props.clickeed}><h2>
                  <FaAngleDoubleRight style={{marginRight: "4px"}}/>Dizajnimi i Softuerit
                    </h2></button>
           </div>
        )
    }
}

export default DizajnimiSoftuerit;