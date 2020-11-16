import React, {Component} from 'react';
import {FaCaretDown} from 'react-icons/fa';
import './Fakulteti.css';
import SHKI from './SHKI/SHKI';
import Auxx from '../../hoc/Auxx';


class Fakulteti extends Component{
    coursesContinued = () => {
        this.props.history.push('/Courses');
      };
    render(){
        return(
            <Auxx>
            <div className="dropdown">
                 <h1><FaCaretDown />Zgjedh Fakultetin</h1>
                 <div className="dropdown-content">
                 <SHKI 
                 clicked={this.coursesContinued}/>
                     <button className="btn"><h3>Menaxhim i Mekatronikes</h3></button>
                     <button className="btn"><h3>Sistemet e Informacionet</h3></button>
                     <button className="btn"><h3>Arkitekture</h3></button>
                     <button className="btn"><h3>Juridik</h3></button>
                     <button className="btn"><h3>Shkenca Politike</h3></button>
                     <button className="btn"><h3>Inxhinieri Ndërtimore ( Ndërtimtari dhe Infrastrukturë)</h3></button>
                     <button className="btn"><h3>Politika Publike dhe Menaxhimi</h3></button>
                     <button className="btn"><h3>Inxhinieri e Energjisë Efiçiente</h3></button>
                     <button className="btn"><h3>Shkencat e Ushqimit dhe Teknologji</h3></button>
                     <button className="btn"><h3>Infermieri</h3></button>
                     <button className="btn"><h3>UW - International Relations</h3></button>
                     <button className="btn"><h3>Dizajn i Integruar</h3></button>
                     <button className="btn"><h3>Inxhinieria e Agrokultures dhe Mjedisi</h3></button>
                     <button className="btn"><h3>Shkolla Profesionale</h3></button>
                     <button className="btn"><h3>Teknik i Radiologjise</h3></button>
                     <button className="btn"><h3>Teknik i Anestezionit</h3></button>
                     <button className="btn"><h3>Arti dhe Media Digjitale</h3></button>
                     <button className="btn"><h3>Muzikë Moderne, Produksion Digjital dhe Menaxhment</h3></button>
                 </div>
            </div>
            </Auxx>
        )
    }
}

export default Fakulteti;