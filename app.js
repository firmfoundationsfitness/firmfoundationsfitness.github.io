const programLinks = {
  foundations: {
    trial: "/coming-soon.html?program=Foundations&path=free-trial",
    purchase: "/coming-soon.html?program=Foundations&path=full-program"
  },
  athlete: {
    trial: "/coming-soon.html?program=Athlete&path=free-trial",
    purchase: "/coming-soon.html?program=Athlete&path=full-program"
  },
  busy: {
    trial: "/coming-soon.html?program=Busy%20People&path=free-trial",
    purchase: "/coming-soon.html?program=Busy%20People&path=full-program"
  },
  firstTimers: {
    trial: "/coming-soon.html?program=First-Timers&path=free-trial",
    purchase: "/coming-soon.html?program=First-Timers&path=full-program"
  },
  fortyPlus: {
    trial: "/coming-soon.html?program=Foundations%2040%2B&path=free-trial",
    purchase: "/coming-soon.html?program=Foundations%2040%2B&path=full-program"
  },
  deskToStrong: {
    trial: "/coming-soon.html?program=Desk%20to%20Strong&path=free-trial",
    purchase: "/coming-soon.html?program=Desk%20to%20Strong&path=full-program"
  },
  runStrong: {
    trial: "/coming-soon.html?program=Run%20Strong&path=free-trial",
    purchase: "/coming-soon.html?program=Run%20Strong&path=full-program"
  },
  garageAthlete: {
    trial: "/coming-soon.html?program=Garage%20Athlete&path=free-trial",
    purchase: "/coming-soon.html?program=Garage%20Athlete&path=full-program"
  },
  hybrid: {
    trial: "/coming-soon.html?program=The%20Hybrid%20Foundation&path=free-trial",
    purchase: "/coming-soon.html?program=The%20Hybrid%20Foundation&path=full-program"
  },
  mobility: {
    trial: "/coming-soon.html?program=Mobility%20Foundation&path=free-trial",
    purchase: "/coming-soon.html?program=Mobility%20Foundation&path=full-program"
  }
};

