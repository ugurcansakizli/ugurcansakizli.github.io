document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll("nav ul li a");

  links.forEach(link => {
    link.addEventListener("click", smoothScroll);
  });

  function smoothScroll(e) {
    e.preventDefault();

    const targetId = e.target.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    
    // Calculate the target position by subtracting a few pixels from the top of the section
    const offset = 15; // Adjust this value as needed
    const targetPosition = targetSection.offsetTop - offset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  }
});
