console.log("script.js chargé ✅");

function filterProducts(category) {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.style.display =
            category === "all" || card.classList.contains(category)
                ? "block"
                : "none";
    });
}

const phoneNumber = "221782614450";

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".whatsapp").forEach(button => {
        button.addEventListener("click", function (e) {
            e.preventDefault();

            const card = this.closest(".card");
            if (!card) return;

            const name = card.querySelector("h3").innerText;
            const price = card.querySelector(".price").innerText;

            const message = `Bonjour, je veux commander : ${name} (${price})`;
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

            window.open(url, "_blank");
        });
    });
});
