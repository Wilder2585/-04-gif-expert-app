import { useState } from "react";




function GifExpertApp() {
  
  const [ categories, setCategories ] = useState(['One Punch', 'Dragon Ball'])
  
  const onAddCategory = () => {
      setCategories([...categories, 'valorante']); //dos formas para agregar en un array
     //setCategories( cate => [...cate, 'Valorant'])
  
  }
   
  return (
    <>

    <h1>GifExpertApp</h1>

    <button onClick={() => onAddCategory() }>Agregar</button>

    <ol>
      { categories.map(  ( category )  => {
        return <li key={ category }>{ category }</li>
      })}
    </ol>
      
    </>
  );
}

export default GifExpertApp;
