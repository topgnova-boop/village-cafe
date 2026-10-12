document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.menu-tab');
  const categories = document.querySelectorAll('.menu-category');
  if (!tabs.length) return;

  function show(name) {
    tabs.forEach((t) => t.classList.toggle('is-active', t.dataset.tab === name));
    categories.forEach((c) => c.classList.toggle('is-active', c.dataset.cat === name));
  }

  tabs.forEach((tab) => tab.addEventListener('click', () => show(tab.dataset.tab)));

  show('brunch-menu');
});
