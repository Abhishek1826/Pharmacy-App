document.addEventListener('DOMContentLoaded', function() {
    const users = [
        {
            "id": 1,
            "profilePic": "https://robohash.org/estinvoluptas.jpg?size=50x50&set=set1",
            "fullName": "Clementius McGillreich",
            "dob": "20-Feb-1997",
            "gender": "Male",
            "currentCity": "Bayambang",
            "currentCountry": "Philippines"
        },
        {
            "id": 2,
            "profilePic": "https://robohash.org/quosquiatenetur.bmp?size=50x50&set=set1",
            "fullName": "Almira Hawson",
            "dob": "26-Jun-1990",
            "gender": "Female",
            "currentCity": "Rousínov",
            "currentCountry": "Czech Republic"
        },
        {
            "id": 3,
            "profilePic": "https://robohash.org/illumcupiditatequia.png?size=50x50&set=set1",
            "fullName": "Ed Bonnesen",
            "dob": "30-Nov-1995",
            "gender": "Male",
            "currentCity": "Kendari",
            "currentCountry": "Indonesia"
        },
        {
            "id": 4,
            "profilePic": "https://robohash.org/quaequibusdamharum.png?size=50x50&set=set1",
            "fullName": "Mozelle Fallawe",
            "dob": "02-Apr-1997",
            "gender": "Female",
            "currentCity": "Nanganga",
            "currentCountry": "Tanzania"
        },
        {
            "id": 5,
            "profilePic": "https://robohash.org/minusdolordolorem.bmp?size=50x50&set=set1",
            "fullName": "Annadiana Fenelon",
            "dob": "10-Apr-1993",
            "gender": "Female",
            "currentCity": "Tân Phú",
            "currentCountry": "Vietnam"
        },
        {
            "id": 6,
            "profilePic": "https://robohash.org/officiisblanditiisdeleniti.bmp?size=50x50&set=set1",
            "fullName": "Rancell O'Rourke",
            "dob": "23-Aug-1999",
            "gender": "Male",
            "currentCity": "Hongshan",
            "currentCountry": "China"
        },
        {
            "id": 7,
            "profilePic": "https://robohash.org/nesciuntsuscipitquo.png?size=50x50&set=set1",
            "fullName": "Sheena Narup",
            "dob": "09-Nov-1990",
            "gender": "Female",
            "currentCity": "Batutua",
            "currentCountry": "Indonesia"
        },
        {
            "id": 8,
            "profilePic": "https://robohash.org/quasiminusexplicabo.png?size=50x50&set=set1",
            "fullName": "Agnesse Vallack",
            "dob": "09-Feb-2000",
            "gender": "Female",
            "currentCity": "Tučepi",
            "currentCountry": "Croatia"
        },
        {
            "id": 9,
            "profilePic": "https://robohash.org/ipsummodiminima.jpg?size=50x50&set=set1",
            "fullName": "Olia Watkinson",
            "dob": "09-Jun-1998",
            "gender": "Female",
            "currentCity": "Komsomol’s’ke",
            "currentCountry": "Ukraine"
        },
        {
            "id": 10,
            "profilePic": "https://robohash.org/quisuntest.bmp?size=50x50&set=set1",
            "fullName": "Adams Castagnone",
            "dob": "19-Oct-2001",
            "gender": "Male",
            "currentCity": "Dārayyā",
            "currentCountry": "Syria"
        },
        {
            "id": 11,
            "profilePic": "https://robohash.org/estmagnitempore.jpg?size=50x50&set=set1",
            "fullName": "Glyn Chatterton",
            "dob": "15-Jun-1995",
            "gender": "Male",
            "currentCity": "Qarāwul",
            "currentCountry": "Afghanistan"
        },
        {
            "id": 12,
            "profilePic": "https://robohash.org/omnisquaeratsequi.png?size=50x50&set=set1",
            "fullName": "Karoly Sedgefield",
            "dob": "19-Dec-1991",
            "gender": "Male",
            "currentCity": "Selaawi",
            "currentCountry": "Indonesia"
        },
        {
            "id": 13,
            "profilePic": "https://robohash.org/reprehenderitquialaudantium.jpg?size=50x50&set=set1",
            "fullName": "Constantino Scanlin",
            "dob": "17-Oct-1991",
            "gender": "Male",
            "currentCity": "Madīnat ash Shamāl",
            "currentCountry": "Qatar"
        },
        {
            "id": 14,
            "profilePic": "https://robohash.org/placeatcumaut.jpg?size=50x50&set=set1",
            "fullName": "Bernardine Applegate",
            "dob": "26-Dec-1996",
            "gender": "Female",
            "currentCity": "San Roque",
            "currentCountry": "Philippines"
        },
        {
            "id": 15,
            "profilePic": "https://robohash.org/rerumquiaccusamus.jpg?size=50x50&set=set1",
            "fullName": "Elnore Gomer",
            "dob": "24-Sep-1992",
            "gender": "Female",
            "currentCity": "Lingquan",
            "currentCountry": "China"
        },
        {
            "id": 16,
            "profilePic": "https://robohash.org/ullamquodest.bmp?size=50x50&set=set1",
            "fullName": "Sherwood Ritelli",
            "dob": "09-Jan-1992",
            "gender": "Male",
            "currentCity": "Lainqu",
            "currentCountry": "China"
        },
        {
            "id": 17,
            "profilePic": "https://robohash.org/perspiciatismollitiasunt.jpg?size=50x50&set=set1",
            "fullName": "Hunter Nacci",
            "dob": "09-Apr-1998",
            "gender": "Male",
            "currentCity": "Yaroslavskiy",
            "currentCountry": "Russia"
        },
        {
            "id": 18,
            "profilePic": "https://robohash.org/exercitationemearumquae.bmp?size=50x50&set=set1",
            "fullName": "Teodora Tremblot",
            "dob": "21-Jan-2000",
            "gender": "Female",
            "currentCity": "Vónitsa",
            "currentCountry": "Greece"
        },
        {
            "id": 19,
            "profilePic": "https://robohash.org/quoatquenam.jpg?size=50x50&set=set1",
            "fullName": "Constancy Smurfitt",
            "dob": "08-Jan-1993",
            "gender": "Female",
            "currentCity": "Tongkiling",
            "currentCountry": "Indonesia"
        },
        {
            "id": 20,
            "profilePic": "https://robohash.org/beataeipsaperspiciatis.bmp?size=50x50&set=set1",
            "fullName": "Jeremias Bettles",
            "dob": "27-Dec-1990",
            "gender": "Male",
            "currentCity": "Chipyela",
            "currentCountry": "Malawi"
        },
        {
            "id": 21,
            "profilePic": "https://robohash.org/earumutab.bmp?size=50x50&set=set1",
            "fullName": "Ernest Aingell",
            "dob": "24-Aug-1992",
            "gender": "Male",
            "currentCity": "Malainen Luma",
            "currentCountry": "Philippines"
        },
        {
            "id": 22,
            "profilePic": "https://robohash.org/utaperiamfacilis.bmp?size=50x50&set=set1",
            "fullName": "Barbaraanne Haygreen",
            "dob": "28-Dec-1999",
            "gender": "Female",
            "currentCity": "Kajanan",
            "currentCountry": "Indonesia"
        },
        {
            "id": 23,
            "profilePic": "https://robohash.org/etmolestiaeinventore.png?size=50x50&set=set1",
            "fullName": "Lian Thorogood",
            "dob": "12-Sep-1996",
            "gender": "Female",
            "currentCity": "Ban Houakhoua",
            "currentCountry": "Laos"
        },
        {
            "id": 24,
            "profilePic": "https://robohash.org/autenimquo.bmp?size=50x50&set=set1",
            "fullName": "Robinett Dankov",
            "dob": "20-Sep-1994",
            "gender": "Female",
            "currentCity": "Midland",
            "currentCountry": "United States"
        },
        {
            "id": 25,
            "profilePic": "https://robohash.org/fugitrerumex.bmp?size=50x50&set=set1",
            "fullName": "Delphine Treagus",
            "dob": "17-Jun-1998",
            "gender": "Female",
            "currentCity": "Navatat",
            "currentCountry": "Philippines"
        },
        {
            "id": 26,
            "profilePic": "https://robohash.org/voluptatibustemporibusanimi.bmp?size=50x50&set=set1",
            "fullName": "Rufus Paz",
            "dob": "29-Nov-2001",
            "gender": "Male",
            "currentCity": "Ishioka",
            "currentCountry": "Japan"
        },
        {
            "id": 27,
            "profilePic": "https://robohash.org/quaeeligendiconsectetur.jpg?size=50x50&set=set1",
            "fullName": "Lea Walenta",
            "dob": "14-Jan-1996",
            "gender": "Female",
            "currentCity": "Suay",
            "currentCountry": "Philippines"
        },
        {
            "id": 28,
            "profilePic": "https://robohash.org/cumqueveroiste.bmp?size=50x50&set=set1",
            "fullName": "Mateo Padula",
            "dob": "26-Mar-1991",
            "gender": "Male",
            "currentCity": "Gifu-shi",
            "currentCountry": "Japan"
        }
    ];

    const userListing = document.querySelector('#userList');
    const searchInput = document.querySelector('#searchInput');
    const usersCountElement = document.querySelector('#usersCount');

    function renderUsers() {
        userListing.innerHTML = '';
        const filters = Array.from(document.querySelectorAll('.filter-checkbox input[type="checkbox"]'))
                            .filter(input => input.checked)
                            .map(input => input.name);
        const searchText = searchInput.value.toLowerCase();

        let count = 0;

        users.forEach(user => {
            if (((filters.includes('male') && user.gender === 'Male') ||
                (filters.includes('female') && user.gender === 'Female') ||
                (filters.length === 0)) &&
                (user.fullName.toLowerCase().includes(searchText) ||
                user.currentCity.toLowerCase().includes(searchText) ||
                user.currentCountry.toLowerCase().includes(searchText))) {
                createUserRow(user);
                count++
            }
        });
        if (usersCountElement) {
            usersCountElement.textContent = count;
        }

    }

    function createUserRow(user) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td><img src="${user.profilePic}" alt="Profile Picture" width="50" height="50"></td>
            <td>${user.fullName}</td>
            <td>${user.dob}</td>
            <td>${user.gender}</td>
            <td>${user.currentCity}</td>
            <td>${user.currentCountry}</td>
        `;
        userListing.appendChild(row);
    }

    renderUsers();

    const filterCheckboxes = document.querySelectorAll('.filter-checkbox input[type="checkbox"]');
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', renderUsers);
    });

    searchInput.addEventListener('input', renderUsers);

    // Set all filter checkboxes to checked by default
    const defaultCheckboxes = document.querySelectorAll('.filter-checkbox input[type="checkbox"]');
    defaultCheckboxes.forEach(checkbox => {
        checkbox.checked = true;
    });

    // Re-render users to reflect default checkbox state
    renderUsers();
});

// logout.js
document.addEventListener('DOMContentLoaded', function() {
    const logoutLink = document.getElementById('logoutLink');

    logoutLink.addEventListener('click', function(event) {
        event.preventDefault();
        localStorage.setItem('loginStatus', 'false');
        window.location.href = 'login.html'; // Redirect to the login page
    });
});

