// ── FIREBASE ─────────────────────────────────────────────────────────────────

firebase.initializeApp({
  apiKey:            "AIzaSyCXVzzAeh3U-RwYaKzCXOTBiNAarHWNqVo",
  authDomain:        "girl-scouts-silva.firebaseapp.com",
  projectId:         "girl-scouts-silva",
  storageBucket:     "girl-scouts-silva.firebasestorage.app",
  messagingSenderId: "662350541127",
  appId:             "1:662350541127:web:174dd8e1114695d8dadc62",
});

const db          = firebase.firestore();
const progressRef = db.collection("progress").doc("ariella");

// Offline persistence — works even with no internet
db.enablePersistence().catch(() => {});

// ── DATA ─────────────────────────────────────────────────────────────────────

const EVENTS = [
  {
    id: 1, program: "Badge & Bravery", badge: "First Aid Badge", level: "D/B",
    date: "2026-06-06", start: "10:30 AM", end: "12:00 PM", spots: 14,
    cost: 15, registration: true, registrationCloses: "2026-06-02",
    venue: null, address: "San Luis Obispo, CA 93401",
  },
  {
    id: 2, program: "Girls Who Code Bots Lab", badge: "Coding Robots Patch", level: "All Levels",
    date: "2026-06-10", start: "4:00 PM", end: "5:30 PM", spots: 15,
    cost: 12, registration: true, registrationCloses: "2026-06-05",
    venue: null, address: "San Luis Obispo, CA 93401",
  },
  {
    id: 3, program: "Creamy Creations", badge: "Ice Cream Making Patch", level: "All Levels",
    date: "2026-06-12", start: "4:00 PM", end: "5:00 PM", spots: 11,
    cost: 10, registration: true, registrationCloses: "2026-06-07",
    venue: null, address: "San Luis Obispo, CA 93401",
  },
  {
    id: 4, program: "Father/Daughter Night", badge: "(Special Event)", level: "All Levels",
    date: "2026-06-17", start: "4:00 PM", end: "6:00 PM", spots: 15,
    cost: 15, registration: true, registrationCloses: "2026-06-12",
    venue: null, address: "San Luis Obispo, CA 93401",
  },
  {
    id: 5, program: "Tech & Tolerance", badge: "Rainbow STEM Patch", level: "All Levels",
    date: "2026-06-19", start: "4:00 PM", end: "5:30 PM", spots: 15,
    cost: 12, registration: true, registrationCloses: "2026-06-14",
    venue: null, address: "San Luis Obispo, CA 93401",
  },
  {
    id: 6, program: "Eco-Creators", badge: "Recycling Crafts Patch", level: "All Levels",
    date: "2026-06-24", start: "4:00 PM", end: "5:30 PM", spots: 14,
    cost: 12, registration: true, registrationCloses: "2026-06-19",
    venue: null, address: "San Luis Obispo, CA 93401",
  },
  {
    id: 7, program: "Love Loud!", badge: "LGBTQ+ Pride Month Patch", level: "D/B/J",
    date: "2026-06-26", start: "3:45 PM", end: "4:45 PM", spots: 15,
    cost: 10, registration: true, registrationCloses: "2026-06-21",
    venue: null, address: "San Luis Obispo, CA 93401",
  },
  {
    id: 8, program: "Nature + Numbers", badge: "Math in Nature Badge", level: "Daisy",
    date: "2026-06-27", start: "10:30 AM", end: "12:00 PM", spots: 14,
    cost: 15, registration: true, registrationCloses: "2026-06-22",
    venue: null, address: "San Luis Obispo, CA 93401",
  },
  {
    id: 9, program: "Girl Scouts Rule the Galaxy", badge: "Galaxy Patch", level: "All Levels",
    date: "2026-07-08", start: "4:00 PM", end: "5:30 PM", spots: 13,
    cost: 12, registration: true, registrationCloses: "2026-07-03",
    venue: null, address: "San Luis Obispo, CA 93401",
  },
  {
    id: 10, program: "Make & Create Studio", badge: "Art & Design Badge", level: "Daisy",
    date: "2026-07-11", start: "10:30 AM", end: "12:00 PM", spots: 15,
    cost: 15, registration: true, registrationCloses: "2026-07-06",
    venue: null, address: "San Luis Obispo, CA 93401",
  },
  {
    id: 11, program: "Fun With Movement / Me Time", badge: "Body Appreciation Badge", level: "D/B",
    date: "2026-07-15", start: "4:00 PM", end: "5:30 PM", spots: 15,
    cost: 15, registration: true, registrationCloses: "2026-07-10",
    venue: null, address: "San Luis Obispo, CA 93401",
  },
  {
    id: 12, program: "Coastal Cleanup", badge: "Beach Comber Patch", level: "All Levels",
    date: "2026-07-25", start: "12:00 PM", end: "1:30 PM", spots: 15,
    cost: 10, registration: true, registrationCloses: "2026-07-20",
    venue: null, address: "San Luis Obispo, CA 93401",
  },
  {
    id: 13, program: "Taking a Byte at Cybersecurity", badge: "Cybersecurity Basics Badge", level: "D/B",
    date: "2026-08-01", start: "10:30 AM", end: "12:00 PM", spots: 15,
    cost: 15, registration: true, registrationCloses: "2026-07-27",
    venue: null, address: "San Luis Obispo, CA 93401",
  },
  {
    id: 14, program: "Indoor Scavenger Hunt", badge: "Scavenger Hunt Patch", level: "All Levels",
    date: "2026-08-05", start: "4:00 PM", end: "5:30 PM", spots: 15,
    cost: 12, registration: true, registrationCloses: "2026-07-31",
    venue: null, address: "San Luis Obispo, CA 93401",
  },
  {
    id: 15, program: "Twist & Tie Dye", badge: "Tie Dye Patch", level: "All Levels",
    date: "2026-08-07", start: "4:00 PM", end: "5:30 PM", spots: 13,
    cost: 12, registration: true, registrationCloses: "2026-08-02",
    venue: null, address: "San Luis Obispo, CA 93401",
  },
  {
    id: 16, program: "Eyes on the Wild", badge: "Animal Observer Badge", level: "Daisy",
    date: "2026-08-14", start: "4:00 PM", end: "5:30 PM", spots: 15,
    cost: 15, registration: true, registrationCloses: "2026-08-09",
    venue: null, address: "San Luis Obispo, CA 93401",
  },
  {
    id: 17, program: "Paint Party!", badge: "(Special Event)", level: "All Levels",
    date: "2026-08-19", start: "4:00 PM", end: "5:30 PM", spots: 15,
    cost: 12, registration: true, registrationCloses: "2026-08-14",
    venue: null, address: "San Luis Obispo, CA 93401",
  },
  {
    id: 18, program: "Ready, Set, Safe", badge: "Emergency Readiness Patch", level: "All Levels",
    date: "2026-09-09", start: "4:00 PM", end: "5:30 PM", spots: 15,
    cost: 12, registration: true, registrationCloses: "2026-09-04",
    venue: null, address: "San Luis Obispo, CA 93401",
  },
  {
    id: 19, program: "Hispanic Heritage Month", badge: "Hispanic Heritage Patch", level: "D/B/J",
    date: "2026-09-11", start: "3:45 PM", end: "4:45 PM", spots: 15,
    cost: 10, registration: true, registrationCloses: "2026-09-06",
    venue: null, address: "San Luis Obispo, CA 93401",
  },
  // ── Events from council emails ──────────────────────────────
  {
    id: 20, program: "Power of Produce — Farm Adventures", badge: "Power of Produce Patch", level: "All Levels",
    date: "2026-06-13", start: "1:00 PM", end: "3:00 PM", spots: null,
    cost: 18, registration: true, registrationCloses: "2026-06-08",
    venue: "SLO Farm", address: "San Luis Obispo, CA 93401",
    note: "Includes patch + take-home fruits and veggies. Confirm specific farm address at registration.",
  },
  {
    id: 21, program: "Penguins & Pajamas Overnight", badge: "Special Patch", level: "All Levels",
    date: "2026-07-25", start: "6:00 PM", end: "8:00 AM", endDate: "2026-07-26", spots: null,
    cost: 125, registration: true, registrationCloses: "2026-07-18",
    venue: "California Academy of Sciences", address: "55 Music Concourse Dr, San Francisco, CA 94118",
    note: "Overnight — Jul 25 6 PM through Jul 26 8 AM, then all-day Academy access until close. Parking $35 not included. Pay with credits: enter under \"Gift Card\" at checkout.",
  },
  {
    id: 22, program: "Santa Barbara Zoo Snooze", badge: "Custom Patch", level: "All Levels",
    date: "2026-08-08", start: "6:30 PM", end: "11:00 AM", endDate: "2026-08-09", spots: null,
    cost: 100, registration: true, registrationCloses: "2026-08-01",
    venue: "Santa Barbara Zoo", address: "500 Niños Dr, Santa Barbara, CA 93103",
    note: "Overnight — Aug 8 6:30 PM through Aug 9 11 AM, then all-day Zoo access until close. Pay with credits: enter under \"Gift Card\" at checkout.",
  },
  {
    id: 23, program: "Girl Scout Night — LA Sparks vs. Valkyries", badge: "Special Patch (wear uniform)", level: "All Levels",
    date: "2026-08-09", start: "TBD", end: "TBD", spots: null,
    cost: null, registration: true, registrationCloses: null,
    venue: "Crypto.com Arena", address: "1111 S Figueroa St, Los Angeles, CA 90015",
    note: "Wear uniform for special patch. Credits cannot be used. Register at gofevo.com/event/Girlscouts7062",
  },
  {
    id: 24, program: "The Ravine — Ariella's 500 Club Reward", badge: "(Ariella's Earned Reward)", level: "All Levels",
    date: "2026-09-19", start: "11:00 AM", end: "4:00 PM", spots: null,
    cost: 42, registration: true, registrationCloses: "2026-09-05",
    venue: "The Ravine", address: "2301 Airport Road, Paso Robles, CA 93446",
    note: "$42/person — Ariella + 1 adult chaperone = $84 total. Check-in 10:30 AM at Upper Parking Lot. Bring sunscreen, towel, swimwear. Pizza + drink included. No outside food.",
  },
];

