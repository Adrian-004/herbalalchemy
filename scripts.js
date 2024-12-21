function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');

}

// Modal functionality for team member detail view
const modal = document.getElementById("team-modal");
const closeBtn = document.querySelector(".close-btn");

document.querySelectorAll(".team-member").forEach((member) => {
    member.addEventListener("click", function() {
        const name = this.querySelector("h3").textContent;
        const description = this.querySelector("p").textContent;

        // Set modal content
        document.getElementById("modal-name").textContent = name;
        document.getElementById("modal-description").textContent = description;

        // Show the modal
        modal.style.display = "block";
    });
});

let currentIndex = 0;

function moveSlide(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    // Remove 'active' class from the current center item
    items[currentIndex].classList.remove('active');

    // Update the current index based on direction
    currentIndex = (currentIndex + direction + totalItems) % totalItems;

    // Add 'active' class to the new center item
    items[currentIndex].classList.add('active');

    // Move the carousel wrapper (for sliding effect)
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${currentIndex * 30}%)`;
}

// Auto-slide every 5 seconds (optional)
setInterval(() => moveSlide(1), 2000);






