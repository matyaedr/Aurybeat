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
      nav: { sound: "Soundcheck", vocalLab: "Vocal Lab", services: "Services", process: "Process" },
      hero: { eyebrow: "MIX / MASTER / AURA <span class=\"eyebrow__line\"></span> 2024—25", copy: "Sound that defines your aura.<br><strong>Professional Mix & Master.</strong>", cta: "Upgrade your sound", scroll: "SCROLL TO LISTEN", sideNote: "MAKE IT HIT <span>✳</span> MAKE IT LAST" },
      sections: { philosophy: "01 / PHILOSOPHY", sound: "02 / SOUND LAB", vocalLab: "03 / VOCAL LAB", packages: "04 / PACKAGES", workflow: "05 / WORKFLOW" },
      philosophy: { title: "Every track has its <em>own universe.</em> We give it room to shine.", body: "From the first transient to the final decibel. We mix emotion and master impact. No presets on autopilot. Just precision, taste and a vibe that stays with you." },
      sound: { comparison: "A/B COMPARISON <span class=\"pulse-dot\"></span>", title: "Hear the <em>difference.</em>", master: "4aury4 MASTER", raw: "Not mixed", auraMode: "AURA MODE", rawSignal: "RAW SIGNAL", loudness: "LOUDNESS", clarity: "CLARITY", width: "STEREO WIDTH", rawFooter: "RAW MIX <b>—14 LUFS</b>", masterFooter: "MASTERED <b>—7 LUFS</b>", turnItUp: "TURN IT UP", loading: "LOADING FILES…", masterReady: "MASTERED — READY", rawReady: "NOT MIXED — READY", masterEnd: "MASTERED — PLAYBACK ENDED", rawEnd: "NOT MIXED — PLAYBACK ENDED", playHint: "Click to play" },
      services: {
        noGeneric: "NO GENERIC SOUND <span class=\"accent\">✳</span>", title: "Shape your <em>signal.</em>", intro: "From a clean vocal to a full-stems sound. Choose the workflow that fits your track.",
        vocal: { tag: "FOR VOCALISTS", title: "Vocal Mix<br><em>2-Track</em>", description: "Your voice forward, centered and exactly where it belongs.", item1: "Vocal tuning & cleanup", item2: "Analog saturation", item3: "Spatial depth", price: "from $65" },
        full: { tag: "MOST POPULAR", title: "Full Stems<br><em>Mix & Master</em>", description: "Complete sonic alchemy. Every stem gets its moment.", item1: "Detailed mix of every stem", item2: "Punch & clarity processing", item3: "Spotify / Apple Music ready", price: "from $150" },
        master: { tag: "FOR FINALS", title: "Mastering<br><em>Only</em>", description: "The final layer that turns your finished mix into a release.", item1: "Analog glue & color", item2: "—14 / —9 LUFS delivery", item3: "High-resolution export", price: "from $39" }
      },
      process: {
        title: "Simple process.<br><em>Serious results.</em>", step1: { label: "DROP YOUR TRACK", title: "Send stems<br>via <em>DM.</em>", body: "Find us at <a href=\"https://www.instagram.com/4aury4/\" target=\"_blank\" rel=\"noreferrer\">@4aury4</a>. Tell us what your music needs." }, step2: { label: "WE GET TO WORK", title: "Sonic alchemy<br>in the <em>studio.</em>", body: "Hear your first rough mix within 48 hours. Communication without bottlenecks." }, step3: { label: "MAKE IT YOURS", title: "Final revisions<br>&amp; <em>export.</em>", body: "We dial in the final details and send you a release-ready master." }
      },
      cta: { label: "READY TO UPGRADE YOUR SOUND?", footer1: "NOISE IN / AURA OUT", footer2: "LET'S MAKE IT HIT." },
      vocalLab: { heading: "FREE WEB MIXER <span class=\"pulse-dot\"></span>", eyebrow: "4AURY4 VOCAL LAB / LOCAL DSP", title: "Test your vocals.<br><em>Feel the aura.</em>", intro: "Drop a raw vocal or load the demo in your browser. Four studio effects, zero uploads.", rackTitle: "VOCAL FX RACK / CHANNEL 01", ready: "READY — LOCAL PROCESSING", dropTitle: "DROP YOUR RAW VOCAL", dropMeta: ".WAV / .MP3 — FILE STAYS IN YOUR BROWSER", browse: "OR CLICK TO BROWSE", demoTitle: "DEMO INPUT", loadDemo: "▶ LOAD DEMO VOCAL", demoLoading: "LOADING…", demoActive: "● DEMO VOCAL ACTIVE", demoError: "DEMO VOCAL UNAVAILABLE", demoHint: "LOAD THE 4AURY4 DEMO TO START PLAYING", loop: "LOOP", noFile: "NO VOCAL LOADED", signalChain: "SIGNAL CHAIN / DRY → FX → AURA BUS", masterBypass: "AURA CHAIN ON", masterDry: "DRY SIGNAL ONLY", saturation: "SATURATION", doubler: "VOCAL DOUBLER", delay: "STEREO DELAY", reverb: "AURA REVERB", bypass: "BYPASS", active: "ACTIVE", privacy: "LOCAL ONLY / YOUR AUDIO NEVER LEAVES THIS DEVICE", export: "↓ EXPORT PROCESSED WAV", exportEmpty: "LOAD OR DROP A VOCAL FIRST", exportBusy: "RENDERING AURA WAV…", hook: "Sounds good? This browser rack is just 10% of a real studio mix. Send your stems to @4aury4 for full vocal tuning, precision EQ, and industry-standard mastering.", hookCta: "SEND STEMS VIA IG DM", fileLoaded: "VOCAL READY — LOCAL BUFFER" },
      piano: { input: "STUDIO INPUT / UPPER ROW", compatible: "QWERTY / QWERTZ COMPATIBLE", hold: "HOLD TO PLAY <b>●</b>", show: "[ OPEN SYNTH ]", hide: "[ HIDE SYNTH ]", on: "ON", muted: "MUTED" },
      overdrive: { title: "4AURY4 OVERDRIVE", body: "Write this code in your DM for 10% off your first mix." },
      common: { book: "BOOK <span>↗</span>", close: "CLOSE ×", booting: "BOOTING AURA" }
    },
    cz: {
      nav: { sound: "Soundcheck", vocalLab: "Vocal Lab", services: "Služby", process: "Proces" },
      hero: { eyebrow: "MIX / MASTER / AURA <span class=\"eyebrow__line\"></span> 2024—25", copy: "Zvuk, který definuje tvou auru.<br><strong>Profesionální Mix & Master.</strong>", cta: "Upgraduj svůj sound", scroll: "POSLOUCHEJ DÁL", sideNote: "AŤ TO HITY <span>✳</span> AŤ TO TRVÁ" },
      sections: { philosophy: "01 / FILOZOFIE", sound: "02 / SOUND LAB", vocalLab: "03 / VOCAL LAB", packages: "04 / BALÍČKY", workflow: "05 / PROCES" },
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
      vocalLab: { heading: "FREE WEB MIXER <span class=\"pulse-dot\"></span>", eyebrow: "4AURY4 VOCAL LAB / LOKÁLNÍ DSP", title: "Otestuj svůj vokál.<br><em>Zažij tu auru.</em>", intro: "Přetáhni raw vokál nebo načti demo přímo v prohlížeči. Čtyři studiové efekty, žádný upload.", rackTitle: "VOCAL FX RACK / KANÁL 01", ready: "READY — LOKÁLNÍ PROCESSING", dropTitle: "PŘETÁHNI RAW VOKÁL", dropMeta: ".WAV / .MP3 — SOUBOR ZŮSTÁVÁ V PROHLÍŽEČI", browse: "NEBO KLIKNI PRO VÝBĚR", demoTitle: "DEMO VSTUP", loadDemo: "▶ NAČÍST DEMO VOKÁL", demoLoading: "NAČÍTÁM…", demoActive: "● DEMO VOKÁL AKTIVNÍ", demoError: "DEMO VOKÁL NENÍ DOSTUPNÝ", demoHint: "NAČTI 4AURY4 DEMO A ZAČNI PŘEHRÁVAT", loop: "LOOP", noFile: "NENÍ NAČTENÝ VOKÁL", signalChain: "SIGNAL CHAIN / DRY → FX → AURA BUS", masterBypass: "AURA CHAIN ZAP", masterDry: "JEN DRY SIGNÁL", saturation: "SATURACE", doubler: "VOCAL DOUBLER", delay: "STEREO DELAY", reverb: "AURA REVERB", bypass: "BYPASS", active: "AKTIVNÍ", privacy: "LOKÁLNĚ / TVŮJ AUDIO SOUBOR NIKDY NEOPUSTÍ ZAŘÍZENÍ", export: "↓ EXPORT PROCESSED WAV", exportEmpty: "NEJDŘÍV NAČTI NEBO PŘETÁHNI VOKÁL", exportBusy: "RENDERUJI AURA WAV…", hook: "Zní to dobře? Tenhle webový rack je jen 10 % skutečného studiového mixu. Pošli stems na @4aury4 pro precizní doladění intonace, dynamický EQ a světový master.", hookCta: "POŠLI STEMS DO IG DM", fileLoaded: "VOKÁL READY — LOKÁLNÍ BUFFER" },
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
    if (typeof window.syncVocalLabLanguage === "function") window.syncVocalLabLanguage();
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
  const setPlaybackState = (playing) => {
    isPlaying = playing;
    playIcon.textContent = playing ? "⏸" : "▶";
    playBtn.classList.toggle("is-playing", playing);
    playBtn.setAttribute("aria-pressed", String(playing));
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
      setPlaybackState(false);
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
      setPlaybackState(false);
    } else {
      currentAudio.play().then(() => {
        setPlaybackState(true);
      }).catch(() => {
        setPlaybackState(false);
        setStatus(translate("sound.playHint"));
      });
    }
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
          setPlaybackState(false);
        }
        switchTrack(target);
        if (wasPlaying) {
          target.play().then(() => setPlaybackState(true)).catch(() => {
            setPlaybackState(false);
            setStatus(translate("sound.playHint"));
          });
        }
      }
    });
  });
  syncMixToggleLabels(currentAudio.dataset.mode);
  syncClarityIndicator(mastered);

  const setupVocalLab = () => {
    const lab = qs("#vocal-lab");
    if (!lab) return;
    const fileInput = qs("#vocal-file-input", lab);
    const dropzone = qs(".vocal-dropzone", lab);
    const demoButton = qs("#vocal-demo-button", lab);
    const recordStatus = qs("#vocal-status", lab);
    const playButton = qs("#vocal-play-button", lab);
    const loopButton = qs("#vocal-loop-button", lab);
    const exportButton = qs("#vocal-export-button", lab);
    const masterBypassButton = qs("#vocal-master-bypass", lab);
    const fileName = qs("#vocal-file-name", lab);
    const time = qs("#vocal-time", lab);
    const waveform = qs("#vocal-waveform", lab);
    const waveformContext = waveform.getContext("2d");
    const fxCards = qsa(".vocal-fx", lab);
    const fxState = { saturation: 38, doubler: 46, delay: 24, reverb: 34 };
    const fxBypass = { saturation: false, doubler: false, delay: false, reverb: false };
    let vocalBuffer = null;
    let vocalSource = null;
    let vocalInput = null;
    let vocalAnalyser = null;
    let vocalPlaying = false;
    let vocalLoop = true;
    let vocalMasterBypass = false;
    let vocalStartTime = 0;
    let vocalPausedAt = 0;
    let vocalGraph = null;
    let knobDrag = null;
    let demoLoading = false;
    let demoActive = false;

    const vocalTranslate = (key) => translate(`vocalLab.${key}`);
    const vocalFormatTime = (seconds) => {
      if (!seconds || !isFinite(seconds)) return "00:00";
      return `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`;
    };
    const updateVocalTime = () => {
      const duration = vocalBuffer ? vocalBuffer.duration : 0;
      const elapsed = vocalPlaying ? (audioContext.currentTime - vocalStartTime) % Math.max(duration, .001) : vocalPausedAt;
      time.textContent = `${vocalFormatTime(Math.min(elapsed, duration))} / ${vocalFormatTime(duration)}`;
    };
    const createImpulse = (context) => {
      const length = Math.floor(context.sampleRate * 2.5);
      const impulse = context.createBuffer(2, length, context.sampleRate);
      for (let channel = 0; channel < impulse.numberOfChannels; channel += 1) {
        const data = impulse.getChannelData(channel);
        for (let index = 0; index < length; index += 1) {
          const preDelay = index < context.sampleRate * .035 ? 0 : 1;
          const decay = Math.pow(1 - index / length, 2.6);
          data[index] = (Math.random() * 2 - 1) * decay * preDelay * (channel ? .92 : 1);
        }
      }
      return impulse;
    };
    const setParam = (param, value, now = 0) => {
      param.cancelScheduledValues(now);
      param.setTargetAtTime(value, now, .018);
    };
    const createVocalGraph = (context, destination, settings) => {
      const input = context.createGain();
      const analyserNode = context.createAnalyser();
      analyserNode.fftSize = 1024;
      const output = context.createGain();
      const makeBlend = (processor, amount, bypass) => {
        const dry = context.createGain();
        const wet = context.createGain();
        const sum = context.createGain();
        processor.connect(wet);
        dry.connect(sum);
        wet.connect(sum);
        setParam(dry.gain, bypass ? 1 : 1 - amount);
        setParam(wet.gain, bypass ? 0 : amount);
        return { dry, wet, sum, processor };
      };
      const sat = context.createWaveShaper();
      const satCurve = new Float32Array(2048);
      const drive = 1 + settings.saturation / 100 * 11;
      for (let index = 0; index < satCurve.length; index += 1) {
        const x = index * 2 / (satCurve.length - 1) - 1;
        satCurve[index] = Math.tanh(x * drive) / Math.tanh(drive);
      }
      sat.curve = satCurve;
      sat.oversample = "4x";
      const satFilter = context.createBiquadFilter();
      satFilter.type = "highshelf";
      satFilter.frequency.value = 5500;
      satFilter.gain.value = 2.5;
      sat.connect(satFilter);
      const satBlend = makeBlend(satFilter, settings.saturation / 100 * .72, settings.saturationBypass);
      const doublerInput = context.createGain();
      const doublerMerger = context.createChannelMerger(2);
      const doublerSum = context.createGain();
      const doublerLeft = context.createDelay(.1);
      const doublerRight = context.createDelay(.1);
      doublerLeft.delayTime.value = .012;
      doublerRight.delayTime.value = .018;
      const doublerLfo = context.createOscillator();
      const doublerLfoGain = context.createGain();
      doublerLfo.frequency.value = .5;
      doublerLfoGain.gain.value = .0017;
      doublerLfo.connect(doublerLfoGain);
      doublerLfoGain.connect(doublerLeft.delayTime);
      doublerLfoGain.connect(doublerRight.delayTime);
      doublerLfo.start();
      doublerInput.connect(doublerLeft).connect(doublerMerger, 0, 0);
      doublerInput.connect(doublerRight).connect(doublerMerger, 0, 1);
      doublerMerger.connect(doublerSum);
      const doublerBlend = makeBlend(doublerSum, settings.doubler / 100 * .7, settings.doublerBypass);
      const delayNode = context.createDelay(1);
      const delayFeedback = context.createGain();
      const delayFilter = context.createBiquadFilter();
      delayNode.delayTime.value = .32;
      delayFeedback.gain.value = .35;
      delayFilter.type = "bandpass";
      delayFilter.frequency.value = 1700;
      delayFilter.Q.value = .65;
      delayNode.connect(delayFilter).connect(delayFeedback).connect(delayNode);
      const delayBlend = makeBlend(delayNode, settings.delay / 100 * .62, settings.delayBypass);
      const reverb = context.createConvolver();
      reverb.buffer = createImpulse(context);
      const reverbLowpass = context.createBiquadFilter();
      reverbLowpass.type = "lowpass";
      reverbLowpass.frequency.value = 7600;
      reverb.connect(reverbLowpass);
      const reverbBlend = makeBlend(reverbLowpass, settings.reverb / 100 * .72, settings.reverbBypass);
      input.connect(satBlend.dry);
      input.connect(sat);
      satBlend.sum.connect(doublerBlend.dry);
      satBlend.sum.connect(doublerInput);
      doublerBlend.sum.connect(delayBlend.dry);
      doublerBlend.sum.connect(delayNode);
      delayBlend.sum.connect(reverbBlend.dry);
      delayBlend.sum.connect(reverb);
      reverbBlend.sum.connect(output);
      output.connect(analyserNode).connect(destination);
      return { input, output, analyser: analyserNode, blends: { saturation: satBlend, doubler: doublerBlend, delay: delayBlend, reverb: reverbBlend } };
    };
    const setBlend = (name) => {
      if (!vocalGraph) return;
      const amount = fxState[name] / 100;
      const blend = vocalGraph.blends[name];
      const now = audioContext.currentTime;
      const maxWet = { saturation: .72, doubler: .7, delay: .62, reverb: .72 }[name];
      setParam(blend.dry.gain, vocalMasterBypass || fxBypass[name] ? 1 : 1 - amount * maxWet, now);
      setParam(blend.wet.gain, vocalMasterBypass || fxBypass[name] ? 0 : amount * maxWet, now);
    };
    const rebuildVocalGraph = () => {
      if (!audioContext) ensureAudio();
      if (vocalGraph) vocalGraph.input.disconnect();
      vocalGraph = createVocalGraph(audioContext, audioContext.destination, {
        saturation: fxState.saturation, doubler: fxState.doubler, delay: fxState.delay, reverb: fxState.reverb,
        saturationBypass: fxBypass.saturation, doublerBypass: fxBypass.doubler, delayBypass: fxBypass.delay, reverbBypass: fxBypass.reverb
      });
      vocalInput = vocalGraph.input;
      vocalAnalyser = vocalGraph.analyser;
      Object.keys(fxState).forEach(setBlend);
    };
    const stopVocal = () => {
      if (vocalSource) {
        vocalSource.onended = null;
        try { vocalSource.stop(); } catch (error) { console.warn("Vocal source already stopped.", error); }
        vocalSource.disconnect();
        vocalSource = null;
      }
      vocalPlaying = false;
      playButton.textContent = "▶";
      playButton.setAttribute("aria-pressed", "false");
      updateVocalTime();
    };
    const startVocal = (offset = vocalPausedAt) => {
      if (!vocalBuffer) return;
      ensureAudio();
      if (!vocalGraph) rebuildVocalGraph();
      if (vocalSource) stopVocal();
      vocalSource = audioContext.createBufferSource();
      vocalSource.buffer = vocalBuffer;
      vocalSource.loop = vocalLoop;
      vocalSource.connect(vocalInput);
      vocalStartTime = audioContext.currentTime - offset;
      vocalSource.onended = () => {
        if (!vocalLoop) { vocalPausedAt = 0; stopVocal(); }
      };
      vocalSource.start(0, offset);
      vocalPlaying = true;
      playButton.textContent = "Ⅱ";
      playButton.setAttribute("aria-pressed", "true");
    };
    const setVocalBuffer = (buffer, label) => {
      stopVocal();
      vocalBuffer = buffer;
      vocalPausedAt = 0;
      demoActive = false;
      fileName.textContent = label || vocalTranslate("fileLoaded");
      fileName.removeAttribute("data-i18n");
      time.textContent = `00:00 / ${vocalFormatTime(buffer.duration)}`;
      recordStatus.textContent = vocalTranslate("fileLoaded");
      rebuildVocalGraph();
    };
    const decodeArrayBuffer = async (arrayBuffer, label) => {
      ensureAudio();
      const buffer = await audioContext.decodeAudioData(arrayBuffer);
      setVocalBuffer(buffer, label);
      vocalLoop = true;
      loopButton.classList.add("is-active");
      loopButton.setAttribute("aria-pressed", "true");
      return buffer;
    };
    const decodeFile = async (file) => {
      try {
        ensureAudio();
        const arrayBuffer = await file.arrayBuffer();
        await decodeArrayBuffer(arrayBuffer, file.name.toUpperCase());
      } catch (error) {
        recordStatus.textContent = `ERROR — ${error.message || "UNABLE TO DECODE AUDIO"}`;
        console.error("Vocal Lab could not decode the selected file.", error);
      }
    };
    const loadDemoVocal = async (autoplay = true) => {
      if (demoLoading) return;
      demoLoading = true;
      demoButton.disabled = true;
      demoButton.classList.add("is-loading");
      demoButton.querySelector("span").textContent = vocalTranslate("demoLoading");
      try {
        ensureAudio();
        const demoSources = [
          { path: "mix/Juice WRLD - All Girls Are The Same (RAW ACAPELLA) NO AUTOTUNE.mp3", label: "4aury4_DEMO_ACAPELLA.mp3" },
          { path: "mix/demo_vocal.wav", label: "4aury4_DEMO_ACAPELLA.wav" },
          { path: "mix/demo_vocal.mp3", label: "4aury4_DEMO_ACAPELLA.mp3" }
        ];
        let response;
        let label = demoSources[0].label;
        for (const source of demoSources) {
          response = await fetch(source.path);
          if (response.ok) {
            label = source.label;
            break;
          }
        }
        if (!response.ok) throw new Error("DEMO VOCAL FILE NOT FOUND");
        await decodeArrayBuffer(await response.arrayBuffer(), label);
        demoActive = true;
        demoButton.querySelector("span").textContent = vocalTranslate("demoActive");
        if (autoplay) startVocal(0);
      } catch (error) {
        demoButton.querySelector("span").textContent = vocalTranslate("loadDemo");
        recordStatus.textContent = vocalTranslate("demoError");
        console.error("Vocal Lab demo vocal could not be loaded.", error);
      } finally {
        demoLoading = false;
        demoButton.disabled = false;
        demoButton.classList.remove("is-loading");
      }
    };
    const drawVocalWaveform = () => {
      const rect = waveform.getBoundingClientRect();
      const ratio = Math.min(devicePixelRatio, 2);
      if (waveform.width !== rect.width * ratio) { waveform.width = rect.width * ratio; waveform.height = rect.height * ratio; }
      waveformContext.setTransform(ratio, 0, 0, ratio, 0, 0);
      waveformContext.clearRect(0, 0, rect.width, rect.height);
      const data = new Uint8Array(vocalAnalyser ? vocalAnalyser.fftSize : 128);
      if (vocalAnalyser && vocalPlaying) vocalAnalyser.getByteTimeDomainData(data);
      waveformContext.beginPath();
      for (let index = 0; index < data.length; index += 1) {
        const x = index / (data.length - 1) * rect.width;
        const value = vocalAnalyser && vocalPlaying ? (data[index] - 128) / 128 : Math.sin(index * .5 + performance.now() * .002) * .025;
        const y = rect.height / 2 + value * rect.height * (vocalPlaying ? .9 : .25);
        index ? waveformContext.lineTo(x, y) : waveformContext.moveTo(x, y);
      }
      waveformContext.strokeStyle = vocalPlaying ? "rgba(218,151,255,.95)" : "rgba(150,140,170,.35)";
      waveformContext.lineWidth = 1.2;
      waveformContext.stroke();
      updateVocalTime();
      requestAnimationFrame(drawVocalWaveform);
    };
    const encodeWav = (buffer) => {
      const channels = buffer.numberOfChannels;
      const length = buffer.length * channels * 2 + 44;
      const view = new DataView(new ArrayBuffer(length));
      const write = (offset, value) => { for (let index = 0; index < value.length; index += 1) view.setUint8(offset + index, value.charCodeAt(index)); };
      write(0, "RIFF"); view.setUint32(4, length - 8, true); write(8, "WAVE"); write(12, "fmt "); view.setUint32(16, 16, true); view.setUint16(20, 1, true); view.setUint16(22, channels, true); view.setUint32(24, buffer.sampleRate, true); view.setUint32(28, buffer.sampleRate * channels * 2, true); view.setUint16(32, channels * 2, true); view.setUint16(34, 16, true); write(36, "data"); view.setUint32(40, length - 44, true);
      let offset = 44;
      for (let index = 0; index < buffer.length; index += 1) for (let channel = 0; channel < channels; channel += 1) { const sample = Math.max(-1, Math.min(1, buffer.getChannelData(channel)[index])); view.setInt16(offset, sample < 0 ? sample * 32768 : sample * 32767, true); offset += 2; }
      return new Blob([view], { type: "audio/wav" });
    };
    const exportVocal = async () => {
      if (!vocalBuffer) { recordStatus.textContent = vocalTranslate("exportEmpty"); return; }
      exportButton.disabled = true;
      recordStatus.textContent = vocalTranslate("exportBusy");
      try {
        const offline = new OfflineAudioContext(2, Math.ceil((vocalBuffer.duration + 2.5) * 44100), 44100);
        const graph = createVocalGraph(offline, offline.destination, { saturation: fxState.saturation, doubler: fxState.doubler, delay: fxState.delay, reverb: fxState.reverb, saturationBypass: vocalMasterBypass || fxBypass.saturation, doublerBypass: vocalMasterBypass || fxBypass.doubler, delayBypass: vocalMasterBypass || fxBypass.delay, reverbBypass: vocalMasterBypass || fxBypass.reverb });
        const source = offline.createBufferSource();
        source.buffer = vocalBuffer;
        source.connect(graph.input);
        source.start();
        const rendered = await offline.startRendering();
        const blob = encodeWav(rendered);
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "4aury4-vocal-aura.wav";
        link.click();
        setTimeout(() => URL.revokeObjectURL(link.href), 1000);
        recordStatus.textContent = vocalTranslate("fileLoaded");
      } catch (error) {
        recordStatus.textContent = `ERROR — ${error.message || "EXPORT FAILED"}`;
        console.error("Vocal Lab WAV export failed.", error);
      } finally { exportButton.disabled = false; }
    };
    const paintKnob = (card, value) => {
      const knob = qs(".vocal-knob", card);
      qs(".vocal-knob__value", card).textContent = `${Math.round(value)}%`;
      knob.style.setProperty("--knob-angle", `${-135 + value * 2.7}deg`);
      knob.setAttribute("aria-valuenow", String(Math.round(value)));
    };
    fxCards.forEach((card) => {
      const name = card.dataset.fx;
      paintKnob(card, fxState[name]);
      qs(".vocal-knob", card).addEventListener("pointerdown", (event) => { knobDrag = { name, startY: event.clientY, startValue: fxState[name], knob: event.currentTarget }; event.currentTarget.setPointerCapture(event.pointerId); });
      qs(".vocal-knob", card).addEventListener("pointermove", (event) => { if (!knobDrag || knobDrag.name !== name) return; fxState[name] = Math.max(0, Math.min(100, knobDrag.startValue + (knobDrag.startY - event.clientY) * .65)); paintKnob(card, fxState[name]); setBlend(name); });
      qs(".vocal-knob", card).addEventListener("pointerup", () => { knobDrag = null; });
      qs(".vocal-knob", card).addEventListener("keydown", (event) => { if (!["ArrowUp", "ArrowDown"].includes(event.key)) return; event.preventDefault(); fxState[name] = Math.max(0, Math.min(100, fxState[name] + (event.key === "ArrowUp" ? 2 : -2))); paintKnob(card, fxState[name]); setBlend(name); });
      qs(".vocal-fx__bypass", card).addEventListener("click", (event) => { fxBypass[name] = !fxBypass[name]; event.currentTarget.classList.toggle("is-active", fxBypass[name]); event.currentTarget.setAttribute("aria-pressed", String(fxBypass[name])); event.currentTarget.querySelector("span").textContent = fxBypass[name] ? vocalTranslate("active") : vocalTranslate("bypass"); setBlend(name); });
    });
    fileInput.addEventListener("change", () => { if (fileInput.files[0]) decodeFile(fileInput.files[0]); });
    ["dragenter", "dragover"].forEach((eventName) => dropzone.addEventListener(eventName, (event) => { event.preventDefault(); dropzone.classList.add("is-dragging"); }));
    ["dragleave", "drop"].forEach((eventName) => dropzone.addEventListener(eventName, (event) => { event.preventDefault(); dropzone.classList.remove("is-dragging"); }));
    dropzone.addEventListener("drop", (event) => { if (event.dataTransfer.files[0]) decodeFile(event.dataTransfer.files[0]); });
    demoButton.addEventListener("click", () => loadDemoVocal(true));
    playButton.addEventListener("click", async () => {
      if (!vocalBuffer) {
        await loadDemoVocal(true);
        return;
      }
      vocalPlaying ? (vocalPausedAt = (audioContext.currentTime - vocalStartTime) % vocalBuffer.duration, stopVocal()) : startVocal(vocalPausedAt);
    });
    loopButton.addEventListener("click", () => { vocalLoop = !vocalLoop; loopButton.classList.toggle("is-active", vocalLoop); loopButton.setAttribute("aria-pressed", String(vocalLoop)); if (vocalSource) vocalSource.loop = vocalLoop; });
    masterBypassButton.addEventListener("click", () => { vocalMasterBypass = !vocalMasterBypass; masterBypassButton.classList.toggle("is-active", !vocalMasterBypass); masterBypassButton.setAttribute("aria-pressed", String(vocalMasterBypass)); masterBypassButton.querySelector("span").textContent = vocalTranslate(vocalMasterBypass ? "masterDry" : "masterBypass"); Object.keys(fxState).forEach(setBlend); });
    exportButton.addEventListener("click", exportVocal);
    window.syncVocalLabLanguage = () => {
      masterBypassButton.querySelector("span").textContent = vocalTranslate(vocalMasterBypass ? "masterDry" : "masterBypass");
      if (!fileName.hasAttribute("data-i18n") && !vocalBuffer) fileName.textContent = vocalTranslate("noFile");
      if (!demoLoading) demoButton.querySelector("span").textContent = demoActive ? vocalTranslate("demoActive") : vocalTranslate("loadDemo");
    };
    drawVocalWaveform();
  };
  setupVocalLab();

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
  let synthCompressor;

  const setupPianoEngine = () => {
    const audio = ensureAudio();
    if (synthBus) return audio;
    synthBus = audio.createGain();
    synthBus.gain.value = .3;
    synthCompressor = audio.createDynamicsCompressor();
    synthCompressor.threshold.value = -18;
    synthCompressor.knee.value = 16;
    synthCompressor.ratio.value = 3.5;
    synthCompressor.attack.value = .008;
    synthCompressor.release.value = .24;
    reverbInput = audio.createGain();
    reverbDelay = audio.createDelay(1.5);
    reverbFeedback = audio.createGain();
    reverbWet = audio.createGain();
    reverbDelay.delayTime.value = .34;
    reverbFeedback.gain.value = .34;
    reverbWet.gain.value = .28;
    synthBus.connect(synthCompressor);
    synthCompressor.connect(gainNode);
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
      gain: audio.createGain(),
      oscillatorGainA: audio.createGain(),
      oscillatorGainB: audio.createGain(),
      pan: audio.createStereoPanner()
    };
    const isHighRegister = code === "Digit9" || code === "Digit0";
    voice.oscillatorA.type = "triangle";
    voice.oscillatorB.type = isHighRegister ? "sine" : "sawtooth";
    voice.oscillatorA.frequency.setValueAtTime(note.frequency, now);
    voice.oscillatorB.frequency.setValueAtTime(note.frequency, now);
    voice.oscillatorA.detune.value = isHighRegister ? 0 : -3;
    voice.oscillatorB.detune.value = isHighRegister ? 0 : 3;
    voice.oscillatorGainA.gain.value = .9;
    voice.oscillatorGainB.gain.value = isHighRegister ? .14 : .22;
    const noteIndex = Object.keys(pianoNotes).indexOf(code);
    voice.pan.pan.value = ((noteIndex % 7) - 3) * .045;
    voice.filter.type = "lowpass";
    voice.filter.Q.value = .55;
    voice.filter.frequency.setValueAtTime(820, now);
    voice.filter.frequency.exponentialRampToValueAtTime(1900, now + .12);
    voice.gain.gain.setValueAtTime(.001, now);
    voice.gain.gain.exponentialRampToValueAtTime(.095, now + .025);
    voice.gain.gain.exponentialRampToValueAtTime(.065, now + .24);
    voice.oscillatorA.connect(voice.oscillatorGainA).connect(voice.filter);
    voice.oscillatorB.connect(voice.oscillatorGainB).connect(voice.filter);
    voice.filter.connect(voice.gain).connect(voice.pan).connect(synthBus);
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
