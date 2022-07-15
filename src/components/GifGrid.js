import { useEffect, useState } from "react";
import {getGifs} from '../helpers/GetGift';




export const GifGrid = ({category}) => {
  
  
   
     getGifs( category );
  
    



    return (
    
    <div>
        <h3>
            {}
        </h3>
        <h3>
            {category}
        </h3>
        
       
    </div>
  )
}
