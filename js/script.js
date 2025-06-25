console.log("✅ script.js berhasil dijalankan");

// === Segitiga ===
const form_luas = document.getElementById("form-luas");
const pesan_error = document.getElementById("error-luas");
if (form_luas) {
    form_luas.addEventListener("submit", function (event) {
        event.preventDefault();

        const alas = parseFloat(document.getElementById("alas").value.replace(",", "."));
        const tinggi = parseFloat(document.getElementById("tinggi").value.replace(",", "."));
        const hasil_luas = document.getElementById("luas");

        if (isNaN(alas) || isNaN(tinggi)) {
            pesan_error.innerHTML = "<strong>Nilai tidak boleh kosong!</strong>";
            return;
        }
        if (alas <= 0 || tinggi <= 0) {
            pesan_error.innerHTML = "<strong>Angka tidak boleh nol atau negatif!</strong>";
            return;
        }
        pesan_error.innerHTML = "";

        const luas = 0.5 * alas * tinggi;
        hasil_luas.value = (Math.round(luas * 100) / 100).toString();
    });
}

const reset_luas = document.getElementById("reset-luas");
if (reset_luas) {
    reset_luas.addEventListener("click", function () {
        document.getElementById("alas").value = "";
        document.getElementById("tinggi").value = "";
        document.getElementById("luas").value = "";
        document.getElementById("error-luas").innerHTML = "";
    });
}

const form_keliling = document.getElementById("form-keliling");
const pesan_error_keliling = document.getElementById("error-keliling");
if (form_keliling) {
    form_keliling.addEventListener("submit", function (event) {
        event.preventDefault();

        const sisi_a = parseFloat(document.getElementById("sisi-a").value.replace(",", "."));
        const sisi_b = parseFloat(document.getElementById("sisi-b").value.replace(",", "."));
        const sisi_c = parseFloat(document.getElementById("sisi-c").value.replace(",", "."));
        const hasil_keliling = document.getElementById("keliling");

        if (isNaN(sisi_a) || isNaN(sisi_b) || isNaN(sisi_c)) {
            pesan_error_keliling.innerHTML = "<strong>Nilai tidak boleh kosong!</strong>";
            return;
        }
        if (sisi_a <= 0 || sisi_b <= 0 || sisi_c <= 0) {
            pesan_error_keliling.innerHTML = "<strong>Angka tidak boleh nol atau negatif!</strong>";
            return;
        }
        pesan_error_keliling.innerHTML = "";

        const keliling = sisi_a + sisi_b + sisi_c;
        hasil_keliling.value = (Math.round(keliling * 100) / 100).toString();
    });
}

const reset_keliling = document.getElementById("reset-keliling");
if (reset_keliling) {
    reset_keliling.addEventListener("click", function () {
        document.getElementById("sisi-a").value = "";
        document.getElementById("sisi-b").value = "";
        document.getElementById("sisi-c").value = "";
        document.getElementById("keliling").value = "";
        document.getElementById("error-keliling").innerHTML = "";
    });
}

// === Jajar Genjang ===
const form_luas_jg = document.getElementById("form-luas-jg");
const pesan_error_jg = document.getElementById("error-luas-jg");
if (form_luas_jg) {
    form_luas_jg.addEventListener("submit", function (event) {
        event.preventDefault();

        const alas = parseFloat(document.getElementById("alas-jg").value.replace(",", "."));
        const tinggi = parseFloat(document.getElementById("tinggi-jg").value.replace(",", "."));
        const hasil_luas = document.getElementById("luas-jg");

        if (isNaN(alas) || isNaN(tinggi)) {
            pesan_error_jg.innerHTML = "<strong>Nilai tidak boleh kosong!</strong>";
            return;
        }
        if (alas <= 0 || tinggi <= 0) {
            pesan_error_jg.innerHTML = "<strong>Angka tidak boleh nol atau negatif!</strong>";
            return;
        }
        pesan_error_jg.innerHTML = "";

        const luas = alas * tinggi;
        hasil_luas.value = (Math.round(luas * 100) / 100).toString();
    });
}

const reset_luas_jg = document.getElementById("reset-luas-jg");
if (reset_luas_jg) {
    reset_luas_jg.addEventListener("click", function () {
        document.getElementById("alas-jg").value = "";
        document.getElementById("tinggi-jg").value = "";
        document.getElementById("luas-jg").value = "";
        document.getElementById("error-luas-jg").innerHTML = "";
    });
}

const form_keliling_jg = document.getElementById("form-keliling-jg");
const pesan_error_keliling_jg = document.getElementById("error-keliling-jg");
if (form_keliling_jg) {
    form_keliling_jg.addEventListener("submit", function (event) {
        event.preventDefault();

        const sisi_a = parseFloat(document.getElementById("sisi-a-jg").value.replace(",", "."));
        const sisi_b = parseFloat(document.getElementById("sisi-b-jg").value.replace(",", "."));
        const hasil_keliling = document.getElementById("keliling-jg");

        if (isNaN(sisi_a) || isNaN(sisi_b)) {
            pesan_error_keliling_jg.innerHTML = "<strong>Nilai tidak boleh kosong!</strong>";
            return;
        }
        if (sisi_a <= 0 || sisi_b <= 0) {
            pesan_error_keliling_jg.innerHTML = "<strong>Angka tidak boleh nol atau negatif!</strong>";
            return;
        }
        pesan_error_keliling_jg.innerHTML = "";

        const keliling = 2 * (sisi_a + sisi_b);
        hasil_keliling.value = (Math.round(keliling * 100) / 100).toString();
    });
}

const reset_keliling_jg = document.getElementById("reset-keliling-jg");
if (reset_keliling_jg) {
    reset_keliling_jg.addEventListener("click", function () {
        document.getElementById("sisi-a-jg").value = "";
        document.getElementById("sisi-b-jg").value = "";
        document.getElementById("keliling-jg").value = "";
        document.getElementById("error-keliling-jg").innerHTML = "";
    });
}
