function tombol(val) {
    document.getElementById('result').value += val;
}

function hasil(){
    let x = document.getElementById('result').value;
    let y = eval(x);
    document.getElementById('result').value = y;
}

function hapus(){
    document.getElementById('result').value = "";
}
