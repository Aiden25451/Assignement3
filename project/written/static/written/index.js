
let current_page = 0;

function left() {
    if(current_page == 0) return;
    document.getElementById("page" + (current_page)).style.display = "none";
    document.getElementById("page" + (current_page-1)).style.display = "block";
    window.scrollTo(0, 0);
    current_page--;
}

function right() {
    if(current_page == 7) return;
    document.getElementById("page" + (current_page)).style.display = "none";
    document.getElementById("page" + (current_page+1)).style.display = "block";
    window.scrollTo(0, 0);
    current_page++;
}