// FILE DATA MEMPELAI (Klien tinggal diganti di sini)
const dataMempelai = {
    idUndangan: "devi-ehsan", // Sesuai ID tujuan Google Sheets kamu
    tglCountdown: "July 12, 2026 08:00:00", // Format: Bulan Tanggal, Tahun Jam:Menit:Detik
    
    // 1. Data Mempelai Wanita
    wanita: {
        namaLengkap: "ABC, S.Pd.",
        panggilan: "ABC",
        ayah: "H. ABC",
        ibu: "Hj. ABCD",
        foto: "1.jpg", // Nama file foto atau link url foto
        instagram: "rara_rahmah",
        linkInstagram: "https://instagram.com/sirfa.id"
    },
    
    // 2. Data Mempelai Pria
    pria: {
        namaLengkap: "DOP, S.T.",
        panggilan: "DOP",
        ayah: "Budi DOP",
        ibu: "DOP",
        foto: "PengantinPria.jpg", // Nama file foto atau link url foto
        instagram: "adi_sirajuddin",
        linkInstagram: "https://instagram.com/sirfa.id"
    },

    // 3. Data Acara Akad Nikah
    akad: {
        tanggal: "Minggu, 12 Juli 2026",
        jam: "08.00 - 10.00 WITA",
        tempat: "Kios Ningsih, Kuala Kapuas",
        foto: "3.jpg",
        linkMaps: "https://maps.google.com"
    },

    // 4. Data Acara Resepsi
    resepsi: {
        tanggal: "Minggu, 12 Juli 2026",
        jam: "11.00 - Selesai",
        tempat: "Kios Ningsih, Kuala Kapuas",
        foto: "4.jpg",
        linkMaps: "https://maps.google.com"
    },

    // 5. Data Peta (Maps Embed)
    maps: {
        iframeUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.315757991008!2d114.45293869238287!3d-3.092351775439721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de46b100af7e14d%3A0x84b232b9a80765c6!2sKios%20Ningsih!5e0!3m2!1sid!2sid!4v1776149733951!5m2!1sid!2sid",
        tombolRute: "https://maps.app.goo.gl/TgL9angPRcHxiN238"
    },

    // 6. Data Galeri Foto untuk Status WA / Slide
    galeri: [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
        "3.jpg" 
    ],

    // 7. Data Kado Digital (Rekening & Alamat)
    kado: {
        bcaNo: "0987 6543 21",
        bcaAn: "Aulia Rahmah",
        mandiriNo: "1234 5678 9012",
        mandiriAn: "Sirajuddin",
        alamatKirim: "Jl. Trans Kalimantan No. 123, Kuala Kapuas, Kapuas Murung",
        penerimaPaket: "Rara & Adi",
        NoWaKonfirmasi: "628875754371"
    },

    // 8. Media Cover & Notifikasi Pop-up
    media: {
        fotoCover: "4.jpg",
        fotoNotif: "3.jpg"
    }
};