const ACTIVITIES = [
  { id:  1, text: "Attend Girl Scouts Love State Parks in September",                                             cat: "outdoors" },
  { id: 22, text: "Bury your feet, or a friend's, in the sand",                                                  cat: "outdoors" },
  { id: 26, text: "Set up an indoor \"campsite\" with sleeping bags or blankets",                                  cat: "outdoors" },
  { id: 41, text: "Sleep in a tent, cabin, or tree house",                                                        cat: "outdoors" },
  { id: 46, text: "Make s'mores while singing your favorite Girl Scout songs",                                     cat: "outdoors" },
  { id:  4, text: "Watch two sunrises or sunsets and compare the colors you see",                                  cat: "nature"   },
  { id:  5, text: "Find (but don't touch) three different types of insects",                                       cat: "nature"   },
  { id:  7, text: "Learn about pollinator gardens and help plant one, if you can",                                 cat: "nature"   },
  { id:  9, text: "Search for animals outdoors and draw the ones you see",                                        cat: "nature"   },
  { id: 13, text: "Learn to identify three different types of birds and their calls",                              cat: "nature"   },
  { id: 16, text: "Plant, protect, or honor a tree with friends or family as part of the Girl Scout Tree Promise", cat: "nature"   },
  { id: 19, text: "On a clear night, search for shooting stars or identify constellations",                        cat: "nature"   },
  { id: 24, text: "Help someone care for their lawn, garden, or other outdoor space",                              cat: "nature"   },
  { id: 25, text: "Take a close-up look at a tide pool",                                                          cat: "nature"   },
  { id: 29, text: "Listen quietly in nature and count how many different sounds you hear",                         cat: "nature"   },
  { id: 35, text: "Visit an animal sanctuary",                                                                    cat: "nature"   },
  { id: 47, text: "Smell three different flowers",                                                                cat: "nature"   },
  { id:  8, text: "Get muddy on a rainy day",                                                                     cat: "active"   },
  { id: 18, text: "Find a new way to be active on a rainy day",                                                   cat: "active"   },
  { id: 20, text: "Team up with a friend or family member and dance around your block or neighborhood",            cat: "active"   },
  { id: 23, text: "Jump rope",                                                                                    cat: "active"   },
  { id: 31, text: "Swing at a playground, in a backyard, or on a tire swing",                                     cat: "active"   },
  { id: 36, text: "Go canoeing, paddleboarding, or kayaking",                                                     cat: "active"   },
  { id: 38, text: "Learn about and try laughter yoga",                                                            cat: "active"   },
  { id: 42, text: "Get outdoors as you earn a Body Appreciation badge",                                           cat: "active"   },
  { id: 44, text: "Play soccer",                                                                                  cat: "active"   },
  { id: 48, text: "Play a classic outdoor game such as capture the flag or hopscotch",                            cat: "active"   },
  { id: 49, text: "Visit a community pool",                                                                       cat: "active"   },
  { id:  2, text: "Draw a map from your home to your favorite outdoor spots",                                     cat: "creative" },
  { id:  6, text: "Paint or draw the view from a window in your home",                                           cat: "creative" },
  { id: 21, text: "Visit local outdoor art and talk about what you see",                                         cat: "creative" },
  { id: 27, text: "Draw or paint your favorite outdoor memory",                                                   cat: "creative" },
  { id: 32, text: "Search for sidewalk cracks and make up stories about the shapes you see",                     cat: "creative" },
  { id: 33, text: "Draw, paint, or take pictures of clouds for a week",                                          cat: "creative" },
  { id: 39, text: "Work on a craft outdoors",                                                                    cat: "creative" },
  { id: 40, text: "Read a book or sketch on a park bench",                                                       cat: "creative" },
  { id: 43, text: "Write a story or poem starring animals that live in your area",                               cat: "creative" },
  { id: 12, text: "Plan and enjoy a screen-free outdoor day with friends or family",                             cat: "social"   },
  { id: 14, text: "Attend an outdoor event related to a cause that's important to you",                          cat: "social"   },
  { id: 17, text: "Talk to a local farmer about their work",                                                     cat: "social"   },
  { id: 30, text: "Share your favorite outdoor activity with a friend and talk about why you love it",           cat: "social"   },
  { id: 45, text: "Take turns making animal noises with friends",                                                cat: "social"   },
  { id: 50, text: "Attend or host an outdoor performance or movie night",                                        cat: "social"   },
  { id: 11, text: "Learn about the connections between nature and the Indigenous people in your area",           cat: "science"  },
  { id: 15, text: "Build a bat box",                                                                             cat: "science"  },
  { id: 28, text: "Learn about climate change or take on the Girl Scout Climate Challenge",                      cat: "science"  },
  { id: 34, text: "Try citizen science with a project for Girl Scouts on SciStarter",                            cat: "science"  },
  { id:  3, text: "Make a recipe using a fresh in-season fruit or vegetable",                                    cat: "cooking"  },
  { id: 10, text: "Make a meal with friends or family, then enjoy it outdoors",                                  cat: "cooking"  },
  { id: 37, text: "On a hot day, make your own ice pops",                                                        cat: "cooking"  },
];

