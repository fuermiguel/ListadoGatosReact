import React from 'react';

class RandomCat extends React.Component{
    render(){
        console.log(this.props);
        let ancho = this.props.width ?  this.props.width : 400;
        let alto = this.props.high ? this.props.high : 200;
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