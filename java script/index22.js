const icon = document.getElementById('icon');
icon.addEventListener("click",()=>{
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        icon.src="../PORTFOLIO/IMAGE/sun.jpg";
    }
    else{
        icon.src="../PORTFOLIO/IMAGE/تنزيل.jfif";
    }
})