let no = 1;

// Cari semua produk
$(".all").click(function (e) {
    e.preventDefault();
    let url = "https://dummyjson.com/products";
    $.ajax({
        type: "get",
        url: url,
        dataType: "json",
        success: function (response) {
            console.log(response.products);
            let out = '<table class="table mt-4 "><thead><tr><th scope="col">ID</th><th scope="col">Title</th><th scope="col">Descripsion</th><th scope="col">Price</th><th scope="col">Category</th><th scope="col">Update</th><th scope="col">Cart</th></tr></thead><tbody>';
            $.each(response.products, function (key, val) {
                out += `<tr>
                <th scope="row">${val.id}</th>
                <td>${val.title}</td>
                <td>${val.description}</td>
                <td>${val.price}</td>
                <td>${val.category}</td>
                <td><button class="btn btn-outline-warning " data-bs-toggle="modal" data-bs-target="#exampleModal4" onclick="ubah(${val.id})">UPDATE</button></td>
                <td><button class="btn btn-outline-primary" onclick="cart(${val.id})">CART</button></td>
                </tr>`
            });
            out += '</tbody></table>';
            $("#tampil").html(out);
        }
    });
});


//Cari 1 kategori
$(".cate").click(function (e) {
    e.preventDefault();
    let link = "";
    let kategori = document.getElementById("select").value;
    if (kategori === "smartphones") {
        link = "smartphones";
    }
    if (kategori === "laptops") {
        link = "laptops";
    }
    if (kategori === "fragrances") {
        link = "fragrances";
    }
    if (kategori === "skincare") {
        link = "skincare";
    }
    if (kategori === "groceries") {
        link = "groceries";
    }
    if (kategori === "home-decoration") {
        link = "home-decoration";
    }
    let url = "https://dummyjson.com/products/category/" + link;
    $.ajax({
        type: "get",
        url: url,
        dataType: "json",
        success: function (response) {
            console.log(response.products);
            let out = '<table class="table mt-4 "><thead><tr><th scope="col">ID</th><th scope="col">Title</th><th scope="col">Descripsion</th><th scope="col">Price</th><th scope="col">Category</th></tr></thead><tbody>';
            $.each(response.products, function (key, val) {
                out += `<tr>
                    <th scope="row">${val.id}</th>
                    <td>${val.title}</td>
                    <td>${val.description}</td>
                    <td>${val.price}</td>
                    <td>${val.category}</td>
                  </tr>`
            });
            out += '</tbody></table>';
            $("#tampil").html(out);
        }
    });
});

// Cari berdasarkan id
$(".one").click(function (e) {
    e.preventDefault();
    let id = document.getElementById("id").value;
    let url = "https://dummyjson.com/products/" + id;
    $.ajax({
        type: "get",
        url: url,
        dataType: "json",
        success: function (response) {
            console.log(response);
            let out = '<table class="table mt-4 "><thead><tr><th scope="col">ID</th><th scope="col">Title</th><th scope="col">Descripsion</th><th scope="col">Price</th><th scope="col">Category</th></tr></thead><tbody>';
            out += `<tr>
                    <th scope="row">${response.id}</th>
                    <td>${response.title}</td>
                    <td>${response.description}</td>
                    <td>${response.price}</td>
                    <td>${response.category}</td>
                  </tr>`;
            out += '</tbody></table>';
            $("#tampil").html(out);
        }
    });
});

//Menambahkan
$(".add").click(function (e) {
    e.preventDefault();
    let url = "https://dummyjson.com/products/add";
    let produk = $("#produk").val();
    let deskripsi = $("#deskripsi").val();
    let kategori = $("#selected").val();

    let data = {
        title: produk,
        description: deskripsi,
        category: kategori
    };

    $.ajax({
        type: "POST",
        url: url,
        body: data,
        success: function (response) {
            console.log(data);
        }
    });
});

// Mengupdate
$(".update").click(function (e) {
    e.preventDefault();
    let id = $("#ide").val();
    let data = {
        id: $("#ide").val(),
        produk: $("#produki").val(),
        deskripsi: $("#deskripsie").val()
    };
    let link = "https://dummyjson.com/products/" + id;

    $.ajax({
        type: "patch",
        url: link,
        body: data,
        success: function (response) {
            console.log(data);
        }
    });
});

// Tampil Update
function ubah(idubah) {
    let url = "https://dummyjson.com/products/" + idubah;
    $.ajax({
        type: "get",
        url: url,
        data: "json",
        success: function (response) {
            $(".ha").val(response.title);
            $(".hi").val(response.description);
            $(".ho").val(response.id);
        }
    });
}

// Menghapus
$(".del").click(function (e) {
    e.preventDefault();
    let id = document.getElementById("ie").value;
    let url = "https://dummyjson.com/products/" + id;
    $.ajax({
        type: "delete",
        url: url,
        data: id,
        success: function (response) {
            console.log("id nomor " + id + " sudah dihapus");
        }
    });
});

