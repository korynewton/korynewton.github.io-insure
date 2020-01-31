function hamburgerHelper() {
  const hidden = document.querySelector('.hamburger img.hidden');
  const active = document.querySelector('.hamburger img:not(.hidden)');
  const dropdown = document.querySelector('main div.dropdown');
  hidden.classList.toggle('hidden');
  active.classList.toggle('hidden');
  dropdown.classList.toggle('hidden');
}
