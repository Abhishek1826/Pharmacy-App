document.addEventListener('DOMContentLoaded', function() {
    const ordersLink = document.querySelector('.menu-item[href="orders.html"]');
    const productsLink = document.querySelector('.menu-item[href="products.html"]');
    const homeLink = document.querySelector('.menu-item[href="index.html"]');
    const logoutLink = document.querySelector('.menu-item[href="#"]');
    const orderCountElement = document.querySelector('#orderCount');
    
    const orderList = document.getElementById('orderList');

    // Sample data for orders
    const orders = [
        {
            "id": "714-69-5617",
            "customerName": "Sally Whebell",
            "orderDate": "07-Aug-2020",
            "orderTime": "2:29 AM",
            "amount": 634.2,
            "orderStatus": "Delivered"
        },
        {
            "id": "752-42-3160",
            "customerName": "Emmery Grizard",
            "orderDate": "11-Mar-2020",
            "orderTime": "3:14 PM",
            "amount": 518.23,
            "orderStatus": "New"
        },
        {
            "id": "671-99-4274",
            "customerName": "Alano Carnaman",
            "orderDate": "09-Oct-2020",
            "orderTime": "11:41 AM",
            "amount": 400.34,
            "orderStatus": "New"
        },
        {
            "id": "359-13-4724",
            "customerName": "Huey Coombes",
            "orderDate": "16-Nov-2020",
            "orderTime": "6:35 PM",
            "amount": 559.06,
            "orderStatus": "Delivered"
        },
        {
            "id": "302-50-0415",
            "customerName": "Rex Pilsworth",
            "orderDate": "26-Feb-2020",
            "orderTime": "2:02 PM",
            "amount": 347.03,
            "orderStatus": "Delivered"
        },
        {
            "id": "332-24-5988",
            "customerName": "Lou Udale",
            "orderDate": "25-Jun-2020",
            "orderTime": "11:41 PM",
            "amount": 645.82,
            "orderStatus": "InTransit"
        },
        {
            "id": "239-32-6080",
            "customerName": "Penni Blight",
            "orderDate": "30-May-2020",
            "orderTime": "8:15 PM",
            "amount": 472.53,
            "orderStatus": "Packed"
        },
        {
            "id": "579-80-0751",
            "customerName": "Elberta Farress",
            "orderDate": "25-Jun-2020",
            "orderTime": "4:42 PM",
            "amount": 774.63,
            "orderStatus": "InTransit"
        },
        {
            "id": "494-62-5297",
            "customerName": "Sumit Jaiswal",
            "orderDate": "27-May-2020",
            "orderTime": "6:33 AM",
            "amount": 785.02,
            "orderStatus": "New"
        },
        {
            "id": "373-65-1147",
            "customerName": "Abhishek Shukla",
            "orderDate": "17-Mar-2020",
            "orderTime": "12:41 PM",
            "amount": 361.99,
            "orderStatus": "Packed"
        },
        {
            "id": "373-65-1146",
            "customerName": "Alexandros Fiddyment",
            "orderDate": "15-Mar-2020",
            "orderTime": "12:42 AM",
            "amount": 461.99,
            "orderStatus": "Packed"
        },
        {
            "id": "559-55-4216",
            "customerName": "Madhuri",
            "orderDate": "22-Jan-2020",
            "orderTime": "5:08 AM",
            "amount": 743.56,
            "orderStatus": "InTransit"
        },
        {
            "id": "749-95-4216",
            "customerName": "Shivshankar",
            "orderDate": "02-Feb-2020",
            "orderTime": "8:18 AM",
            "amount": 992.63,
            "orderStatus": "Packed"
        },
        {
            "id": "589-95-4258",
            "customerName": "Shalini",
            "orderDate": "22-Dec-2019",
            "orderTime": "7:08 AM",
            "amount": 777.35,
            "orderStatus": "InTransit"
        },
        {
            "id": "489-95-4201",
            "customerName": "Ayushi",
            "orderDate": "22-Dec-2019",
            "orderTime": "5:08 AM",
            "amount": 6985.25,
            "orderStatus": "InTransit"
        },
        {
            "id": "859-95-4002",
            "customerName": "Laxmi",
            "orderDate": "08-Jul-2024",
            "orderTime": "5:08 AM",
            "amount": 245.69,
            "orderStatus": "Packed"
        },
        {
            "id": "569-95-4302",
            "customerName": "Shivani",
            "orderDate": "08-Jul-2024",
            "orderTime": "5:08 AM",
            "amount": 333.36,
            "orderStatus": "New"
        },
        {
            "id": "649-95-1246",
            "customerName": "Shubh",
            "orderDate": "08-Jul-2024",
            "orderTime": "5:08 AM",
            "amount": 852.36,
            "orderStatus": "Packed"
        },
        {
            "id": "749-95-3456",
            "customerName": "Suraj",
            "orderDate": "22-Dec-2019",
            "orderTime": "5:08 AM",
            "amount": 666.63,
            "orderStatus": "InTransit"
        },
        {
            "id": "649-95-4444",
            "customerName": "Surya",
            "orderDate": "22-Dec-2019",
            "orderTime": "5:08 AM",
            "amount": 852.63,
            "orderStatus": "InTransit"
        },
        {
            "id": "749-95-3333",
            "customerName": "Shritik",
            "orderDate": "30-Jun-2024",
            "orderTime": "5:08 AM",
            "amount": 152.63,
            "orderStatus": "InTransit"
        },
        {
            "id": "979-95-4216",
            "customerName": "Shaurya",
            "orderDate": "22-Jun-2024",
            "orderTime": "5:08 AM",
            "amount": 352.63,
            "orderStatus": "InTransit"
        },
        {
            "id": "849-95-4218",
            "customerName": "Shakti",
            "orderDate": "08-Jul-2024",
            "orderTime": "5:08 AM",
            "amount": 272.63,
            "orderStatus": "New"
        },
        {
            "id": "649-95-4217",
            "customerName": "Ashish",
            "orderDate": "08-Jul-2024",
            "orderTime": "5:08 AM",
            "amount": 752.63,
            "orderStatus": "New"
        }
    ];
    function renderOrders() {
        orderList.innerHTML = '';
        const filters = Array.from(document.querySelectorAll('.filter-checkbox input[type="checkbox"]'))
                            .filter(input => input.checked)
                            .map(input => input.name);

                            let count = 0;

        orders.forEach(order => {
            if (filters.includes(order.orderStatus)) {
                const row = document.createElement('tr');
                row.classList.add('table-row');
                row.innerHTML = `
                    <td>${order.id}</td>
                    <td>${order.customerName}</td>
                    <td>$${order.amount.toFixed(2)}</td>
                    <td>${order.orderStatus}</td>
                `;
                orderList.appendChild(row);
                count++
            }
        });
        if (orderCountElement) {
            orderCountElement.textContent = count;
        }
    }

    // Set all checkboxes checked by default
    const filterCheckboxes = document.querySelectorAll('.filter-checkbox input[type="checkbox"]');
    filterCheckboxes.forEach(checkbox => {
        checkbox.checked = true; // Set each checkbox to checked
    });

    // Initial render on page load
    renderOrders();

    // Event listener for filtering orders
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', renderOrders);
    });

    // Event listeners for navigation
    ordersLink.addEventListener('click', function(event) {
        event.preventDefault();
        renderOrders();
        showPage('orders');
    });

    productsLink.addEventListener('click', function(event) {
        event.preventDefault();
        showPage('products');
    });

    homeLink.addEventListener('click', function(event) {
        event.preventDefault();
        showPage('home');
    });

    logoutLink.addEventListener('click', function(event) {
        event.preventDefault();
        localStorage.setItem('loginStatus', 'false');
        showPage('login');
    });

    function showPage(page) {
        const pages = document.querySelectorAll('.page-wrapper');
        pages.forEach(pageElement => {
            if (pageElement.id === page + 'Page') {
                pageElement.classList.remove('hidden');
            } else {
                pageElement.classList.add('hidden');
            }
        });
    }
});

// Separate DOMContentLoaded event listener for logout link
document.addEventListener('DOMContentLoaded', function() {
    const logoutLink = document.getElementById('logoutLink');

    logoutLink.addEventListener('click', function(event) {
        event.preventDefault();
        localStorage.setItem('loginStatus', 'false');
        window.location.href = 'login.html'; // Redirect to the login page
    });
});