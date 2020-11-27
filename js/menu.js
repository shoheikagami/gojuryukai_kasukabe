document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("menu-hamberger").addEventListener("click", function() {
        this.classList.toggle("active");
        document.getElementById("nav").classList.toggle("active");
    })

});