import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball']; 
    const [categories, setCategories] = useState(['One Punch']);

/*     
    const handleAdd = () => {
        // categories.push('HunterXHunter');
        // setCategories(['HunterXHunter', ...categories]);
        setCategories(catgs => [ ...catgs, 'HunterXHunter']);
    }
*/

    return (
        <>
            <h2>Gif App</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />
            
            {/* <button onClick={ handleAdd }>Agregar</button> */}

            <ol>
                {
                    // El key no puede ser el índice y debe ser único
                    categories.map(category => (
                        <GifGrid 
                            key={ category }
                            category={ category } 
                        />
                    ))
                }
            </ol>
        </>
    );
}







