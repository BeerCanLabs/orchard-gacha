// Orchard Gacha - Main Game Engine
const CHARACTERS = [
  {
    "id": "pippin",
    "name": "Pippin",
    "title": "Apple Archer",
    "rarity": "common",
    "element": "Flora",
    "str": 5,
    "hp": 6,
    "luck": 12,
    "color": "#ef4444",
    "quote": "Straight to the core!",
    "ability": "Seed Volley: Fires a rapid burst of apple seeds, piercing orchard pests.",
    "icon": "\ud83c\udf4e"
  },
  {
    "id": "meyer",
    "name": "Sir Meyer",
    "title": "Citrus Knight",
    "rarity": "common",
    "element": "Sun",
    "str": 7,
    "hp": 7,
    "luck": 8,
    "color": "#facc15",
    "quote": "Zesty justice for all!",
    "ability": "Sour Slash: A sharp blade of concentrated citric acid that stuns opponents.",
    "icon": "\ud83c\udf4b"
  },
  {
    "id": "valencia",
    "name": "Lady Valencia",
    "title": "Orange Paladin",
    "rarity": "common",
    "element": "Sun",
    "str": 6,
    "hp": 8,
    "luck": 9,
    "color": "#f97316",
    "quote": "Bask in golden warmth.",
    "ability": "Solar Bastion: Shields the orchard in a barrier of vitamin radiance.",
    "icon": "\ud83c\udf4a"
  },
  {
    "id": "bramble",
    "name": "Bramble",
    "title": "Berry Berserker",
    "rarity": "common",
    "element": "Soil",
    "str": 8,
    "hp": 5,
    "luck": 10,
    "color": "#6366f1",
    "quote": "Small berry, huge punch!",
    "ability": "Thorn Frenzy: Unleashes a flurry of blackberry thorns in all directions.",
    "icon": "\ud83e\uded0"
  },
  {
    "id": "cantal",
    "name": "Cantal",
    "title": "Melon Monk",
    "rarity": "common",
    "element": "Soil",
    "str": 7,
    "hp": 8,
    "luck": 7,
    "color": "#84cc16",
    "quote": "Inner peace through heavy rolling.",
    "ability": "Heavy Roll: Tucks into a ball and rolls forward, flattening obstacles.",
    "icon": "\ud83c\udf48"
  },
  {
    "id": "vinnie",
    "name": "Vinnie",
    "title": "Grape Gunslinger",
    "rarity": "common",
    "element": "Rain",
    "str": 6,
    "hp": 5,
    "luck": 13,
    "color": "#9333ea",
    "quote": "Fastest vine in the west.",
    "ability": "Vine Ricochet: Bounces grape projectiles across multiple targets.",
    "icon": "\ud83c\udf47"
  },
  {
    "id": "figaro",
    "name": "Figaro",
    "title": "Fig Fencer",
    "rarity": "common",
    "element": "Flora",
    "str": 6,
    "hp": 6,
    "luck": 11,
    "color": "#a855f7",
    "quote": "Honeyed steel never misses.",
    "ability": "Sweet Riposte: Parries attacks and counters with syrupy elegance.",
    "icon": "\ud83e\udeb4"
  },
  {
    "id": "plumy",
    "name": "Plumy",
    "title": "Plum Sorcerer",
    "rarity": "common",
    "element": "Bloom",
    "str": 4,
    "hp": 6,
    "luck": 14,
    "color": "#7e22ce",
    "quote": "The orchard whispers secrets.",
    "ability": "Sugar Fog: Cloaks allies in sweet purple fog, increasing evasion.",
    "icon": "\ud83d\udfe3"
  },
  {
    "id": "kip",
    "name": "Kip",
    "title": "Kiwi Rogue",
    "rarity": "common",
    "element": "Soil",
    "str": 7,
    "hp": 5,
    "luck": 11,
    "color": "#65a30d",
    "quote": "You won't hear my footsteps.",
    "ability": "Bristle Ambush: Leaps from the shadows with fuzzy fury and critical strike.",
    "icon": "\ud83e\udd5d"
  },
  {
    "id": "barnaby",
    "name": "Barnaby",
    "title": "Banana Bard",
    "rarity": "common",
    "element": "Sun",
    "str": 4,
    "hp": 7,
    "luck": 15,
    "color": "#eab308",
    "quote": "One slip and you're dancing!",
    "ability": "Peel Slide: Plays an upbeat tune that confuses enemies and trips them up.",
    "icon": "\ud83c\udf4c"
  },
  {
    "id": "cheri",
    "name": "Cheri",
    "title": "Cherry Champion",
    "rarity": "common",
    "element": "Bloom",
    "str": 6,
    "hp": 6,
    "luck": 12,
    "color": "#dc2626",
    "quote": "Double the cherry, double the victory!",
    "ability": "Twin Stem Spin: Spins with twin blades generating a red gust.",
    "icon": "\ud83c\udf52"
  },
  {
    "id": "gus",
    "name": "Gus",
    "title": "Guava Guardian",
    "rarity": "common",
    "element": "Flora",
    "str": 7,
    "hp": 9,
    "luck": 8,
    "color": "#16a34a",
    "quote": "No frost gets past my shield.",
    "ability": "Thick Bark Ward: Hardens skin into ironwood, reducing all damage.",
    "icon": "\ud83c\udf48"
  },
  {
    "id": "penny",
    "name": "Penny",
    "title": "Peach Princess",
    "rarity": "common",
    "element": "Bloom",
    "str": 3,
    "hp": 8,
    "luck": 16,
    "color": "#fb7185",
    "quote": "Kindness blossoms everywhere.",
    "ability": "Velvet Aroma: Restores HP to all active orchard explorers.",
    "icon": "\ud83c\udf51"
  },
  {
    "id": "astrid",
    "name": "Astrid",
    "title": "Apricot Assassin",
    "rarity": "common",
    "element": "Sun",
    "str": 8,
    "hp": 5,
    "luck": 12,
    "color": "#fb923c",
    "quote": "Silent as falling blossom.",
    "ability": "Golden Eclipse: Vanishes into golden sunlight to deliver a sneak attack.",
    "icon": "\u2728"
  },
  {
    "id": "ignis",
    "name": "Ignis",
    "title": "Dragonfruit Duelist",
    "rarity": "rare",
    "element": "Sun",
    "str": 9,
    "hp": 8,
    "luck": 14,
    "color": "#f43f5e",
    "quote": "Feel the volcanic sweet flame!",
    "ability": "Pitaya Burst: Erupts in magenta fire that scorches the battlefield.",
    "icon": "\ud83d\udc09"
  },
  {
    "id": "maris",
    "name": "Maris",
    "title": "Mango Mage",
    "rarity": "rare",
    "element": "Bloom",
    "str": 7,
    "hp": 7,
    "luck": 17,
    "color": "#f59e0b",
    "quote": "Tropical currents obey my command.",
    "ability": "Golden Nectar: Calls down golden rain that supercharges expedition rewards.",
    "icon": "\ud83e\udd6d"
  },
  {
    "id": "cora",
    "name": "Cora",
    "title": "Coconut Crusader",
    "rarity": "rare",
    "element": "Soil",
    "str": 9,
    "hp": 10,
    "luck": 11,
    "color": "#78350f",
    "quote": "Indestructible shell, unbreakable will.",
    "ability": "Nutcracker Slam: Leaps into the air and crashes down with earthquake power.",
    "icon": "\ud83e\udd65"
  },
  {
    "id": "lyra",
    "name": "Lyra",
    "title": "Lychee Lancer",
    "rarity": "rare",
    "element": "Bloom",
    "str": 8,
    "hp": 7,
    "luck": 16,
    "color": "#ec4899",
    "quote": "Crystal sharp, lightning quick.",
    "ability": "Prismatic Thrust: Charges forward leaving a trail of shimmering crystal blossom.",
    "icon": "\ud83c\udf38"
  },
  {
    "id": "pomona",
    "name": "Pomona",
    "title": "Pomegranate Priest",
    "rarity": "rare",
    "element": "Rain",
    "str": 6,
    "hp": 9,
    "luck": 18,
    "color": "#be123c",
    "quote": "A thousand ruby seeds protect us.",
    "ability": "Ruby Cascade: Shimmers with ruby light that multiplies luck on next gacha pull.",
    "icon": "\ud83d\udc8e"
  },
  {
    "id": "nova",
    "name": "Nova",
    "title": "Starfruit Sovereign",
    "rarity": "legendary",
    "element": "Astral",
    "str": 10,
    "hp": 10,
    "luck": 20,
    "color": "#fbbf24",
    "quote": "By the light of five celestial branches, the Orchard reigns eternal!",
    "ability": "Astral Supernova: The legendary ruler of the orchard commands celestial starlight, granting maximum luck and endless golden harvest.",
    "icon": "\u2b50"
  }
];

