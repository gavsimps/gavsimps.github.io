document.addEventListener("DOMContentLoaded", function () {
    const trigger = document.getElementById("js-menu-trigger");
    const screen = document.getElementById("js-menu-screen");
    const menu = document.getElementById("js-menu");
    
    function toggleMenu(e) {
        e.preventDefault();
        if (menu) menu.classList.toggle("is-visible");
        if (screen) screen.classList.toggle("is-visible");
        if (trigger) {
        trigger.classList.toggle("slide");
        trigger.classList.toggle("close");
        }
    }
    
    ["click", "touchstart"].forEach(eventType => {
        if (trigger) trigger.addEventListener(eventType, toggleMenu, { passive: false });
        if (screen) screen.addEventListener(eventType, toggleMenu, { passive: false });
    });
});
      