// ── TROOP DATA ────────────────────────────────────────────────────────────────

const ARIELLA = {
  name: "Ariella Silva",
  birthday: "2019-02-04",
  level: "Daisy",
};

// Parent + Girl Scout paired together per family
const TROOP_FAMILIES = [
  { parent: { name: "Chris Silva",              phone: "(805) 720-2123"                                               }, girl: "Ariella Silva"        },
  { parent: { name: "Danielle Kerr",            phone: "(820) 899-0974"                                               }, girl: "Isabella Kerr-pardo"  },
  { parent: { name: "Diana Flores De Muranaka", phone: "(805) 503-9709"                                               }, girl: "Nina Muranaka Flores" },
  { parent: { name: "Gwen Beyeler",             phone: "(707) 812-0823"                                               }, girl: "Cora Beyeler"          },
  { parent: { name: "Julia Goldstein",          phone: "(818) 489-8636", leader: true, email: "gstroop55805@gmail.com" }, girl: "Avigail Goldstein"    },
  { parent: { name: "Marie Brown",              phone: "(818) 601-6805"                                               }, girl: "Savannah Brown"        },
  { parent: { name: "Meagan Lovato",            phone: "(805) 765-0092"                                               }, girl: "Kameron Lovato"        },
  { parent: { name: "Nina",                     phone: "(714) 884-5447"                                               }, girl: "Hannah Zich"           },
  { parent: { name: "Yessenia Castellanos",     phone: "(805) 728-0036"                                               }, girl: "Camila Gonzalez"       },
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

// ── HELPERS ───────────────────────────────────────────────────────────────────

const TODAY = (() => { const d = new Date(); d.setHours(0,0,0,0); return d; })();

function daysUntil(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  return Math.round((d - TODAY) / 86400000);
}

function fmtDate(dateStr) {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
    weekday: "short", month: "short", day: "numeric",
  });
}