// Game State with LocalStorage Persistence
const STORAGE_KEY = 'orchard_gacha_v1';
let soundEnabled = true;

let state = {
  coins: 500,
  gems: 50,
  collection: {}, // id -> { count: number, level: number, bonusStr: number }
  lastDaily: 0,
  expeditions: [
    { id: 1, name: 'Sunny Glade', duration: 15, cost: 0, rewardCoins: 50, rewardGems: 2, endTime: null, claimed: true },
    { id: 2, name: 'Bramble Woods', duration: 30, cost: 20, rewardCoins: 120, rewardGems: 6, endTime: null, claimed: true },
    { id: 3, name: 'Golden Summit', duration: 60, cost: 50, rewardCoins: 300, rewardGems: 15, endTime: null, claimed: true }
  ]
};

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      state = { ...state, ...parsed };
    }
  } catch (e) {
    console.warn('Could not load save state:', e);
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn('Could not save state:', e);
  }
  updateHUD();
}

// Audio Synthesizer (Web Audio API)
let audioCtx = null;
function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContext();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playTone(freq, type = 'sine', duration = 0.15, gain = 0.1) {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    g.gain.setValueAtTime(gain, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.connect(g);
    g.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (e) {}
}

function playCoinSound() {
  playTone(880, 'triangle', 0.08, 0.15);
  setTimeout(() => playTone(1320, 'triangle', 0.12, 0.15), 60);
}

function playShakeSound() {
  playTone(180, 'square', 0.05, 0.1);
  setTimeout(() => playTone(140, 'square', 0.05, 0.1), 80);
}

function playRevealSound(rarity) {
  if (!soundEnabled) return;
  if (rarity === 'legendary') {
    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98];
    notes.forEach((freq, idx) => {
      setTimeout(() => playTone(freq, 'sawtooth', 0.35, 0.15), idx * 100);
    });
  } else if (rarity === 'rare') {
    const notes = [440, 554.37, 659.25, 880];
    notes.forEach((freq, idx) => {
      setTimeout(() => playTone(freq, 'sine', 0.25, 0.12), idx * 80);
    });
  } else {
    playTone(523.25, 'triangle', 0.15, 0.1);
    setTimeout(() => playTone(659.25, 'triangle', 0.2, 0.1), 100);
  }
}

