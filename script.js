document.addEventListener('DOMContentLoaded', (event) => {
    const accordionItems = document.querySelectorAll('.accordion-title');

    accordionItems.forEach(item => {
        item.addEventListener('click', function() {
            const panel = this.nextElementSibling;
            panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

function toggleAccordion(index) {
    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel => {
        if (panel.classList.contains(`panel${index}`)) {
            panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
        } else {
            panel.style.display = 'none';
        }
    });
}