const programs = [
  {
    id: "foundations",
    name: "Foundations",
    level: "Beginner",
    duration: "12 weeks",
    time: "30-40 min",
    equipment: "Minimal",
    price: "$30",
    bestFor: "Beginners who want a clear, progressive strength plan.",
    summary: "Learn the core movement patterns, build consistency, and gain confidence without overcomplicating the start.",
    goals: ["consistency", "strength", "beginner", "getting-back"],
    featured: true
  },
  {
    id: "athlete",
    name: "Athlete",
    level: "Athlete",
    duration: "12 weeks",
    time: "45-60 min",
    equipment: "Commercial",
    price: "$30",
    bestFor: "Athletes chasing power, explosiveness, and rotation.",
    summary: "A functional gym-based plan built around strength, speed, rotational work, and smart substitutions.",
    goals: ["power", "strength", "athletic", "commercial"]
  },
  {
    id: "busy",
    name: "Busy People",
    level: "Beginner",
    duration: "8 weeks",
    time: "20-30 min",
    equipment: "None",
    price: "$30",
    bestFor: "Parents and busy people who need simple wins at home.",
    summary: "Short, low-friction workouts that make consistency realistic when time and energy are limited.",
    goals: ["limited-time", "consistency", "home", "beginner"]
  },
  {
    id: "firstTimers",
    name: "First-Timers",
    level: "Beginner",
    duration: "6 weeks",
    time: "15-25 min",
    equipment: "None",
    price: "$30",
    bestFor: "People starting from zero who need a gentle first step.",
    summary: "A simple ramp-up plan with clear movement practice, recovery, and early confidence built in.",
    goals: ["first-time", "beginner", "home", "limited-time"]
  },
  {
    id: "fortyPlus",
    name: "Foundations 40+",
    level: "Intermediate",
    duration: "8 weeks",
    time: "30-40 min",
    equipment: "Minimal",
    price: "$30",
    bestFor: "Adults who want strength with a joint-friendly pace.",
    summary: "Strength, balance, mobility, and longevity-focused training with scalable intensity.",
    goals: ["joint-friendly", "mobility", "strength", "getting-back"]
  },
  {
    id: "deskToStrong",
    name: "Desk to Strong",
    level: "Beginner",
    duration: "8 weeks",
    time: "25-35 min",
    equipment: "Minimal",
    price: "$30",
    bestFor: "Desk workers who want posture, strength, and energy.",
    summary: "A practical blend of strength, mobility, and movement breaks for people who sit most of the day.",
    goals: ["desk-job", "mobility", "consistency", "strength"]
  },
  {
    id: "runStrong",
    name: "Run Strong",
    level: "Intermediate",
    duration: "10 weeks",
    time: "35-50 min",
    equipment: "Minimal",
    price: "$30",
    bestFor: "Runners who want stronger legs, hips, and durability.",
    summary: "Strength and mobility work that supports running without crowding out weekly mileage.",
    goals: ["running", "mobility", "strength", "conditioning"]
  },
  {
    id: "garageAthlete",
    name: "Garage Athlete",
    level: "Experienced",
    duration: "12 weeks",
    time: "40-55 min",
    equipment: "Garage",
    price: "$30",
    bestFor: "Home-gym athletes who want structure and intensity.",
    summary: "Strength and conditioning using garage gym staples with flexible substitutions.",
    goals: ["garage", "conditioning", "strength", "experienced"]
  },
  {
    id: "hybrid",
    name: "The Hybrid Foundation",
    level: "Experienced",
    duration: "10 weeks",
    time: "45-60 min",
    equipment: "Commercial",
    price: "$30",
    bestFor: "People who want strength, conditioning, and grit together.",
    summary: "A balanced blend of lifting, engines, carries, intervals, and durable everyday athleticism.",
    goals: ["hybrid", "conditioning", "strength", "commercial"]
  },
  {
    id: "mobility",
    name: "Mobility Foundation",
    level: "Beginner",
    duration: "6 weeks",
    time: "15-30 min",
    equipment: "Minimal",
    price: "$30",
    bestFor: "Anyone who wants to move better before training harder.",
    summary: "Focused mobility and control sessions that pair well with any strength or running plan.",
    goals: ["mobility", "joint-friendly", "limited-time", "beginner"]
  }
];

const questions = [
  {
    title: "Where are you starting from?",
    help: "Choose the answer that best describes your current fitness rhythm.",
    mode: "single",
    key: "experience",
    options: [
      { label: "Brand new", value: "first-time", detail: "I need simple, clear guidance from the beginning." },
      { label: "Getting back into it", value: "getting-back", detail: "I have trained before, but I need to rebuild consistency." },
      { label: "Consistent but need structure", value: "intermediate", detail: "I work out, but I want a better plan." },
      { label: "Experienced athlete/lifter", value: "experienced", detail: "I want performance, strength, or conditioning." }
    ]
  },
  {
    title: "What is your main goal right now?",
    help: "Pick the one that matters most. You can compare others later.",
    mode: "single",
    key: "primaryGoal",
    options: [
      { label: "Build consistency", value: "consistency", detail: "I want something realistic I can stick with." },
      { label: "Get stronger", value: "strength", detail: "I want measurable strength progress." },
      { label: "Improve athletic performance", value: "power", detail: "I want explosiveness, speed, and rotation." },
      { label: "Move and feel better", value: "mobility", detail: "I want mobility, control, and joint-friendly training." },
      { label: "Support running/cardio", value: "running", detail: "I want strength that supports endurance." }
    ]
  },
  {
    title: "What equipment do you have?",
    help: "Choose every option you can regularly use.",
    mode: "multi",
    key: "equipment",
    options: [
      { label: "No equipment", value: "home", detail: "Bodyweight only." },
      { label: "A few basics", value: "minimal", detail: "Dumbbells, bands, kettlebell, or similar." },
      { label: "Garage gym", value: "garage", detail: "Some weights or larger equipment at home." },
      { label: "Commercial gym", value: "commercial", detail: "Full gym access." }
    ]
  },
  {
    title: "How much time do you realistically have?",
    help: "Choose what you could repeat most weeks.",
    mode: "single",
    key: "time",
    options: [
      { label: "15-25 minutes", value: "short", detail: "Short and sustainable." },
      { label: "25-40 minutes", value: "moderate", detail: "A balanced training window." },
      { label: "40-60 minutes", value: "long", detail: "More complete training sessions." }
    ]
  },
  {
    title: "Anything important to account for?",
    help: "Choose every answer that applies.",
    mode: "multi",
    key: "considerations",
    options: [
      { label: "Desk job/stiffness", value: "desk-job", detail: "I sit a lot and need to move better." },
      { label: "Joint aches", value: "joint-friendly", detail: "I want smart, sustainable training." },
      { label: "Busy schedule", value: "busy", detail: "I need something efficient." },
      { label: "Training for sport", value: "sport", detail: "I want athletic carryover." },
      { label: "No major considerations", value: "none", detail: "Just give me the best fit." }
    ]
  }
];

