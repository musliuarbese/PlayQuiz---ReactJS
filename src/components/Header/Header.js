import React from 'react';
import quizlogo from '../../assets/Images/quizlogo.png';
import {FaUniversity} from 'react-icons/fa';
import {FaUserCheck} from 'react-icons/fa';
import './Header.css';
import NavigationItem from './NavigationItem/NavigationItem';
// import Fakulteti from '../../containers/Fakulteti/Fakulteti';

const header = () =>{
    return(
        <div className = "Header">
            <img src = {quizlogo} alt="Quiz Logo" />
          
          <ul className="menu">
               <NavigationItem link="/" exact>
                  <FaUniversity size="1.1rem"/>Fakulteti
               </NavigationItem>
               <NavigationItem link="/auth">
                   <FaUserCheck />Authenticate
                </NavigationItem>
           </ul>
        </div>
    )
}


export default header;