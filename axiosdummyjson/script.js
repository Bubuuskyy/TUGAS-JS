let tampil = document.querySelector("#tampil");
let no = 1;

//Semua Produk
function allproduk() {
    axios.get("https://dummyjson.com/products").then(function (response) {
        let produk = response.data.products;
        let out = '<table class="table mt-4 "><thead><tr><th scope="col">ID</th><th scope="col">Title</th><th scope="col">Descripsion</th><th scope="col">Price</th><th scope="col">Category</th><th scope="col">Update</th><th scope="col">Cart</th></tr></thead><tbody>';
        produk.forEach(el => {
            out += `<tr>
            <th scope="row">${el.id}</th>
            <td>${el.title}</td>
            <td>${el.description}</td>
            <td>${el.price}</td>
            <td>${el.category}</td>
            <td><button class="btn btn-outline-warning " data-bs-toggle="modal" data-bs-target="#exampleModalproduk" onclick="ubahproduk(${el.id})">UPDATE</button></td>
            <td><button class="btn btn-outline-primary" onclick="keranjang(${el.id})">CART</button></td>
            </tr>`
        });
        out += '</tbody></table>';
        tampil.innerHTML = out;
    })
};

//Cari Berdasarkan ID
function allprodukid() {
    let idproduk = document.getElementById("id").value;
    axios.get("https://dummyjson.com/products/" + idproduk).then(function (response) {
        let out = '<table class="table mt-4 "><thead><tr><th scope="col">ID</th><th scope="col">Title</th><th scope="col">Descripsion</th><th scope="col">Price</th><th scope="col">Category</th></tr></thead><tbody>';
                out += `<tr>
                <td>${response.data.id}</td>
                <td>${response.data.title}</td>
                <td>${response.data.description}</td>
                <td>${response.data.price}</td>
                <td>${response.data.category}</td>
            </tr>`;
        out += '</tbody></table>';
        tampil.innerHTML = out;
    })
}

// Cari Berdasarkan Kategori
function allprodukkategori() {
    let kategori = document.getElementById("select").value;
    axios.get("https://dummyjson.com/products/category/" + kategori).then(function (response) {
        let produk = response.data.products;
        let out = '<table class="table mt-4 "><thead><tr><th scope="col">ID</th><th scope="col">Title</th><th scope="col">Descripsion</th><th scope="col">Price</th><th scope="col">Category</th></tr></thead><tbody>';
        produk.forEach(el => {
            out += `<tr>
            <td>${el.id}</td>
            <td>${el.title}</td>
            <td>${el.description}</td>
            <td>${el.price}</td>
            <td>${el.category}</td>
            </tr>`;
        });
        out += '</tbody></table>';
        tampil.innerHTML = out;
    })
}

// Tambah Produk
function addproduk() {
    let data = {
        produk: document.getElementById("produk").value,
        deskripsi: document.getElementById("deskripsi").value,
        kategori: document.getElementById("addkate").value
    };
    axios.post("https://dummyjson.com/products/add", JSON.stringify(data)).then(function (response) {
        console.log(data);
    })
}

// Tampil Update Produk
function tampilproduk(idproduk) {
    axios.get("https://dummyjson.com/products/" + idproduk).then(function (response) {
        document.querySelector("#prot").value = response.data.id;
        document.querySelector("#proti").value = response.data.title;
        document.querySelector("#protu").value = response.data.description;
    })
}

// Update Produk
function ubahproduk() {
    let idproduk = document.getElementById("prot").value;
    let data = {
        id: document.getElementById("prot").value,
        produk: document.getElementById("proti").value,
        deskripsi: document.getElementById("protu").value
    };
    axios.put("https://dummyjson.com/products/" + idproduk, JSON.stringify(data)).then(function (response) {
        console.log(data);
    })
}

//Hapus Produk
function hapusproduk(idproduk) {
    let data = {
        id: idproduk
    };
    axios.delete("https://dummyjson.com/products/" + idproduk, JSON.stringify(data)).then(function (response) {
        console.log("id " + idproduk + " sudah dihapus");
    })
}

