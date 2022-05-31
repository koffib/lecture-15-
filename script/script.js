//alert();

//get.elementbyID
const display =  document.getElementById("display");
const t1List = document.getElementsByClassName("t1");
const btnDisplay = document.getElementById("btnDisplay");



btnDisplay.addEventListener('click', function(){
    this.style.backgroundColor =  "red";

}) 





let age = 50;
//const allDomObjects =  document.querySelectorAll("*")


display.innerText =t1List.length;

for(let i = 0 ; i < t1List.length; i++)
{
    t1List[i].innerText = i;
    
    if(i %= 2 === 0){
        t1List[i].setAttribute("class" , "t2 t1")
    }
    else{
        t1List[i].setAttribute("class" , "t2 t1")
    }
}

t1List[0].innerText = "Your right";


//let-





//var isCar = false;