// Confetti Particle Engine
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function launchConfetti(count = 70, colors = ['#facc15', '#4ade80', '#ef4444', '#a855f7', '#38bdf8']) {
  for (let i = 0; i < count; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 16,
      vy: (Math.random() - 0.7) * 18,
      size: Math.random() * 8 + 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rSpeed: (Math.random() - 0.5) * 12,
      life: 1.0,
      decay: Math.random() * 0.015 + 0.01
    });
  }
}

function updateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles = particles.filter(p => p.life > 0);
  for (const p of particles) {
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.35;
    p.rotation += p.rSpeed;
    p.life -= p.decay;

    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate((p.rotation * Math.PI) / 180);
    ctx.fillStyle = p.color;
    ctx.globalAlpha = Math.max(0, p.life);
    ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
    ctx.restore();
  }
  requestAnimationFrame(updateConfetti);
}
updateConfetti();

// Gacha RNG Engine: Common: 70%, Rare: 29%, Legendary: 1%
function pullOneHero() {
  const roll = Math.random();
  let pool;
  let chosenRarity;

  if (roll < 0.01) {
    chosenRarity = 'legendary';
    pool = CHARACTERS.filter(c => c.rarity === 'legendary');
  } else if (roll < 0.30) {
    chosenRarity = 'rare';
    pool = CHARACTERS.filter(c => c.rarity === 'rare');
  } else {
    chosenRarity = 'common';
    pool = CHARACTERS.filter(c => c.rarity === 'common');
  }

  const hero = pool[Math.floor(Math.random() * pool.length)];
  const isNew = !state.collection[hero.id];
  if (!state.collection[hero.id]) {
    state.collection[hero.id] = { count: 1, level: 1, bonusStr: 0 };
  } else {
    state.collection[hero.id].count += 1;
  }

  return { hero, isNew };
}