function fmtDateLong(dateStr) {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
    weekday: "long", month: "long", day: "numeric", year: "numeric",
  });
}

function countdownBadge(days) {
  if (days <  0) return `<span class="countdown cd-past">Past</span>`;
  if (days === 0) return `<span class="countdown cd-today">Today!</span>`;
  if (days === 1) return `<span class="countdown cd-soon">Tomorrow</span>`;
  if (days <= 7)  return `<span class="countdown cd-soon">${days} days</span>`;
  if (days <= 30) return `<span class="countdown cd-upcoming">${days} days</span>`;
  return `<span class="countdown cd-future">${days} days</span>`;
}

function mapsUrl(address) {
  return `https://maps.apple.com/?q=${encodeURIComponent(address)}`;
}

// ── EVENT CARD ────────────────────────────────────────────────────────────────

function fmtDateShort(dateStr) {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function eventCard(ev) {
  const days     = daysUntil(ev.date);
  const isPast   = days < 0;
  const levelCls = LEVEL_CLASS[ev.level] || "level-all";
  const isSpecial = ev.badge.startsWith("(");

  // Spots (null = unknown/limited)
  const spotsHtml = ev.spots != null
    ? `<span class="ev-spots${ev.spots <= 5 ? " low-spots" : ""}">
        ${ev.spots <= 5 ? "⚠️" : "👥"} ${ev.spots} spots
       </span>`
    : ``;

  // Time — handle overnight (endDate spans to next day)
  const timeDisplay = ev.endDate
    ? `${ev.start} – ${fmtDateShort(ev.endDate)} ${ev.end} 🌙`
    : `${ev.start} – ${ev.end}`;

  // Cost
  const costHtml = ev.cost === 0
    ? `<div class="ev-field"><span class="fi">💰</span>Free</div>`
    : ev.cost != null
    ? `<div class="ev-field"><span class="fi">💰</span>$${ev.cost} <span class="fn">confirm at registration</span></div>`
    : `<div class="ev-field ev-tbd"><span class="fi">💰</span>Cost TBD</div>`;

  // Registration
  let regHtml = "";
  if (ev.registration && ev.registrationCloses) {
    const rd = daysUntil(ev.registrationCloses);
    let cls = "", msg = "";
    if      (rd <  0) { cls = "reg-closed"; msg = "Registration closed"; }
    else if (rd === 0) { cls = "reg-urgent"; msg = "⚠️ Registration closes TODAY"; }
    else if (rd === 1) { cls = "reg-urgent"; msg = "⚠️ Registration closes TOMORROW"; }
    else if (rd <= 5)  { cls = "reg-warn";   msg = `⚠️ Register by ${fmtDate(ev.registrationCloses)} — ${rd} days left`; }
    else               {                     msg = `Register by ${fmtDate(ev.registrationCloses)}`; }
    regHtml = `<div class="ev-field ${cls}"><span class="fi">📝</span>${msg}</div>`;
  } else if (ev.registration) {
    regHtml = `<div class="ev-field"><span class="fi">📝</span>Registration required</div>`;
  } else {
    regHtml = `<div class="ev-field"><span class="fi">✅</span>No registration needed</div>`;
  }

  // Location + Maps + Google Calendar
  const locLabel = ev.venue || "San Luis Obispo, CA";
  const addr     = ev.address || "San Luis Obispo, CA 93401";
  const locHtml  = `
    <div class="ev-field ev-loc">
      <span class="fi">📍</span>
      <span>${locLabel}</span>
      <a class="maps-btn" href="${mapsUrl(addr)}" target="_blank">Maps ↗</a>
      <a class="gcal-btn" href="${gcalLink(ev)}" target="_blank">+ Google Cal</a>
    </div>`;

  // Optional note
  const noteHtml = ev.note
    ? `<div class="ev-field ev-note"><span class="fi">ℹ️</span>${ev.note}</div>`
    : ``;

  return `
    <div class="ev-card${isPast ? " is-past" : ""}">
      <div class="ev-top">
        <span class="level-tag ${levelCls}">${ev.level}</span>
        ${countdownBadge(days)}
        ${spotsHtml}
      </div>
      <div class="ev-name">${ev.program}</div>
      <div class="ev-badge${isSpecial ? "" : " has-badge"}">${ev.badge}</div>
      <div class="ev-fields">
        <div class="ev-field"><span class="fi">🕐</span>${timeDisplay}</div>
        ${costHtml}
        ${regHtml}
        ${locHtml}
        ${noteHtml}
      </div>
    </div>`;
}

// ── GOOGLE CALENDAR EXPORT ────────────────────────────────────────────────────

function toGcalDt(dateStr, timeStr) {
  if (!timeStr || timeStr === "TBD") return null;
  const [y, m, d] = dateStr.split('-');
  const match = timeStr.match(/^(\d+):(\d+)\s*(AM|PM)$/i);
  if (!match) return null;
  let [, h, min, ampm] = match;
  h = parseInt(h); min = parseInt(min);
  if (ampm.toUpperCase() === 'PM' && h !== 12) h += 12;
  if (ampm.toUpperCase() === 'AM' && h === 12) h = 0;
  return `${y}${m}${d}T${String(h).padStart(2,'0')}${String(min).padStart(2,'0')}00`;
}

function gcalLink(ev) {
  const startDt = toGcalDt(ev.date, ev.start);
  const endDt   = toGcalDt(ev.endDate || ev.date, ev.end);
  const dates   = startDt
    ? `${startDt}/${endDt || startDt}`
    : `${ev.date.replace(/-/g,'')}/${ev.date.replace(/-/g,'')}`;

  const details = [
    !ev.badge.startsWith('(') ? `Badge/Patch: ${ev.badge}` : null,
    `Level: ${ev.level}`,
    ev.cost != null ? `Cost: $${ev.cost}` : null,
    ev.registrationCloses ? `Register by: ${fmtDate(ev.registrationCloses)}` : null,
    ev.note || null,
  ].filter(Boolean).join('\n');

  return `https://calendar.google.com/calendar/render?action=TEMPLATE`
    + `&text=${encodeURIComponent(ev.program)}`
    + `&dates=${dates}`
    + `&details=${encodeURIComponent(details)}`
    + `&location=${encodeURIComponent(ev.address || 'San Luis Obispo, CA')}`
    + `&ctz=America%2FLos_Angeles`;
}

function downloadIcs() {
  const esc = s => s.replace(/\\/g,'\\\\').replace(/;/g,'\\;').replace(/,/g,'\\,').replace(/\n/g,'\\n');
  const lines = [
    'BEGIN:VCALENDAR','VERSION:2.0',
    'PRODID:-//Girl Scouts//Ariella Silva//EN',
    'CALSCALE:GREGORIAN',
    'X-WR-CALNAME:Girl Scouts - Ariella 2026',
    'X-WR-TIMEZONE:America/Los_Angeles',
  ];

  EVENTS.forEach(ev => {
    const startDt = toGcalDt(ev.date, ev.start);
    const endDt   = toGcalDt(ev.endDate || ev.date, ev.end);
    if (!startDt) return;

    const desc = [
      !ev.badge.startsWith('(') ? `Badge: ${ev.badge}` : null,
      `Level: ${ev.level}`,
      ev.cost != null ? `Cost: $${ev.cost}` : null,
      ev.registrationCloses ? `Register by: ${fmtDate(ev.registrationCloses)}` : null,
      ev.note || null,
    ].filter(Boolean).join('\\n');

    lines.push(
      'BEGIN:VEVENT',
      `DTSTART;TZID=America/Los_Angeles:${startDt}`,
      `DTEND;TZID=America/Los_Angeles:${endDt || startDt}`,
      `SUMMARY:${esc(ev.program)}`,
      ...(desc  ? [`DESCRIPTION:${desc}`]  : []),
      ...(ev.address ? [`LOCATION:${esc(ev.address)}`] : []),
      `UID:gs-ariella-${ev.id}@girl-scouts-silva`,
      'END:VEVENT',
    );
  });

  lines.push('END:VCALENDAR');

  const blob = new Blob([lines.join('\r\n')], { type: 'text/calendar;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'girl-scouts-ariella-2026.ics';
  a.click();
}

// ── CALENDAR ──────────────────────────────────────────────────────────────────

let calYear  = TODAY.getFullYear();
let calMonth = TODAY.getMonth();
let selDate  = null;

// Pre-index events and reg deadlines by date string
function buildDateIndex() {
  const ev = {}, reg = {};
  EVENTS.forEach(e => {
    (ev[e.date]  = ev[e.date]  || []).push(e);
    if (e.registrationCloses)
      (reg[e.registrationCloses] = reg[e.registrationCloses] || []).push(e);
  });
  return { ev, reg };
}

function renderCalendar() {
  const { ev: evByDate, reg: regByDate } = buildDateIndex();

  const firstOfMonth = new Date(calYear, calMonth, 1);
  const daysInMonth  = new Date(calYear, calMonth + 1, 0).getDate();
  const startDow     = firstOfMonth.getDay();

  document.getElementById("cal-title").textContent =
    firstOfMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" });

  // Constrain nav to Jun–Sep 2026
  const minY = TODAY.getFullYear(), minM = TODAY.getMonth();
  document.getElementById("cal-prev").disabled = (calYear === minY && calMonth === minM);
  document.getElementById("cal-next").disabled = (calYear === 2026 && calMonth === 8);

  let html = "";
  for (let i = 0; i < startDow; i++) html += `<div class="cal-cell empty"></div>`;

  for (let d = 1; d <= daysInMonth; d++) {
    const ds   = `${calYear}-${String(calMonth + 1).padStart(2,"0")}-${String(d).padStart(2,"0")}`;
    const cell = new Date(calYear, calMonth, d);
    const isToday    = cell.getTime() === TODAY.getTime();
    const isPast     = cell < TODAY;
    const isSelected = selDate === ds;
    const hasEv      = !!evByDate[ds];
    const hasReg     = !!regByDate[ds];

    const cls = ["cal-cell",
      isToday    ? "is-today"    : "",
      isPast     ? "is-past"     : "",
      isSelected ? "is-selected" : "",
      (hasEv || hasReg) ? "is-active" : "",
    ].filter(Boolean).join(" ");

    let inds = "";
    if (hasReg) regByDate[ds].forEach(() => { inds += `<span class="cal-ind cal-ind-reg"></span>`; });
    if (hasEv)  evByDate[ds].forEach(e  => { inds += `<span class="cal-ind ${LEVEL_CLASS[e.level] || "level-all"}"></span>`; });

    html += `<div class="${cls}" data-date="${ds}">
      <span class="cal-num">${d}</span>
      ${inds ? `<div class="cal-inds">${inds}</div>` : ""}
    </div>`;
  }

  document.getElementById("cal-grid").innerHTML = html;

  document.querySelectorAll(".cal-cell:not(.empty):not(.is-past)").forEach(cell => {
    cell.addEventListener("click", () => {
      selDate = cell.dataset.date;
      renderCalendar();
    });
  });

  renderDayDetail(selDate, evByDate, regByDate);
}

function renderDayDetail(dateStr, evByDate, regByDate) {
  const panel = document.getElementById("cal-detail");

  if (!dateStr) { panel.innerHTML = ""; return; }

  const dayEv  = evByDate[dateStr]  || [];
  const dayReg = regByDate[dateStr] || [];

  if (!dayEv.length && !dayReg.length) {
    panel.innerHTML = `<div class="day-detail-panel"><p class="no-events">No events or deadlines on this day.</p></div>`;
    return;
  }

  let html = `<div class="day-detail-panel"><div class="ddp-date">${fmtDateLong(dateStr)}</div>`;

  dayReg.forEach(ev => {
    const eventDays = daysUntil(ev.date);
    html += `
      <div class="reg-alert-card">
        <div class="rac-top"><span class="rac-icon">⏰</span><span class="rac-label">Registration Deadline</span></div>
        <div class="rac-name">${ev.program}</div>
        <div class="rac-sub">Event ${eventDays === 0 ? "today" : eventDays === 1 ? "tomorrow" : `in ${eventDays} days`} — ${fmtDate(ev.date)}</div>
      </div>`;
  });

  dayEv.forEach(ev => { html += eventCard(ev); });

  html += `</div>`;
  panel.innerHTML = html;
}

// ── LIST VIEW ─────────────────────────────────────────────────────────────────

let listFilter = "all";

function renderList() {
  let events = EVENTS;
  if (listFilter === "daisy-only") {
    events = EVENTS.filter(e => e.level === "Daisy");
  } else if (listFilter === "upcoming") {
    events = EVENTS.filter(e => { const d = daysUntil(e.date); return d >= 0 && d <= 30; });
  }
  document.getElementById("events-list").innerHTML =
    events.length
      ? events.map(eventCard).join("")
      : `<p style="color:var(--text-mid);padding:24px 0">No events match this filter.</p>`;
}

// ── CHALLENGE ─────────────────────────────────────────────────────────────────

// Seed from localStorage instantly (before Firestore responds)
const state = {
  ariella: new Set(JSON.parse(localStorage.getItem("gs_ariella") || "[]")),
};

// Real-time Firestore sync — fires on load and on any change from any device
progressRef.onSnapshot(snap => {
  // Only overwrite local state when Firestore has real data for this document
  if (snap.exists) {
    const completed = snap.data().completed || [];
    state.ariella = new Set(completed);
    localStorage.setItem("gs_ariella", JSON.stringify(completed));
    updateProgress();
    ACTIVITIES.forEach(a => updateRow(a.id));
  }
}, err => {
  console.warn("Firestore sync unavailable, using local state:", err.code);
});

function save() {
  progressRef.set({ completed: [...state.ariella] });
  localStorage.setItem("gs_ariella", JSON.stringify([...state.ariella]));
}

function renderChallenge() {
  const end      = new Date("2026-09-30T00:00:00");
  const daysLeft = Math.max(0, Math.round((end - TODAY) / 86400000));
  document.getElementById("chip-days").textContent = `${daysLeft} days left in challenge`;

  const grouped = {};
  Object.keys(CATEGORIES).forEach(k => { grouped[k] = []; });
  ACTIVITIES.forEach(a => grouped[a.cat].push(a));

  document.getElementById("activities-list").innerHTML = Object.entries(grouped)
    .filter(([, acts]) => acts.length)
    .map(([cat, acts]) => {
      const cfg = CATEGORIES[cat];
      return `<div class="cat-section">
        <div class="cat-header">${cfg.icon} ${cfg.label}</div>
        ${acts.map(actRow).join("")}
      </div>`;
    }).join("");

  document.querySelectorAll(".check-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = +btn.dataset.id;
      state.ariella.has(id) ? state.ariella.delete(id) : state.ariella.add(id);
      save();
      updateRow(id);
      updateProgress();
    });
  });

  updateProgress();
}

