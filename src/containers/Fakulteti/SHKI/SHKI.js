import React, {Component} from  'react';
//import Courses from '../SHKI/Courses/Courses';
import './SHKI.css';
class SHKI extends Component{


    render(){
        return(
            <div>
                <button className="btn" onClick={this.props.clicked}><h3>Shkenca Kompjuterike dhe Inxhinieri</h3></button>
            </div>
        )
    }
}
export default SHKI;