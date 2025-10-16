const draggable = document.getElementById('draggable');
const posXDisplay = document.getElementById('pos-x');
const posYDisplay = document.getElementById('pos-y');
const moveXDisplay = document.getElementById('move-x');
const moveYDisplay = document.getElementById('move-y');


draggable.addEventListener('mousedown', (event) => {

    const startX = event.pageX - draggable.offsetLeft;
    const startY = event.pageY - draggable.offsetTop;

    

    function moveAt(e) {

        draggable.style.left = e.pageX - startX + 'px';
        draggable.style.top = e.pageY - startY + 'px';

        posXDisplay.textContent = e.clientX - startX;
        posYDisplay.textContent = e.clientY - startY;
        moveXDisplay.textContent = e.movementX;
        moveYDisplay.textContent = e.movementY;
    }
    
    document.addEventListener('mousemove', moveAt);

    document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', moveAt);
    });
});



// person.prototype.collection = '收藏';


// var egg = { name: '蛋老师' };

// Function.prototype.newBind = function (obj) {
//     var that = this,
//         arr = Array.prototype.slice.call(arguments, 1);

//     var newf = function () {
//         var arr2 = Array.prototype.slice.call(arguments);
//         var arrSum = arr.concat(arr2);

//         if (this instanceof Function) {
//             that.apply(this, arrSum);
//         } else {
//             that.apply(obj, arrSum);
//         }
//     };

//     newf.prototype = that.prototype;
//     return newf;
// };

// var bibi = person.newBind(egg, '点赞', '投币');
// var b = new bibi('充电');
// console.log(b.collection);

