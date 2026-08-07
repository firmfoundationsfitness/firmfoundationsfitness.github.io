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
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && !modal.hidden) closeModal(); });

document.querySelector('#visit-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('#name').value.trim().split(' ')[0] || 'friend';
  const note = document.querySelector('#form-note');
  note.textContent = `Thanks, ${name}. We’ll be in touch soon.`;
  note.style.fontWeight = '700';
  event.target.querySelector('button').textContent = 'You’re on the list ✓';
});
