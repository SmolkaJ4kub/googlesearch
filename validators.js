const pageUrl = encodeURIComponent(window.location.href);
const stylesheetUrl = encodeURIComponent(new URL("styles.css", window.location.href).href);

document.querySelector('[data-validator="html"]').href =
  `https://validator.w3.org/nu/?doc=${pageUrl}`;
document.querySelector('[data-validator="css"]').href =
  `https://jigsaw.w3.org/css-validator/validator?uri=${stylesheetUrl}`;
