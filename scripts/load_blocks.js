function loadContent(url, elementId, callback) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch ${url}`);
            }
            return response.text();
        })
        .then(data => {
            const el = document.getElementById(elementId);
            el.innerHTML = data;

            if (callback) callback();
        })
        .catch(error => console.error('Error:', error));
}
document.addEventListener("DOMContentLoaded", function () {
    loadContent('/blocks/header.html', 'header', initHeaderMenu);
    loadContent('/blocks/footer.html', 'footer');
    loadContent('/blocks/screen_effect.html', 'effects');
});
document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("menuButton");
    const menu = document.getElementById("dropdownMenu");

    if (!btn || !menu) return;

    btn.addEventListener("click", function () {
        menu.classList.toggle("hidden");
    });

    document.addEventListener("click", function (e) {
        if (!menu.contains(e.target) && e.target !== btn) {
            menu.classList.add("hidden");
        }
    });
});
function initHeaderMenu() {
    const btn = document.getElementById("menuButton");
    const menu = document.getElementById("dropdownMenu");

    if (!btn || !menu) return;

    btn.addEventListener("click", function (e) {
        e.stopPropagation();
        menu.classList.toggle("hidden");
    });

    document.addEventListener("click", function () {
        menu.classList.add("hidden");
    });
}