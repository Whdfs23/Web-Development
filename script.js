// ── VARIABEL GLOBAL ──
var judulBaris = {
    nama: "Nama Lengkap",
    nim: "NIM",
    jk: "Jenis Kelamin",
    prodi: "Program Studi",
    semester: "Semester",
    hobi: "Hobi",
    email: "Email",
    alamat: "Alamat"
};

// ── FUNGSI: Ambil nilai radio button ──
function getRadioValue(name) {
    var radios = document.querySelectorAll('input[name="' + name + '"]');
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) return radios[i].value;
    }
    return "";
}

// ── FUNGSI: Ambil nilai checkbox (array) ──
function getCheckboxValues() {
    var checkboxes = document.querySelectorAll('.checkbox-group input[type="checkbox"]');
    var hasil = [];
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) hasil.push(checkboxes[i].value);
    }
    return hasil.length > 0 ? hasil.join(", ") : "—";
}

// ── FUNGSI: Validasi email sederhana ──
function validasiEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// ── FUNGSI: Tampilkan / sembunyikan pesan error ──
function tampilkanError(id, tampil) {
    document.getElementById(id).style.display = tampil ? "block" : "none";
}

// ── FUNGSI: Validasi seluruh form ──
function validasiForm(data) {
    var valid = true;

    if (!data.nama) { tampilkanError("errNama", true); valid = false; }
    else tampilkanError("errNama", false);

    if (!data.nim) { tampilkanError("errNim", true); valid = false; }
    else tampilkanError("errNim", false);

    if (!data.jk) { tampilkanError("errJk", true); valid = false; }
    else tampilkanError("errJk", false);

    if (!data.prodi) { tampilkanError("errProdi", true); valid = false; }
    else tampilkanError("errProdi", false);

    if (!validasiEmail(data.email)) { tampilkanError("errEmail", true); valid = false; }
    else tampilkanError("errEmail", false);

    return valid;
}

// ── FUNGSI: Buat baris tabel hasil ──
function buatBaris(label, nilai) {
    return "<tr><th>" + label + "</th><td>" + nilai + "</td></tr>";
}

// ── FUNGSI: Render tabel hasil ──
function renderHasil(data) {
    var html = "";
    for (var key in data) {
        var nilai = data[key] || "—";
        if (key === "nim" || key === "prodi") {
            nilai = '<span class="badge">' + nilai + '</span>';
        }
        html += buatBaris(judulBaris[key], nilai);
    }
    document.getElementById("hasilTable").innerHTML = html;
}

// ── FUNGSI UTAMA: Submit form ──
function submitForm() {
    // Kumpulkan semua data ke dalam objek
    var dataForm = {
        nama: document.getElementById("nama").value.trim(),
        nim: document.getElementById("nim").value.trim(),
        jk: getRadioValue("jk"),
        prodi: document.getElementById("prodi").value,
        semester: document.getElementById("semester").value || "—",
        hobi: getCheckboxValues(),
        email: document.getElementById("email").value.trim(),
        alamat: document.getElementById("alamat").value.trim()
    };

    // Validasi — hentikan jika tidak valid
    if (!validasiForm(dataForm)) return;

    // Render dan tampilkan hasil
    renderHasil(dataForm);

    var hasilSection = document.getElementById("hasilSection");
    hasilSection.style.display = "block";
    hasilSection.style.animation = "none";
    hasilSection.offsetHeight; // trigger reflow untuk reset animasi
    hasilSection.style.animation = "";

    hasilSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ── FUNGSI: Reset form dan sembunyikan hasil ──
function resetForm() {
    // Reset semua input teks, select, textarea
    var inputs = document.querySelectorAll("input[type='text'], input[type='email'], select, textarea");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }

    // Reset radio
    var radios = document.querySelectorAll("input[type='radio']");
    for (var i = 0; i < radios.length; i++) {
        radios[i].checked = false;
    }

    // Reset checkbox
    var checkboxes = document.querySelectorAll("input[type='checkbox']");
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
    }

    // Sembunyikan semua pesan error
    var errors = document.querySelectorAll(".error-msg");
    for (var i = 0; i < errors.length; i++) {
        errors[i].style.display = "none";
    }

    // Sembunyikan section hasil
    document.getElementById("hasilSection").style.display = "none";
}