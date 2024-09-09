document.addEventListener("DOMContentLoaded", function () {
    var userLang = navigator.language || navigator.userLanguage;

    if (userLang.startsWith("ru")) {
        window.location.href = "/ru/index.html";
    } else {
        window.location.href = "/en/index.html";
    }
});