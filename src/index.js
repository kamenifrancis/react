//changement de couleur 

let like=document.getElementsByClassName('fa-regular fa-thumbs-up');

console.log(like,'like')

for(let colors of like){
  colors.addEventListener('click',function(){
    if(colors.style.color === 'gray' ){
      colors.style.color="red"
    }else{
      colors.style.color = "gray" 
    }
  }) 
   } 
   
//add element 
//compteur ajout +1 

let plusBtn = document.getElementsByClassName('bttnplus');

console.log(plusBtn);

for (let plus of plusBtn) {
  plus.addEventListener('click', function () {
    plus.previousElementSibling.innerText++;
   
  });

}


//diminuer 

let minusBtn = document.getElementsByClassName('bttnmoin');
for(let minus of minusBtn){

minus.addEventListener('click', function (){

if ( minus.nextElementSibling.innerText >0 ){
    minus.nextElementSibling.innerText--;
}

})

};
