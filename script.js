document.addEventListener('DOMContentLoaded', () => {
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Form submission handling
    const vaptForm = document.getElementById('vaptForm');
    const formSuccess = document.getElementById('formSuccess');

    if (vaptForm) {
        vaptForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Here you would typically gather the form data and send it to your server/CRM via fetch or XMLHttpRequest
            // Example data gathering:
            const formData = {
                name: document.getElementById('name').value,
                company: document.getElementById('company').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                website: document.getElementById('website').value,
                appType: document.getElementById('appType').value,
                apiTesting: document.querySelector('input[name="apiTesting"]:checked')?.value || 'No'
            };

            // Log data for demonstration purposes
            console.log('Form submission data:', formData);

            // Simulate API call and success response
            vaptForm.style.display = 'none';
            formSuccess.classList.remove('hidden');
            
            // Optional: Send data to Google Analytics/Tag Manager for conversion tracking
            if (typeof gtag === 'function') {
                gtag('event', 'generate_lead', {
                    'event_category': 'form',
                    'event_label': 'VAPT_Assessment_Request'
                });
            }
        });
    }
});
