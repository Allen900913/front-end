const boxes = document.getElementsByClassName("box");

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", event => {
        event.target.remove();
        console.log(boxes);
    });
}

