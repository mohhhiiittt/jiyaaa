/* ==========================================================================
   CUSTOMIZATION CONFIG — EDIT EVERYTHING FOR YOUR SPECIAL PERSON HERE!
   ========================================================================== */
const CONFIG = {
  // 1. Recipient's Name (appears on opening screen, hero, finale & footer)
  recipientName: "Jiyaaaa",

  // 2. Hero & Final Screen Messages
  heroSubtitle:
    "May this 19th chapter of your life be filled with loads and loads of happiness, prosperity and you get whatever you've always wished for <3 ",
  finaleMessage:
    "Thank you for being the best part of my life. I am so so so grateful to have you in my life, moi bujabo o nuwaru tuk. Thank you so so muchh babyyyy for being in every situation. I love youuuuu so so so sooo much by babygirl 💕💕",

  // 3. Background Music
  // Leave musicUrl as "" to use the built-in gentle Web Audio piano/music-box melody.
  // Or put an MP3 file in the same folder and set: musicUrl: "birthday-song.mp3"
  musicUrl: "playingmusic_edit.mp4",
  

  // 4. Polaroid Memory Gallery
  // Replace `image` with your own photo paths (e.g., "photos/pic1.jpg")!
  // Built-in artistic SVG cards are used by default so nothing ever looks broken.
  memories: [
    {
      image: "images/pic1.jpg",
      caption: "kya katilana nazar hai wow, I am your biggest fan 💗",
      date: "JIYA KA 19TH BIRTHDAAYYYYY",
      note: "how pretty does my babygirl look. OH MY FUCKING GOD 😻😻"
    },
    {
      image: "images/pic2.png",
      caption: "ki cute cute ami duta sao sao sao <333 ",
      date: "JIYA KA 19TH BIRTHDAAYYYYY",
      note: "bachpan se hi ki dhunu dhunu baby tu mur 😋💕"
    },
    {
      image: "images/pic3.jpg",
      caption: "kyaa maal lagti hai yeh, ki dhuniya beh tumi",
      date: "JIYA KA 19TH BIRTHDAAYYYYY",
      note: "Meri malkin toh bohot hi zyada sundar hai yawrrr, I love my jiya malkin so so so much <333"
    },
    {
      image: "images/pic4.jpg",
      caption: "babygirl with chotu the don 😋😋",
      date: "JIYA KA 19TH BIRTHDAAYYYYY",
      note: "duta ekeloge ki cutu cutu lage dekhat. Ekdom cuties <333 "
    },
    {
      image: "images/pic5.jpg",
      caption: "kaisa bhondu bhondu baby tu mur, kene cutu putu dekhi e buku uribole dhore ",
      date: "JIYA KA 19TH BIRTHDAAYYYYY",
      note: "Jiya se daant khane me bhi mazza aata hai 🤪🤪"
    }
  ],

  // 5. Interactive Scrolling Timeline
  timeline: [
    {
      date: "The First Hello",
      title: "The first hello juntu toi kobo ahisili but i fucked up real bad, and ajile regret hoi xeitu",
      text: "Ajile regret hoi je Mohit whyyy? xeidina e aisa fuckup kio mane. But tbh, porikha diute je toi tera ke saisili, moi genuinely stability herai goisilu ngl.",
      secretNote: "Kintu the moment I realized je toi suronjana, I was like chalo dhuniya suwali e hoi 😋😋😋"
    },
    {
      date: "Dushmani phase",
      title: "Ki bhoyanok beya paisili muk, olop tuk jukalei",
      text: "Tuk olopman ragebait korile e kaisa gaand fati goisile tur 🤣😭. Olop kiba kolei ji dore offend hoi jai kela, mani goisilu xeitu. But tur xei habit r karone e moi aru besike jukai thakisilu tuk. ",
      secretNote: "Aapko ragebait karne me ki mosti lagta hai"
    },
    {
      date: "Tur Darjeeling phase aru mur Rajasthan Phase ",
      title: "Toi juntu moment muk koli nh je kandiso, xei moment t e decide kori loisu, yeh toh meri bestfriend for life hai ab. Aur koi bestfriend nahi hone wala.",
      text: "Mur jano pisot realize hol je kela, ebar koi e dilu hoi eik je eneke flight me asu, toi kandibo laga nohol hoi",
      secretNote: "Exact moment, jetiya moi bujilu je damnn, eijoni je mur no.1 priority hai ab. Ji e hok, kuch bhi ho sob eijoni e gom pabo first."
    },
    {
      date: "Today — Your 19th Birthday",
      title: "Happy birthday bong 🎂",
      text: "Last birthday, tuk exact ei e text t 12tat wish korisilu without knowing je ek bosoror bhitorot e you'd be the bestestestt person i'd ever meet, and the most genuine bestfriend I'd ever have.",
      secretNote: "19TH YEAR is going to be totally crazy for you jiyaa, just trust yourself and xodai monot thobi I am always with youuu. I LOVEEE YOUUUUU SO SO SO MUCHHHH BABY 💗💗"
    }
  ],

  // 6. Heartfelt Letter (Typed automatically with an instant Reveal button)
  letterText:
    "Hellooooo my tittybabyyy,\n\n" +
    "Mur jano mon asil to gift something at 12, but mane you know it, nuwarim xeitu and I wanted it to be something special xeikarone tur 12am gift yeh hai ha, jodi olop idhar udhar huwa hoga sorry ha. Iman e parillu kibake koribole.\n\n" +
    "Thank you so so so much babyyy, for being the best part of my lifee. Tur karone I feel like I wake up everyday ekdom happy happy mood me, je aaj firse jiya baby se kotha patim, olop gali o kham, ragebait o korim, dudu o sam 😋😋\n\n" +
    "19th year, is going to be super crazy for youuu babyyy. Toi ajile ji ji bhabi ahiso sob pura hoi ase, just keep this attitude. Give up nahi karna hai, ji bisaro bhalke bisaribi and sabi kaise pura nohoi, and always remember xodai asu tur logot e 💕💕\n\n" +
    "Happiest Birthdayyyy Jiyaa baby, I hopeee you always stay happy and blessed (andddd dudu dekhai thakibi ha daily 😋)",
  letterSignature: "Always cheering for you, ♥"
};

