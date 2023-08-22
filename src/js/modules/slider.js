import { imgData } from "./imgData.js";
import { create } from "./create.js"

let countItem = imgData.length;
let countIteration = Math.trunc(countItem / 3);

for(let i = 0; i < countIteration; i++){
   let swiper = document.querySelector('.swiper-wrapper');
   const item1 = document.createElement("div");
   item1.classList.add("swiper-slide", "item-1");
   const itemImg1 = create("img", "item-img", {src: imgData[i * 3].img,});
   const item2 = create("div", "item-2");
   item2.classList.add("swiper-slide");
   const item2Wrapper = create("div", "item-2__wrapper");
   const itemWrap2 = create("div", "item-2__img-1");
   const itemImg2 = create("img", "item-img", {src: imgData[(i * 3)+1].img,});
   const itemWrap3 = create("div", "item-2__img-2");
   const itemImg3 = create("img", "item-img", {src: imgData[(i * 3)+2].img,});

   swiper.append(item1);
   item1.append(itemImg1);
   swiper.append(item2);
   item2.append(item2Wrapper);
   item2Wrapper.append(itemWrap2);
   itemWrap2.append(itemImg2);
   item2Wrapper.append(itemWrap3);
   itemWrap3.append(itemImg3);
}

export const swiper = new Swiper('.swiper', {
   slidesPerView: 3,
   slidesPerView:'auto',
   spaceBetween: 15, 
   loop: true,
   centeredSlides: true,
   initalSlide: 2,
   slidesPerGroup: 2,
   speed: 800,
   autoplay: {
      delay: 2000,
   },
   breakpoints: {
      1200: {
         spaceBetween: 32,
      },
  }
 });
