import React,{ useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = ({ defaulCategory = [] }) => {
    
    //const [ categories, setCategories ] = useState(['One Punch'])
    const [ categories, setCategories ] = useState( defaulCategory )
    
    return (
        <>
            <h2>GifExpertApp</h2>
            
            <AddCategory setCategories={ setCategories } />
            <br/>
            <hr/>
            <ol>
                {
                    categories.map( category => ( 
                        <GifGrid  
                            key={ category }    
                            category={ category } 
                        />
                    ))
                }
            </ol>
        </>
    )
}
