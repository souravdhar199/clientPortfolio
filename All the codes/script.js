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

const section3 = document.querySelector(".intro2");

const reveal=function(entries, observer){
  const [ens]=entries

  
  };
  const sectionObserver = new IntersectionObserver(reveal, {
    root:null,
    threshold:.15,
  });
  sectionObserver.observe(section3);