const state = {
  search: "",
  level: "all",
  equipment: "all",
  selectedCompare: [],
  answers: {},
  questionIndex: 0
};

const grid = document.querySelector("#program-grid");
const searchInput = document.querySelector("#program-search");
const levelFilter = document.querySelector("#level-filter");
const equipmentFilter = document.querySelector("#equipment-filter");
const compareEmpty = document.querySelector("#compare-empty");
const compareWrap = document.querySelector("#compare-table-wrap");
const compareTable = document.querySelector("#compare-table");
const clearCompare = document.querySelector("#clear-compare");
const questionProgress = document.querySelector("#question-progress");
const progressFill = document.querySelector("#progress-fill");
const questionTitle = document.querySelector("#question-title");
const questionHelp = document.querySelector("#question-help");
const answerList = document.querySelector("#answer-list");
const backQuestion = document.querySelector("#back-question");
const nextQuestion = document.querySelector("#next-question");
const resetQuiz = document.querySelector("#reset-quiz");
const recommendationPanel = document.querySelector("#recommendation-panel");
const routeToast = document.querySelector("#route-toast");
const compareBar = document.querySelector("#compare-bar");
const compareCount = document.querySelector("#compare-count");
const goCompare = document.querySelector("#go-compare");

function getSearchBlob(program) {
  return [
    program.name,
    program.level,
    program.duration,
    program.time,
    program.equipment,
    program.bestFor,
    program.summary,
    ...program.goals
  ].join(" ").toLowerCase();
}

function getFilteredPrograms() {
  const query = state.search.trim().toLowerCase();
  return programs.filter((program) => {
    const matchesSearch = !query || getSearchBlob(program).includes(query);
    const matchesLevel = state.level === "all" || program.level === state.level;
    const matchesEquipment = state.equipment === "all" || program.equipment === state.equipment;
    return matchesSearch && matchesLevel && matchesEquipment;
  });
}

