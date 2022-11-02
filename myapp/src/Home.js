import React, {useState, useEffect} from 'react'
import Axios from 'axios'
function Home(){
    const [data, setData]=useState(null)
    const [id, setId]=useState('')
    useEffect(()=>{
        Axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${id}`)
        .then((response)=>{
            
            setData(response.data)
        })


    }, [id])
    return(
        <div>
            <button>Click</button>
            <input type='text' value={id} onChange={(e)=>setId(e.target.value)}/>
            <ul>
                {data && data.meals.map(meal=><li key={meal.idMeal}>{meal.strMeal}</li>)}
            </ul>
            

        </div>
    )
}
export default Home