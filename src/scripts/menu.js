export default function loadMenu() {
    const container = document.createElement("div");

    const menuItems = [
        {
            name: "Spaghetti Carbonara",
            description: "Creamy pasta with pancetta and parmesan.",
            image: "./../media/carbonara.jpg"
        },
        {
            name: "Margherita Pizza",
            description: "Classic pizza with tomato, mozzarella, and basil.",
            image: "./../media/margherita.jpg"
        },
        {
            name: "Tiramisu",
            description: "Coffee-flavored Italian dessert.",
            image: "./../media/tiramisu.jpg"
        }
    ];

    menuItems.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "menu-item";

        const textDiv = document.createElement("div");
        textDiv.className = "menu-text";

        const title = document.createElement("h2");
        title.textContent = item.name;

        const desc = document.createElement("p");
        desc.textContent = item.description;

        textDiv.appendChild(title);
        textDiv.appendChild(desc);

        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.name;
        img.className = "menu-img";

        itemDiv.appendChild(textDiv);
        itemDiv.appendChild(img);

        container.appendChild(itemDiv);
    });

    return container;
}
