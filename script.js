// Hàm tạo particle animation
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    for (let i = 0; i < 25; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 3 + 's';
        particlesContainer.appendChild(particle);
    }
}

// Xử lý nút mũi tên đầu tiên
document.getElementById('first-arrow').addEventListener('click', function() {
    const welcome = document.querySelector('#main-container > h1');
    const firstArrow = document.getElementById('first-arrow');
    welcome.classList.add('transition');
    firstArrow.classList.add('transition');
    setTimeout(() => {
        welcome.style.display = 'none';
        firstArrow.style.display = 'none';
        document.getElementById('map-section').classList.remove('hidden');
        document.getElementById('map-section').classList.add('show');
        document.getElementById('second-arrow').classList.remove('hidden');
    }, 500);
});

// Xử lý nút mũi tên thứ hai
document.getElementById('second-arrow').addEventListener('click', function() {
    const mapSection = document.getElementById('map-section');
    mapSection.classList.add('transition');
    setTimeout(() => {
        mapSection.style.display = 'none';
        document.getElementById('invitation-section').classList.remove('hidden');
        document.getElementById('invitation-section').classList.add('show');
        createParticles();
    }, 500);
});
