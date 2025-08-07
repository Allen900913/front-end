import React, { useState, useEffect, useRef } from "react";
import { use } from "react";
function MyComponent5() {
  const inputRef = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  useEffect(() => {
    console.log("Rerender");
    console.log(inputRef);
  });

  function handleClick() {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "red";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }
  function handleClick2() {
    inputRef2.current.focus();
    inputRef.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "yellow";
    inputRef3.current.style.backgroundColor = "";
  }

  function handleClick3() {
    inputRef3.current.focus();
    inputRef.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "yellow";
  }

  return (
    <div>
      <button onClick={handleClick}>click me!</button>

      <input type="text" ref={inputRef} />

      <button onClick={handleClick2}>click me2!</button>

      <input type="text" ref={inputRef2} />

      <button onClick={handleClick3}>click me3!</button>

      <input type="text" ref={inputRef3} />
    </div>
  );
}

export default MyComponent5;
