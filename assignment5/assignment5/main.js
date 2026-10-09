// ====================================================
// Assignment 5: JavaScript Post and Reply
// โค้ด JavaScript สำหรับจัดการ Post และ Clear ข้อความ
// ====================================================

window.onload = setupFunction;

function setupFunction() {
    // กำหนดชื่อหัวข้อของหน้าเว็บที่ id="top"
    var topHeading = document.getElementById("top");
    topHeading.innerHTML = "Welcome to the Forum";

    // ผูก Event Handler แบบ Unobtrusive ให้กับปุ่มทั้งสอง
    var buttons = document.getElementsByTagName("button");
    buttons[0].onclick = postFunction;   // ปุ่ม Post
    buttons[1].onclick = clearFunction;  // ปุ่ม Clear
}

// สร้างตัวแปรนับลำดับการโพสต์ กำหนดค่าเริ่มต้นเป็น 0
var postCount = 0;

function postFunction() {
    // 1. อ่านข้อความจาก textarea (id="message")
    var messageText = document.getElementById("message").value;

    // ถ้ายังไม่ได้พิมพ์ข้อความ จะไม่ทำงานต่อ
    if (messageText.trim() === "") {
        return;
    }

    // 2. นำข้อความไปใส่ในแต่ละกล่องตามลำดับ (ครั้งที่ 1, 2, 3)
    if (postCount === 0) {
        document.getElementById("topic").innerHTML = messageText;
        postCount++;
    } else if (postCount === 1) {
        document.getElementById("reply1").innerHTML = messageText;
        postCount++;
    } else if (postCount === 2) {
        document.getElementById("reply2").innerHTML = messageText;
        postCount++;
    }

    // 3. เคลียร์ข้อความใน textarea ให้ว่างหลังจากโพสต์
    document.getElementById("message").value = "";
}

function clearFunction() {
    // 1. ล้างข้อความใน id="topic", id="reply1", id="reply2"
    document.getElementById("topic").innerHTML = "";
    document.getElementById("reply1").innerHTML = "";
    document.getElementById("reply2").innerHTML = "";

    // 2. ล้างข้อความใน textarea (id="message")
    document.getElementById("message").value = "";

    // 3. รีเซ็ตตัวแปร postCount กลับเป็นค่าเริ่มต้น (0)
    postCount = 0;
}