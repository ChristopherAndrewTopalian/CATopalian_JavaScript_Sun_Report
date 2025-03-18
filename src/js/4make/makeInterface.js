// makeInterface.js

function makeInterface(whichArray)
{
    let titleOfApp = ce("div");
    titleOfApp.textContent = "CATopalian JavaScript Sun Report";
    titleOfApp.style.fontSize = "30px";
    ba(titleOfApp);

    //-//

    let lineBreakUnderTitle = ce('hr');
    lineBreakUnderTitle.style.width = '70%';
    lineBreakUnderTitle.style.marginLeft = '0'; 
    lineBreakUnderTitle.style.marginRight = 'auto'; 
    ba(lineBreakUnderTitle);


    //-//

    for (let x = 0; x < whichArray.length; x++)
    {
        let nameOfImage = ce("div");
        nameOfImage.className = "nameOfImage";
        nameOfImage.innerHTML = whichArray[x].name;
        nameOfImage.setAttribute("gloss", whichArray[x].description);
        ba(nameOfImage);

        //-//

        let theImage = ce("img");
        theImage.src = whichArray[x].url;
        theImage.style.width = whichArray[x].theWidth + "px";
        theImage.style.height = whichArray[x].theHeight + "px"; 
        ba(theImage);
        
        //-//

        let lineBreakUnderImage = ce("hr");
        ba(lineBreakUnderImage);
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

