// 獲取所有可拖放的圖片
const draggables = document.querySelectorAll(".draggable");
const empty = document.querySelector(".empty");

window.addEventListener("dragstart", (e) => {
  e.target.classList.add("dragging");
  e.dataTransfer.effectAllowed = "copy";
  e.dataTransfer.setData("text/plain", e.target.alt);
});

window.addEventListener("dragend", (e) => {
  e.target.classList.remove("dragging");
});

// 空容器的事件監聽器
document.addEventListener("dragover", (e) => {
  e.preventDefault(); // 必須阻止預設行為才能拖放
  e.dataTransfer.dropEffect = "copy";
});

empty.addEventListener("dragenter", () => {
  empty.classList.add("drag-over");
});

empty.addEventListener("dragleave", () => {
  empty.classList.remove("drag-over");
});

empty.addEventListener("drop", (e) => {
  e.preventDefault();
  empty.classList.remove("drag-over");

  // 獲取拖放的資料
  const data = e.dataTransfer.getData("text/plain");
  console.log("Dropped data:", data);

  // 清空容器
  empty.innerHTML = "";

  const newImg = document.querySelector(`img[alt='${data}']`).cloneNode(true);
  
  // 移除 draggable 類別，這樣圖片就不會再被拖動
  newImg.classList.remove("draggable", "dragging");
  newImg.removeAttribute("draggable");
  newImg.draggable = false;

  // 添加到容器
  empty.appendChild(newImg);
});

// 可選：添加雙擊清空功能
empty.addEventListener("dblclick", () => {
  empty.innerHTML = "";
});

console.log("拖放功能已載入！");
console.log("提示：你可以雙擊空白區域來清空圖片");
