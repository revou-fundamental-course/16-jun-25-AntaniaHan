console.log("✅ script.js berhasil dijalankan");

// === Segitiga ===
const formLuas = document.getElementById("form-luas");
const pesanError = document.getElementById("errorLuas");
if (formLuas) {
    formLuas.addEventListener("submit", function (event) {
        event.preventDefault();

        const alas = parseFloat(document.getElementById("alas").value.replace(",", "."));
        const tinggi = parseFloat(document.getElementById("tinggi").value.replace(",", "."));
        const hasilLuas = document.getElementById("luas");

        if (isNaN(alas) || isNaN(tinggi)) {
            pesanError.innerHTML = "<strong>Masukkan angka yang valid untuk alas dan tinggi!</strong>";
            return;
        }
        if (alas <= 0 || tinggi <= 0) {
            pesanError.innerHTML = "<strong>Angka tidak boleh nol atau negatif!</strong>";
            return;
        }
        pesanError.innerHTML = "";

        const luas = 0.5 * alas * tinggi;
        hasilLuas.value = (Math.round(luas * 100) / 100).toString();
    });
}

const resetLuas = document.getElementById("resetLuas");
if (resetLuas) {
    resetLuas.addEventListener("click", function () {
        document.getElementById("alas").value = "";
        document.getElementById("tinggi").value = "";
        document.getElementById("luas").value = "";
        document.getElementById("errorLuas").innerHTML = "";
    });
}

const formKeliling = document.getElementById("form-keliling");
const pesanErrorKeliling = document.getElementById("errorKeliling");
if (formKeliling) {
    formKeliling.addEventListener("submit", function (event) {
        event.preventDefault();

        const sisiA = parseFloat(document.getElementById("sisi-a").value.replace(",", "."));
        const sisiB = parseFloat(document.getElementById("sisi-b").value.replace(",", "."));
        const sisiC = parseFloat(document.getElementById("sisi-c").value.replace(",", "."));
        const hasilKeliling = document.getElementById("keliling");

        if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC)) {
            pesanErrorKeliling.innerHTML = "<strong>Masukkan angka yang valid untuk alas dan tinggi!</strong>";
            return;
        }
        if (sisiA <= 0 || sisiB <= 0 || sisiC <= 0) {
            pesanErrorKeliling.innerHTML = "<strong>Angka tidak boleh nol atau negatif!</strong>";
            return;
        }
        pesanErrorKeliling.innerHTML = "";

        const keliling = sisiA + sisiB + sisiC;
        hasilKeliling.value = (Math.round(keliling * 100) / 100).toString();
    });
}

const resetKeliling = document.getElementById("resetKeliling");
if (resetKeliling) {
    resetKeliling.addEventListener("click", function () {
        document.getElementById("sisi-a").value = "";
        document.getElementById("sisi-b").value = "";
        document.getElementById("sisi-c").value = "";
        document.getElementById("keliling").value = "";
        document.getElementById("errorKeliling").innerHTML = "";
    });
}

// === Jajar Genjang ===
const formLuasJG = document.getElementById("form-luas-jg");
const pesanErrorJG = document.getElementById("errorLuasJG");
if (formLuasJG) {
    formLuasJG.addEventListener("submit", function (event) {
        event.preventDefault();

        const alas = parseFloat(document.getElementById("jg-alas").value.replace(",", "."));
        const tinggi = parseFloat(document.getElementById("jg-tinggi").value.replace(",", "."));
        const hasilLuas = document.getElementById("luas-jg");

        if (isNaN(alas) || isNaN(tinggi)) {
            pesanErrorJG.innerHTML = "<strong>Masukkan angka yang valid untuk alas dan tinggi!</strong>";
            return;
        }
        if (alas <= 0 || tinggi <= 0) {
            pesanErrorJG.innerHTML = "<strong>Angka tidak boleh nol atau negatif!</strong>";
            return;
        }
        pesanErrorJG.innerHTML = "";

        const luas = alas * tinggi;
        hasilLuas.value = (Math.round(luas * 100) / 100).toString();
    });
}

const resetLuasJG = document.getElementById("resetLuas-jg");
if (resetLuasJG) {
    resetLuasJG.addEventListener("click", function () {
        document.getElementById("jg-alas").value = "";
        document.getElementById("jg-tinggi").value = "";
        document.getElementById("luas-jg").value = "";
        document.getElementById("errorLuasJG").innerHTML = "";
    });
}

const formKelilingJG = document.getElementById("form-keliling-jg");
const pesanErrorKelilingJG = document.getElementById("errorKelilingJG");
if (formKelilingJG) {
    formKelilingJG.addEventListener("submit", function (event) {
        event.preventDefault();

        const sisiA = parseFloat(document.getElementById("jg-a").value.replace(",", "."));
        const sisiB = parseFloat(document.getElementById("jg-b").value.replace(",", "."));
        const hasilKeliling = document.getElementById("keliling-jg");

        if (isNaN(sisiA) || isNaN(sisiB)) {
            pesanErrorKelilingJG.innerHTML = "<strong>Masukkan angka yang valid untuk alas dan tinggi!</strong>";
            return;
        }
        if (sisiA <= 0 || sisiB <= 0) {
            pesanErrorKelilingJG.innerHTML = "<strong>Angka tidak boleh nol atau negatif!</strong>";
            return;
        }
        pesanErrorKelilingJG.innerHTML = "";

        const keliling = 2 * (sisiA + sisiB);
        hasilKeliling.value = (Math.round(keliling * 100) / 100).toString();
    });
}

const resetKelilingJG = document.getElementById("resetKeliling-jg");
if (resetKelilingJG) {
    resetKelilingJG.addEventListener("click", function () {
        document.getElementById("jg-a").value = "";
        document.getElementById("jg-b").value = "";
        document.getElementById("keliling-jg").value = "";
        document.getElementById("errorKelilingJG").innerHTML = "";
    });
}
