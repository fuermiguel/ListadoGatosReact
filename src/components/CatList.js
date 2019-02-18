import React from 'react';
import RandomCat from './RandomCat';

class CatList extends React.Component {
    render(){
        return(
            <section className="section-cats">
                <h1>Todos los gatos son bonitos</h1>
                    <ul className="section-cats_list">
                        <li><RandomCat width={200} high={200} /></li>
                        <li><RandomCat  width={200} high={400}/></li>
                        <li><RandomCat /></li>
                    </ul>
            </section>
        );
    }
}

export default CatList;