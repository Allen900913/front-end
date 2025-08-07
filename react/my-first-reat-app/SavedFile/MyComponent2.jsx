import { useState } from "react"

function MyComponent2 (props) {
    const [name, setName] = useState("Bro Code");
    const [quantity, setQuantity] = useState(0);
    const [commnet, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleQuantityChange(e) {
        setQuantity(e.target.value);
    }

    function handleCommnetChange(e) {
        setComment(e.target.value);
    }

    function handlePaymentChange(e) {
        setPayment(e.target.value);
    }

    function handleShippingChange(e) {
        setShipping(e.target.value);
    }

    return (
        <div className="counter-container2">
            <input type="text" value={name} onChange={handleNameChange} />
            <p>My name is {name}</p>
            
            <input type="number" value={quantity} onChange={handleQuantityChange} />
            <p>My quantity is {quantity}</p>

            <textarea value={commnet} onChange={handleCommnetChange} placeholder="Comment" name="" id=""></textarea>
            <p>My comment is {commnet}</p>

            <select name="" value={payment} onChange={handlePaymentChange} placeholder="Payment" id="">
                <option value="">select payment</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
            </select>
            <p>My payment is {payment}</p>

            <label>
                <input type="radio" value="pickup" checked={shipping === "pickup"} onChange={handleShippingChange}/>
                Pickup
            </label>
            <label>
                <input type="radio" value="delivery" checked={shipping === "delivery"} onChange={handleShippingChange}/>
                Delivery
            </label>
            <p>My shipping is {shipping}</p>
        </div>
    )
}

export default MyComponent2