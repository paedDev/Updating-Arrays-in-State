import React,{ useState } from 'react'
import "../index.css"

function Array() {
  const [foods, setFoods] = useState(["Apple","Mango","Guava"])

  const handleAddFood = () => {
        
        const newFood = document.getElementById("foodInput").value
        if (newFood === ""){
            alert("Please input a name of food")
        }else {
        document.getElementById("foodInput").value = "";
        const toUpperCaseFood = newFood.charAt(0).toUpperCase() + newFood.slice(1)
        setFoods(f => [...f ,toUpperCaseFood])
        }
  } 

  const handleRemoveFood = (index) => {
        setFoods(foods.filter((_,i) => i !==index))
  }
  const reload = () => {
    window.location.reload();
  }
  return (
    <>
    <div className='container'>
        <div className='app'>
            <h2 className='title'>List of Food</h2>
            <ul >
                {foods.map((food,index) => 
                    <li key={index} onClick={() => handleRemoveFood(index)}>
                        {food}
                    </li>
                )}
            </ul>
            <input type="text" placeholder='Enter food name' id='foodInput' />
            <div className='btn'>
                    <button onClick={handleAddFood}>Add Food</button>
                    <button onClick={reload}>Reload</button>
                
            </div>
            <div className='message'>
                <h2>Click List to remove one item</h2>
            </div>
        </div>
    </div>
    </>
  )
}

export default Array
