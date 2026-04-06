document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll("nav ul li a");
  const header = document.querySelector('.fixed-header');

  links.forEach(link => {
    link.addEventListener("click", smoothScroll);
  });

  function smoothScroll(e) {
    e.preventDefault();

    const targetId = e.target.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    
    const headerHeight = header.offsetHeight;
    const offset = headerHeight + 20; 
    
    const targetPosition = targetSection.offsetTop - offset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  }
});
