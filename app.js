// ── DATA ─────────────────────────────────────────────────────────────────────

const EVENTS = [
  { id:  1, program: "Badge & Bravery",                badge: "First Aid Badge",            level: "D/B",       date: "2026-06-06", start: "10:30 AM", end: "12:00 PM", spots: 14 },
  { id:  2, program: "Girls Who Code Bots Lab",        badge: "Coding Robots Patch",         level: "All Levels",date: "2026-06-10", start: "4:00 PM",  end: "5:30 PM",  spots: 15 },
  { id:  3, program: "Creamy Creations",               badge: "Ice Cream Making Patch",      level: "All Levels",date: "2026-06-12", start: "4:00 PM",  end: "5:00 PM",  spots: 11 },
  { id:  4, program: "Father/Daughter Night",          badge: "(Special Event)",             level: "All Levels",date: "2026-06-17", start: "4:00 PM",  end: "6:00 PM",  spots: 15 },
  { id:  5, program: "Tech & Tolerance",               badge: "Rainbow STEM Patch",          level: "All Levels",date: "2026-06-19", start: "4:00 PM",  end: "5:30 PM",  spots: 15 },
  { id:  6, program: "Eco-Creators",                   badge: "Recycling Crafts Patch",      level: "All Levels",date: "2026-06-24", start: "4:00 PM",  end: "5:30 PM",  spots: 14 },
  { id:  7, program: "Love Loud!",                     badge: "LGBTQ+ Pride Month Patch",    level: "D/B/J",     date: "2026-06-26", start: "3:45 PM",  end: "4:45 PM",  spots: 15 },
  { id:  8, program: "Nature + Numbers",               badge: "Math in Nature Badge",        level: "Daisy",     date: "2026-06-27", start: "10:30 AM", end: "12:00 PM", spots: 14 },
  { id:  9, program: "Girl Scouts Rule the Galaxy",    badge: "Galaxy Patch",                level: "All Levels",date: "2026-07-08", start: "4:00 PM",  end: "5:30 PM",  spots: 13 },
  { id: 10, program: "Make & Create Studio",           badge: "Art & Design Badge",          level: "Daisy",     date: "2026-07-11", start: "10:30 AM", end: "12:00 PM", spots: 15 },
  { id: 11, program: "Fun With Movement / Me Time",    badge: "Body Appreciation Badge",     level: "D/B",       date: "2026-07-15", start: "4:00 PM",  end: "5:30 PM",  spots: 15 },
  { id: 12, program: "Coastal Cleanup",                badge: "Beach Comber Patch",          level: "All Levels",date: "2026-07-25", start: "12:00 PM", end: "1:30 PM",  spots: 15 },
  { id: 13, program: "Taking a Byte at Cybersecurity", badge: "Cybersecurity Basics Badge",  level: "D/B",       date: "2026-08-01", start: "10:30 AM", end: "12:00 PM", spots: 15 },
  { id: 14, program: "Indoor Scavenger Hunt",          badge: "Scavenger Hunt Patch",        level: "All Levels",date: "2026-08-05", start: "4:00 PM",  end: "5:30 PM",  spots: 15 },
  { id: 15, program: "Twist & Tie Dye",                badge: "Tie Dye Patch",               level: "All Levels",date: "2026-08-07", start: "4:00 PM",  end: "5:30 PM",  spots: 13 },
  { id: 16, program: "Eyes on the Wild",               badge: "Animal Observer Badge",       level: "Daisy",     date: "2026-08-14", start: "4:00 PM",  end: "5:30 PM",  spots: 15 },
  { id: 17, program: "Paint Party!",                   badge: "(Special Event)",             level: "All Levels",date: "2026-08-19", start: "4:00 PM",  end: "5:30 PM",  spots: 15 },
  { id: 18, program: "Ready, Set, Safe",               badge: "Emergency Readiness Patch",   level: "All Levels",date: "2026-09-09", start: "4:00 PM",  end: "5:30 PM",  spots: 15 },
  { id: 19, program: "Hispanic Heritage Month",        badge: "Hispanic Heritage Patch",     level: "D/B/J",     date: "2026-09-11", start: "3:45 PM",  end: "4:45 PM",  spots: 15 },
];

