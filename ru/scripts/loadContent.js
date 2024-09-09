function loadContent(url, elementId) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch ${url}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error:', error));
}
document.addEventListener("DOMContentLoaded", function () {
    loadContent('/ru/blocks/header.html', 'header-placeholder');
    loadContent('/ru/blocks/footer.html', 'footer-placeholder');
});