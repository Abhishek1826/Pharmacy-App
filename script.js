document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const loginPage = document.getElementById('loginPage');
    const homePage = document.getElementById('homePage');
    const ordersLink = document.getElementById('ordersLink');
    const productsLink = document.getElementById('productsLink');
    const usersLink = document.getElementById('usersLink');

    const loginStatus = localStorage.getItem('loginStatus') === "true";

    const showPage = (pageId) => {
        loginPage.classList.add('hidden');
        homePage.classList.add('hidden');
        document.getElementById(pageId).classList.remove('hidden');
    };

    if (loginStatus) {
        showPage('homePage');
    } else {
        showPage('loginPage');
    }

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;

        if (username === 'abhishek' && password === 'abhishek') {
            alert('Login successful!');
            localStorage.setItem('loginStatus', "true");
            showPage('homePage');
            setTimeout(function() {
                window.location.href = 'index.html';
            }, 1000); 
        } else {
            alert('Invalid username or password');
        }
    });

    ordersLink.addEventListener('click', function() {
        if (loginStatus) {
            alert('Navigating to Orders Page');
        } else {
            alert('Please log in first');
        }
    });

    productsLink.addEventListener('click', function() {
        if (loginStatus) {
            alert('Navigating to Products Page');
        } else {
            alert('Please log in first');
        }
    });

    usersLink.addEventListener('click', function() {
        if (loginStatus) {
            alert('Navigating to Users Page');
        } else {
            alert('Please log in first');
        }
    });
});