const ACTIVITIES = [
  // Outdoors
  { id:  1, text: "Attend Girl Scouts Love State Parks in September",                                          cat: "outdoors" },
  { id: 22, text: "Bury your feet, or a friend's, in the sand",                                                cat: "outdoors" },
  { id: 26, text: "Set up an indoor \"campsite\" with sleeping bags or blankets",                               cat: "outdoors" },
  { id: 41, text: "Sleep in a tent, cabin, or tree house",                                                     cat: "outdoors" },
  { id: 46, text: "Make s'mores while singing your favorite Girl Scout songs",                                  cat: "outdoors" },
  // Nature
  { id:  4, text: "Watch two sunrises or sunsets and compare the colors you see",                               cat: "nature" },
  { id:  5, text: "Find (but don't touch) three different types of insects",                                    cat: "nature" },
  { id:  7, text: "Learn about pollinator gardens and help plant one, if you can",                              cat: "nature" },
  { id:  9, text: "Search for animals outdoors and draw the ones you see",                                      cat: "nature" },
  { id: 13, text: "Learn to identify three different types of birds and their calls",                           cat: "nature" },
  { id: 16, text: "Plant, protect, or honor a tree with friends or family as part of the Girl Scout Tree Promise", cat: "nature" },
  { id: 19, text: "On a clear night, search for shooting stars or identify constellations",                     cat: "nature" },
  { id: 24, text: "Help someone care for their lawn, garden, or other outdoor space",                           cat: "nature" },
  { id: 25, text: "Take a close-up look at a tide pool",                                                       cat: "nature" },
  { id: 29, text: "Listen quietly in nature and count how many different sounds you hear",                      cat: "nature" },
  { id: 35, text: "Visit an animal sanctuary",                                                                  cat: "nature" },
  { id: 47, text: "Smell three different flowers",                                                              cat: "nature" },
  // Active
  { id:  8, text: "Get muddy on a rainy day",                                                                   cat: "active" },
  { id: 18, text: "Find a new way to be active on a rainy day",                                                 cat: "active" },
  { id: 20, text: "Team up with a friend or family member and dance around your block or neighborhood",         cat: "active" },
  { id: 23, text: "Jump rope",                                                                                  cat: "active" },
  { id: 31, text: "Swing at a playground, in a backyard, or on a tire swing",                                   cat: "active" },
  { id: 36, text: "Go canoeing, paddleboarding, or kayaking",                                                   cat: "active" },
  { id: 38, text: "Learn about and try laughter yoga",                                                          cat: "active" },
  { id: 42, text: "Get outdoors as you earn a Body Appreciation badge",                                         cat: "active" },
  { id: 44, text: "Play soccer",                                                                                cat: "active" },
  { id: 48, text: "Play a classic outdoor game such as capture the flag or hopscotch",                          cat: "active" },
  { id: 49, text: "Visit a community pool",                                                                     cat: "active" },
  // Creative
  { id:  2, text: "Draw a map from your home to your favorite outdoor spots",                                   cat: "creative" },
  { id:  6, text: "Paint or draw the view from a window in your home",                                          cat: "creative" },
  { id: 21, text: "Visit local outdoor art and talk about what you see",                                        cat: "creative" },
  { id: 27, text: "Draw or paint your favorite outdoor memory",                                                 cat: "creative" },
  { id: 32, text: "Search for sidewalk cracks and make up stories about the shapes you see",                    cat: "creative" },
  { id: 33, text: "Draw, paint, or take pictures of clouds for a week",                                        cat: "creative" },
  { id: 39, text: "Work on a craft outdoors",                                                                   cat: "creative" },
  { id: 40, text: "Read a book or sketch on a park bench",                                                      cat: "creative" },
  { id: 43, text: "Write a story or poem starring animals that live in your area",                              cat: "creative" },
  // Social
  { id: 12, text: "Plan and enjoy a screen-free outdoor day with friends or family",                            cat: "social" },
  { id: 14, text: "Attend an outdoor event related to a cause that's important to you",                         cat: "social" },
  { id: 17, text: "Talk to a local farmer about their work",                                                    cat: "social" },
  { id: 30, text: "Share your favorite outdoor activity with a friend and talk about why you love it",          cat: "social" },
  { id: 45, text: "Take turns making animal noises with friends",                                               cat: "social" },
  { id: 50, text: "Attend or host an outdoor performance or movie night",                                       cat: "social" },
  // Science
  { id: 11, text: "Learn about the connections between nature and the Indigenous people in your area",          cat: "science" },
  { id: 15, text: "Build a bat box",                                                                            cat: "science" },
  { id: 28, text: "Learn about climate change or take on the Girl Scout Climate Challenge",                     cat: "science" },
  { id: 34, text: "Try citizen science with a project for Girl Scouts on SciStarter",                           cat: "science" },
  // Cooking
  { id:  3, text: "Make a recipe using a fresh in-season fruit or vegetable",                                   cat: "cooking" },
  { id: 10, text: "Make a meal with friends or family, then enjoy it outdoors",                                  cat: "cooking" },
  { id: 37, text: "On a hot day, make your own ice pops",                                                       cat: "cooking" },
];

