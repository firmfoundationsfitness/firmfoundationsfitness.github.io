const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menuToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

const modal = document.querySelector('.modal');
const closeModal = () => { modal.hidden = true; document.body.style.overflow = ''; };
document.querySelectorAll('.play-button').forEach((button) => button.addEventListener('click', () => {
  modal.hidden = false; document.body.style.overflow = 'hidden'; document.querySelector('.close-modal').focus();
}));
document.querySelector('.close-modal')?.addEventListener('click', closeModal);
modal?.addEventListener('click', (event) => { if (event.target === modal) closeModal(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && modal && !modal.hidden) closeModal(); });

document.querySelector('#visit-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('#name').value.trim().split(' ')[0] || 'friend';
  const note = document.querySelector('#form-note');
  note.textContent = `Thanks, ${name}. We’ll be in touch soon.`;
  note.style.fontWeight = '700';
  event.target.querySelector('button').textContent = 'You’re on the list ✓';
});

document.querySelectorAll('.catalog-card').forEach((card) => {
  const program = card.querySelector('h3')?.textContent.trim();
  if (!program) return;
  card.setAttribute('role', 'link');
  card.setAttribute('tabindex', '0');
  card.addEventListener('click', () => {
    window.location.href = `coming-soon.html?program=${encodeURIComponent(program)}`;
  });
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      window.location.href = `coming-soon.html?program=${encodeURIComponent(program)}`;
    }
  });
});

const params = new URLSearchParams(window.location.search);
const selectedProgram = params.get('program') || 'Your program';
const programName = document.querySelector('#program-name');
const programNameInline = document.querySelector('#program-name-inline');
const waitlistProgram = document.querySelector('#waitlist-program');
const waitlistSubject = document.querySelector('#waitlist-subject');
if (programName) programName.textContent = selectedProgram;
if (programNameInline) programNameInline.textContent = selectedProgram;
if (waitlistProgram) waitlistProgram.value = selectedProgram;
if (waitlistSubject) waitlistSubject.value = `Firm Foundations waitlist request: ${selectedProgram}`;

document.querySelectorAll('.quiz-dropdown').forEach((dropdown) => {
  const toggle = dropdown.querySelector('.quiz-dropdown-toggle');

  toggle.addEventListener('click', () => {
    document.querySelectorAll('.quiz-dropdown.open').forEach((otherDropdown) => {
      if (otherDropdown !== dropdown) {
        otherDropdown.classList.remove('open');
      }
    });

    dropdown.classList.toggle('open');
  });
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.quiz-dropdown')) {
    document.querySelectorAll('.quiz-dropdown.open').forEach((dropdown) => {
      dropdown.classList.remove('open');
    });
  }
});

document.querySelector('#program-quiz')?.addEventListener('submit', (event) => {
  event.preventDefault();

  const experience = document.querySelector('#experience').value;
  const goals = [...document.querySelectorAll('input[name="goal"]:checked')]
    .map((input) => input.value);
  const setting = document.querySelector('#setting').value;
  const seasons = [...document.querySelectorAll('input[name="season"]:checked')]
    .map((input) => input.value);

  const scores = {
    'Foundations': 0,
    'First-Timers': 0,
    'Foundations 40+': 0,
    'Desk to Strong': 0,
    'Parents/Busy People': 0,
    'Athlete': 0,
    'Run Strong': 0,
    'Mobility Foundation': 0,
    'The Hybrid Foundation': 0,
    'Garage Athlete': 0
  };

  // Experience
  if (experience === 'beginner') {
    scores['Foundations'] += 6;
  }

  if (experience === 'gym-new') {
    scores['First-Timers'] += 6;
  }

  if (experience === 'experienced') {
    scores['The Hybrid Foundation'] += 2;
    scores['Athlete'] += 2;
  }

  if (experience === 'advanced') {
    scores['Athlete'] += 4;
    scores['The Hybrid Foundation'] += 3;
  }

  // Training location
  if (setting === 'home') {
    scores['Foundations'] += 2;
    scores['Parents/Busy People'] += 2;
    scores['Desk to Strong'] += 1;
  }

  if (setting === 'commercial') {
    scores['First-Timers'] += 2;
    scores['Athlete'] += 2;
    scores['The Hybrid Foundation'] += 2;
  }

  if (setting === 'garage') {
    scores['Garage Athlete'] += 6;
  }

  // Goals
  goals.forEach((goal) => {
    if (goal === 'general') {
      scores['Foundations'] += 3;
      scores['The Hybrid Foundation'] += 2;
    }

    if (goal === 'performance') {
      scores['Athlete'] += 6;
    }

    if (goal === 'running') {
      scores['Run Strong'] += 6;
    }

    if (goal === 'mobility') {
      scores['Mobility Foundation'] += 6;
    }

    if (goal === 'hybrid') {
      scores['The Hybrid Foundation'] += 6;
    }
  });

  // Current situation and season of life
  seasons.forEach((season) => {
    if (season === 'beginner') {
      scores['Foundations'] += 7;
    }

    if (season === 'busy') {
      scores['Parents/Busy People'] += 6;
    }

    if (season === 'desk') {
      scores['Desk to Strong'] += 6;
    }

    if (season === 'joint') {
      scores['Foundations 40+'] += 4;
      scores['Mobility Foundation'] += 4;
    }

    if (season === '55plus') {
      scores['Foundations 40+'] += 8;
    }

    if (season === 'athlete') {
      scores['Athlete'] += 8;
    }

    if (season === 'mobility') {
      scores['Mobility Foundation'] += 6;
    }

    if (season === 'returning') {
      scores['First-Timers'] += 5;
      scores['Foundations'] += 2;
    }

    if (season === 'running') {
      scores['Run Strong'] += 7;
    }

    if (season === 'hybrid') {
      scores['The Hybrid Foundation'] += 7;
    }
  });

  const recommendation = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])[0][0];

  const result = document.querySelector('#program-result');
  const programLink = `coming-soon.html?program=${encodeURIComponent(recommendation)}`;

  result.innerHTML = `
    <strong>We recommend ${recommendation}.</strong>
    <p>This program appears to be the best fit based on your answers.</p>
    <a class="button button-blue" href="${programLink}">
      View this program <span>↗</span>
    </a>
  `;

  result.hidden = false;
  result.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest'
  });
});
