const progressBar = document.getElementById("progressBar");
const percentText = document.getElementById("percentText");
const loadingBox = document.getElementById("loadingBox");
const questionContainer = document.getElementById("questionContainer");
const slideshowContainer = document.getElementById("slideshowContainer");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const loveIcon = document.getElementById("loveIcon");

let percent = 0;

// Simulate loading
const loadingInterval = setInterval(() => {
  percent++;
  progressBar.style.width = percent + "%";
  percentText.textContent = percent + "%";

  if (percent >= 100) {
    clearInterval(loadingInterval);
    loadingBox.classList.add("hidden");
    questionContainer.classList.remove("hidden");
  }
}, 20);

// Slideshow data
const slides = [
  {
    img: "https://i.pinimg.com/originals/8f/68/cc/8f68ccb9df25696c03b5eff9f61e5efb.gif",
    text: "Surprised, pretty girl? 😘💫💖",
  },
  {
    img: "https://i.pinimg.com/originals/09/d5/23/09d523a71ede6f3ada70bf680f996e59.gif",
    text: "I know u work hard 💖",
  },
  {
    img: "https://i.pinimg.com/originals/75/af/43/75af431c7b39a3cf17a5e6b01152bb63.gif",
    text: "I know u kind and smart☀️🌸",
  },
  {
    img: "https://cdn.lazi.vn/storage/uploads/users/avatar/1622380352_lazi_408614.gif",
    text: "I know u try your best!!☀️",
  },
  {
    img: "https://i.pinimg.com/originals/eb/88/42/eb884277a5fd501aacffcdd54b12200d.gif",
    text: "Now u need to rest!!🎵",
  },
  {
    img: "https://kenh14cdn.com/zoom/700_438/2018/3/22/photo1521734387409-15217343874101035929513.gif",
    text: "HẸ HẸ !!!!! So Fighting😎💖",
  },
  {
    img: "https://i.pinimg.com/originals/bd/8f/c7/bd8fc7b43f94e52922998d24f356e747.gif",
    text: "Oh wait! One more thing!! 😄😘",
  },
  {
    img: "https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/480028947_1191183839091732_287515522378954485_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_ohc=Ksv-uJteSbIQ7kNvwGev1gg&_nc_oc=AdlR2SA9dNwO9TwRUd8-BqgtZYKz685-gP5bAHc_1e6s4QnBkt8Ppn_I0j0is2RaaTk&_nc_zt=23&_nc_ht=scontent.fhan14-5.fna&_nc_gid=osZTw6z40cu8J8Chfb443Q&oh=00_AfPbbgFv5RDs3aF17swwgto7stR6VEgM0KVvOo8kozLI3w&oe=686187C0",
    text: "Happy Birthday to the most beautiful girl on Earth! 🎂💫💕",
  },
  {
    img: "https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/491973585_1239433964266719_5837058582854114045_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=7DblxyJdWhAQ7kNvwHO3QJo&_nc_oc=Adm2Sv2G7kye_E8NyK6sycWamxLKMQ1S_Z-EErpo2lFHoqk8V6JMl4IIdVJWzeEsPOo&_nc_zt=23&_nc_ht=scontent.fhan14-2.fna&_nc_gid=Y0EQEv_uuLFNIrChb8R-FQ&oh=00_AfMi_a1Xs0dp-WgjL2UQVorgKzxjBGBDHzBys7xelfeFfw&oe=68618841",
    text: "Hope your smile stays as radiant as the sunrise every single day. ☀️🌸",
  },
  {
    img: "https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/490382075_1234555078087941_1610897823691086809_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=umcOlS3ToDQQ7kNvwGRXF-o&_nc_oc=AdmfpoQMh88iQC0PLJUML5LObzMj31msKSrcFa0AUDMSDA6DPKULXQMOJGbSqRc7r3g&_nc_zt=23&_nc_ht=scontent.fhan14-4.fna&_nc_gid=YbTR94yZtGr0kT2BWbaphg&oh=00_AfO-DRxapvn3wlaHMxbXo9qPDTNOro_ezZJi4CxwZs5Wug&oe=68619C1E",
    text: "May your new age shine like red lips and bloom like flowers! ❤️🌸🌹",
  },
  {
    img: "https://png.pngtree.com/png-clipart/20250119/original/pngtree-happy-birthday-and-blow-out-the-candle-png-image_19944185.png",
    text: "Make a big wish and blow those candles like a pro! 🕯️ 🎂",
  },
  {
    img: "https://i.pinimg.com/originals/41/e5/62/41e562591ea4bd923d752107bcaf3ed0.gif",
    text: "HẸ HẸ !!!!! Hết ùi😎💖",
  },
];

let currentSlide = 0;

function showSlide(index) {
  document.getElementById("slideImage").src = slides[index].img;
  document.getElementById("captionText").textContent = slides[index].text;
}

yesBtn.addEventListener("click", () => {
  loveIcon.style.display = "block";
  questionContainer.classList.add("hidden");
  slideshowContainer.classList.remove("hidden");

  // 👉 Phát nhạc ở đây
  audio.play();
  playPauseBtn.innerHTML =
    '<img src="https://cdn-icons-png.flaticon.com/512/62/62070.png" alt="Pause">';
  disk.style.animationPlayState = "running";
  isPlaying = true;

  showSlide(currentSlide);
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 2000);
});

let yesBtnSize = 1;

noBtn.addEventListener("click", () => {
  yesBtnSize += 0.2;
  yesBtn.style.transform = `scale(${yesBtnSize})`;
});

//phát nhạc

const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPauseBtn");
const disk = document.getElementById("disk");

let isPlaying = true;

playPauseBtn.addEventListener("click", () => {
  const playIcon =
    '<img src="https://icons.veryicon.com/png/o/miscellaneous/round-thick-linear-icon/play-238.png" alt="Play">';
  const pauseIcon =
    '<img src="https://cdn-icons-png.flaticon.com/512/62/62070.png" alt="Paused">';

  if (!isPlaying) {
    audio.play();
    playPauseBtn.innerHTML = pauseIcon;
    disk.style.animationPlayState = "running";
  } else {
    audio.pause();
    playPauseBtn.innerHTML = playIcon;
    disk.style.animationPlayState = "paused";
  }
  isPlaying = !isPlaying;
});
