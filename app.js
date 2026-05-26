let users = [

    {
        id: 1,
        name: "Asel",
        age: 20,
        city: "Bishkek",
        image: "https://i.pravatar.cc/150?img=9"
    },

    {
        id: 2,
        name: "Ali",
        age: 18,
        city: "Osh",
        image: "https://i.pravatar.cc/150?img=2"
    },

    {
        id: 3,
        name: "Amina",
        age: 22,
        city: "Naryn",
        image: "https://i.pravatar.cc/150?img=5"
    }

];

const cards = document.getElementById("cards");

const searchInput = document.getElementById("searchInput");

const sortBtn = document.getElementById("sortBtn");

function renderUsers(arr) {

    cards.innerHTML = "";

    arr.forEach(user => {

        const {
            id,
            name,
            age,
            city,
            image
        } = user;

        cards.innerHTML += `

      <div class="card">

        <img src="${image}" alt="${name}">

        <h2>${name}</h2>

        <p>Age: ${age}</p>

        <p>City: ${city}</p>

        <button
          class="delete-btn"
          onclick="deleteUser(${id})"
        >
          Delete
        </button>

      </div>

    `;

    });

}

renderUsers(users);

function deleteUser(id) {

    users = users.filter(user => user.id !== id);

    renderUsers(users);

}

searchInput.addEventListener("input", (e) => {

    const value = e.target.value.toLowerCase();

    const filteredUsers = users.filter(user =>

        user.name.toLowerCase().includes(value)

    );

    renderUsers(filteredUsers);

});

sortBtn.addEventListener("click", () => {

    const sortedUsers = [...users].sort((a, b) => a.age - b.age);

    renderUsers(sortedUsers);

});