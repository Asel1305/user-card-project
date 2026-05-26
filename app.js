const user = [
    {
        name: "Asel",
        age: 20,
        city: "Bishkek",
        image :"https://picsum.photos/250/200?1"
    },
    {
        name: "Aizada",
        age: 21,
        city: "Osh",
        image : "https://picsum.photos/250/200?2"
    },
    {
        name: "Aizhan",
        age: 22,
        city: "Naryn",
        image : "https://picsum.photos/250/200?3"
    }
];

const cards = document.getElementById("cards");
function renderUsers(arr) {
    cards.innerHTML = "";
    arr.map(user => {
        const { name, age, city, image } = user;
        cards.innerHTML += `
        <div class-"card">
            <img src="${image} alt="${name}">
            h2>${name}</h2>
            <p> Age: ${age}</p>
            <p> City: ${city}</p>
        </div>
        `;
    });
}
renderUsers(users);