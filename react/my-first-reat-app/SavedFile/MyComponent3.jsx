import { useState } from "react"

// 有cur state 跟 prev state 差異
function MyComponent3(props) {

    const [foods, setFoods] = useState(["apple", "banana"]);
    
    const foodDisplay = foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>);

    function handleAddFood() {
        const newFood = document.querySelector('#foodinput').value;
        document.querySelector('#foodinput').value = '';
        setFoods((foods) => [...foods, newFood]);
    }

    function handleRemoveFood(index) {
        // setFoods((foods) => [...foods.slice(0, index), ...foods.slice(index + 1)]);
        setFoods((foods) => foods.filter((food,i) => i !== index));
    }

    return (    
        <div>
            <h1>My Favourite Foods</h1>
            <ul>
                {foodDisplay}
            </ul>

            <input type="text" id='foodinput' placeholder="Enter food name"/>
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    )
}

export default MyComponent3