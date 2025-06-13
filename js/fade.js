  function isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top < window.innerHeight && rect.bottom > 0
      );
    }

    function checkFadeIn() {
      document.querySelectorAll('.fade-in').forEach(el => {
        if (isInViewport(el)) {
          el.classList.add('visible');
        }
      });
    }

    window.addEventListener('scroll', checkFadeIn);
    window.addEventListener('resize', checkFadeIn);
    document.addEventListener('DOMContentLoaded', checkFadeIn);