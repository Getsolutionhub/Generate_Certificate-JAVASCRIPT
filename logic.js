let txt = document.getElementById("numtxt");
let btn = document.getElementById("btnCer");
let form = document.getElementById("mainForm");

form.addEventListener("input", () => {
    if (txt.value.length > 0) {
        btn.removeAttribute("disabled");
    } else {
        btn.setAttribute("disabled", "disabled");
    }
});