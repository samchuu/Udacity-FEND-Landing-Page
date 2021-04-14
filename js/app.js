const sections = document.querySelectorAll('section');
const navLi=document.querySelectorAll('li');
const navbarMenu=document.getElementById('nav-list');

let questions=document.getElementsByClassName('question');
let arrow=document.getElementsByClassName('arrow')
let answer=document.getElementsByClassName('answer')

//faq accordion

for (let i=0; i<arrow.length; i++){
    arrow[i].onclick=function(){
            if (answer[i].style.maxHeight){
                answer[i].style.maxHeight=null;
                questions[i].style.fontWeight='lighter';
                arrow[i].style.transform='rotate(360deg)';
                arrow[i].style.justifyContent='flex-end';
               
            } else {
                answer[i].style.maxHeight = answer[i].scrollHeight + "px";
                questions[i].style.fontWeight='bold';
                answer[i].style.color='#6c757d';
                arrow[i].style.transform='rotate(180deg)';
                arrow[i].style.justifyContent='flex-start';
    }
}
    
}

for (let i=0; i<questions.length; i++){
    questions[i].onclick=function(){
    
if (answer[i].style.maxHeight){
    answer[i].style.maxHeight=null;
    questions[i].style.fontWeight='lighter';
    arrow[i].style.transform='rotate(360deg)';
    arrow[i].style.justifyContent='flex-end';
   
} else {
    answer[i].style.maxHeight = answer[i].scrollHeight + "px";
    questions[i].style.fontWeight='bold';
    answer[i].style.color='#6c757d';
    arrow[i].style.transform='rotate(180deg)';
    arrow[i].style.justifyContent='flex-start';
 
}
    }
};

// dynamic navigation bar
for(section of sections){
    const list = document.createElement('li');
    const a = document.createElement('a');
    a.href = "#" + section.id;
    a.innerText = section.dataset.nav;
    list.appendChild(a);
    list.classList=section.id;
    navbarMenu.appendChild(list);
  }

//active style when section is in browswer view
window.addEventListener('scroll', event => {
    let nav=document.querySelector('.container');
    (window.scrollY >=44) ? nav.classList.add('scroll') : nav.classList.remove('scroll');
});

window.addEventListener('scroll', event => {
    let navigationLinks=document.querySelectorAll('.container ul li a');
    let fromTop=window.scrollY;

    navigationLinks.forEach(link=> {
        let section= document.querySelector(link.hash);

        if(
            section.offsetTop<=fromTop&& 
            section.offsetTop+section.offsetHeight >fromTop
            ){
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
    });
});


//scroll to top function

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }












