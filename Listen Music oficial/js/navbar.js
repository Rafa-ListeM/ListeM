window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY>0)
})

function onclicklogin(btnid, idmodal) {

    var modal = document.getElementById(idmodal);
    var btn = document.getElementById(btnid);


    btn.onclick = function () {
        modal.style.display = "block";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
function Fechar(fecharid) {
    var span = document.getElementsById(fecharid);

    btn.onclick = function () {
        modal.style.display = "none";
    }
}
