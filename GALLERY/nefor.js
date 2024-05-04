/*let NEFORImages = document.querySelectorAll(".NEFOR-IMG");
let getLatestOpenedImg;
let windowWidth = window.innerWidth;

if(NEFORImages){
    NEFORImages.forEach(function(image){
    image.onclick = function(){
      let getElementCss = window.getComputedStyle(image, GALLERY);
      let getFullImgUrl = getElementCss.getPropertyValue("background-image");
      let getImgUrlPos = getFullImgUrl.split("../NEFORIMG/thumbs");
      let setNewNEFORImagesUrl = getImgUrlPos[1].replace('")', '');
       

      getLatestOpenedImg = GALLERY + 1;

      
    }

    });
}
*/
alert("it work")
let NEFORImages = document.querySelectorAll(".NEFOR-ING");
let getLatestOpenedImg;
let windowWidth = window.innerWidth;

if(NEFORImages){
  NEFORImages.forEach(function(image){
    image.onclick = function(){
      alert("it work")
    }
  });
}