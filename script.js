
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('[data-enquiry-form]').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const name = (data.get('name') || '').toString().trim();
    const email = (data.get('email') || '').toString().trim();
    const interest = (data.get('interest') || 'General enquiry').toString().trim();
    const message = (data.get('message') || '').toString().trim();
    const phone = form.dataset.phone || '';
    const text = `Englighter enquiry%0AName: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0AInterested in: ${encodeURIComponent(interest)}%0AMessage: ${encodeURIComponent(message)}`;
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank', 'noopener');
  });
});
