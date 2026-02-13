function checkDate() {
  const date = document.getElementById("dateInput").value;

  if (!date) {
    Swal.fire({
      title: "Eits! 🥺",
      text: "Pilih tanggal dulu dong sayang 😚",
      icon: "warning",
      confirmButtonColor: "#ff4d88"
    });
  } else {
    Swal.fire({
      title: "Yayyy! 🥰",
      text: "Aku catet yaa!",
      icon: "success",
      confirmButtonColor: "#ff4d88"
    }).then(() => {
      showPage(4);
    });
  }
}

function showPage(pageNumber) {
  const pages = document.querySelectorAll(".page");

  pages.forEach(page => {
    page.classList.remove("active");
  });

  document.getElementById("page" + pageNumber).classList.add("active");
}

let selectedDate = "";
let selectedPlace = "";

function nextPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page' + page).classList.add('active');
}

function moveNo() {
  const btn = document.querySelector('.no-btn');
  btn.style.top = Math.random() * 80 + "%";
  btn.style.left = Math.random() * 80 + "%";
}

function saveDateAndNext() {
  const dateInput = document.querySelector("#page3 input");
  selectedDate = dateInput.value;

  if (!selectedDate) {
    alert("Pilih tanggal dulu dong sayang 😚");
    return;
  }

  nextPage(4);
}

function choosePlace(place) {
  selectedPlace = place;

  let placeText = "";
  let placeLabel = "";

  if(place === "cafe"){
    placeText = "Yayy! Kita ngedate sambil ngopi cantik. Besok aku kasih tau Cafenya!";
    placeLabel = "Cafe ☕";
  } else if(place === "kotalama"){
    placeText = "Yayy! Kita jalan-jalan lagi ke Kota Lama. Emang Kota Lama tuh ga ngebosenin ya!!";
    placeLabel = "Kota Lama 🏛️";
  } else {
    placeText = "Yayy! Ayo kita keliling Mall sambil cari makan enak!";
    placeLabel = "Mall 🛍️";
  }

  document.getElementById("placeText").innerText = placeText;

  const phoneNumber = "6282328814240";

  const message = `
Halo Raraaa 💗

Aku pilih tanggal: ${selectedDate}
Aku pilih tempat: ${placeLabel}

Siap-siap yaa 😘
`;

  const whatsappURL = "https://wa.me/" + phoneNumber + "6282328814240" + encodeURIComponent(message);

  window.open(whatsappURL, "_blank");

  nextPage(5);
}

function openGift(){
  document.getElementById("voucher").style.display = "block";
}

function createHeart(){
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "🩷";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 300);

document.addEventListener("click", function() {
  const music = document.getElementById("bgMusic");
  if (music.paused) {
    music.play().catch(()=>{});
  }
}, { once: true });

