let allDiv = document.querySelectorAll(".random-color")
for (let index = 0; index < allDiv.length; index++) {
   allDiv[index].style.backgroundColor='#'+Math.floor(Math.random()*16777215).toString(16);
   allDiv[index].style.backgroundColor='#'+Math.floor(Math.random()*16777215).toString(16);
   allDiv[index].innerHTML+='#'+Math.floor(Math.random()*16777215).toString(16) 
}


function add(){
    for (let index = 0; index < allDiv.length; index++) {
        allDiv[index].style.backgroundColor='#'+Math.floor(Math.random()*16777215).toString(16);
         allDiv[index].innerHTML='#'+Math.floor(Math.random()*16777215).toString(16) 
     }


}
document.getElementById("click").onclick = add;
