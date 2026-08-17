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


document.querySelector('#program-quiz')?.addEventListener('submit', (event) => {
  event.preventDefault();

  const experience = document.querySelector('#experience').value;
  const goal = document.querySelector('#goal').value;
  const setting = document.querySelector('#setting').value;
  const season = document.querySelector('#season').value;

  let recommendation = 'Foundations';

  if (experience === 'beginner') {
    recommendation = 'Foundations';
  } else if (experience === 'gym-new') {
    recommendation = 'First-Timers';
  } else if (season === '40plus') {
    recommendation = 'Foundations 40+';
  } else if (season === 'desk') {
    recommendation = 'Desk to Strong';
  } else if (setting === 'garage') {
    recommendation = 'Garage Athlete';
  } else if (goal === 'running') {
    recommendation = 'Run Strong';
  } else if (goal === 'mobility') {
    recommendation = 'Mobility Foundation';
  } else if (goal === 'performance') {
    recommendation = 'Athlete';
  } else if (season === 'busy') {
    recommendation = 'Parents/Busy People';
  } else if (setting === 'commercial' && experience === 'experienced') {
    recommendation = 'The Hybrid Foundation';
  }

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
  result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});
