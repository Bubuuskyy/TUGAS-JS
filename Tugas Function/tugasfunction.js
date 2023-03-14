// NAMA        : ACHMAD MALIK RAMDHANI
// ABSEN       : 01
// KELAS       : XI - RPL

let tampil = document.querySelector("#belajar");
// let tanggal = document.getElementById("#tanggal");
// let bulan = document.getElementById("#bulan");

klik.addEventListener("click", hasil(5));
klik.onclick = function (b) {
    alert(b)
}

function hasil(a) {
    // let a = document.getElementsByName("tgl")[0].value;
    // tampil.innerHTML = a;

    alert(a);
}

// zodiak(2,30); 
function zodiak() {
    let bulan = document.getElementById("bulan").value; 
    let tanggal = document.getElementById("tanggal").value; 
    let hasil = "Tanggal / Bulan Anda Salah";
    if (bln > 0 && bln < 13 && tgl > 0 && tgl < 32 ) {
        hasil = "Zodiak Belum Dibuat";
        if (bln == 1) {
            hasil = "Capricorn";
            if (tgl > 21) {
                hasil = "Aquarius";
            }
        }
        if (bln==2 ) {
            if ( tgl<18) {
                hasil = "Aquarius";
            }
            if (tgl>18 && tgl<30) {
                hasil = "Pisces";
            }if (tgl>30) {
                hasil = "Tanggal Tidak Valid";
            }
            
            
        }
        if (bln==4) {
            hasil = "Aries";
            if (tgl>18&&tgl<31) {
                hasil="Taurus";
            }
        }
    }
    console.log(hasil);
    tampil.innerHTML = hasil;
}

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------

lulus(79);
function lulus(nilai) {
    if (nilai >=0 && nilai <=100) {
        if (nilai >= 80) {
            console.log("Nilai Anda Diatas KKM");
        }else{
            console.log("Nilai Anda Dibawah KKM");
        }
    }else{
        console.log("Nilai Tidak Valid, Harap Masukkan Angka Dengan Benar");
    }
}

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------

function terbilang(nilai){
    nilai = Math.abs(nilai);
    var Bagi=0;
    var huruf = ["", "Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan", "Sepuluh", "Sebelas"];
    var hasil="";

    if (nilai < 12) {
        hasil = " "+huruf[nilai];
    }
    else if (nilai <20) {
        hasil = terbilang(nilai - 10) + " Belas";
    }
    else if (nilai < 100) {
        Bagi = Math.floor(nilai/10);
        hasil = terbilang(Bagi)+" Puluh"+ terbilang(nilai % 10);
    }
    else if (nilai < 200) {
        hasil = " Seratus" + terbilang(nilai - 100);
    }
    else if (nilai < 1000) {
        Bagi = Math.floor(nilai/100);
        hasil = terbilang(Bagi) + " Ratus" + terbilang(nilai % 100);
    }
    else if (nilai < 2000) {
        hasil = " Seribu" + terbilang(nilai - 1000);
    }
    else if (nilai < 1000000) {
        Bagi = Math.floor(nilai/1000);
        hasil = terbilang(Bagi) + " Ribu" + terbilang(nilai % 1000);
    } 
    else if (nilai < 1000000000) {
        Bagi = Math.floor(nilai/1000000);
        hasil =terbilang(Bagi) + " Juta" + terbilang(nilai % 1000000);
    } 
    else if (nilai < 1000000000000) {
        Bagi = Math.floor(nilai/1000000000);
        hasil = terbilang(Bagi) + " Miliar" + terbilang(nilai % 1000000000);
    } 
    else if (nilai < 1000000000000000) {
        Bagi = Math.floor(nilai/1000000000000);
        hasil = terbilang(nilai/1000000000000) + " Triliun" + terbilang(nilai % 1000000000000);
    }

    return hasil;
}

console.log(terbilang(128));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------

prima(1);
function prima(bilangan) {
    let prima = true;
    if (bilangan === 1) {
        console.log("1 Bukan Termasuk Bilangan Prima");
        } else if (bilangan > 1) {
        for (let i = 2; i < bilangan; i++) {
            if (bilangan % i == 0) {
                prima = false;
                break;
            }
        }
        if (prima) {
            console.log(`${bilangan} Merupakan Bilangan Prima`);
        } else {
            console.log(`${bilangan} Bukan Termasuk Bilangan Prima`);
        }
    }else{
        console.log("Bilangan Bukan Termasuk Bilangan Prima");
    }
}