window.onload = pageLoad;

function pageLoad() {
    const form = document.getElementById("myRegister") || document.forms[0];
    if (form) {
        form.onsubmit = validateForm;
    }
}

function validateForm(event) {
    // ดึงค่าจากฟอร์มลงทะเบียน
    const form = document.forms[0];
    const username = form["username"] ? form["username"].value.trim() : "";
    const password = form["password"] ? form["password"][0]?.value || form["password"].value : "";
    
    // ตรวจสอบช่อง retype password (ถ้าเป็น array หรือ id/name แยก)
    let retypePassword = "";
    if (form["retypePassword"]) {
        retypePassword = form["retypePassword"].value;
    } else if (form["password"] && form["password"].length > 1) {
        retypePassword = form["password"][1].value;
    }

    // 1. ตรวจสอบว่าผู้ใช้กรอกข้อมูลครบทุกช่องหรือไม่
    const inputs = form.querySelectorAll("input[required], input[type='text'], input[type='password'], input[type='email']");
    for (let input of inputs) {
        if (input.value.trim() === "") {
            alert("กรุณากรอกข้อมูลให้ครบทุกช่อง");
            event.preventDefault(); // ไม่ให้เปลี่ยนหน้า
            return false;
        }
    }

    // 2. ตรวจสอบรหัสผ่านกับช่องยืนยันรหัสผ่าน
    if (password !== retypePassword) {
        alert("รหัสผ่านและการยืนยันรหัสผ่านไม่ตรงกัน!");
        event.preventDefault(); // ให้คงอยู่ที่หน้าลงทะเบียน
        return false;
    }

    // บันทึกลง localStorage สำรองไว้เพื่อให้ login.html ตรวจสอบได้แม่นยำ
    localStorage.setItem("registeredUsername", username);
    localStorage.setItem("registeredPassword", password);

    alert("ลงทะเบียนสำเร็จ!");
    return true;
}