function updateHUD() {
  document.getElementById('coin-count').textContent = state.coins;
  document.getElementById('gem-count').textContent = state.gems;
  const uniqueCount = Object.keys(state.collection).length;
  document.getElementById('collection-count').textContent = `${uniqueCount}/${CHARACTERS.length}`;
  document.getElementById('tab-roster-count').textContent = `${uniqueCount}/${CHARACTERS.length}`;
}

function renderRoster(filter = 'all') {
  const grid = document.getElementById('roster-grid');
  grid.innerHTML = '';

  let list = CHARACTERS;
  if (filter === 'common') list = list.filter(c => c.rarity === 'common');
  if (filter === 'rare') list = list.filter(c => c.rarity === 'rare');
  if (filter === 'legendary') list = list.filter(c => c.rarity === 'legendary');
  if (filter === 'owned') list = list.filter(c => state.collection[c.id]);

  for (const c of list) {
    const entry = state.collection[c.id];
    const isOwned = !!entry;
    const count = entry ? entry.count : 0;
    const bonusStr = entry ? entry.bonusStr : 0;

    const card = document.createElement('div');
    card.className = `hero-card ${c.rarity} ${isOwned ? 'unlocked' : 'locked'}`;
    card.onclick = () => showHeroDetail(c);

    card.innerHTML = `
      ${count > 1 ? `<div class="hero-count-badge">x${count}</div>` : ''}
      <div class="hero-avatar">${isOwned ? c.icon : '❓'}</div>
      <div class="hero-name">${isOwned ? c.name : 'Unknown Hero'}</div>
      <div class="hero-title">${isOwned ? c.title : 'Orchard Mystery'}</div>
      <div class="hero-rarity-pill ${c.rarity}">${c.rarity}</div>
      <div class="hero-stats">
        <span>⚔️ ${c.str + bonusStr}</span>
        <span>❤️ ${c.hp}</span>
        <span>🍀 ${c.luck}</span>
      </div>
    `;
    grid.appendChild(card);
  }
}

function showHeroDetail(hero) {
  const entry = state.collection[hero.id];
  const isOwned = !!entry;
  const bonusStr = entry ? entry.bonusStr : 0;
  const power = (hero.str + bonusStr) * 10 + hero.hp * 8 + hero.luck * 5;

  const content = document.getElementById('detail-modal-content');
  content.innerHTML = `
    <div style="font-size: 4rem; margin-bottom: 8px;">${isOwned ? hero.icon : '❓'}</div>
    <h2 style="color: ${hero.color}; margin-bottom: 2px;">${hero.name}</h2>
    <p style="color: #86efac; font-weight: 700; margin-bottom: 12px;">${hero.title} • ${hero.element}</p>
    <div class="hero-rarity-pill ${hero.rarity}">${hero.rarity}</div>
    
    <div style="background: rgba(0,0,0,0.4); padding: 12px; border-radius: 12px; margin: 16px 0; text-align: left;">
      <p style="font-style: italic; color: #fef08a; margin-bottom: 8px;">"${hero.quote}"</p>
      <p style="font-size: 0.9rem; color: #d1fae5;"><strong>Special Ability:</strong> ${hero.ability}</p>
    </div>

    <div style="display: flex; justify-content: space-around; background: rgba(0,0,0,0.5); padding: 12px; border-radius: 12px; margin-bottom: 16px;">
      <div>⚔️ <strong>STR:</strong> ${hero.str + bonusStr}</div>
      <div>❤️ <strong>HP:</strong> ${hero.hp}</div>
      <div>🍀 <strong>LUCK:</strong> ${hero.luck}</div>
      <div style="color: #fde047;">⚡ <strong>PWR:</strong> ${power}</div>
    </div>

    ${isOwned ? `
      <button class="btn btn-harvest" style="width: 100%; margin-bottom: 10px;" id="power-up-btn">
        🍎 Feed Apple (+1 STR) - Cost: 50 🍎
      </button>
    ` : '<p style="color: #fca5a5; font-weight: 700;">Find this hero in the Mystery Box!</p>'}
    
    <button class="btn" style="width: 100%; background: #374151; color: white;" onclick="closeModals()">Close</button>
  `;

  if (isOwned) {
    document.getElementById('power-up-btn').onclick = () => {
      if (state.coins >= 50) {
        state.coins -= 50;
        state.collection[hero.id].bonusStr += 1;
        playCoinSound();
        saveState();
        showHeroDetail(hero);
        renderRoster();
      } else {
        alert('Not enough Apple Coins! Shake the tree or send heroes on expeditions.');
      }
    };
  }

  document.getElementById('detail-modal').classList.add('active');
}

