import React, {Component} from 'react';
import './JavaOOP.css';
import { FaAngleDoubleRight } from "react-icons/fa";

class JavaOOP extends Component{

    render(){
        return(
           <div className="Java">
               
                  <button className="Javaquiz" onClick = {this.props.clicked}><h2>
                      <FaAngleDoubleRight style={{marginRight: "4px"}}/>Java - OOP
                   </h2></button>
               
           </div>
        )
    }
}

export default JavaOOP;