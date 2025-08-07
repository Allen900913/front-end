import { useState } from "react"

// 有cur state 跟 prev state 差異
function MyComponent(props) {

    const [count, setCount] = useState(0);
    
    const [car , setCar] = useState({year: 2024, make: "Ford", model: "Mustang"});

    const decrement = () => {
        setCount(count => {count - 1});
    }

    function handleYearChange(e) {
        setCar((car) => ({...car, year: e.target.value}))
    }

    function handleMakeChange(e) {
        setCar({...car, make: e.target.value})
    }

    function handleModelChange(e) {
        setCar({...car, model: e.target.value})
    }

    return (
        <div className="counter-container">
            <p className="count-display">count: {count}</p>
            <button className="count-btn" onClick={decrement}>Decrease</button>
            <button className="count-btn" onClick={() => setCount(0)}>Reset</button>
            <button className="count-btn" onClick={() => setCount((count) => count + 1)}>Increase</button>
        
            <p>Your car is a {car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year} onChange={handleYearChange}/><br />
            <input type="text" value={car.make} onChange={handleMakeChange}/><br />
            <input type="text" value={car.model} onChange={handleModelChange}/><br />
        </div>
    )
}

export default MyComponent