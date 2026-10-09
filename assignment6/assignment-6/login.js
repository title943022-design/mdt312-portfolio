window.onload = loginLoad;

function loginLoad() {
    const form = document.getElementById("myLogin") || document.forms[0];
    if (form) {
        form.onsubmit = checkLogin;
    }
}

function checkLogin(event) {
    event.preventDefault(); // ป้องกันการ reload หน้าเว็บ

    // 1. ดึงข้อมูลที่ลงทะเบียนไว้ (จาก URL Parameters หรือ localStorage)
    const urlParams = new URLSearchParams(window.location.search);
    const regUser = urlParams.get("username") || localStorage.getItem("registeredUsername");
    const regPass = urlParams.get("password") || localStorage.getItem("registeredPassword");

    // 2. ดึงค่าที่ผู้ใช้กรอกในหน้า login
    const loginUser = document.forms["myLogin"]["username"].value.trim();
    const loginPass = document.forms["myLogin"]["password"].value;

    // 3. ตรวจสอบความถูกต้อง
    if (loginUser === regUser && loginPass === regPass) {
        alert("เข้าสู่ระบบสำเร็จ! ยินดีต้อนรับ " + loginUser);
    } else {
        alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง กรุณากรอกใหม่");
    }
}