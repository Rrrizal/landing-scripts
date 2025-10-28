function openForm(productName) {
  const modal = document.getElementById('purchaseModal');
  const productInput = document.getElementById('productName');
  if (modal && productInput) {
    productInput.value = productName;
    modal.classList.add('active');
    modal.style.display = 'flex';
  }
}

function closeForm() {
  const modal = document.getElementById('purchaseModal');
  if (modal) {
    modal.classList.remove('active');
    modal.style.display = 'none';
  }
}

function submitForm(event) {
  event.preventDefault();

  const data = {
    productName: document.getElementById('productName').value,
    nama: document.getElementById('nama').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    plat: document.getElementById('plat').value
  };

  console.log("Data form:", data);
  alert(
    "✅ Data berhasil disubmit!\n\n" +
    "Produk: " + data.productName + "\n" +
    "Nama: " + data.nama + "\n" +
    "Email: " + data.email + "\n" +
    "Telepon: " + data.phone + "\n" +
    "Plat: " + data.plat
  );

  closeForm();
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("btnComprehensive").addEventListener("click", function() {
    openForm("MV COMPREHENSIVE");
  });
  document.getElementById("btnTlo").addEventListener("click", function() {
    openForm("TOTAL LOSS ONLY");
  });
  document.getElementById("btnCancel").addEventListener("click", closeForm);
  document.getElementById("purchaseForm").addEventListener("submit", submitForm);
});
