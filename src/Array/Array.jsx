import React,{ useState } from 'react'


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
  return (
    <>
      <div >
        <h2>List of Food</h2>
          <ul >
              {foods.map((food,index) => 
                <li key={index} onClick={() => handleRemoveFood(index)}>
                    {food}
                </li>
              )}
          </ul>
          <input type="text" placeholder='Enter food name' id='foodInput' />
          <button onClick={handleAddFood}>Add Food</button>
          
      </div>
    </>
  )
}

export default Array