// Semua Pelanggan
$(".plgn").click(function (e) {
    e.preventDefault();
    $.ajax({
        type: "get",
        url: "http://localhost/dummyjson_2/php/select.php",
        dataType: "json",
        cahce: false,
        success: function (response) {
            console.log(response);
            let out = '<table class="table mt-4"><thead><tr><th scope="col">No</th><th scope="col">Pelanggan</th><th scope="col">Alamat</th><th scope="col">Nomor Telepon</th><th scope="col">Ubah</th><th scope="col">Hapus</th><th scope="col">Beli</th></tr></thead><tbody>';
            $.each(response, function (key, val) {
                out += `<tr>
                    <th scope="row">${no++}</th>
                    <td>${val.pelanggan}</td>
                    <td>${val.alamat}</td>
                    <td>${val.telp}</td>
                    <td><button class="btn btn-outline-primary"  data-bs-toggle="modal" data-bs-target="#exampleModal7" onclick="update(${val.idpelanggan})">UBAH</button></td>
                    <td><button class="btn btn-outline-danger" onclick="hapus(${val.idpelanggan})">HAPUS</button></td>
                    <td><button class="btn btn-outline-success" onclick="order(${val.idpelanggan})">BELI</button></td>
                </tr>`
            });
            out += '</tbody></table>';
            $("#tampil").html(out);
        }
    });
});

// Tambah Pelanggan
$(".addplgn").click(function (e) {
    e.preventDefault();
    let data = {
        pelanggan: $("#pelanggan").val(),
        alamat: $("#alamat").val(),
        telp: $("#telp").val()
    };
    $.ajax({
        type: "post",
        url: "http://localhost/dummyjson_2/php/insert.php",
        data: JSON.stringify(data),
        cahce: false,
        success: function (response) {
            window.location.href = "index.html";
            alert(response);
        }
    });
});

// Hapus Pelanggan
function hapus(idpelanggan) {
    let data = {
        idpelanggan: idpelanggan
    };
    $.ajax({
        type: "post",
        url: "http://localhost/dummyjson_2/php/delete.php",
        data: JSON.stringify(data),
        cahce: false,
        success: function (response) {
            window.location.href = "index.html";
            alert(response);
        }
    });
}

// Tampil Update
function update(idpelanggan) {
    let data = {
        idpelanggan: idpelanggan
    };
    $.ajax({
        type: "post",
        url: "http://localhost/dummyjson_2/php/selectupdate.php",
        data: JSON.stringify(data),
        cahce: false,
        success: function (response) {
            let data = JSON.parse(response);
            $(".ba").val(data.pelanggan);
            $(".bi").val(data.alamat);
            $(".bo").val(data.telp);
            $(".be").val(data.idpelanggan);
        }
    });
}

// Mengupdate
$(".updateplgn").click(function (e) {
    e.preventDefault();
    let dataPelanggan = {
        idpelanggan: $("#idey").val(),
        pelanggan: $("#pelanggani").val(),
        alamat: $("#alamate").val(),
        telp: $("#telpe").val()
    };
    $.ajax({
        type: "post",
        url: "http://localhost/dummyjson_2/php/update.php",
        data: JSON.stringify(dataPelanggan),
        cahce: false,
        success: function (response) {
            window.location.href = "index.html";
            alert(response);
        }
    });

});


// Cart
function cart(id) {
    let url = "https://dummyjson.com/products/" + id;
    $.ajax({
        type: "get",
        url: url,
        dataType: "json",
        success: function (response) {
            let out = '<table class="table mt-4"><thead><tr><th scope="col">ID</th><th scope="col">Products</th><th scope="col">Price</th><th scope="col">Order By</th><th scope="col">Amount</th></tr></thead><tbody>';
            out += `<tr>
            <td>${response.id}</td>
            <td>${response.title}</td>
            <td>${response.price}</td>
            <td id="order"></td>
            <td><input type="number" name="jumlah" id="jumlah"></td>
            <td><button class="btn btn-success" onclick="checkout('${response.id}','${response.price}','${response.title}')">Checkout</button></td>
            </tr>`
            out += '</tbody></table>';
            $("#cart").html(out);
        }
    });
}

// Dipesan Oleh
var idplgn = "";
var nama = "";
var alamat = "";
function order(id) {
    $.ajax({
        type: "get",
        url: "http://localhost/dummyjson_2/php/selectwhere.php?id=" + id,
        dataType: "json",
        success: function (response) {
            let out = response.pelanggan;
            $("#order").html(out);
            idplgn = response.idpelanggan;
            nama = response.pelanggan;
            alamat = response.alamat;
        }
    });
}

// Checkout
function checkout(idbarang, harga, barang) {
    let idorder = 2;
    let jumlah = 1;
    let data = {
        idorder : idorder,
        idbarang : idbarang,
        jumlah : jumlah,
        harga : harga,
        barang : barang,
        idpelanggan : idplgn,
        pelanggan : nama,
        alamat : alamat
    };

    $.ajax({
        type: "post",
        url: "http://localhost/dummyjson_2/php/addtocart.php",
        data: JSON.stringify(data),
        success: function (response) {
            console.log(response);
            alert('Terima Kasih Telah Checkout');
            window.location.href = "index.html";
        }
    });
}