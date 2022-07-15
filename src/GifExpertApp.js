import { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


const inicial = ['Dragon ball']


function GifExpertApp() {
  
  const [ categories, setCategories ] = useState(inicial);
  
  const onAddCategory = (newCategory) => {
      console.log(newCategory)
    if (categories.includes(newCategory)) return;
    setCategories([...categories, newCategory]); //dos formas para agregar en un array
     //setCategories( cate => [...cate, 'Valorant'])
  
  }
   
  return (
    <>

    <h1>GifExpertApp</h1>

    <AddCategory 
    setCategories={ setCategories } 
    onNewCategory={(event) => onAddCategory(event)}
    currentCategories= { categories }
    />

    {/* <button onClick={() => onAddCategory() }>Agregar</button> */}

    <ol>

      { 
        categories.map(  ( category )  => <GifGrid key={category} category={ category } />  )
      }

    </ol>
      
    </>
  );
}

export default GifExpertApp;
