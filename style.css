document.addEventListener("DOMContentLoaded", () => {
  const visitorCount = document.getElementById("visitorCount");
  const offerForm = document.getElementById("offerForm");

  let count = localStorage.getItem("visitorCount");
  count = count ? parseInt(count, 10) + 1 : 1;
  localStorage.setItem("visitorCount", count);
  if (visitorCount) visitorCount.textContent = count;

  if (offerForm) {
    offerForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const nama = document.getElementById("nama").value.trim();
      const perusahaan = document.getElementById("perusahaan").value.trim();
      const email = document.getElementById("email").value.trim();
      const kebutuhan = document.getElementById("kebutuhan").value.trim();

      const pesan = `Halo PT. Astama Ardhi Natha,%0A%0ASaya ingin meminta penawaran.%0A%0ANama: ${encodeURIComponent(nama)}%0APerusahaan: ${encodeURIComponent(perusahaan)}%0AEmail: ${encodeURIComponent(email)}%0AKebutuhan: ${encodeURIComponent(kebutuhan)}`;

      const waLink = `https://wa.me/6282229779994?text=${pesan}`;
      window.open(waLink, "_blank", "noopener,noreferrer");
    });
  }
});
