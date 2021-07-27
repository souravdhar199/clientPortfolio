


const review = document.querySelectorAll(".comment");

console.log(review);

review.forEach((s,i)=>
(s.style.transform=`translateX(${100*i}%)`)
);

const button = document.querySelector(".sliderButton");

console.log(button);

let count =0;

button.addEventListener("click",function(){
  if(review.length-1==count){
    count=0;
  }
  else{
    count++;
  }

  review.forEach(
    (s,i)=>
    (s.style.transform=`translateX(${100*(i-count)}%)`)

  );
 
})


// reveling elements started with section3

const section4 = document.querySelector(".section4");


const options ={
  root: null,
  threshold:.15
};


const sectionObserver=new IntersectionObserver(function(entries,sectionObserver){
   entries.forEach(entry=>{
     if(!entry.isIntersecting)return;
     entry.target.classList.remove("section4-hide");
     console.log(entry);
   });
}, options);

sectionObserver.observe(section4);
  
//section reveal done for one section4

//intro2 reveal starts here
const intro2 = document.querySelector(".intro2");
const options2 ={
  root: null,
  threshold:.15
};
const intro2s=new IntersectionObserver(function(entries,intro2s){
   entries.forEach(entry=>{
     if(!entry.isIntersecting)return;
     entry.target.classList.remove("intro2-hide");
     console.log(entry);
   });
}, options2);


intro2s.observe(intro2);

// initro2 reveal done


