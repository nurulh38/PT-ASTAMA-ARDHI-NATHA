document.addEventListener("DOMContentLoaded", () => {
  const visitorEl = document.getElementById("visitorCount");

  let count = localStorage.getItem("visitorCount");

  if (!count) {
    count = 1;
  } else {
    count = parseInt(count, 10) + 1;
  }

  localStorage.setItem("visitorCount", count);
  visitorEl.textContent = count.toLocaleString("id-ID");

  const form = document.querySelector(".form-box");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Pesan berhasil dikirim. Tim kami akan segera menghubungi Anda.");
    form.reset();
  });
});