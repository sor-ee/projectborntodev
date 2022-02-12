function check () {
    let w = document.getElementById("inputweight").value
    let h = document.getElementById("inputheight").value
    if(w ==""){
        alert("กรุณากรอกน้ำหนัก")
    }
    else if(h ==""){
        alert("กรุณากรอกส่วนสูง")
    }
    else if (w !==""&&h!==" "){
        alert("ค่า BMI ของคุณ : "+ calculate(w,h))
    }
}

function calculate(w,h) {
    let H = h/100
    var sum = w/(H*H);
    return sum.toFixed(1)
}

function display() {
    check()
}