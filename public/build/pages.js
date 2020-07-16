// LANDING PAGE AND LOADING SCREEN CODE

// create text elements for the landing page
export function createLandingPageText(div) {
    const header = document.createElement("h1");
    const headerNode = document.createTextNode("SPEECH BUBBLES");
    header.appendChild(headerNode);
    header.style.color = "#ffef9e";
    header.style.font = "32px HelveticaNeue-Italic";
    header.style.letterSpacing = "50px";
    header.style.lineHeight = "50px";
    // header.style.paddingTop = "15%";

    const subheading = document.createElement("h2");
    const subheadingNode = document.createTextNode("BLOW DIGITAL BUBBLES WITH SOUND");
    subheading.appendChild(subheadingNode);
    subheading.style.color = "white";
    subheading.style.font = "20px HelveticaNeue";
    subheading.style.letterSpacing= "50px";
    subheading.style.lineHeight = "50px";
    subheading.style.marginTop = "75px";

    const info = document.createElement("h3");
    const infoNode = document.createTextNode("Please allow access to the camera and microphone to view. Place an ear within a bubble to hear the sound in it!");
    info.appendChild(infoNode);
    info.style.color = "#ffef9e";
    info.style.font = "20px HelveticaNeue";
    info.style.letterSpacing= "10px";
    info.style.lineHeight = "40px";
    info.style.marginTop = "75px";
    info.style.marginBottom = "75px";

    div.appendChild(header);
    div.appendChild(subheading);
    div.appendChild(info);
}

// create "enter sketch" button
export function createButton(div) {
    const button = document.createElement("button");

    button.style.position = "absolute";
    button.style.width = "300px";
    button.style.left = "calc(50% - 150px)";
    button.style.border = "1px solid #fff";
    button.style.borderRadius = "4px";
    button.style.padding = "12px 6px";
    button.style.color = "#fff";
    button.style.background = "none";
    button.style.font = "14px Helvetica";
    button.style.cursor = "pointer";
    button.textContent = "ENTER SKETCH";
    button.style.letterSpacing= "10px";

    button.onmouseenter = () => {
        button.style.color = "#ffef9e";
        button.style.border = "1px solid #ffef9e";
    };

    button.onmouseleave = () => {
        button.style.color = "#fff";
        button.style.border = "1px solid #fff";
    };

    div.appendChild(button);
    return button;
}

// if the button is pressed, hide the div
export function buttonPressed(button, div, bg) {
    return new Promise(resolve => {
        button.onclick = () => {
            hideDiv(div);
            hideDiv(bg);
            let clicked = true;
            resolve(clicked);
        };
    });
}

export function hideDiv(div) {
    if (div.style.display !== "none") {
        div.style.display = "none";
    } else {
        div.style.display = "block";
    }
}

// create the loading screen
export function createLoadingScreen(div) {
    const loadingText = document.createElement("h1");
    const textNode = document.createTextNode("MODEL LOADING");
    loadingText.appendChild(textNode);
    loadingText.style.color = "#ffef9e";
    loadingText.style.font = "24px HelveticaNeue-Italic";
    loadingText.style.letterSpacing= "50px";
    loadingText.style.lineHeight = "50px";
    div.appendChild(loadingText);
}