import React from 'react';


import './Menu.css'

export default function Menu(){
    return(
      <div  className='container'>
        <div>
        <p className='logo'>Logo</p>
        </div>
        <div  className='clinks'>
        <a href='#sobre'>Sobre</a>
        <a href='#projetos'>Projetos</a>
        <a href='#footer'>Contatos</a>
        </div>
        
      </div>  
    )
    
};