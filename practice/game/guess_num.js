const minNum = 1;
const maxNum = 100;

let randomNum = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

let guessCount = 0;
let answer;
let running = true;

while (running) {
    
    answer = prompt(`請輸入 ${minNum} ~ ${maxNum} 的數字，輸入 0 結束遊戲`);
    answer = Number(answer);

    if(isNaN(answer)) {
        alert(`請輸入有效的數字！`);
    }
    else if(answer < minNum || answer > maxNum) {
        alert(`請輸入 ${minNum} ~ ${maxNum} 的數字！`);
    }
    else{
        if(answer < randomNum) {
            alert(`比 ${answer} 大！`);
            guessCount++;
        }
        else if(answer > randomNum) {
            alert(`比 ${answer} 小！`);
            guessCount++;
        }
        else{
            alert(`恭喜你！猜對了！`);
            guessCount++;
            running = false;
        }
    }
}