function renderPrograms() {
  const visiblePrograms = getFilteredPrograms();
  grid.innerHTML = "";

  if (!visiblePrograms.length) {
    grid.innerHTML = '<div class="empty-state">No programs match those filters yet. Try clearing one filter.</div>';
    return;
  }

  visiblePrograms.forEach((program) => {
    const card = document.createElement("article");
    card.className = `program-card${program.featured ? " featured" : ""}`;
    card.innerHTML = `
      <header>
        <div class="program-eyebrow">
          <span class="tag">${program.level}</span>
          <span class="tag">${program.equipment}</span>
          <span class="tag">${program.duration}</span>
        </div>
        <h3>${program.name}</h3>
      </header>
      <p>${program.summary}</p>
      <ul class="program-meta">
        <li><span>Best for</span><strong>${program.bestFor}</strong></li>
        <li><span>Time</span><strong>${program.time}</strong></li>
        <li><span>Full plan</span><strong>${program.price}</strong></li>
      </ul>
      <div class="card-actions">
        <button class="button primary small" type="button" data-route="${program.id}" data-path="trial">Free trial</button>
        <button class="button secondary small" type="button" data-route="${program.id}" data-path="purchase">Buy plan</button>
        <label class="compare-toggle">
          <input type="checkbox" data-compare="${program.id}" ${state.selectedCompare.includes(program.id) ? "checked" : ""}>
          Compare this program
        </label>
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderCompare() {
  const selectedPrograms = state.selectedCompare
    .map((id) => programs.find((program) => program.id === id))
    .filter(Boolean);
  
  if (compareBar && compareCount) {
      compareBar.hidden = selectedPrograms.length === 0;
      compareCount.textContent = selectedPrograms.length;
    }
  
  compareEmpty.hidden = selectedPrograms.length > 0;
  compareWrap.hidden = selectedPrograms.length === 0;

  if (!selectedPrograms.length) {
    compareTable.querySelector("thead").innerHTML = "";
    compareTable.querySelector("tbody").innerHTML = "";
    return;
  }

  compareTable.querySelector("thead").innerHTML = `
    <tr>
      <th>Detail</th>
      ${selectedPrograms.map((program) => `<th>${program.name}</th>`).join("")}
    </tr>
  `;

  const rows = [
    ["Best for", "bestFor"],
    ["Level", "level"],
    ["Equipment", "equipment"],
    ["Length", "duration"],
    ["Session time", "time"],
    ["Full plan CTA", "price"],
    ["Focus", "summary"]
  ];

  compareTable.querySelector("tbody").innerHTML = rows
    .map(([label, key]) => `
      <tr>
        <td>${label}</td>
        ${selectedPrograms.map((program) => `<td>${program[key]}</td>`).join("")}
      </tr>
    `)
    .join("");
}

function toggleCompare(programId, checked) {
  if (checked && !state.selectedCompare.includes(programId)) {
    if (state.selectedCompare.length >= 3) {
      showRouteToast("You can compare up to three programs at a time.");
      renderPrograms();
      return;
    }
    state.selectedCompare.push(programId);
  }

  if (!checked) {
    state.selectedCompare = state.selectedCompare.filter((id) => id !== programId);
  }

  renderPrograms();
  renderCompare();
}

function renderQuestion() {
  const question = questions[state.questionIndex];
  const currentAnswer = state.answers[question.key] || (question.mode === "multi" ? [] : "");

  questionProgress.textContent = `Question ${state.questionIndex + 1}/${questions.length}`;
  progressFill.style.width = `${((state.questionIndex + 1) / questions.length) * 100}%`;
  questionTitle.textContent = question.title;
  questionHelp.textContent = question.help;
  backQuestion.disabled = state.questionIndex === 0;
  nextQuestion.textContent = state.questionIndex === questions.length - 1 ? "Show my match" : "Next";

  answerList.innerHTML = "";
  question.options.forEach((option) => {
    const selected = Array.isArray(currentAnswer)
      ? currentAnswer.includes(option.value)
      : currentAnswer === option.value;
    const button = document.createElement("button");
    button.className = "answer-option";
    button.type = "button";
    button.setAttribute("aria-pressed", String(selected));
    button.dataset.value = option.value;
    button.innerHTML = `
      <span class="indicator">&check;</span>
      <span>
        <strong>${option.label}</strong>
        <small>${option.detail}</small>
      </span>
    `;
    answerList.appendChild(button);
  });
}

function selectAnswer(value) {
  const question = questions[state.questionIndex];
  const existing = state.answers[question.key] || (question.mode === "multi" ? [] : "");

  if (question.mode === "multi") {
    const answers = Array.isArray(existing) ? [...existing] : [];
    state.answers[question.key] = answers.includes(value)
      ? answers.filter((item) => item !== value)
      : [...answers, value];
  } else {
    state.answers[question.key] = value;
  }

  renderQuestion();
}

function canContinue() {
  const question = questions[state.questionIndex];
  const answer = state.answers[question.key];
  return Array.isArray(answer) ? answer.length > 0 : Boolean(answer);
}

function scoreProgram(program) {
  let score = 0;
  const reasons = [];
  const experience = state.answers.experience;
  const primaryGoal = state.answers.primaryGoal;
  const equipment = state.answers.equipment || [];
  const time = state.answers.time;
  const considerations = state.answers.considerations || [];

  if (experience === "first-time") {
    if (program.goals.includes("first-time")) {
      score += 7;
      reasons.push("It is built for a true starting point.");
    }
    if (program.level === "Beginner") {
      score += 4;
    }
  }

  if (experience === "getting-back") {
    if (program.goals.includes("getting-back") || program.goals.includes("consistency")) {
      score += 5;
      reasons.push("It helps rebuild rhythm without overcomplicating the process.");
    }
    if (["Beginner", "Intermediate"].includes(program.level)) {
      score += 3;
    }
  }

  if (experience === "intermediate") {
    if (["Intermediate", "Experienced"].includes(program.level)) {
      score += 4;
      reasons.push("The difficulty matches someone who already has some training rhythm.");
    }
  }

  if (experience === "experienced") {
    if (["Experienced", "Athlete"].includes(program.level)) {
      score += 5;
      reasons.push("It has enough challenge to make progress feel meaningful.");
    }
  }

  if (primaryGoal && program.goals.includes(primaryGoal)) {
    score += 8;
    reasons.push(`It directly supports your ${primaryGoal.replace("-", " ")} goal.`);
  }

  const equipmentMap = {
    home: ["None"],
    minimal: ["Minimal", "None"],
    garage: ["Garage", "Minimal", "None"],
    commercial: ["Commercial", "Garage", "Minimal", "None"]
  };

  equipment.forEach((item) => {
    if (equipmentMap[item]?.includes(program.equipment)) {
      score += 3;
    }
  });

  if (time === "short" && ["15-25 min", "15-30 min", "20-30 min"].includes(program.time)) {
    score += 4;
    reasons.push("The sessions fit a tighter schedule.");
  }

  if (time === "moderate" && ["25-35 min", "30-40 min", "35-50 min"].includes(program.time)) {
    score += 3;
    reasons.push("The training time fits a realistic weekly rhythm.");
  }

  if (time === "long" && ["40-55 min", "45-60 min", "35-50 min"].includes(program.time)) {
    score += 3;
    reasons.push("It uses the extra time for fuller training sessions.");
  }

  considerations.forEach((item) => {
    if (item !== "none" && program.goals.includes(item)) {
      score += 5;
      reasons.push(`It accounts for ${item.replace("-", " ")}.`);
    }
  });

  if (considerations.includes("busy") && ["15-25 min", "15-30 min", "20-30 min", "25-35 min"].includes(program.time)) {
    score += 4;
    reasons.push("It should be easier to sustain in a busy season.");
  }

  if (considerations.includes("sport") && program.goals.includes("power")) {
    score += 5;
    reasons.push("It has stronger carryover for athletic performance.");
  }

  if (program.featured) {
    score += 1;
  }

  return {
    ...program,
    score,
    reasons: [...new Set(reasons)].slice(0, 4)
  };
}

function renderRecommendation() {
  const scored = programs
    .map(scoreProgram)
    .sort((a, b) => b.score - a.score);
  const top = scored[0];
  const alternatives = scored.slice(1, 3);
  const percent = Math.max(76, Math.min(98, Math.round((top.score / (top.score + 8)) * 100)));

  recommendationPanel.innerHTML = `
    <p class="kicker">Recommendation</p>
    <span class="match-score">${percent}% match</span>
    <h3>${top.name}</h3>
    <p>${top.bestFor}</p>
    <ul class="reason-list">
      ${(top.reasons.length ? top.reasons : ["This is the cleanest match based on your answers."])
        .map((reason) => `<li>${reason}</li>`)
        .join("")}
    </ul>
    <div class="hero-actions">
      <button class="button primary" type="button" data-route="${top.id}" data-path="trial">Start free trial</button>
      <button class="button light" type="button" data-route="${top.id}" data-path="purchase">Buy full plan</button>
    </div>
    <p>Also worth comparing: ${alternatives.map((program) => program.name).join(" and ")}.</p>
  `;

  if (!state.selectedCompare.includes(top.id)) {
    state.selectedCompare = [top.id, ...state.selectedCompare].slice(0, 3);
    renderPrograms();
    renderCompare();
  }
}

function showRouteToast(message) {
  routeToast.textContent = message;
  routeToast.hidden = false;
  window.clearTimeout(showRouteToast.timeout);
  showRouteToast.timeout = window.setTimeout(() => {
    routeToast.hidden = true;
  }, 4200);
}

function routeTo(programId, path) {
  const program = programs.find((item) => item.id === programId);
  if (!program) return;
  const url = programLinks[programId][path];
  window.location.hash = `${path}-${programId}`;
  showRouteToast(`${program.name} ${path === "trial" ? "free trial" : "purchase"} route ready: ${url}`);
}

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderPrograms();
});

levelFilter.addEventListener("change", (event) => {
  state.level = event.target.value;
  renderPrograms();
});

equipmentFilter.addEventListener("change", (event) => {
  state.equipment = event.target.value;
  renderPrograms();
});

grid.addEventListener("click", (event) => {
  const routeButton = event.target.closest("[data-route]");
  if (routeButton) {
    routeTo(routeButton.dataset.route, routeButton.dataset.path);
  }
});

grid.addEventListener("change", (event) => {
  const checkbox = event.target.closest("[data-compare]");
  if (checkbox) {
    toggleCompare(checkbox.dataset.compare, checkbox.checked);
  }
});

answerList.addEventListener("click", (event) => {
  const button = event.target.closest(".answer-option");
  if (button) {
    selectAnswer(button.dataset.value);
  }
});

backQuestion.addEventListener("click", () => {
  if (state.questionIndex > 0) {
    state.questionIndex -= 1;
    renderQuestion();
  }
});

nextQuestion.addEventListener("click", () => {
  if (!canContinue()) {
    showRouteToast("Choose at least one answer to keep going.");
    return;
  }

  if (state.questionIndex < questions.length - 1) {
    state.questionIndex += 1;
    renderQuestion();
    return;
  }

  renderRecommendation();
  document.querySelector("#recommendation-panel").scrollIntoView({ behavior: "smooth", block: "center" });
});

resetQuiz.addEventListener("click", () => {
  state.answers = {};
  state.questionIndex = 0;
  recommendationPanel.innerHTML = `
    <p class="kicker">Recommendation</p>
    <h3>Your match will appear here.</h3>
    <p>As you answer, the catalog will narrow toward the path that gives you the clearest next step.</p>
  `;
  renderQuestion();
});

clearCompare.addEventListener("click", () => {
  state.selectedCompare = [];
  renderPrograms();
  renderCompare();
});

recommendationPanel.addEventListener("click", (event) => {
  const routeButton = event.target.closest("[data-route]");
  if (routeButton) {
    routeTo(routeButton.dataset.route, routeButton.dataset.path);
  }
});

document.querySelector("#global-trial-link").addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector("#programs").scrollIntoView({ behavior: "smooth" });
  showRouteToast("Choose any program card and select Free trial.");
});

document.querySelector("#global-buy-link").addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector("#programs").scrollIntoView({ behavior: "smooth" });
  showRouteToast("Choose any program card and select Buy plan.");
});

goCompare?.addEventListener("click", () => {
  document.querySelector("#compare").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

renderPrograms();
renderCompare();
renderQuestion();
