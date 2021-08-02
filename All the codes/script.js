


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


//sec2 reveal
const testimonialparent = document.querySelector(".section2");
const work ={
  root: null,
  threshold:.15
};
const testimonials=new IntersectionObserver(function(entries,testimonials){
   entries.forEach(entry=>{
     if(!entry.isIntersecting)return;
     entry.target.classList.remove("section2-hide");
     console.log(entry);
   });
}, work);


testimonials.observe(testimonialparent);
const works ={
  root: null,
  threshold:.15
};
//secc5 reveal
const sec5 = document.querySelector(".section5-items");
const sec5Observe=new IntersectionObserver(function(entries,sec5Observe){
  entries.forEach(entry=>{
    if(!entry.isIntersecting)return;
    entry.target.classList.remove("section5-hide");
    console.log(entry);
  });
}, works);


sec5Observe.observe(sec5);
