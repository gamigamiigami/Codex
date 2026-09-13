'use strict';
// Native anchor links keep every preview usable without JavaScript.
document.querySelectorAll('a[href="#prologue"]').forEach(link => {
  link.addEventListener('click', () => {
    const target = document.getElementById('prologue');
    if (target) target.focus({preventScroll:true});
  });
});
