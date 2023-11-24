
let element=document.getElementsByClassName('container-func-name')
let elementt=document.querySelectorAll('.func-name')
let display=document.querySelectorAll('.display-body')
console.log(display)
console.log(elementt[0])

for(let i=0;i<elementt.length;i++)
{
    elementt[i].addEventListener('click',()=>{
        if(i==0){
            display[1].style.display="block";
            display[0].style.display="none";
            display[2].style.display="none";
            elementt[0].classList.add('active-func');
            elementt[1].classList.remove('active-func');
            elementt[2].classList.remove('active-func');
        }
        else if(i==1)
        {
            display[2].style.display="block";
            display[0].style.display="none";
            display[1].style.display="none";
            elementt[1].classList.add('active-func');
            elementt[0].classList.remove('active-func');
            elementt[2].classList.remove('active-func');
        }
        else if(i==2)
        {
            display[2].style.display="none";
            display[0].style.display="block";
            display[1].style.display="none";
            elementt[2].classList.add('active-func');
            elementt[1].classList.remove('active-func');
            elementt[0].classList.remove('active-func');
        }
        else{
            window.location.href="index.html"
        }
    })
}

let btn_detail=document.querySelectorAll('.display-body-table-btn-detail')
let modal=document.querySelector('.container-modal')

