function Button(props) {

    let count = 0;

    const handleclick = () => console.log("clicked");

    const handleclick2 = (name) => {
        if(count < 3){
            count++;
            console.log(`${name} clicked ${count} times`);
        }
        else{
            console.log(`${name} stop clicking`);
        }
    }

    const handleclick3 = (e) => {
        return e.target.textContent = "OUCH";
    }
    

  return <button onDoubleClick={handleclick}  onClick={(e) =>handleclick3(e)}>Click me</button>;
}

export default Button;
