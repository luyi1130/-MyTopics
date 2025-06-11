
function checkFadeIn() {
    document.querySelectorAll('.fade-in').forEach(el => {
      if (isInViewport(el)) {
        el.classList.add('visible');
      }
      // 沒有 else
    });
  }