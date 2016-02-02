//arrays are just lists of related items

//create an array:
var colors = ["Red", "Black", "White", "Puce", "Ochre", "Yellow"];

//easy, right? now we'll make more arrays, but this time make them empty and then populate them with scripting.

//We'll make different arrays for thumbnails of drawings, oils, and water colors.

//imageListA = Drawing thumbnails. 
var imageListA = new Array();

//first item in list has an index of 0, because computers count from 0 to 9, not 1 to 10.
imageListA[0] = "images/drawing/thumbs/artwork_1.jpg";
imageListA[1] = "images/drawing/thumbs/artwork_2.jpg";
imageListA[2] = "images/drawing/thumbs/artwork_3.jpg";
imageListA[3] = "images/drawing/thumbs/artwork_4.jpg";
imageListA[4] = "images/drawing/thumbs/artwork_5.jpg";
imageListA[5] = "images/drawing/thumbs/artwork_6.jpg";
imageListA[6] = "images/drawing/thumbs/artwork_7.jpg";
imageListA[7] = "images/drawing/thumbs/artwork_8.jpg";
imageListA[8] = "images/drawing/thumbs/artwork_9.jpg";
imageListA[9] = "images/drawing/thumbs/artwork_10.jpg";
imageListA[10] = "images/drawing/thumbs/artwork_11.jpg";
imageListA[11] = "images/drawing/thumbs/artwork_12.jpg";
imageListA[12] = "images/drawing/thumbs/artwork_13.jpg";
imageListA[13] = "images/drawing/thumbs/artwork_14.jpg";
imageListA[14] = "images/drawing/thumbs/artwork_15.jpg";
imageListA[15] = "images/drawing/thumbs/artwork_16.jpg";
imageListA[16] = "images/drawing/thumbs/artwork_17.jpg";
imageListA[17] = "images/drawing/thumbs/artwork_18.jpg";
imageListA[18] = "images/drawing/thumbs/artwork_19.jpg";
imageListA[19] = "images/drawing/thumbs/artwork_20.jpg";
imageListA[20] = "images/drawing/thumbs/artwork_21.jpg";
imageListA[21] = "images/drawing/thumbs/artwork_22.jpg";
imageListA[22] = "images/drawing/thumbs/artwork_23.jpg";
imageListA[23] = "images/drawing/thumbs/artwork_24.jpg";
imageListA[24] = "images/drawing/thumbs/artwork_25.jpg";
  
  
//imageListB = Oil thumbnails. 
var imageListB = new Array();

//first item in list has an index of 0, because computers count from 0 to 9, not 1 to 10.
imageListB[0] = "images/oil/thumbs/artwork_1.jpg";
imageListB[1] = "images/oil/thumbs/artwork_2.jpg";
imageListB[2] = "images/oil/thumbs/artwork_3.jpg";
imageListB[3] = "images/oil/thumbs/artwork_4.jpg";
imageListB[4] = "images/oil/thumbs/artwork_5.jpg";
imageListB[5] = "images/oil/thumbs/artwork_6.jpg";
imageListB[6] = "images/oil/thumbs/artwork_7.jpg";
imageListB[7] = "images/oil/thumbs/artwork_8.jpg";


//imageListC = Water color thumbnails. 
var imageListC = new Array();

//first item in list has an index of 0, because computers count from 0 to 9, not 1 to 10.
imageListC[0] = "images/watercolor/thumbs/artwork_1.jpg";
imageListC[1] = "images/watercolor/thumbs/artwork_2.jpg";
imageListC[2] = "images/watercolor/thumbs/artwork_3.jpg";
imageListC[3] = "images/watercolor/thumbs/artwork_4.jpg";
imageListC[4] = "images/watercolor/thumbs/artwork_5.jpg";
imageListC[5] = "images/watercolor/thumbs/artwork_6.jpg";
imageListC[6] = "images/watercolor/thumbs/artwork_7.jpg";
imageListC[7] = "images/watercolor/thumbs/artwork_8.jpg";
imageListC[8] = "images/watercolor/thumbs/artwork_9.jpg";
imageListC[9] = "images/watercolor/thumbs/artwork_10.jpg";

//create the buildThumbnails function.
function buildThumbnails()
{
  //hook onto the "thumbs" div
  var thumbsDiv = document.getElementById("thumbs");
  //now we want to grab images from our array and display them in the thumbs area. Recall that the html links to images need to be built inside single quotes that "protect" the html from JS. A double quote will STOP the stuff that's in the html, preveting it from continuing so you can write more javascript.
  
  //create an output variable using a "for loop"
  var output = "";
  //first part of below is the counter. we're saying start count at zero. Second part is the condition ("keep looping as long as the condition is true"). And the thirs part is the "incrementer." The incrementer adds one to the counter AFTER the code in the brackets is executed
  //There are "FOR loops:"
  for (var i=0; i < imageListA.length; i++)
       {
         //below, we're using imageList because we don't know how many images we're going to have. This is an easy way to make a gallery with whatever you throw in a directory. Rad!
         output += '<img src="' + imageListA[i] +'" />';
       }
  //And now we repeat the above "for loops" for the 2 other categories of artwork. Notice we've incremented i to j and then to k, because we can't use i again.
  //this is the oils for loop:
   for (var j=0; j < imageListB.length; j++)
       {
         output += '<img src="' + imageListB[j] +'" />';
       }
  //this is the watercolors for loop:
     for (var k=0; k < imageListC.length; k++)
       {
         output += '<img src="' + imageListC[k] +'" />';
       }
  //and here's where we generate the output of these for loops:
  thumbsDiv.innerHTML = output;

  //this just displays one image:
  //thumbsDiv.innerHTML = '<img src="' + imageList[0] + '" />'
  //And this displays five:
  //thumbsDiv.innerHTML = 
  //'<img src="' + imageList[0] + '" />' +
  //'<img src="' + imageList[1] + '" />' +
  //'<img src="' + imageList[2] + '" />' +
  //'<img src="' + imageList[3] + '" />' +
  //'<img src="' + imageList[4] + '" />';
}



//Below,  telng the brower not to load the window until it loads our scripts. So we'll invent a function called "buildThumbnails" that we need it to look for first. It's aandy to define stuff as functions so they can be easily activated and deactivated just by commenting and uncommenting.
window.onload = function()
{
  buildThumbnails();
};