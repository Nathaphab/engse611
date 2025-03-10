// ฟังก์ชันพื้นฐานใน JavaScript

// ฟังก์ชันที่ไม่มีพารามิเตอร์และไม่มีการคืนค่า
function sayHello() {
    console.log("Hello, World!");
  }
  
  // ฟังก์ชันที่มีพารามิเตอร์
  function greet(name) {
    console.log("Hello, " + name + "!");
  }
  
  // ฟังก์ชันที่มีการคืนค่า
  function add(a, b) {
    return a + b;
  }
  
  // เรียกใช้งานฟังก์ชัน
  sayHello();
  greet("Alice");
  console.log("ผลรวม: " + add(5, 3));
  