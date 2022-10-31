// Bài 3
document.getElementById("btnBai3").onclick = function () {
    // input
    var nhapSo = document.getElementById("nhapSo").value * 1;

    //output
    var giaiThua = 1;
    // B1: Xác định gía trị khởi tạo nó
    var giaTri = 1;
    //B2: Thiết lập đk lặp
    while (giaTri <= nhapSo) {
        //Bước 3: Xử lý
        giaiThua *= giaTri;
        //Bước 4: Thay đổi đk lặp
        giaTri++;
    }

    //Bước 5: In kết quả
    document.getElementById("ketQuaBai3").innerHTML = giaiThua;
}

// Bài 1
document.getElementById('btnBai1').onclick = function () {
    // output
    var tong = 0;
    var soHang = 1;
    while (tong <= 10000) {
        soHang++;
        tong += soHang;
    }
    document.getElementById('ketQuaBai1').innerHTML = soHang;
}

// Bài 2
document.getElementById('btnBai2').onclick = function () {
    var number1 = document.getElementById('number1').value * 1;
    var number2 = document.getElementById('number2').value * 1;

        // Output
    var tongMu = 0;
    //Xác định giá trị khởi tạo nó
    var soMu = 1;
    var luyThua = 0;
    
    while(soMu <= number2){
        luyThua = Number(Math.pow(number1,soMu));
        soMu ++;
        tongMu += luyThua;
    }
    document.getElementById('ketQuaBai2').innerHTML = tongMu;
}

// Bài 4
document.getElementById('btnBai4').onclick = function(){
    
}