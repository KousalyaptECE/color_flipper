let colortxt = document.getElementById('color');
let bg = document.getElementById('wrap');
let btn = document.querySelector('button');
let arr = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
btn.addEventListener('click',change);

function change(){
    
    let str = '#';
    for(let i=1;i<=6;i++){
        str+=random();
    }

    colortxt.innerHTML=str;
    bg.style.backgroundColor = str;
    
}

function random(){
   
        let ind = Math.floor(Math.random()*16);
       
    return arr[ind];
}