/* Helper: Generates soft, aesthetic pastel SVG placeholder cards */
function createArtCard(bgTop, bgBottom, label, emoji) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 630">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${bgTop}"/>
          <stop offset="100%" stop-color="${bgBottom}"/>
        </linearGradient>
      </defs>
      <rect width="600" height="630" fill="url(#g)"/>
      <circle cx="480" cy="130" r="95" fill="rgba(255,255,255,0.28)"/>
      <circle cx="130" cy="500" r="120" fill="rgba(255,255,255,0.22)"/>
      <text x="300" y="290" text-anchor="middle" font-size="88">${emoji}</text>
      <text x="300" y="375" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="30" fill="#4b3842">${label}</text>
      <text x="300" y="418" text-anchor="middle" font-family="sans-serif" font-size="16" letter-spacing="3" fill="#7c6370">REPLACE WITH YOUR PHOTO</text>
    </svg>`;
  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

/* ==========================================================================
   DOM HYDRATION FROM CONFIG
   ========================================================================== */
document.querySelectorAll("[data-recipient]").forEach((el) => {
  el.textContent = CONFIG.recipientName;
});
document.getElementById("hero-subtitle").textContent = CONFIG.heroSubtitle;
document.getElementById("finale-message").textContent = CONFIG.finaleMessage;
document.getElementById("letter-signature").textContent = CONFIG.letterSignature;
document.title = `Happy Birthday, ${CONFIG.recipientName}!`;

/* ==========================================================================
   AUDIO ENGINE (MP3 OR BUILT-IN DREAMY WEB AUDIO MUSIC BOX)
   ========================================================================== */
const musicToggleBtn = document.getElementById("music-toggle");
const musicLabel = document.getElementById("music-label");
const bgAudioEl = document.getElementById("bg-audio");

let isMusicPlaying = false;
let audioCtx = null;
let synthTimer = null;
let synthGain = null;

// Warm nostalgic progression: Cmaj9 -> Am9 -> Fmaj7 -> G6
const MELODY_NOTES = [
  523.25, 659.25, 783.99, 987.77, 783.99, 659.25,
  440.00, 523.25, 659.25, 783.99, 659.25, 523.25,
  349.23, 440.00, 523.25, 659.25, 523.25, 440.00,
  392.00, 493.88, 587.33, 659.25, 587.33, 493.88
];
let noteIndex = 0;

function startMusic() {
  if (isMusicPlaying) return;

  if (CONFIG.musicUrl) {
    bgAudioEl.src = CONFIG.musicUrl;
    bgAudioEl.volume = 0.45;
    bgAudioEl
      .play()
      .then(() => {
        isMusicPlaying = true;
        updateMusicUI();
      })
      .catch(() => {
        startSynthMusic();
      });
  } else {
    startSynthMusic();
  }
}

function startSynthMusic() {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!audioCtx) {
      audioCtx = new AudioContextClass();
      synthGain = audioCtx.createGain();
      synthGain.gain.value = 0.12;
      synthGain.connect(audioCtx.destination);
    }
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    isMusicPlaying = true;
    updateMusicUI();

    const playNote = () => {
      if (!isMusicPlaying || !audioCtx) return;
      const now = audioCtx.currentTime;
      const freq = MELODY_NOTES[noteIndex % MELODY_NOTES.length];
      noteIndex++;

      const osc = audioCtx.createOscillator();
      const noteEnv = audioCtx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now);

      noteEnv.gain.setValueAtTime(0.0001, now);
      noteEnv.gain.exponentialRampToValueAtTime(0.32, now + 0.06);
      noteEnv.gain.exponentialRampToValueAtTime(0.0001, now + 1.65);

      osc.connect(noteEnv);
      noteEnv.connect(synthGain);

      osc.start(now);
      osc.stop(now + 1.7);
    };

    playNote();
    clearInterval(synthTimer);
    synthTimer = setInterval(playNote, 620);
  } catch (e) {
    // Ignore if browser restricts audio
  }
}

function stopMusic() {
  isMusicPlaying = false;
  if (CONFIG.musicUrl && !bgAudioEl.paused) {
    bgAudioEl.pause();
  }
  if (synthTimer) {
    clearInterval(synthTimer);
    synthTimer = null;
  }
  updateMusicUI();
}

function updateMusicUI() {
  musicToggleBtn.classList.toggle("playing", isMusicPlaying);
  musicLabel.textContent = isMusicPlaying ? "Music: On" : "Music: Off";
}

musicToggleBtn.addEventListener("click", () => {
  if (isMusicPlaying) {
    stopMusic();
  } else {
    startMusic();
  }
});

/* ==========================================================================
   CONFETTI ENGINE (PASTEL CELEBRATION BURSTS)
   ========================================================================== */
const confettiCanvas = document.getElementById("confetti-canvas");
const cCtx = confettiCanvas.getContext("2d");
let confettiParticles = [];
let confettiAnimId = null;

function resizeConfettiCanvas() {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeConfettiCanvas);
resizeConfettiCanvas();

const CONFETTI_COLORS = ["#f4a6be", "#dfc08d", "#c7b6eb", "#f7c7b4", "#a8d8cf", "#fff4d9"];

function launchConfetti(
  originX = window.innerWidth / 2,
  originY = window.innerHeight * 0.45,
  count = 90
) {
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 3 + Math.random() * 9;
    confettiParticles.push({
      x: originX,
      y: originY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 4,
      size: 5 + Math.random() * 6,
      color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 10,
      alpha: 1,
      shape: Math.random() > 0.3 ? "rect" : "circle"
    });
  }
  if (!confettiAnimId) {
    animateConfetti();
  }
}

function animateConfetti() {
  cCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

  confettiParticles = confettiParticles.filter(
    (p) => p.alpha > 0.02 && p.y < confettiCanvas.height + 30
  );

  for (const p of confettiParticles) {
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.18; // gentle gravity
    p.vx *= 0.99;
    p.rotation += p.rotSpeed;
    p.alpha -= 0.0065;

    cCtx.save();
    cCtx.globalAlpha = Math.max(0, p.alpha);
    cCtx.translate(p.x, p.y);
    cCtx.rotate((p.rotation * Math.PI) / 180);
    cCtx.fillStyle = p.color;

    if (p.shape === "rect") {
      cCtx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size * 0.6);
    } else {
      cCtx.beginPath();
      cCtx.arc(0, 0, p.size * 0.45, 0, Math.PI * 2);
      cCtx.fill();
    }
    cCtx.restore();
  }

  if (confettiParticles.length > 0) {
    confettiAnimId = requestAnimationFrame(animateConfetti);
  } else {
    confettiAnimId = null;
    cCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  }
}

/* ==========================================================================
   1. OPENING SCREEN REVEAL
   ========================================================================== */
const openingScreen = document.getElementById("opening-screen");
const envelopeBtn = document.getElementById("envelope-btn");
const openCtaBtn = document.getElementById("open-cta-btn");
const mainExperience = document.getElementById("main-experience");
const sectionDotsNav = document.getElementById("section-dots");
let hasOpened = false;
let revealsInitialized = false;

function openBirthdayExperience() {
  if (hasOpened) return;
  hasOpened = true;

  envelopeBtn.classList.add("is-open");
  startMusic();

  setTimeout(() => {
    openingScreen.classList.add("hidden");
    document.body.classList.remove("locked");
    mainExperience.classList.add("revealed");
    musicToggleBtn.classList.add("visible");
    sectionDotsNav.classList.add("visible");

    // Gentle celebratory welcome burst
    launchConfetti(window.innerWidth / 2, window.innerHeight * 0.4, 80);

    // Initialize scroll observers once
    observeReveals();
  }, 950);
}

envelopeBtn.addEventListener("click", openBirthdayExperience);
openCtaBtn.addEventListener("click", openBirthdayExperience);

/* ==========================================================================
   2. INTERACTIVE BIRTHDAY CAKE & CANDLES
   ========================================================================== */
const candles = Array.from(document.querySelectorAll(".candle"));
const wishMessage = document.getElementById("wish-message");
const cakeInstruction = document.getElementById("cake-instruction");
const blowAllBtn = document.getElementById("blow-all-btn");
const relightBtn = document.getElementById("relight-btn");

function extinguishCandle(candle) {
  if (candle.classList.contains("blown")) return;
  candle.classList.add("blown");

  const rect = candle.getBoundingClientRect();
  launchConfetti(rect.left + rect.width / 2, rect.top, 45);

  const remaining = candles.filter((c) => !c.classList.contains("blown")).length;
  if (remaining === 0) {
    cakeInstruction.textContent = "All candles blown out! ✨";
    wishMessage.classList.add("show");
    setTimeout(() => {
      launchConfetti(window.innerWidth * 0.35, window.innerHeight * 0.35, 65);
      launchConfetti(window.innerWidth * 0.65, window.innerHeight * 0.35, 65);
    }, 200);
  } else {
    cakeInstruction.textContent = `${remaining} candle${remaining > 1 ? "s" : ""} left — keep wishing!`;
  }
}

candles.forEach((candle) => {
  candle.addEventListener("click", () => extinguishCandle(candle));
});

blowAllBtn.addEventListener("click", () => {
  candles.forEach((c, idx) => {
    setTimeout(() => extinguishCandle(c), idx * 120);
  });
});

relightBtn.addEventListener("click", () => {
  candles.forEach((c) => c.classList.remove("blown"));
  wishMessage.classList.remove("show");
  cakeInstruction.textContent = "Tap each candle to make a wish & celebrate ✨";
});

/* ==========================================================================
   3. POLAROID MEMORY GALLERY + LIGHTBOX
   ========================================================================== */
const galleryTrack = document.getElementById("gallery-track");
const galleryDotsContainer = document.getElementById("gallery-dots");
const prevGalleryBtn = document.getElementById("gallery-prev");
const nextGalleryBtn = document.getElementById("gallery-next");
const galleryViewport = document.getElementById("gallery-viewport");

let galleryIndex = 0;

function buildGallery() {
  galleryTrack.innerHTML = "";
  galleryDotsContainer.innerHTML = "";

  CONFIG.memories.forEach((mem, idx) => {
    const card = document.createElement("article");
    card.className = "polaroid";
    card.setAttribute("tabindex", "0");
    card.innerHTML = `
      <div class="polaroid-photo">
        <img src="${mem.image}" alt="${mem.caption}" loading="lazy" />
      </div>
      <p class="polaroid-caption">${mem.caption}</p>
      <span class="polaroid-date">${mem.date}</span>
    `;
    card.addEventListener("click", () => openLightbox(idx));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(idx);
      }
    });
    galleryTrack.appendChild(card);

    const dot = document.createElement("button");
    dot.className = "gallery-dot" + (idx === 0 ? " active" : "");
    dot.type = "button";
    dot.setAttribute("aria-label", `View memory ${idx + 1}`);
    dot.addEventListener("click", () => goToGallerySlide(idx));
    galleryDotsContainer.appendChild(dot);
  });
}

function getVisibleSlidesCount() {
  if (window.innerWidth <= 600) return 1;
  if (window.innerWidth <= 900) return 2;
  return 3;
}

function getMaxGalleryIndex() {
  return Math.max(0, CONFIG.memories.length - getVisibleSlidesCount());
}

function updateGalleryPosition() {
  const maxIdx = getMaxGalleryIndex();
  galleryIndex = Math.min(Math.max(0, galleryIndex), maxIdx);

  const firstCard = galleryTrack.querySelector(".polaroid");
  if (!firstCard) return;
  const gap = 28;
  const step = firstCard.getBoundingClientRect().width + gap;
  galleryTrack.style.transform = `translateX(-${galleryIndex * step}px)`;

  prevGalleryBtn.disabled = galleryIndex === 0;
  nextGalleryBtn.disabled = galleryIndex >= maxIdx;

  const dots = Array.from(galleryDotsContainer.children);
  dots.forEach((d, i) => d.classList.toggle("active", i === galleryIndex));
}

function goToGallerySlide(idx) {
  galleryIndex = idx;
  updateGalleryPosition();
}

prevGalleryBtn.addEventListener("click", () => goToGallerySlide(galleryIndex - 1));
nextGalleryBtn.addEventListener("click", () => goToGallerySlide(galleryIndex + 1));
window.addEventListener("resize", updateGalleryPosition);

// Mobile Touch Swipe Support for Gallery
let touchStartX = 0;
galleryViewport.addEventListener(
  "touchstart",
  (e) => {
    touchStartX = e.changedTouches[0].screenX;
  },
  { passive: true }
);

galleryViewport.addEventListener(
  "touchend",
  (e) => {
    const delta = e.changedTouches[0].screenX - touchStartX;
    if (Math.abs(delta) > 45) {
      goToGallerySlide(delta < 0 ? galleryIndex + 1 : galleryIndex - 1);
    }
  },
  { passive: true }
);

buildGallery();
updateGalleryPosition();

// Lightbox Logic
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
const lightboxNote = document.getElementById("lightbox-note");
const lightboxClose = document.getElementById("lightbox-close");
const lightboxPrev = document.getElementById("lightbox-prev");
const lightboxNext = document.getElementById("lightbox-next");
let lightboxIndex = 0;

function openLightbox(idx) {
  lightboxIndex = idx;
  renderLightbox();
  lightbox.classList.add("open");
}

function renderLightbox() {
  const mem = CONFIG.memories[lightboxIndex];
  lightboxImg.src = mem.image;
  lightboxImg.alt = mem.caption;
  lightboxCaption.textContent = mem.caption;
  lightboxNote.textContent = `${mem.date} — ${mem.note}`;
}

function closeLightbox() {
  lightbox.classList.remove("open");
}

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

lightboxPrev.addEventListener("click", () => {
  lightboxIndex = (lightboxIndex - 1 + CONFIG.memories.length) % CONFIG.memories.length;
  renderLightbox();
});

lightboxNext.addEventListener("click", () => {
  lightboxIndex = (lightboxIndex + 1) % CONFIG.memories.length;
  renderLightbox();
});

document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") lightboxPrev.click();
  if (e.key === "ArrowRight") lightboxNext.click();
});

/* ==========================================================================
   4. INTERACTIVE SCROLLING TIMELINE
   ========================================================================== */
const timelineItemsEl = document.getElementById("timeline-items");
const timelineWrap = document.getElementById("timeline-wrap");
const timelineProgress = document.getElementById("timeline-progress");

CONFIG.timeline.forEach((item) => {
  const el = document.createElement("div");
  el.className = "timeline-item reveal";
  el.innerHTML = `
    <div class="timeline-node" aria-hidden="true"></div>
    <div class="timeline-card" tabindex="0" role="button" aria-expanded="false">
      <span class="timeline-date">${item.date}</span>
      <h3 class="timeline-title">${item.title}</h3>
      <p class="timeline-text">${item.text}</p>
      <p class="timeline-secret">“${item.secretNote}”</p>
      <span class="timeline-hint">Tap to read hidden note &#8595;</span>
    </div>
  `;

  const card = el.querySelector(".timeline-card");
  const hint = el.querySelector(".timeline-hint");
  const toggleExpand = () => {
    const expanded = card.classList.toggle("expanded");
    card.setAttribute("aria-expanded", String(expanded));
    hint.textContent = expanded ? "Tap to tuck away ↑" : "Tap to read hidden note ↓";
  };

  card.addEventListener("click", toggleExpand);
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleExpand();
    }
  });

  timelineItemsEl.appendChild(el);
});

function updateTimelineProgress() {
  const rect = timelineWrap.getBoundingClientRect();
  const windowH = window.innerHeight;
  const total = rect.height;
  const passed = windowH * 0.55 - rect.top;
  const pct = Math.max(0, Math.min(100, (passed / total) * 100));
  timelineProgress.style.height = `${pct}%`;
}
window.addEventListener("scroll", updateTimelineProgress, { passive: true });

/* ==========================================================================
   5. HEARTFELT LETTER (TYPING ANIMATION + INSTANT REVEAL)
   ========================================================================== */
const typedLetterEl = document.getElementById("typed-letter");
const typingCursor = document.getElementById("typing-cursor");
const letterSignatureEl = document.getElementById("letter-signature");
const revealLetterBtn = document.getElementById("reveal-letter-btn");
const replayLetterBtn = document.getElementById("replay-letter-btn");

let typingTimeout = null;
let charIndex = 0;
let typingStarted = false;
let typingFinished = false;

function startTypingLetter() {
  if (typingStarted) return;
  typingStarted = true;
  typeNextChar();
}

function typeNextChar() {
  if (typingFinished) return;
  const fullText = CONFIG.letterText;

  if (charIndex < fullText.length) {
    const ch = fullText[charIndex];
    typedLetterEl.textContent += ch;
    charIndex++;

    let delay = 26 + Math.random() * 18;
    if (ch === "," || ch === "—") delay = 140;
    if (ch === "." || ch === "\n") delay = 240;

    typingTimeout = setTimeout(typeNextChar, delay);
  } else {
    finishTypingLetter();
  }
}

function finishTypingLetter() {
  clearTimeout(typingTimeout);
  typingFinished = true;
  typedLetterEl.textContent = CONFIG.letterText;
  typingCursor.classList.add("done");
  letterSignatureEl.classList.add("visible");
  revealLetterBtn.style.display = "none";
}

function resetLetterState() {
  clearTimeout(typingTimeout);
  typingFinished = false;
  typingStarted = false;
  charIndex = 0;
  typedLetterEl.textContent = "";
  typingCursor.classList.remove("done");
  letterSignatureEl.classList.remove("visible");
  revealLetterBtn.style.display = "inline-flex";
}

function replayLetter() {
  resetLetterState();
  startTypingLetter();
}

revealLetterBtn.addEventListener("click", finishTypingLetter);
replayLetterBtn.addEventListener("click", replayLetter);

/* ==========================================================================
   6. FINAL SCREEN (FLOATING HEARTS, STARS & PASTEL CONFETTI)
   ========================================================================== */
const finaleCanvas = document.getElementById("finale-canvas");
const fCtx = finaleCanvas.getContext("2d");
const celebrateMoreBtn = document.getElementById("celebrate-more-btn");
const replayAllBtn = document.getElementById("replay-all-btn");

let finaleParticles = [];

function resizeFinaleCanvas() {
  const finaleSection = document.getElementById("finale");
  finaleCanvas.width = finaleSection.offsetWidth;
  finaleCanvas.height = finaleSection.offsetHeight;
}
window.addEventListener("resize", resizeFinaleCanvas);
resizeFinaleCanvas();

function initFinaleParticles() {
  finaleParticles = [];
  const types = ["heart", "star", "confetti"];
  for (let i = 0; i < 42; i++) {
    finaleParticles.push(createFinaleParticle(true, types[i % types.length]));
  }
}

function createFinaleParticle(randomY = false, forcedType = null) {
  const types = ["heart", "star", "confetti"];
  const type = forcedType || types[Math.floor(Math.random() * types.length)];
  return {
    x: Math.random() * finaleCanvas.width,
    y: randomY ? Math.random() * finaleCanvas.height : finaleCanvas.height + 20,
    size: 6 + Math.random() * 10,
    speedY: 0.45 + Math.random() * 0.9,
    swayOffset: Math.random() * Math.PI * 2,
    swaySpeed: 0.015 + Math.random() * 0.02,
    alpha: 0.35 + Math.random() * 0.55,
    rotation: Math.random() * Math.PI * 2,
    color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
    type
  };
}

function drawHeart(ctx, x, y, size) {
  ctx.beginPath();
  const topCurveHeight = size * 0.3;
  ctx.moveTo(x, y + topCurveHeight);
  ctx.bezierCurveTo(x, y, x - size / 2, y, x - size / 2, y + topCurveHeight);
  ctx.bezierCurveTo(
    x - size / 2,
    y + (size + topCurveHeight) / 2,
    x,
    y + (size + topCurveHeight) / 1.2,
    x,
    y + size
  );
  ctx.bezierCurveTo(
    x,
    y + (size + topCurveHeight) / 1.2,
    x + size / 2,
    y + (size + topCurveHeight) / 2,
    x + size / 2,
    y + topCurveHeight
  );
  ctx.bezierCurveTo(x + size / 2, y, x, y, x, y + topCurveHeight);
  ctx.closePath();
  ctx.fill();
}

function drawSparkleStar(ctx, x, y, r) {
  ctx.beginPath();
  for (let i = 0; i < 4; i++) {
    const angle = (i * Math.PI) / 2;
    ctx.lineTo(x + Math.cos(angle) * r, y + Math.sin(angle) * r);
    ctx.lineTo(
      x + Math.cos(angle + Math.PI / 4) * (r * 0.35),
      y + Math.sin(angle + Math.PI / 4) * (r * 0.35)
    );
  }
  ctx.closePath();
  ctx.fill();
}

function animateFinale() {
  fCtx.clearRect(0, 0, finaleCanvas.width, finaleCanvas.height);

  for (let i = 0; i < finaleParticles.length; i++) {
    const p = finaleParticles[i];
    p.y -= p.speedY;
    p.swayOffset += p.swaySpeed;
    p.x += Math.sin(p.swayOffset) * 0.5;
    p.rotation += 0.01;

    if (p.y < -30) {
      finaleParticles[i] = createFinaleParticle(false, p.type);
      continue;
    }

    fCtx.save();
    fCtx.globalAlpha = p.alpha;
    fCtx.fillStyle = p.color;

    if (p.type === "heart") {
      drawHeart(fCtx, p.x, p.y, p.size);
    } else if (p.type === "star") {
      drawSparkleStar(fCtx, p.x, p.y, p.size * 0.75);
    } else {
      fCtx.translate(p.x, p.y);
      fCtx.rotate(p.rotation);
      fCtx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size * 0.5);
    }
    fCtx.restore();
  }

  requestAnimationFrame(animateFinale);
}

initFinaleParticles();
animateFinale();

celebrateMoreBtn.addEventListener("click", () => {
  launchConfetti(window.innerWidth * 0.3, window.innerHeight * 0.6, 75);
  launchConfetti(window.innerWidth * 0.7, window.innerHeight * 0.6, 75);
});

replayAllBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  setTimeout(() => {
    hasOpened = false;
    envelopeBtn.classList.remove("is-open");
    openingScreen.classList.remove("hidden");
    document.body.classList.add("locked");
    mainExperience.classList.remove("revealed");
    sectionDotsNav.classList.remove("visible");
    musicToggleBtn.classList.remove("visible");
    relightBtn.click();
    resetLetterState();
  }, 450);
});

/* ==========================================================================
   SCROLL REVEAL, LETTER TRIGGER & SECTION NAVIGATION DOTS
   ========================================================================== */
function observeReveals() {
  if (revealsInitialized) return;
  revealsInitialized = true;

  const reveals = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    },
    { threshold: 0.14 }
  );
  reveals.forEach((el) => revealObserver.observe(el));

  // Auto-start letter typing whenever letter section enters viewport
  const letterSection = document.getElementById("letter");
  const letterObserver = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && hasOpened && !typingStarted && !typingFinished) {
        startTypingLetter();
      }
    },
    { threshold: 0.3 }
  );
  letterObserver.observe(letterSection);

  // Update side navigation dots on scroll
  const sections = ["celebration", "gallery", "timeline", "letter", "finale"];
  const dotButtons = Array.from(document.querySelectorAll(".section-dot"));

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          dotButtons.forEach((btn) => btn.classList.toggle("active", btn.dataset.target === id));
        }
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach((id) => {
    const sec = document.getElementById(id);
    if (sec) navObserver.observe(sec);
  });

  dotButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = document.getElementById(btn.dataset.target);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });
}