function actRow(a) {
  const checked = state.ariella.has(a.id);
  return `
    <div class="activity-row${checked ? " done" : ""}" id="row-${a.id}">
      <div class="act-num">${a.id}</div>
      <div class="act-text">${a.text}</div>
      <div class="act-checks">
        <button class="check-btn${checked ? " checked" : ""}" data-id="${a.id}">
          <span class="btn-check">${checked ? "✓" : ""}</span>
        </button>
      </div>
    </div>`;
}

function updateRow(id) {
  const row = document.getElementById(`row-${id}`);
  if (!row) return;
  const checked = state.ariella.has(id);
  row.className = `activity-row${checked ? " done" : ""}`;
  const btn = row.querySelector(".check-btn");
  btn.className = `check-btn${checked ? " checked" : ""}`;
  btn.querySelector(".btn-check").textContent = checked ? "✓" : "";
}

function updateProgress() {
  const n = state.ariella.size;
  document.getElementById("bar-ariella").style.width = `${(n / 50) * 100}%`;
  document.getElementById("count-ariella").textContent = `${n} / 50 activities`;
  const el = document.getElementById("patch-ariella");
  el.textContent  = n >= 25 ? "🏅 Patch earned!" : `${25 - n} more for patch`;
  el.className    = `pc-patch${n >= 25 ? " earned" : ""}`;
}

