import React from 'react';

class RandomCat extends React.Component{
    render(){
        return(
            <a href="http://lorempixel.com">
                <img src={`http://lorempixel.com/${this.props.width}/${this.props.high}/cats`} alt="Random cat"/>
            </a>
        );
    }
}

//Definimos los valores por defecto de los props de la clase
RandomCat.defaultProps = {
    width:400,
    high:200
}

// const RandomCat = ({width , high})=> {
//     return(
//         <a href="http://lorempixel.com">
//             <img src="http://lorempixel.com/{width}/{high}/cats" alt="Random cat"/>
//          </a>
//     )};


export default RandomCat;