import React from 'react';


const RandomCat = ({width , high})=> (
    <div>
        <a href="http://lorempixel.com">
            <img src={`http://lorempixel.com/${width}/${high}/cats`} alt="Random cat"/>
        </a>
    </div>
);
    

//Definimos los valores por defecto de los props de la clase
RandomCat.defaultProps = {
    width:400,
    high:200
}

export default RandomCat;