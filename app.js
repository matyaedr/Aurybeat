(() => {
  "use strict";
  const root = document.documentElement;
  const body = document.body;
  const accent = () => getComputedStyle(root).getPropertyValue("--accent").trim();
  const mouse = { x: innerWidth / 2, y: innerHeight / 2, tx: innerWidth / 2, ty: innerHeight / 2 };
  const isTouch = matchMedia("(pointer: coarse)").matches;
  const qs = (selector, scope = document) => scope.querySelector(selector);
  const qsa = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const translations = {
    en: {
      nav: { sound: "Soundcheck", services: "Services", process: "Process" },
      hero: { eyebrow: "MIX / MASTER / AURA <span class=\"eyebrow__line\"></span> 2024—25", copy: "Sound that defines your aura.<br><strong>Professional Mix & Master.</strong>", cta: "Upgrade your sound", scroll: "SCROLL TO LISTEN", sideNote: "MAKE IT HIT <span>✳</span> MAKE IT LAST" },
      sections: { philosophy: "01 / PHILOSOPHY", sound: "02 / SOUND LAB", packages: "03 / PACKAGES", workflow: "04 / WORKFLOW" },
      philosophy: { title: "Every track has its <em>own universe.</em> We give it room to shine.", body: "From the first transient to the final decibel. We mix emotion and master impact. No presets on autopilot. Just precision, taste and a vibe that stays with you." },
      sound: { comparison: "A/B COMPARISON <span class=\"pulse-dot\"></span>", title: "Hear the <em>difference.</em>", master: "4aury4 MASTER", raw: "Not mixed", auraMode: "AURA MODE", rawSignal: "RAW SIGNAL", loudness: "LOUDNESS", clarity: "CLARITY", width: "STEREO WIDTH", rawFooter: "RAW MIX <b>—14 LUFS</b>", masterFooter: "MASTERED <b>—7 LUFS</b>", turnItUp: "TURN IT UP", loading: "LOADING FILES…", masterReady: "MASTERED — READY", rawReady: "NOT MIXED — READY", masterEnd: "MASTERED — PLAYBACK ENDED", rawEnd: "NOT MIXED — PLAYBACK ENDED", playHint: "Click to play" },
      services: {
        noGeneric: "NO GENERIC SOUND <span class=\"accent\">✳</span>", title: "Shape your <em>signal.</em>", intro: "From a clean vocal to a full-stems sound. Choose the workflow that fits your track.",
        vocal: { tag: "FOR VOCALISTS", title: "Vocal Mix<br><em>2-Track</em>", description: "Your voice forward, centered and exactly where it belongs.", item1: "Vocal tuning & cleanup", item2: "Analog saturation", item3: "Spatial depth", price: "from 1 500 CZK" },
        full: { tag: "MOST POPULAR", title: "Full Stems<br><em>Mix & Master</em>", description: "Complete sonic alchemy. Every stem gets its moment.", item1: "Detailed mix of every stem", item2: "Punch & clarity processing", item3: "Spotify / Apple Music ready", price: "from 3 500 CZK" },
        master: { tag: "FOR FINALS", title: "Mastering<br><em>Only</em>", description: "The final layer that turns your finished mix into a release.", item1: "Analog glue & color", item2: "—14 / —9 LUFS delivery", item3: "High-resolution export", price: "from 900 CZK" }
      },
      process: {
        title: "Simple process.<br><em>Serious results.</em>", step1: { label: "DROP YOUR TRACK", title: "Send stems<br>via <em>DM.</em>", body: "Find us at <a href=\"https://www.instagram.com/4aury4/\" target=\"_blank\" rel=\"noreferrer\">@4aury4</a>. Tell us what your music needs." }, step2: { label: "WE GET TO WORK", title: "Sonic alchemy<br>in the <em>studio.</em>", body: "Hear your first rough mix within 48 hours. Communication without bottlenecks." }, step3: { label: "MAKE IT YOURS", title: "Final revisions<br>&amp; <em>export.</em>", body: "We dial in the final details and send you a release-ready master." }
      },
      cta: { label: "READY TO UPGRADE YOUR SOUND?", footer1: "NOISE IN / AURA OUT", footer2: "LET'S MAKE IT HIT." },
      piano: { input: "STUDIO INPUT / UPPER ROW", compatible: "QWERTY / QWERTZ COMPATIBLE", hold: "HOLD TO PLAY <b>●</b>", show: "[ OPEN SYNTH ]", hide: "[ HIDE SYNTH ]", on: "ON", muted: "MUTED" },
      overdrive: { title: "4AURY4 OVERDRIVE", body: "Write this code in your DM for 10% off your first mix." },
      common: { book: "BOOK <span>↗</span>", close: "CLOSE ×", booting: "BOOTING AURA" }
    },
    cz: {
      nav: { sound: "Soundcheck", services: "Služby", process: "Proces" },
      hero: { eyebrow: "MIX / MASTER / AURA <span class=\"eyebrow__line\"></span> 2024—25", copy: "Zvuk, který definuje tvou auru.<br><strong>Profesionální Mix & Master.</strong>", cta: "Upgraduj svůj sound", scroll: "POSLOUCHEJ DÁL", sideNote: "AŤ TO HITY <span>✳</span> AŤ TO TRVÁ" },
      sections: { philosophy: "01 / FILOZOFIE", sound: "02 / SOUND LAB", packages: "03 / BALÍČKY", workflow: "04 / PROCES" },
      philosophy: { title: "Každý track má svůj <em>vlastní vesmír.</em> My mu dáme prostor zazářit.", body: "Od prvního transientu po poslední decibel. Mixujeme emoci, masterujeme dopad. Žádné presety na autopilota. Jen přesná práce, dobrý vkus a vibe, který zůstane v hlavě." },
      sound: { comparison: "A/B POROVNÁNÍ <span class=\"pulse-dot\"></span>", title: "Slyšíš ten <em>rozdíl.</em>", master: "4aury4 MASTER", raw: "Not mixed", auraMode: "AURA MODE", rawSignal: "RAW SIGNÁL", loudness: "HLASITOST", clarity: "ČISTOTA", width: "STEREO ŠÍŘKA", rawFooter: "RAW MIX <b>—14 LUFS</b>", masterFooter: "MASTERED <b>—7 LUFS</b>", turnItUp: "PŘIDEJ", loading: "NAČÍTÁM SOUBORY…", masterReady: "MASTERED — PŘIPRAVENO", rawReady: "NOT MIXED — PŘIPRAVENO", masterEnd: "MASTERED — KONEC", rawEnd: "NOT MIXED — KONEC", playHint: "Klikni pro přehrání" },
      services: {
        noGeneric: "ŽÁDNÝ GENERICKÝ SOUND <span class=\"accent\">✳</span>", title: "Tvaruj svůj <em>signál.</em>", intro: "Od čistého vokálu po full-stems sound. Vyber si workflow, který sedí tvému tracku.",
        vocal: { tag: "PRO VOKALISTY", title: "Vocal Mix<br><em>2-Track</em>", description: "Tvůj hlas vpředu, v centru a přesně tam, kde má být.", item1: "Vocal tuning & cleanup", item2: "Analogová saturace", item3: "Prostorová hloubka", price: "od 1 500 Kč" },
        full: { tag: "NEJOBLÍBENĚJŠÍ", title: "Full Stems<br><em>Mix & Master</em>", description: "Kompletní sonic alchymie. Každý stem dostane svůj moment.", item1: "Detailní mix všech stems", item2: "Punch & clarity processing", item3: "Spotify / Apple Music ready", price: "od 3 500 Kč" },
        master: { tag: "PRO FINÁLE", title: "Mastering<br><em>Only</em>", description: "Finální vrstva, která tvůj hotový mix promění v release.", item1: "Analogové glue & color", item2: "—14 / —9 LUFS delivery", item3: "High-resolution export", price: "od 900 Kč" }
      },
      process: {
        title: "Jednoduchý proces.<br><em>Seriózní výsledky.</em>", step1: { label: "POŠLI TRACK", title: "Pošleš stems<br>do <em>DM.</em>", body: "Najdeš nás na <a href=\"https://www.instagram.com/4aury4/\" target=\"_blank\" rel=\"noreferrer\">@4aury4</a>. Napiš, co tvoje hudba potřebuje." }, step2: { label: "JDEME NA TO", title: "Sonic alchymie<br>ve <em>studiu.</em>", body: "První rough mix uslyšíš do 48 hodin. Komunikace bez bottlenecku." }, step3: { label: "DOLAĎ TO", title: "Finální revize<br>a <em>export.</em>", body: "Doladíme poslední detaily a pošleme ti release-ready master." }
      },
      cta: { label: "PŘIPRAVEN UPGRADEOVAT SOUND?", footer1: "NOISE IN / AURA OUT", footer2: "AŤ TO HITY." },
      piano: { input: "STUDIO INPUT / HORNÍ ŘADA", compatible: "KOMPATIBILNÍ S QWERTY / QWERTZ", hold: "DRŽ PRO HRANÍ <b>●</b>", show: "[ VYSUNOUT SYNTH ]", hide: "[ SCHOVAT SYNTH ]", on: "ZAP", muted: "ZTLUMENO" },
      overdrive: { title: "4AURY4 OVERDRIVE", body: "Napiš tenhle kód do DM pro 10% slevu na první mix." },
      common: { book: "BOOK <span>↗</span>", close: "ZAVŘÍT ×", booting: "NAČÍTÁM AURU" }
    }
  };
  let currentLang = localStorage.getItem("4aury4-lang") || "en";
  const translate = (key) => key.split(".").reduce((value, part) => value && value[part], translations[currentLang]) || key;
  const applyLanguage = (language, animate = true) => {
    currentLang = language === "cz" ? "cz" : "en";
    const apply = () => {
      qsa("[data-i18n]").forEach((element) => { element.textContent = translate(element.dataset.i18n); });
      qsa("[data-i18n-html]").forEach((element) => { element.innerHTML = translate(element.dataset.i18nHtml); });
      qsa(".language-switcher button").forEach((button) => button.classList.toggle("is-active", button.dataset.lang === currentLang));
      document.documentElement.lang = currentLang === "cz" ? "cs" : "en";
      qs('meta[name="description"]').content = currentLang === "cz" ? "4aury4 — profesionální Mix & Master pro hudbu, která má vlastní auru." : "4aury4 — professional Mix & Master for music with its own aura.";
      localStorage.setItem("4aury4-lang", currentLang);
      updateDynamicLanguage();
    };
    if (!animate) { apply(); return; }
    body.classList.add("i18n-transition");
    setTimeout(() => { apply(); setTimeout(() => body.classList.remove("i18n-transition"), 130); }, 125);
  };
  const updateDynamicLanguage = () => {
    if (typeof syncMixToggleLabels === "function") syncMixToggleLabels(currentAudio.dataset.mode);
    if (typeof setPianoOpen === "function") setPianoOpen(pianoOpen);
    if (typeof syncAudioStatus === "function") syncAudioStatus();
  };
  qsa(".language-switcher button").forEach((button) => button.addEventListener("click", () => applyLanguage(button.dataset.lang)));

  const preloader = qs(".preloader");
  const dbReadout = qs(".preloader__db");
  const meter = qs(".preloader__meter span");
  let db = -Infinity;
  const loading = setInterval(() => {
    db = db === -Infinity ? -36 : Math.min(0, db + 4);
    dbReadout.textContent = db === -Infinity ? "-∞" : `${db.toFixed(1)}`;
    meter.style.width = `${Math.min(100, ((db + 36) / 36) * 100)}%`;
    if (db >= 0) {
      clearInterval(loading);
      setTimeout(() => preloader.classList.add("is-hidden"), 300);
    }
  }, 38);

  const dot = qs(".cursor--dot");
  const ring = qs(".cursor--ring");
  addEventListener("pointermove", (event) => {
    mouse.tx = event.clientX;
    mouse.ty = event.clientY;
    qs(".aura-glow").style.transform = `translate(${event.clientX - 160}px, ${event.clientY - 160}px)`;
  });
  const cursorLoop = () => {
    mouse.x += (mouse.tx - mouse.x) * .18;
    mouse.y += (mouse.ty - mouse.y) * .1;
    dot.style.left = `${mouse.tx}px`;
    dot.style.top = `${mouse.ty}px`;
    ring.style.left = `${mouse.x}px`;
    ring.style.top = `${mouse.y}px`;
    requestAnimationFrame(cursorLoop);
  };
  cursorLoop();
  qsa("a, button, .tilt-card, .mix-toggle").forEach((element) => {
    element.addEventListener("mouseenter", () => ring.classList.add("is-hover"));
    element.addEventListener("mouseleave", () => ring.classList.remove("is-hover"));
  });

  const canvas = qs("#hero-canvas");
  const ctx = canvas.getContext("2d");
  const resizeCanvas = () => {
    const ratio = Math.min(devicePixelRatio, 2);
    canvas.width = innerWidth * ratio;
    canvas.height = innerHeight * ratio;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  };
  resizeCanvas();
  addEventListener("resize", resizeCanvas);
  let waveTime = 0;
  let pianoPulse = 0;
  const drawHero = () => {
    const width = innerWidth;
    const height = innerHeight;
    ctx.clearRect(0, 0, width, height);
    waveTime += .008;
    const center = height * .51;
    const mouseInfluence = (mouse.tx / width - .5) * 65;
    for (let layer = 0; layer < 5; layer += 1) {
      ctx.beginPath();
      for (let x = -10; x <= width + 10; x += 7) {
        const y = center + Math.sin(x * .008 + waveTime * (1 + layer * .16)) * (22 + layer * 8) + Math.sin(x * .021 - waveTime * 1.4) * 15 + mouseInfluence * Math.sin(x * .003 + layer) + pianoPulse * Math.sin(x * .012 + layer) * (layer === 2 ? 38 : 12) + layer * 5;
        x === -10 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.strokeStyle = `rgba(${layer === 2 ? "190,155,255" : "255,255,255"},${.08 - layer * .009})`;
      ctx.lineWidth = layer === 2 ? 1.5 : 1;
      ctx.stroke();
    }
    pianoPulse *= .94;
    requestAnimationFrame(drawHero);
  };
  drawHero();

  const visualizer = qs("#visualizer-canvas");
  const visualCtx = visualizer.getContext("2d");
  let mastered = false;
  const particleField = Array.from({ length: 1150 }, (_, index) => ({
    seed: index * 1.731,
    depth: (index % 100) / 100,
    drift: .35 + (index % 7) * .08
  }));
  const resizeVisualizer = () => {
    const rect = visualizer.getBoundingClientRect();
    const ratio = Math.min(devicePixelRatio, 2);
    visualizer.width = rect.width * ratio;
    visualizer.height = rect.height * ratio;
    visualCtx.setTransform(ratio, 0, 0, ratio, 0, 0);
  };
  resizeVisualizer();
  addEventListener("resize", resizeVisualizer);

  /* ---------- Reálné audio soubory ze složky /mix ---------- */
  const audioRaw = qs("#audio-raw");
  const audioMaster = qs("#audio-master");
  const statusText = qs(".status-text");
  const playBtn = qs(".visualizer__play");
  const playIcon = qs(".visualizer__play span");
  const timeDisplay = qs(".visualizer__time");

  let audioContext;
  let analyser;
  let gainNode;
  let sourceRaw;
  let sourceMaster;
  let currentAudio = audioRaw;
  let isPlaying = false;

  const formatTime = (seconds) => {
    if (!seconds || !isFinite(seconds)) return "00:00";
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  const syncTime = () => {
    timeDisplay.textContent = `${formatTime(currentAudio.currentTime)} / ${formatTime(currentAudio.duration)}`;
  };

  const setStatus = (text) => {
    statusText.textContent = text;
  };
  const syncAudioStatus = () => {
    if (!currentAudio) return;
    setStatus(currentAudio.dataset.mode === "master" ? translate("sound.masterReady") : translate("sound.rawReady"));
  };

  const ensureContext = () => {
    if (!audioContext) {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
      gainNode = audioContext.createGain();
      gainNode.gain.value = 0.75;
      analyser = audioContext.createAnalyser();
      analyser.fftSize = 2048;
      gainNode.connect(analyser).connect(audioContext.destination);
      sourceRaw = audioContext.createMediaElementSource(audioRaw);
      sourceMaster = audioContext.createMediaElementSource(audioMaster);
    }
    if (audioContext.state === "suspended") audioContext.resume();
    return audioContext;
  };

  const bindAudio = (el) => {
    el.addEventListener("loadedmetadata", syncTime);
    el.addEventListener("timeupdate", syncTime);
    el.addEventListener("ended", () => {
      isPlaying = false;
      playIcon.textContent = "▶";
      setStatus(el.dataset.mode === "master" ? translate("sound.masterEnd") : translate("sound.rawEnd"));
    });
  };
  bindAudio(audioRaw);
  bindAudio(audioMaster);

  const switchTrack = (el) => {
    sourceRaw.disconnect();
    sourceMaster.disconnect();
    currentAudio = el;
    (el === audioMaster ? sourceMaster : sourceRaw).connect(gainNode);
    syncTime();
    setStatus(el.dataset.mode === "master" ? translate("sound.masterReady") : translate("sound.rawReady"));
  };

  const togglePlay = () => {
    ensureContext();
    if (isPlaying) {
      currentAudio.pause();
      playIcon.textContent = "▶";
    } else {
      currentAudio.play().catch(() => setStatus(translate("sound.playHint")));
      playIcon.textContent = "⏸";
    }
    isPlaying = !isPlaying;
  };

  playBtn.addEventListener("click", togglePlay);
  ensureContext();
  switchTrack(audioRaw);

  const drawVisualizer = () => {
    const width = visualizer.clientWidth;
    const height = visualizer.clientHeight;
    visualCtx.clearRect(0, 0, width, height);
    const now = performance.now() * .001;
    const bars = 84;
    const gap = width / bars;
    const baseline = height * .57;
    let freqData;
    if (analyser && isPlaying) {
      freqData = new Uint8Array(analyser.frequencyBinCount);
      analyser.getByteFrequencyData(freqData);
    }
    const intensity = mastered ? 1 : .22;
    const spectrum = [];
    for (let i = 0; i < bars; i += 1) {
      const source = freqData ? freqData[Math.min(Math.floor((i / bars) * freqData.length * .7), freqData.length - 1)] / 255 : Math.abs(Math.sin(i * .29 + now * .9)) * .45;
      const harmonic = source * intensity + (1 - intensity) * .035;
      spectrum.push(harmonic);
      const barHeight = 7 + harmonic * height * (i < 18 ? .7 : .42);
      const gradient = visualCtx.createLinearGradient(0, baseline - barHeight, 0, baseline);
      gradient.addColorStop(0, mastered ? "rgba(208,137,255,.78)" : "rgba(145,145,157,.28)");
      gradient.addColorStop(1, mastered ? "rgba(105,61,178,.1)" : "rgba(100,100,110,.04)");
      visualCtx.fillStyle = gradient;
      visualCtx.fillRect(i * gap + 1, baseline - barHeight, Math.max(1, gap - 3), barHeight);
      visualCtx.fillStyle = mastered ? "rgba(231,189,255,.32)" : "rgba(160,160,170,.12)";
      visualCtx.fillRect(i * gap + 1, baseline + 5, Math.max(1, gap - 3), 1 + harmonic * 9);
    }
    visualCtx.save();
    visualCtx.globalCompositeOperation = "lighter";
    particleField.forEach((particle) => {
      const x = ((particle.seed * 37 + now * particle.drift * 15) % (width + 50)) - 25;
      const normalized = x / width;
      const frequencyIndex = Math.max(0, Math.min(spectrum.length - 1, Math.floor(normalized * spectrum.length)));
      const audioLift = spectrum[frequencyIndex] || 0;
      const wave = Math.sin(normalized * 18 + now * (mastered ? 1.6 : .24) + particle.seed) * (mastered ? 18 : 3);
      const envelope = Math.sin(normalized * Math.PI) * (mastered ? 37 : 8);
      const y = baseline - 21 + wave + (particle.depth - .5) * 18 - envelope * Math.sin(particle.seed * .2 + now * .65) + audioLift * -height * .13;
      const size = .45 + particle.depth * (mastered ? 1.35 : .7);
      visualCtx.beginPath();
      visualCtx.arc(x, y, size, 0, Math.PI * 2);
      visualCtx.fillStyle = mastered
        ? `rgba(${particle.depth > .62 ? "238,137,255" : "175,130,255"},${.12 + particle.depth * .65})`
        : `rgba(160,160,175,${.08 + particle.depth * .16})`;
      visualCtx.fill();
    });
    if (mastered) {
      visualCtx.filter = "blur(7px)";
      visualCtx.strokeStyle = "rgba(194,88,255,.24)";
      visualCtx.lineWidth = 5;
      visualCtx.beginPath();
      for (let x = 0; x <= width; x += 6) {
        const normalized = x / width;
        const y = baseline - 21 + Math.sin(normalized * 18 + now * 1.6) * 18 - Math.sin(normalized * Math.PI) * 37 * Math.sin(normalized * 5 + now * .65);
        x === 0 ? visualCtx.moveTo(x, y) : visualCtx.lineTo(x, y);
      }
      visualCtx.stroke();
    }
    visualCtx.restore();
    requestAnimationFrame(drawVisualizer);
  };
  drawVisualizer();
  const syncMixToggleLabels = (activeMode) => {
    qsa(".mix-toggle").forEach((item) => {
      const isActive = item.dataset.mode === activeMode;
      item.classList.toggle("is-active", isActive);
      const stateKey = item.dataset.mode === "master" ? "sound.auraMode" : "sound.rawSignal";
      qs("strong", item).innerHTML = `${translate(stateKey)} <i></i>`;
    });
  };
  const syncClarityIndicator = (isMastered) => {
    qsa(".telemetry--clarity .telemetry-leds b").forEach((led, index) => {
      led.classList.toggle("is-lit", index < (isMastered ? 9 : 4));
    });
  };
  qsa(".mix-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const wantMastered = button.dataset.mode === "master";
      mastered = wantMastered;
      syncMixToggleLabels(button.dataset.mode);
      qs(".lufs").innerHTML = mastered ? "-7.0 <small>LUFS</small>" : "-14.0 <small>LUFS</small>";
      qs(".clarity").innerHTML = mastered ? "94<small>%</small>" : "42<small>%</small>";
      qs(".width").innerHTML = mastered ? "138<small>%</small>" : "76<small>%</small>";
      qsa(".stat-bar b").forEach((bar, index) => bar.style.width = `${mastered ? [92, 94, 88][index] : [48, 42, 57][index]}%`);
      syncClarityIndicator(mastered);
      const target = wantMastered ? audioMaster : audioRaw;
      if (target !== currentAudio) {
        const wasPlaying = isPlaying;
        if (isPlaying) {
          currentAudio.pause();
          playIcon.textContent = "▶";
          isPlaying = false;
        }
        switchTrack(target);
        if (wasPlaying) {
          target.play();
          playIcon.textContent = "⏸";
          isPlaying = true;
        }
      }
    });
  });
  syncMixToggleLabels(currentAudio.dataset.mode);
  syncClarityIndicator(mastered);

  const initMotion = () => {
    if (typeof gsap === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);
    if (typeof Lenis !== "undefined") {
      const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    }
    gsap.from(".hero__title-line span", { yPercent: 120, opacity: 0, filter: "blur(14px)", duration: 1.2, stagger: .08, ease: "power4.out", delay: .4 });
    gsap.from(".hero .reveal", { y: 24, opacity: 0, duration: .8, stagger: .12, ease: "power3.out", delay: .9 });
    qsa(".split-text").forEach((element) => {
      gsap.from(element, { scrollTrigger: { trigger: element, start: "top 82%" }, y: 45, opacity: 0, filter: "blur(8px)", duration: 1, ease: "power3.out" });
    });
    qsa(".service-card, .step").forEach((element) => gsap.from(element, { scrollTrigger: { trigger: element, start: "top 85%" }, y: 45, opacity: 0, duration: .8, ease: "power3.out" }));
  };
  initMotion();

  qsa(".tilt-card").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      card.style.transform = `perspective(900px) rotateX(${(y / rect.height - .5) * -5}deg) rotateY(${(x / rect.width - .5) * 5}deg)`;
      const glow = qs(".card-glow", card);
      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;
    });
    card.addEventListener("pointerleave", () => { card.style.transform = ""; });
  });

  const ensureAudio = () => {
    audioContext = audioContext || new (window.AudioContext || window.webkitAudioContext)();
    if (audioContext.state === "suspended") audioContext.resume();
    return audioContext;
  };
  const pianoNotes = {
    KeyQ: { name: "C5", frequency: 523.25 },
    KeyW: { name: "D5", frequency: 587.33 },
    KeyE: { name: "E5", frequency: 659.25 },
    KeyR: { name: "F5", frequency: 698.46 },
    KeyT: { name: "G5", frequency: 783.99 },
    KeyY: { name: "A5", frequency: 880.00 },
    KeyZ: { name: "A5", frequency: 880.00 },
    KeyU: { name: "B5", frequency: 987.77 },
    KeyI: { name: "C6", frequency: 1046.50 },
    KeyO: { name: "D6", frequency: 1174.66 },
    KeyP: { name: "E6", frequency: 1318.51 },
    Digit2: { name: "C#5", frequency: 554.37 },
    Digit3: { name: "D#5", frequency: 622.25 },
    Digit5: { name: "F#5", frequency: 739.99 },
    Digit6: { name: "G#5", frequency: 830.61 },
    Digit7: { name: "A#5", frequency: 932.33 },
    Digit9: { name: "C#6", frequency: 1108.73 },
    Digit0: { name: "D#6", frequency: 1244.51 }
  };
  const activeVoices = new Map();
  const pianoDock = qs(".piano-dock");
  const pianoTrigger = qs(".piano-dock__trigger");
  const pianoMute = qs(".piano-mute");
  const noteHud = qs(".note-hud");
  let pianoOpen = false;
  let pianoMuted = false;
  let noteHudTimer;
  let reverbInput;
  let reverbDelay;
  let reverbFeedback;
  let reverbWet;
  let synthBus;

  const setupPianoEngine = () => {
    const audio = ensureAudio();
    if (synthBus) return audio;
    synthBus = audio.createGain();
    synthBus.gain.value = .46;
    reverbInput = audio.createGain();
    reverbDelay = audio.createDelay(1.5);
    reverbFeedback = audio.createGain();
    reverbWet = audio.createGain();
    reverbDelay.delayTime.value = .34;
    reverbFeedback.gain.value = .34;
    reverbWet.gain.value = .28;
    synthBus.connect(gainNode);
    synthBus.connect(reverbInput);
    reverbInput.connect(reverbDelay);
    reverbDelay.connect(reverbFeedback);
    reverbFeedback.connect(reverbDelay);
    reverbDelay.connect(reverbWet);
    reverbWet.connect(gainNode);
    return audio;
  };
  const showNoteHud = (note) => {
    noteHud.textContent = `[ NOTE: ${note.name} | ${note.frequency.toFixed(1)} Hz ]`;
    noteHud.classList.add("is-visible");
    clearTimeout(noteHudTimer);
    noteHudTimer = setTimeout(() => noteHud.classList.remove("is-visible"), 900);
  };
  const setPianoKeyState = (code, active) => {
    qsa(`[data-code="${code}"]`).forEach((key) => key.classList.toggle("is-pressed", active));
  };
  const setPianoOpen = (open) => {
    pianoOpen = open;
    pianoDock.classList.toggle("is-open", open);
    pianoTrigger.setAttribute("aria-expanded", String(open));
    qs("b", pianoTrigger).textContent = open ? translate("piano.hide") : translate("piano.show");
    qs("strong", pianoTrigger).textContent = open ? "↓" : "↑";
  };
  pianoTrigger.addEventListener("click", () => setPianoOpen(!pianoOpen));
  const startPianoNote = (code) => {
    const note = pianoNotes[code];
    if (!note || pianoMuted || activeVoices.has(code)) return;
    const audio = setupPianoEngine();
    const now = audio.currentTime;
    const voice = {
      oscillatorA: audio.createOscillator(),
      oscillatorB: audio.createOscillator(),
      filter: audio.createBiquadFilter(),
      gain: audio.createGain()
    };
    voice.oscillatorA.type = "sawtooth";
    voice.oscillatorB.type = "triangle";
    voice.oscillatorA.frequency.setValueAtTime(note.frequency, now);
    voice.oscillatorB.frequency.setValueAtTime(note.frequency, now);
    voice.oscillatorA.detune.value = -5;
    voice.oscillatorB.detune.value = 5;
    voice.filter.type = "lowpass";
    voice.filter.Q.value = .7;
    voice.filter.frequency.setValueAtTime(720, now);
    voice.filter.frequency.exponentialRampToValueAtTime(3100, now + .08);
    voice.gain.gain.setValueAtTime(.001, now);
    voice.gain.gain.exponentialRampToValueAtTime(.16, now + .02);
    voice.gain.gain.exponentialRampToValueAtTime(.105, now + .18);
    voice.oscillatorA.connect(voice.filter);
    voice.oscillatorB.connect(voice.filter);
    voice.filter.connect(voice.gain).connect(synthBus);
    voice.oscillatorA.start(now);
    voice.oscillatorB.start(now);
    activeVoices.set(code, voice);
    setPianoKeyState(code, true);
    showNoteHud(note);
    pianoPulse = Math.min(2.2, pianoPulse + .72);
    qs(".aura-glow").classList.add("aura-flash");
    setTimeout(() => qs(".aura-glow").classList.remove("aura-flash"), 170);
  };
  const stopPianoNote = (code) => {
    const voice = activeVoices.get(code);
    if (!voice) return;
    const audio = ensureAudio();
    const now = audio.currentTime;
    voice.gain.gain.cancelScheduledValues(now);
    voice.gain.gain.setValueAtTime(Math.max(.001, voice.gain.gain.value), now);
    voice.gain.gain.exponentialRampToValueAtTime(.001, now + .8);
    voice.oscillatorA.stop(now + .85);
    voice.oscillatorB.stop(now + .85);
    activeVoices.delete(code);
    setPianoKeyState(code, false);
  };
  const togglePianoMute = () => {
    pianoMuted = !pianoMuted;
    pianoMute.classList.toggle("is-muted", pianoMuted);
    pianoMute.setAttribute("aria-pressed", String(pianoMuted));
    qs("b", pianoMute).textContent = pianoMuted ? translate("piano.muted") : translate("piano.on");
    if (pianoMuted) [...activeVoices.keys()].forEach(stopPianoNote);
  };
  pianoMute.addEventListener("click", togglePianoMute);
  addEventListener("keydown", (event) => {
    if (!pianoNotes[event.code] || event.repeat) return;
    const target = event.target;
    if (target instanceof HTMLElement && (target.matches("input, textarea, select, [contenteditable='true']") || target.closest("[contenteditable='true']"))) return;
    event.preventDefault();
    setPianoOpen(true);
    startPianoNote(event.code);
  });
  addEventListener("keyup", (event) => {
    if (pianoNotes[event.code]) stopPianoNote(event.code);
  });
  addEventListener("keydown", (event) => {
    if (event.code === "Escape" && pianoOpen) setPianoOpen(false);
  });
  qsa(".piano-key").forEach((key) => {
    const code = key.dataset.code;
    key.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      setPianoOpen(true);
      startPianoNote(code);
    });
    key.addEventListener("pointerup", () => stopPianoNote(code));
    key.addEventListener("pointerleave", () => stopPianoNote(code));
  });

  let logoClicks = [];
  qs(".js-logo").addEventListener("click", (event) => {
    event.preventDefault();
    logoClicks.push(Date.now());
    logoClicks = logoClicks.filter((stamp) => Date.now() - stamp < 900);
    if (logoClicks.length >= 4) activateOverdrive();
  });
  let knob = 0;
  const knobElement = qs(".overdrive-knob");
  knobElement.addEventListener("click", () => {
    knob += 1;
    knobElement.style.transform = `rotate(${knob * 90}deg)`;
    if (knob >= 4) activateOverdrive();
  });
  const activateOverdrive = () => {
    body.classList.add("overdrive");
    qs(".overdrive-toast").classList.add("is-visible");
    qs(".overdrive-toast button").focus();
  };
  qs(".overdrive-toast button").addEventListener("click", () => qs(".overdrive-toast").classList.remove("is-visible"));
  applyLanguage(currentLang, false);
  console.log("%c4 A U R Y 4%c\n\nYou found the hidden channel. Turn it up, keep it human.\nDM: https://www.instagram.com/4aury4/", "color:#9e7bff;font-size:24px;font-weight:bold", "color:#999;font-size:12px");
})();
