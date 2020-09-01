  
   let timerOne;
   let timerTwo;
   let that;


var typeWriting={
                 words:document.querySelector(".words").children,
                 wordIndex:0,
                 charIndex:0,
                 currentWord:'',
                 load:function(){
                  this.currentWord=this.words[this.wordIndex].getAttribute("data-text").split("");
                  this.increment();
                  this.timer1();
                 },
                 increment:function(){

                     if(this.charIndex!=this.currentWord.length){
                     	this.words[0].innerHTML+=this.currentWord[this.charIndex]
                     	this.charIndex++;
                     }
                     else{
                     	clearInterval(timer1);
                     	setTimeout(this.timer2,2000);
                     }
                 },
                 decrement:function(){
                     if(this.charIndex!=0){
                     	this.charIndex--;
                     	this.currentWord.pop();
                     	this.words[0].innerHTML=this.currentWord.join("");

                     }
                     else{
                     	clearInterval(timer2);

                     	if(this.wordIndex==this.words.length-1){
                     		this.wordIndex=0;
                     	}
                     	else{
                     	this.wordIndex++;
                          }

                     	this.load();
                     }
                 },

                 timer1:function(){
                      that=this;
                      timer1=setInterval(function(){
                            that.increment();
                      },50);
                 },
                 timer2:function(){
                    timer2=setInterval(function(){
                    	 that.decrement();
                    },50)
                 }

              }


        window.onload=typeWriting.load();

//  Gallery items Filter
const filterButtons=document.querySelector("#filter-btns").children;
const items=document.querySelector(".portfolio-gallery").children
   
   for(let i=0; i<filterButtons.length; i++){
       filterButtons[i]. addEventListener("click", function(){
           for(let j=0; j<filterButtons.length; j++){
               filterButtons[j].classList.remove("active")
           }
           this.classList.add("active");
           const target=this.getAttribute("data-target")

           for(let k=0; k<items.length; k++){
               items[k].style.display="none";
               if(target==items[k].getAttribute("data-id"))
               {
                   items[k].style.display="block";
               }
               if(target=="all"){
                   items[k].style.display="block";
               }
           }
       })
   }

// lightbox
   const closeLightbox=document.querySelector(".close-lightbox");
   const lightbox=document.querySelector(".lightbox");
   const lightboxImage=lightbox.querySelector("img")

       lightbox.addEventListener("click", function(){
           if (event.target!=lightboxImage){
           lightbox.classList.remove("show");
           lightbox.classList.add("hide");
           }
       })

       closeLightbox.addEventListener("click", function(){
           lightbox.classList.remove("show");
           lightbox.classList.add("hide");
           
       })

       const gallery=document.querySelector(".portfolio-gallery");
       const galleryItem=gallery.querySelectorAll(".item");

       galleryItem.forEach(function(element){
           element.querySelector(".fa-plus").addEventListener("click", function(){
           lightbox.classList.remove("hide");
           lightbox.classList.add("show");
           lightboxImage.src=element.querySelector("img").getAttribute("src")
           })
       })
