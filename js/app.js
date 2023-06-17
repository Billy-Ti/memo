// 1. 獲取記事、日期、時間、新增、刪除按鈕的資料
const content = document.getElementById('content');
const date = document.getElementById('date');
const time = document.getElementById('time');
const add_btn = document.getElementById('add-btn');
const remove_btn = document.getElementById('remove-btn');
const list = document.getElementById('list');


// 3. 當新增按鈕被點擊時，需要一個陣列取得輸入的 3 個資料 ( 記事、日期、時間 )
const listContent = [];

const render = () => {
    let htmlStr = '';
    // 以 forEach 遍歷陣列
    // item 表示陣列內的每一個內容，可自定義其他名稱
    listContent.forEach(function (item) {
        htmlStr += /*html*/`
            <p class="list-date mb-20">日期 : ${item.date}</p>
            <p class="list-time mb-20">時間 : ${item.time} </p>
            <p class="list-content mb-20">內容 : ${item.content} </p>
            <hr>
        `
    })
    // 將資料渲染到網頁 list 上
    list.innerHTML = htmlStr;
}

// 2. 註冊新增、刪除按鈕的 click 監聽事件
add_btn.addEventListener('click', function () {
    // 使用console ".value" 確認是否有取得輸入的資料 value
    // console.log(content.value);
    // console.log(date.value);
    // console.log(time.value);

    if (content.value === '' || date.value === '' || time.value === '') {
        // 如果有任何一個欄位為空，顯示錯誤訊息
        alert('請填寫所有欄位');
        return;
    }

    // 將資料以 push 方式記錄起來
    // push 的格式須以物件形式記錄
    listContent.unshift({
        content: content.value,
        date: date.value,
        time: time.value
    });

    // 將新增完的輸入框資料都清空
    content.value = '';
    date.value = '';
    time.value = '';

    render();
})

// 當刪除按鈕被點擊時，將資料清除
remove_btn.addEventListener('click', function () {
    listContent.shift();
    render();
})