function renderExpeditions() {
  const list = document.getElementById('expeditions-list');
  list.innerHTML = '';

  for (const exp of state.expeditions) {
    const card = document.createElement('div');
    card.className = 'expedition-card';

    let statusText = 'Ready to launch';
    let btnDisabled = false;
    let btnText = 'Start Expedition';

    if (exp.endTime) {
      const remaining = Math.max(0, Math.ceil((exp.endTime - Date.now()) / 1000));
      if (remaining > 0) {
        statusText = `⏳ In progress... (${remaining}s remaining)`;
        btnDisabled = true;
        btnText = 'Exploring...';
      } else {
        statusText = '✨ Expedition Completed! Claim rewards.';
        btnText = 'Claim Loot!';
      }
    }

    card.innerHTML = `
      <div>
        <h3>${exp.name}</h3>
        <p style="color: #86efac; font-size: 0.85rem;">Duration: ${exp.duration}s</p>
        <div class="expedition-rewards">
          Rewards: +${exp.rewardCoins} 🍎, +${exp.rewardGems} 💎
        </div>
        <p style="color: #fef08a; font-weight: 700; font-size: 0.9rem; margin-bottom: 12px;">${statusText}</p>
      </div>
      <button class="btn btn-harvest" style="width: 100%;" ${btnDisabled ? 'disabled style="opacity: 0.5; pointer-events: none;"' : ''} id="exp-btn-${exp.id}">
        ${btnText}
      </button>
    `;

    list.appendChild(card);
    document.getElementById(`exp-btn-${exp.id}`).onclick = () => handleExpeditionAction(exp);
  }
}

function handleExpeditionAction(exp) {
  if (!exp.endTime) {
    exp.endTime = Date.now() + exp.duration * 1000;
    saveState();
    renderExpeditions();
  } else if (Date.now() >= exp.endTime) {
    state.coins += exp.rewardCoins;
    state.gems += exp.rewardGems;
    exp.endTime = null;
    playCoinSound();
    launchConfetti(40);
    saveState();
    renderExpeditions();
  }
}

setInterval(() => {
  if (state.expeditions.some(e => e.endTime)) {
    renderExpeditions();
  }
}, 1000);

function handleSinglePull() {
  if (state.coins < 100) {
    alert('Not enough Apple Coins! Shake the tree or check expeditions for more coins.');
    return;
  }

  state.coins -= 100;
  saveState();

  const chest = document.getElementById('chest-box');
  chest.classList.add('shaking');
  playShakeSound();

  setTimeout(() => {
    chest.classList.remove('shaking');
    chest.classList.add('bursting');

    const result = pullOneHero();
    saveState();
    renderRoster();

    setTimeout(() => {
      chest.classList.remove('bursting');
      showSingleReveal(result);
    }, 400);
  }, 700);
}

function showSingleReveal({ hero, isNew }) {
  playRevealSound(hero.rarity);
  if (hero.rarity === 'legendary') launchConfetti(120);
  else if (hero.rarity === 'rare') launchConfetti(60);

  const wrapper = document.getElementById('reveal-card-wrapper');
  wrapper.innerHTML = `
    <div class="hero-card ${hero.rarity}" style="margin: 0 auto; transform: scale(1.15);">
      ${isNew ? '<div class="hero-count-badge" style="background:#22c55e;">NEW!</div>' : ''}
      <div class="hero-avatar" style="font-size: 5rem;">${hero.icon}</div>
      <h2 style="color: ${hero.color}; margin-bottom: 2px;">${hero.name}</h2>
      <p style="color: #86efac; font-weight: 700; margin-bottom: 12px;">${hero.title}</p>
      <div class="hero-rarity-pill ${hero.rarity}">${hero.rarity}</div>
      <div class="hero-stats" style="margin-top: 10px;">
        <span>⚔️ STR: ${hero.str}</span>
        <span>❤️ HP: ${hero.hp}</span>
        <span>🍀 LUCK: ${hero.luck}</span>
      </div>
      <p style="margin-top: 12px; font-style: italic; color: #fef08a;">"${hero.quote}"</p>
    </div>
  `;

  document.getElementById('reveal-modal').classList.add('active');
}

