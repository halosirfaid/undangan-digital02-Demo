// FILE DATA MEMPELAI (Klien tinggal diganti di sini)
const dataMempelai = {
    idUndangan: "Hafizh-Hafizah", // Sesuai ID tujuan Google Sheets kamu
    tglCountdown: "July 25, 2026 09:00:00", // Format: Bulan Tanggal, Tahun Jam:Menit:Detik
    namaChatSingle: "Hafizh & Hafizah",
    namaChatGrup: "Keluarga & Sahabat Hafizh & Hafizah",   

      // Data Daftar Foto Latar Belakang Swiper Salam (Ditambahkan di sini secara aman)
    bgSalam: [
        "1.jpg",
        "3.jpg",
        "5.jpg"
    ],
    // 1. Data Mempelai Wanita
    wanita: {
        namaLengkap: "Hafizah, S.H.",
        panggilan: "Izah",
        ayah: "H. Izad Maliki",
        ibu: "Hj. Siti Salamah",
        foto: "pengantinWanita.jpg", // Nama file foto atau link url foto
        instagram: "hafiziiieh",
        linkInstagram: "https://instagram.com/_hazneul"
    },
    
    // 2. Data Mempelai Pria
    pria: {
        namaLengkap: "Husnul Hafiz, S.T.",
        panggilan: "si manis",
        ayah: "H. Husnul Yakin",
        ibu: "Hj. Hasanul  Hafzah",
        foto: "PengantinPria.jpg", // Nama file foto atau link url foto
        instagram: "husnul hafiz",
        linkInstagram: "https://instagram.com/-hazneul"
    },

    // 3. Data Acara Akad Nikah
    akad: {
        tanggal: "Kamis, 23 Juli 2026",
        jam: "09.00 - 12.00 WITA",
        tempat: "Desa Tabunganen, Kapuas Kuala",
        foto: "5.jpg",
        linkMaps: "https://maps.app.goo.gl/rgBJiHrocXKDPpLH8"
    },

    // 4. Data Acara Resepsi
    resepsi: {
        jam: "07.00 - Selesai",
        tempat: "Gedung Khusus Pejabat, Kapuas Kuala ",
        foto: "4.jpg",
        linkMaps: "https://maps.app.goo.gl/rgBJiHrocXKDPpLH8"
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
        "4.jpg",
        "3.jpg" 
    ],

    // 7. Data Kado Digital (Rekening & Alamat)
    kado: {
        bcaNo: "1234 56788 9101 ",
        bcaAn: "Hafizh",
        mandiriNo: "9876 5432 1234",
        mandiriAn: "Izah",
        alamatKirim: "Jl. Pulau Kalimantan No. 000, Kapuas KUala, Tabunganen",
        penerimaPaket: "Hafiz & Hafizah",
        NoWaKonfirmasi: "628875754371"
    },

    // 8. Media Cover & Notifikasi Pop-up
    media: {
        fotoCover: "4.jpg",
        fotoNotif: "5.jpg",
        fotoAkad: "2.jpg",
        fotoResepsi: "3.jpg"
    },
      story: {
        bulanTahun1: "JANUARI 2023",
        pesanWanita1: "Ingat nggak waktu pertama kali kita nggak sengaja duduk sebelahan di cafe? 🥰",
        waktuWanita1: "10:00",
        
        pesanPria1: "Ingat banget lah! Waktu itu aku gugup mau ajak kenalan haha. Akhirnya berani juga ya ❤️",
        waktuPria1: "10:05",
        
        bulanTahun3: "FEBRUARI 2026",
        pesanWanita2: "Momen paling haru waktu keluarga kita kumpul semua. Hari pertunangan kita... 😍",
        waktuWanita2: "11:42",
        fotoPertunangan: "5.jpg" // Gambar untuk momen tunangan
    },
};
