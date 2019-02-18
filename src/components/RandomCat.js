import React from 'react';

class RandomCat extends React.Component{
    render(){
        console.log(this.props);
        let ancho = this.props.width;
        let alto = this.props.high;
        let url = "http://lorempixel.com/"+ancho+"/"+alto +"/cats";
       
        return(
            <a href="http://lorempixel.com">
                <img src={url} alt="Random cat"/>
            </a>
        );
    }
}

// const RandomCat = ({width , high})=> {
//     return(
//         <a href="http://lorempixel.com">
//             <img src="http://lorempixel.com/{width}/{high}/cats" alt="Random cat"/>
//          </a>
//     )};


export default RandomCat;