// ── TROOP ─────────────────────────────────────────────────────────────────────

function ageOn(birthdayStr, refDate) {
  const b = new Date(birthdayStr + "T00:00:00");
  let age = refDate.getFullYear() - b.getFullYear();
  const m = refDate.getMonth() - b.getMonth();
  if (m < 0 || (m === 0 && refDate.getDate() < b.getDate())) age--;
  return age;
}

function daysToNextBirthday(birthdayStr) {
  const b = new Date(birthdayStr + "T00:00:00");
  let next = new Date(TODAY.getFullYear(), b.getMonth(), b.getDate());
  if (next <= TODAY) next.setFullYear(TODAY.getFullYear() + 1);
  return Math.round((next - TODAY) / 86400000);
}

function initials(name) {
  const parts = name.trim().split(/\s+/);
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function avatarColor(name) {
  const palette = ["#00843D","#1565C0","#6A1B9A","#E65100","#00695C","#AD1457","#4527A0","#37474F","#BF360C","#1B5E20"];
  let n = 0;
  for (let i = 0; i < name.length; i++) n += name.charCodeAt(i);
  return palette[n % palette.length];
}

function tel(phone) {
  if (!phone) return "";
  const digits = phone.replace(/\D/g, "");
  return `<a class="member-phone" href="tel:+1${digits}">${phone}</a>`;
}

function renderTroop() {
  const currentAge    = ageOn(ARIELLA.birthday, TODAY);
  const nextBdayDays  = daysToNextBirthday(ARIELLA.birthday);
  const bdayFormatted = new Date(ARIELLA.birthday + "T00:00:00")
    .toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  const nextBdayYear  = TODAY.getMonth() >= 1 ? TODAY.getFullYear() + 1 : TODAY.getFullYear();

  const upcoming = EVENTS.filter(e => daysUntil(e.date) >= 0).sort((a,b) => a.date.localeCompare(b.date));
  const ageRows = upcoming.slice(0, 6).map(e => {
    const age = ageOn(ARIELLA.birthday, new Date(e.date + "T00:00:00"));
    return `<div class="age-row">
      <span class="age-event">${e.program}</span>
      <span class="age-date">${fmtDate(e.date)}</span>
      <span class="age-val">Age ${age}</span>
    </div>`;
  }).join("");

  function girlCard(name) {
    const isAriella = name === ARIELLA.name;
    return `
      <div class="member-card${isAriella ? " is-ariella" : ""}">
        <div class="avatar" style="background:${avatarColor(name)}">${initials(name)}</div>
        <div class="member-info">
          <div class="member-name">${name}${isAriella ? " ⭐" : ""}</div>
        </div>
      </div>`;
  }

  function adultCard(a) {
    const isChris = a.name === "Chris Silva";
    return `
      <div class="member-card${isChris ? " is-ariella" : ""}">
        <div class="avatar adult-avatar" style="background:${avatarColor(a.name)}">${initials(a.name)}</div>
        <div class="member-info">
          <div class="member-name">${a.name}${isChris ? " ⭐" : ""}</div>
          ${a.girl ? `<div class="member-girl">↳ ${a.girl.split(" ")[0]}</div>` : ""}
          ${a.phone ? tel(a.phone) : `<span class="member-phone-na">no number on file</span>`}
        </div>
      </div>`;
  }

  function familyRow(fam) {
    const p = fam.parent;
    const gName = fam.girl;
    const isMine = p.name === "Chris Silva";
    return `
      <div class="family-row${isMine ? " is-mine" : ""}${p.leader ? " is-leader" : ""}">
        <div class="family-parent">
          <div class="avatar adult-avatar" style="background:${avatarColor(p.name)}">${initials(p.name)}</div>
          <div class="member-info">
            ${p.leader ? `<div class="leader-inline-badge">★ Troop Leader</div>` : ""}
            <div class="member-name">${p.name}</div>
            ${tel(p.phone)}
            ${p.email ? `<a class="member-email" href="mailto:${p.email}">${p.email}</a>` : ""}
          </div>
        </div>
        <div class="family-girl">
          <div class="avatar" style="background:${avatarColor(gName)}">${initials(gName)}</div>
          <div class="member-info">
            <div class="member-name">${gName}${gName === ARIELLA.name ? " ⭐" : ""}</div>
            <div class="member-girl-label">🌼 Daisy</div>
          </div>
        </div>
      </div>`;
  }

  document.getElementById("troop-content").innerHTML = `

    <div class="profile-card">
      <div class="profile-trefoil">
        <img src="Assets/Trefoil_White.png" alt="" style="width:48px;filter:brightness(0) invert(1);opacity:0.9">
      </div>
      <div class="profile-info">
        <div class="profile-name">${ARIELLA.name}</div>
        <div class="profile-level">🌼 ${ARIELLA.level} · Troop 55805 · GSCCC</div>
        <div class="profile-bday">🎂 Born ${bdayFormatted} · <strong>Age ${currentAge}</strong></div>
        <div class="profile-next">🎉 Next birthday: Feb 4, ${nextBdayYear} · ${nextBdayDays} days away</div>
      </div>
    </div>

    <div class="age-table-card">
      <div class="age-table-title">Ariella's Age at Upcoming Events</div>
      ${ageRows}
      ${upcoming.length > 6 ? `<div class="age-more">+ ${upcoming.length - 6} more events</div>` : ""}
    </div>

    <div class="family-list">
      <div class="family-list-header">
        <span>👤 Parent · Phone</span>
        <span>🌼 Girl Scout</span>
      </div>
      ${TROOP_FAMILIES.map(familyRow).join("")}
    </div>`;
}

// ── WIRE UP ───────────────────────────────────────────────────────────────────

// Header stats
const upcomingCount = EVENTS.filter(e => daysUntil(e.date) >= 0).length;
document.getElementById("chip-events").textContent = `${upcomingCount} events upcoming`;

// Main tabs
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach(p => p.classList.add("hidden"));
    tab.classList.add("active");
    document.getElementById(`tab-${tab.dataset.tab}`).classList.remove("hidden");
  });
});

// View toggle (Calendar / List)
document.querySelectorAll(".view-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".view-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const isCalendar = btn.dataset.view === "calendar";
    document.getElementById("view-calendar").classList.toggle("hidden", !isCalendar);
    document.getElementById("view-list").classList.toggle("hidden", isCalendar);
    if (!isCalendar) renderList();
  });
});

// Calendar navigation
document.getElementById("cal-prev").addEventListener("click", () => {
  calMonth--;
  if (calMonth < 0) { calMonth = 11; calYear--; }
  selDate = null;
  renderCalendar();
});
document.getElementById("cal-next").addEventListener("click", () => {
  calMonth++;
  if (calMonth > 11) { calMonth = 0; calYear++; }
  selDate = null;
  renderCalendar();
});

// List view filters
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    listFilter = btn.dataset.filter;
    renderList();
  });
});

// ── INIT ──────────────────────────────────────────────────────────────────────

renderCalendar();
renderChallenge();
renderTroop();
