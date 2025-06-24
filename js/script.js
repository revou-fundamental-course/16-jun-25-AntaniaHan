//=== Segitiga ===
const formLuas = document.getElementById("form-luas");
formLuas.addEventListener("submit",function (event) {
    event.preventDefault();

    const alas = parseFloat(document.getElementById("alas").value.replace(",","."));
    const tinggi = parseFloat(document.getElementById("tinggi").value.replace(",","."));
    const hasilLuas = document.getElementById("luas");

    if(isNaN(alas) || isNaN(tinggi)) {
        alert("Masukkan angka yang valid untuk alas dan tinggi!");
        return;
    }
    if (alas <= 0 || tinggi <=0) {
        alert("Angka tidak boleh nol atau negatif!");
        return;
    }

    const luas = 0.5 * alas * tinggi;
    hasilLuas.value = (Math.round(luas*100)/100).toString();
});

    document.getElementById("resetLuas").addEventListener("click",function(){
        document.getElementById("alas").value="";
        document.getElementById("tinggi").value="";
        document.getElementById("luas").value="";
    });

const formKeliling = document.getElementById("form-keliling");
formKeliling.addEventListener("submit", function (event) {
    event.preventDefault();

    const sisiA = parseFloat(document.getElementById("sisi-a").value.replace(",","."));
    const sisiB = parseFloat(document.getElementById("sisi-b").value.replace(",","."));
    const sisiC = parseFloat(document.getElementById("sisi-c").value.replace(",","."));
    const hasilKeliling = document.getElementById("keliling")

    if(isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC)) {
        alert("Semua sisi harus diisi dengan angka yang Valid!")
        return;
    }
    if (sisiA <= 0 || sisiB <=0 || sisiC <=0) {
        alert("Sisi tidak boleh nol atau negatif!");
        return;
    }

    const keliling = sisiA + sisiB + sisiC;
    hasilKeliling.value = (Math.round(keliling*100)/100).toString();
});

    document.getElementById("resetKeliling").addEventListener("click",function(){
        document.getElementById("sisi-a").value="";
        document.getElementById("sisi-b").value="";
        document.getElementById("sisi-c").value="";
        document.getElementById("keliling").value="";
    });


//=== Jajar genjang ===
const formluasJG = document.getElementById("form-luas-jg");
formluasJG.addEventListener("submit",function (event) {
    event.preventDefault();

    console.log("Form Jajar Genjang disubmit!");
    
    const alas = parseFloat(document.getElementById("jg-alas").value.replace(",","."));
    const tinggi = parseFloat(document.getElementById("jg-tinggi").value.replace(",","."));
    const hasilLuas = document.getElementById("luas-jg");

    if(isNaN(alas) || isNaN(tinggi)) {
        alert("Masukkan angka yang valid untuk alas dan tinggi!");
        return;
    }
    if (alas <= 0 || tinggi <=0) {
        alert("Angka tidak boleh nol atau negatif!");
        return;
    }

    const luas = alas * tinggi;
    hasilLuas.value = (Math.round(luas*100)/100).toString();
});

    document.getElementById("resetLuas-jg").addEventListener("click",function(){
        document.getElementById("jg-alas").value="";
        document.getElementById("jg-tinggi").value="";
        document.getElementById("luas-jg").value="";
    });

