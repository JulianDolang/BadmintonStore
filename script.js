function closeForm() {
  const elm = document.getElementById("modal");
  elm.style.display = "none";
}

function showForm() {
  const elm = document.getElementById("modal");
  elm.style.display = "flex";
}

document.addEventListener("alpine:init", () => {
  Alpine.data("product_container", () => ({
    open: false,
    items: [
      { id: 1, name: "Raket LiNing", img: "LiNing.jpg", price: 280000 },
      {
        id: 2,
        name: "Sepatu Eagle Vanquish",
        img: "Eagle Vanquish.jpg",
        price: 210000,
      },
      { id: 3, name: "Senar Powerace", img: "StringPowerace.jpg", price: 180000 },
    ],
    toggle() {
      this.open = !this.open;
    },
  }));

  Alpine.store('cart', {
    items : [],
    total : 0,
    quantity : 0,
    add(newItem) {
        this.items.push(newItem)
        this.quantity++
        this.total += newItem.price
        console.log(this.total)
    },
  })
});

/* Fungsi formatRupiah */
function formatRupiah(angka, prefix) {
  var number_string = angka.replace(/[^,\d]/g, "").toString(),
    split = number_string.split(","),
    sisa = split[0].length % 3,
    rupiah = split[0].substr(0, sisa),
    ribuan = split[0].substr(sisa).match(/\d{3}/gi);

  // tambahkan titik jika yang di input sudah menjadi angka ribuan
  if (ribuan) {
    separator = sisa ? "." : "";
    rupiah += separator + ribuan.join(".");
  }

  rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
  return prefix == undefined ? rupiah : rupiah ? "Rp" + rupiah : "";
}

document.querySelector('#cart-button').addEventListener('click', (event) => {
  event.preventDefault()
  document.querySelector('#shopping-cart-wrapper').classList.toggle('shopping-cart-show')
})