const CATEGORIES = {
  outdoors: { label: "Outdoors",  icon: "🏕️" },
  nature:   { label: "Nature",    icon: "🌿" },
  active:   { label: "Active",    icon: "⚡" },
  creative: { label: "Creative",  icon: "🎨" },
  social:   { label: "Social",    icon: "👯" },
  science:  { label: "Science",   icon: "🔬" },
  cooking:  { label: "Cooking",   icon: "🍴" },
};

const LEVEL_CLASS = {
  "Daisy":      "level-daisy",
  "D/B":        "level-db",
  "D/B/J":      "level-dbj",
  "All Levels": "level-all",
};

// ── STATE ─────────────────────────────────────────────────────────────────────

let filter = "all";

const state = {
  ariella: new Set(JSON.parse(localStorage.getItem("gs_ariella") || "[]")),
};

function save() {
  localStorage.setItem("gs_ariella", JSON.stringify([...state.ariella]));
}

// ── HELPERS ───────────────────────────────────────────────────────────────────

function daysUntil(dateStr) {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const d = new Date(dateStr + "T00:00:00");
  return Math.round((d - now) / 86400000);
}

function fmtDate(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
}

function countdownBadge(days) {
  if (days < 0)  return `<span class="countdown cd-past">Past</span>`;
  if (days === 0) return `<span class="countdown cd-today">Today!</span>`;
  if (days === 1) return `<span class="countdown cd-soon">Tomorrow</span>`;
  if (days <= 7)  return `<span class="countdown cd-soon">${days} days</span>`;
  if (days <= 30) return `<span class="countdown cd-upcoming">${days} days</span>`;
  return `<span class="countdown cd-future">${days} days</span>`;
}

// ── RENDER: EVENTS ────────────────────────────────────────────────────────────

function renderEvents() {
  let list = EVENTS;

  if (filter === "daisy-only") {
    list = EVENTS.filter(e => e.level === "Daisy");
  } else if (filter === "upcoming") {
    list = EVENTS.filter(e => { const d = daysUntil(e.date); return d >= 0 && d <= 30; });
  }

  const upcomingAll = EVENTS.filter(e => daysUntil(e.date) >= 0).length;
  document.getElementById("chip-events").textContent = `${upcomingAll} events upcoming`;

  if (list.length === 0) {
    document.getElementById("events-grid").innerHTML =
      `<p style="color:var(--text-mid);grid-column:1/-1;padding:24px 0">No events match this filter.</p>`;
    return;
  }

  document.getElementById("events-grid").innerHTML = list.map(ev => {
    const days = daysUntil(ev.date);
    const isPast = days < 0;
    const isSoon = !isPast && days <= 7;
    const isEvent = ev.badge.startsWith("(");
    const levelCls = LEVEL_CLASS[ev.level] || "level-all";
    const spotsLow = ev.spots <= 5;

    return `
<div class="event-card ${isPast ? "is-past" : ""} ${isSoon ? "is-soon" : ""}">
  <div class="card-top">
    <span class="level-tag ${levelCls}">${ev.level}</span>
    ${countdownBadge(days)}
  </div>
  <div class="event-name">${ev.program}</div>
  <div class="event-badge ${isEvent ? "" : "is-patch"}">${ev.badge}</div>
  <div class="event-details">
    <div class="event-detail">📅 ${fmtDate(ev.date)}</div>
    <div class="event-detail">🕐 ${ev.start} – ${ev.end}</div>
    <div class="event-detail ${spotsLow ? "low-spots" : ""}">
      ${spotsLow ? "⚠️" : "👥"} ${ev.spots} spots left
    </div>
  </div>
</div>`;
  }).join("");
}

