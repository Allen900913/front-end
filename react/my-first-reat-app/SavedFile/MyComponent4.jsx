import { useState } from "react"

// 有cur state 跟 prev state 差異
function MyComponent4(props) {
    
    const [car , setCar] = useState([{year: 2024, make: "Ford", model: "Mustang"} , {year: 2023, make: "Honda", model: "Civic"}]);

    const CarList = car.map((car,index) => <li key={index} onClick={() => handleRemoveCars(index)}>A {car.year} {car.make} {car.model}</li>)


    function handleAddCars () {
        const year = document.querySelector('#year').value;
        const make = document.querySelector('#make').value;
        const model = document.querySelector('#model').value;
        const newCar = {year , make , model};
        setCar((car) => [...car, newCar]);
    }

    function handleRemoveCars (index) {
        setCar(car => car.filter((_,i) => i !== index));
    }

    return (
        <div className="">
            <h1>My Car</h1>

            <ol>
                {CarList}
            </ol>

            <input type="number" id="year"/><br />
            <input type="text" id="make"/><br />
            <input type="text" id="model"/><br />
            <button onClick={handleAddCars}>Add Car</button>
        
        </div>
    )
}

export default MyComponent4