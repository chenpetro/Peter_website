// const email = document.querySelector('.contacts__list__item__text');

// // Obfuscate email to prevent scraping
// email.addEventListener('click', (e) => {
// email.write('<a href="mailto:' + 'contact' + '@' + 'peteruebersax.ch">' + 'contact@peteruebersax.ch' + '</a>');
// })

document.addEventListener('DOMContentLoaded', function() {
  const link = document.getElementById('email-link');
  if (link) {
    const user = 'contact';
    const domain = 'peteruebersax.ch';
    link.href = 'mailto:' + user + '@' + domain;
    link.textContent = user + '@' + domain;
  }
});
