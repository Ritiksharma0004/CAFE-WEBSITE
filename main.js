let btn = document.getElementByClass(".btn");

btn.addEventListener("click", (e)=> {
     e.preventDefault();
    window.location.href ="dashboard.html";

})
function openForm () {
    document.getElementById("myForm").style.display = "block";
    // alert("I am working");
}

function minimizeForm () {
    document.getElementById("myForm").style.display = "none";
}
