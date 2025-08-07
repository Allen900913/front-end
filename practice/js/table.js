// 新增數據
function addData() {
    var table = document.getElementById("data-table");
    // console.log(table);

    var newRow = table.insertRow(-1); // 在表格末尾添加新行
    var cell1 = newRow.insertCell(0); // 添加第一個單元格
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2); // 添加第三個單元格

    console.log(newRow);
    cell1.innerHTML = "晨晨"; // 設置第一個單元格的內容
    cell2.innerHTML = "無聯繫方式";
    cell3.innerHTML = "<button onclick='editData(this)'>編輯</button><button onclick='deleteData(this)'>刪除</button>";

}

function deleteData(button) {
    // console.log(button);
    var row = button.parentNode.parentNode; // 獲取按鈕所在的行
    row.parentNode.removeChild(row); // 刪除該行
}

function editData(button) {
    var row = button.parentNode.parentNode; // 獲取按鈕所在的行
    var name = row.cells[0]; // 獲取姓名
    var phone = row.cells[1]; // 獲取聯繫方式

    var inputName = prompt("請輸入姓名", name.innerHTML); // 提示用戶輸入新姓名
    if (inputName !== null) {
        name.innerHTML = inputName; // 更新姓名
    }

    var inputPhone = prompt("請輸入聯繫方式", phone.innerHTML); // 提示用戶輸入新聯繫方式
    if (inputPhone !== null) {
        phone.innerHTML = inputPhone; // 更新聯繫方式
    }

}