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

            // Google Apps Script Web App URL
            const scriptURL = 'https://script.google.com/macros/s/AKfycbynUbo09143-mDwTujcLwbOihU1lNMu6nDNyqos5hV1ImBJrlr-Z9fe1QptWneJOhi4/exec';

            const formData = new FormData();
            formData.append('name', document.getElementById('name').value);
            formData.append('company', document.getElementById('company').value);
            formData.append('email', document.getElementById('email').value);
            formData.append('phone', document.getElementById('phone').value);
            formData.append('website', document.getElementById('website').value);
            formData.append('appType', document.getElementById('appType').value);
            
            const apiSelect = document.getElementById('apiTesting');
            formData.append('apiTesting', apiSelect ? apiSelect.value : '');
            
            const scopeSelect = document.getElementById('scope');
            formData.append('scope', scopeSelect ? scopeSelect.value : '');

            // Change button text to indicate loading
            const submitBtn = vaptForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.innerHTML = 'Submitting...';
            submitBtn.disabled = true;

            fetch(scriptURL, { method: 'POST', body: formData })
                .then(response => {
                    console.log('Success!', response);
                    
                    // Show success modal
                    vaptForm.style.display = 'none';
                    const successPopup = document.getElementById('successPopup');
                    if (successPopup) {
                        successPopup.style.display = 'flex';
                    } else {
                        alert("FORM SUBMITTED SUCCESSFULLY");
                    }
                    
                    // Optional: Google Analytics tracking
                    if (typeof gtag === 'function') {
                        gtag('event', 'generate_lead', {
                            'event_category': 'form',
                            'event_label': 'VAPT_Assessment_Request'
                        });
                    }
                })
                .catch(error => {
                    console.error('Error!', error.message);
                    alert("There was an error submitting the form. Please try again.");
                    submitBtn.innerHTML = originalBtnText;
                    submitBtn.disabled = false;
                });
        });
    }
});