// ── RENDER: CHALLENGE ─────────────────────────────────────────────────────────

function renderChallenge() {
  const end = new Date("2026-09-30T00:00:00");
  const now = new Date(); now.setHours(0,0,0,0);
  const daysLeft = Math.max(0, Math.round((end - now) / 86400000));
  document.getElementById("chip-days").textContent = `${daysLeft} days left in challenge`;

  const grouped = {};
  for (const cat of Object.keys(CATEGORIES)) grouped[cat] = [];
  ACTIVITIES.forEach(a => grouped[a.cat].push(a));

  document.getElementById("activities-list").innerHTML = Object.entries(grouped)
    .filter(([, acts]) => acts.length > 0)
    .map(([cat, acts]) => {
      const cfg = CATEGORIES[cat];
      return `
<div class="cat-section">
  <div class="cat-header">${cfg.icon} ${cfg.label}</div>
  ${acts.map(a => activityRow(a)).join("")}
</div>`;
    }).join("");

  document.querySelectorAll(".check-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = +btn.dataset.id;
      const who = btn.dataset.who;
      if (state[who].has(id)) {
        state[who].delete(id);
      } else {
        state[who].add(id);
      }
      save();
      updateRow(id);
      updateProgress();
    });
  });

  updateProgress();
}

function activityRow(a) {
  const checked = state.ariella.has(a.id);
  return `
<div class="activity-row ${checked ? "done" : ""}" id="row-${a.id}">
  <div class="act-num">${a.id}</div>
  <div class="act-text">${a.text}</div>
  <div class="act-checks">
    <button class="check-btn ${checked ? "checked" : ""}" data-id="${a.id}" data-who="ariella" title="Mark done">
      <span class="btn-check">${checked ? "✓" : ""}</span>
    </button>
  </div>
</div>`;
}

function updateRow(id) {
  const row = document.getElementById(`row-${id}`);
  if (!row) return;
  const checked = state.ariella.has(id);
  row.className = `activity-row ${checked ? "done" : ""}`;
  const btn = row.querySelector(".check-btn");
  btn.className = `check-btn ${checked ? "checked" : ""}`;
  btn.querySelector(".btn-check").textContent = checked ? "✓" : "";
}

function updateProgress() {
  const n = state.ariella.size;
  document.getElementById("bar-ariella").style.width = `${(n / 50) * 100}%`;
  document.getElementById("count-ariella").textContent = `${n} / 50 activities`;
  const patchEl = document.getElementById("patch-ariella");
  if (n >= 25) {
    patchEl.textContent = "🏅 Patch earned!";
    patchEl.className = "pc-patch earned";
  } else {
    patchEl.textContent = `${25 - n} more for patch`;
    patchEl.className = "pc-patch";
  }
}

// ── WIRE UP: TABS ─────────────────────────────────────────────────────────────

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach(p => p.classList.add("hidden"));
    tab.classList.add("active");
    document.getElementById(`tab-${tab.dataset.tab}`).classList.remove("hidden");
  });
});

// ── WIRE UP: FILTERS ──────────────────────────────────────────────────────────

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    filter = btn.dataset.filter;
    renderEvents();
  });
});

// ── INIT ──────────────────────────────────────────────────────────────────────

renderEvents();
renderChallenge();
