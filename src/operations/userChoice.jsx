import React from 'react';
import './UserChoice.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const UserChoice = (props) => {
    const choices = [{title:"Operation sur matrice", description:["Calculer le produit matricielle", "Calculer la puissance d une matrice", "Calculer le rang", "..."]},
                     {title:"Diagonalisation", description:[]},
                     {title:"Reduite de Jordan", description:[]}];
    return ( 
        <div className='main'>
            <div className='d-flex justify-content-between'>
                {choices.map(choice => <div className={choice} key={choice}>{
                    <table>
                        <thead><td>{choice.title}</td></thead>
                        <tbody>
                            {choice.description.map(desc => <tr key={desc}>{desc}</tr>)}
                        </tbody>
                    </table>
                }</div>)}
            </div>
        </div>
     );
}
 
export default UserChoice;