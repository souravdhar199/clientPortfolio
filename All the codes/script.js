const parentReview = document.querySelectorAll(".section2-container");

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
  threshold:1
};


const sectionObserver=new IntersectionObserver(function(entries,sectionObserver){
   entries.forEach(entry=>{
     if(!entry.isIntersecting)return;
     entry.target.classList.remove("section4-hide");
     console.log(entry);
   });
}, options);


sectionObserver.observe(section4);
  
  
  


