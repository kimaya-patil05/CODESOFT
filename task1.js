 // Mobile menu toggle
document.getElementById('mobile-menu').addEventListener('click', function() {
    document.getElementById('nav-menu').classList.toggle('show');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('nav-menu').classList.remove('show');
    });
});

// Header background on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(10, 10, 10, 0.98)';
    } else {
        header.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
    }
});

// Resume download functionality (USE THIS ONE - with loading states)
document.getElementById('download-resume').addEventListener('click', function(e) {
    e.preventDefault();
    
    const downloadBtn = this;
    const loading = document.getElementById('resume-loading');
    const success = document.getElementById('resume-success');
    
    // Show loading
    downloadBtn.style.display = 'none';
    loading.style.display = 'block';
    success.style.display = 'none';
    
    // Simulate processing time
    setTimeout(function() {
        // Create resume content
        const resumeContent = `
KIMAYA KAILAS PATIL
============================

CONTACT INFORMATION
-------------------
Email: kimayakpatil18@gmail.com
LinkedIn: https://www.linkedin.com/in/kimaya-patil-a1699328b/
GitHub: https://github.com/1171-bcastudend
Location: Jalgaon, Maharashtra, India

EDUCATION
---------
BCA | M J College, Jalgaon | CGPA: X.X | 2026
XII (State Board) | M J College, Jalgaon | 61.83% | 2023
X (State Board) | NEM School | 74.00% | 2021

TECHNICAL SKILLS
----------------
Frontend: HTML5, CSS3, JavaScript (ES6+), Bootstrap, Responsive Web Design
Backend: PHP (Core & OOP), MySQL, REST API integration, JSON handling
Tools & Version Control: Git, GitHub
Currently Learning: MERN Stack, DSA in Java, WordPress, Shopify

PROJECTS
--------
Spotify Clone
- Built a responsive Spotify clone using HTML, CSS, and JavaScript
- Designed a clean UI with functional hamburger menu for smooth navigation
- Focused on front-end development and layout design

CaptureNature Photo Gallery
- Responsive website showcasing beautiful nature photos
- Users can add and display their own images
- Interactive and personalized gallery layout

HOBBIES & INTERESTS
-------------------
- Learning new skills and technologies
- Playing guitar
- Nature walks & listening to music
- Reading and practicing spirituality
        `;
        
        // Create and download file
        const blob = new Blob([resumeContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Kimaya_Patil_Resume.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        // Show success message
        loading.style.display = 'none';
        success.style.display = 'block';
        
        // Reset button after 3 seconds
        setTimeout(function() {
            downloadBtn.style.display = 'inline-block';
            success.style.display = 'none';
        }, 3000);
        
    }, 1500); // 1.5 second delay to simulate processing
});

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // In a real application, you would send the form data to a server here
    // For this demo, we'll just show the success message
    
    // Show the success modal
    document.getElementById('success-modal').style.display = 'flex';
    
    // Reset the form
    this.reset();
});

// Close modal functionality
document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('success-modal').style.display = 'none';
});

document.getElementById('modal-ok').addEventListener('click', function() {
    document.getElementById('success-modal').style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    const modal = document.getElementById('success-modal');
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});