function handleMultiPull() {
  if (state.coins < 900) {
    alert('You need 900 Apple Coins for a 10x Super Harvest! Keep shaking the orchard tree.');
    return;
  }

  state.coins -= 900;
  saveState();

  const chest = document.getElementById('chest-box');
  chest.classList.add('shaking');
  playShakeSound();

  setTimeout(() => {
    chest.classList.remove('shaking');
    chest.classList.add('bursting');

    const results = [];
    for (let i = 0; i < 10; i++) {
      results.push(pullOneHero());
    }
    saveState();
    renderRoster();

    setTimeout(() => {
      chest.classList.remove('bursting');
      showMultiResults(results);
    }, 400);
  }, 800);
}

function showMultiResults(results) {
  const hasLegendary = results.some(r => r.hero.rarity === 'legendary');
  const hasRare = results.some(r => r.hero.rarity === 'rare');

  if (hasLegendary) {
    playRevealSound('legendary');
    launchConfetti(150);
  } else if (hasRare) {
    playRevealSound('rare');
    launchConfetti(80);
  } else {
    playRevealSound('common');
  }

  const grid = document.getElementById('multi-results-grid');
  grid.innerHTML = '';

  for (const { hero, isNew } of results) {
    const item = document.createElement('div');
    item.className = `hero-card ${hero.rarity}`;
    item.innerHTML = `
      ${isNew ? '<div class="hero-count-badge" style="background:#22c55e;">NEW!</div>' : ''}
      <div style="font-size: 2.2rem;">${hero.icon}</div>
      <div style="font-size: 0.9rem; font-weight: 700;">${hero.name}</div>
      <div class="hero-rarity-pill ${hero.rarity}" style="font-size: 0.65rem;">${hero.rarity}</div>
    `;
    grid.appendChild(item);
  }

  document.getElementById('multi-modal').classList.add('active');
}

function closeModals() {
  document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
}

document.addEventListener('DOMContentLoaded', () => {
  loadState();
  updateHUD();
  renderRoster();
  renderExpeditions();

  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      const target = document.getElementById(tab.dataset.tab);
      if (target) target.classList.add('active');
    });
  });

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderRoster(btn.dataset.filter);
    });
  });

  document.getElementById('pull-single-btn').onclick = handleSinglePull;
  document.getElementById('pull-ten-btn').onclick = handleMultiPull;
  document.getElementById('chest-container').onclick = handleSinglePull;
  document.getElementById('reveal-continue-btn').onclick = closeModals;
  document.getElementById('multi-continue-btn').onclick = closeModals;

  document.getElementById('sound-btn').onclick = () => {
    soundEnabled = !soundEnabled;
    document.getElementById('sound-btn').textContent = soundEnabled ? '🔊' : '🔇';
  };

  document.querySelectorAll('.hanging-apple').forEach(apple => {
    apple.addEventListener('click', () => {
      if (apple.classList.contains('harvested')) return;
      apple.classList.add('harvested');
      state.coins += 15;
      playCoinSound();
      saveState();

      setTimeout(() => {
        apple.classList.remove('harvested');
      }, 10000);
    });
  });

  let lastShake = 0;
  document.getElementById('shake-tree-btn').onclick = () => {
    const now = Date.now();
    if (now - lastShake < 30000) {
      const remaining = Math.ceil((30000 - (now - lastShake)) / 1000);
      alert(`The apple tree is resting! Try shaking again in ${remaining} seconds.`);
      return;
    }
    lastShake = now;
    state.coins += 150;
    playCoinSound();
    launchConfetti(50);
    saveState();

    const tree = document.getElementById('interactive-tree');
    tree.style.animation = 'box-shake 0.6s ease';
    setTimeout(() => tree.style.animation = '', 600);
  };

  document.getElementById('daily-harvest-btn').onclick = () => {
    const now = Date.now();
    if (now - state.lastDaily < 86400000) {
      alert("You have already claimed today's Orchard Basket! Come back tomorrow.");
      return;
    }
    state.lastDaily = now;
    state.coins += 300;
    state.gems += 20;
    playCoinSound();
    launchConfetti(80);
    saveState();
  };
});