//Semua Pelanggan
function allplgn() {
    axios.get("http://localhost/axiosdummyjson/php/select.php").then(function (response) {
        let plg = response.data;
        let out = '<table class="table mt-4"><thead><tr><th scope="col">No</th><th scope="col">Pelanggan</th><th scope="col">Alamat</th><th scope="col">Nomor Telepon</th><th scope="col">Ubah</th><th scope="col">Hapus</th><th scope="col">Beli</th></tr></thead><tbody>';
        plg.forEach(el => {
            out += `<tr>
            <td>${no++}</td>
            <td>${el.pelanggan}</td>
            <td>${el.alamat}</td>
            <td>${el.telp}</td>
            <td><button class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#modalpelanggan" onclick="tampilplgn(${el.idpelanggan})">UBAH</button></td>
            <td><button class="btn btn-outline-danger" onclick="hapus(${el.idpelanggan})">HAPUS</button></td>
            <td><button class="btn btn-outline-success" onclick="cartplgn(${el.idpelanggan})">BELI</button></td>
            </tr>`;
        });
        out += '</tbody></table>';
        tampil.innerHTML = out;
    })
}

// Tambah Pelanggan
function addplgn() {
    let data = {
        pelanggan: document.getElementById("pelanggan").value,
        alamat: document.getElementById("alamat").value,
        telp: document.getElementById("telp").value
    };
    axios.post("http://localhost/axiosdummyjson/php/insert.php", JSON.stringify(data)).then(function (response) {
        alert(response.data);
        allplgn();
    })
}

//Tampil Update Pelanggan 
function tampilplgn(idpelanggan) {
    let data = {
        idpelanggan: idpelanggan
    };
    axios.post("http://localhost/axiosdummyjson/php/selectupdate.php", JSON.stringify(data)).then(function (response) {
        document.getElementById("idey").value = response.data.idpelanggan;
        document.getElementById("pelanggani").value = response.data.pelanggan;
        document.getElementById("alamate").value = response.data.alamat;
        document.getElementById("telpe").value = response.data.telp;
    })
}

// Mengupdate Pelanggan
function ubahplgn() {
    let dataPelanggan = {
        idpelanggan: document.getElementById("idey").value,
        pelanggan: document.getElementById("pelanggani").value,
        alamat: document.getElementById("alamate").value,
        telp: document.getElementById("telpe").value
    };
    axios.post("http://localhost/axiosdummyjson/php/update.php", JSON.stringify(dataPelanggan)).then(function (response) {
        alert(response.data);
        allplgn();
    })
}

// Menghapus Pelanggan
function hapusplgn(idpelanggan) {
    let data = {
        idpelanggan: idpelanggan
    }
    axios.post("http://localhost/axiosdummyjson/php/delete.php", JSON.stringify(data)).then(function (response) {
        alert(response.data);
        allplgn();
    })
}

// Keranjang
function keranjang(id) {
    axios.get("https://dummyjson.com/products/" + id).then(function (response) {
        let produk = response.data;
        let out = '<table class="table mt-4"><thead><tr><th scope="col">ID</th><th scope="col">Products</th><th scope="col">Price</th><th scope="col">Order By</th><th scope="col">Amount</th></tr></thead><tbody>';
        out += `<tr>
        <td>${produk.id}</td>
        <td>${produk.title}</td>
        <td>${produk.price}</td>
        <td id="pesan"></td>
        <td><input type="number" name="jumlah" id="jumlah"></td>
        <td><button class="btn btn-success" onclick="checkout('${produk.id}','${produk.price}','${produk.title}')">Checkout</button></td>
        </tr>`;
        out += "</tbody></table>";
        cart.innerHTML = out;
    })
}

// Dipesan Oleh
var idplgn = "";
var nama = "";
var alamat = "";
function cartplgn(idpelanggan) {
    axios.get("http://localhost/axiosdummyjson/php/selectwhere.php?id=" + idpelanggan).then(function (response) {
        let keluar = response.data.pelanggan;
        document.querySelector("#pesan").innerHTML = keluar;
        idplgn = response.data.idpelanggan;
        nama = response.data.pelanggan;
        alamat = response.data.alamat;
    })
}

// Checkout
function checkout(idbarang, harga, barang) {
    let idorder = 4;
    let jumlah = document.getElementById("jumlah").value;
    let data = {
        idorder: idorder,
        idbarang: idbarang,
        jumlah: jumlah,
        harga: harga,
        barang: barang,
        idpelanggan: idplgn,
        pelanggan: nama,
        alamat: alamat
    };
    axios.post("http://localhost/axiosdummyjson/php/addtocart.php", JSON.stringify(data)).then(function (response) {
        window.location.href = "index.html";
        alert(response.data);
    })
}