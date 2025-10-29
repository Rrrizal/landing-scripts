const modal = document.getElementById("purchaseModal");
const productInput = document.getElementById("productName");

function openForm(product) {
  productInput.value = product;
  modal.classList.add("active");
}

function closeForm() {
  modal.classList.remove("active");
}

function submitForm(e) {
  e.preventDefault();
  const formData = {
    productName: productInput.value,
    nama: document.getElementById("nama").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    plat: document.getElementById("plat").value,
  };

  fetch("http://192.168.152.72:7001/simulation-0.0.1-SNAPSHOT/api/bfa/maximum-credit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  })
    .then((res) => res.json())
    .then((data) => {
      alert("Data berhasil dikirim! Terima kasih, " + formData.nama);
      closeForm();
    })
    .catch((err) => {
      alert("Gagal mengirim data: " + err);
    });
}
