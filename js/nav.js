function openNav() {
    let side = document.getElementById("sideNav");
    if (side.style.display == "none") {
        side.style.display = "block";
        side.style.width = "250px";
    } else {
        side.style.display = "none";
    side.style.width = "0";
    }

}