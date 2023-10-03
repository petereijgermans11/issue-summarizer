function createPanel() {
    const div = document.createElement("div");
    div.style.position = "absolute";
    div.style.top = "10px";
    div.style.left = "10px";
    div.style.zIndex = "9999";
    div.style.borderStyle = 'solid';
    div.style.borderBlockWidth = '1px';
    div.style.borderColor = '#A0A0A0';
    div.style.borderRadius = '4px';
    div.style.padding = '5px';
    div.style.backgroundColor = "rgba(128,128,128,0.2)";
    div.style.boxShadow = "5px 10px rgba(120,120,120,0.1)";
    const p = document.createElement("p");
    div.appendChild(p);
    p.innerHTML = "Panel"
    p.style.fontWeight = "bold";
    p.style.color = "rgb(128,128,128)"
    return div;
}

function createSummaryPanel(summary_text) {
    const div = document.createElement("div");
    div.style.position = "absolute";
    div.style.top = "100px";
    div.style.left = "10px";
    div.style.zIndex = "9999";
    div.style.borderStyle = 'solid';
    div.style.borderBlockWidth = '1px';
    div.style.borderColor = '#A0A0A0';
    div.style.borderRadius = '4px';
    div.style.padding = '5px';
    div.style.backgroundColor = "rgba(128,128,128,0.2)";
    div.style.boxShadow = "5px 10px rgba(120,120,120,0.1)";
    const ta = document.createElement("textarea");
    div.appendChild(ta);
    ta.innerHTML  = summary_text;
    ta.minLength = 150;
    ta.rows = 20;
    ta.cols = 100;
    const button = document.createElement("button");
    button.innerHTML = "Close";
    div.appendChild(button);
    button.onclick = async function () {
        div.parentElement.removeChild(div);
    };
    return div;
}

function createSpinner() {
    const divSpin = document.createElement("div");
    divSpin.setAttribute("id", "spinner");
    divSpin.style.position = "fixed";
    divSpin.style.top = "400px";
    divSpin.style.left = "600px";
    divSpin.style.zIndex = "19999";

    divSpin.style.visibility= "hidden";
    divSpin.style.width = "160px";
    divSpin.style.height = "160px";
    divSpin.style.border = "2px solid #f3f3f3";
    divSpin.style.borderTop = "3px solid #f25a41";
    divSpin.style.borderRadius = "100%";

    divSpin.style.animation = "spin 1s infinite linear";
    document.body.appendChild(divSpin);

    // Create a style element to hold the @keyframes animation
    const style = document.createElement('style');
    document.head.appendChild(style);

    // Create the keyframes animation dynamically
    const animationName = 'spin';
    const keyframes = `
      @keyframes ${animationName} {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
    // Set the keyframes animation as the CSS content of the style element
    style.sheet.insertRule(keyframes, 0);
    return divSpin
}


function showSpinner() {
    // spinner.className = "show";
    console.log("Showing spinner....");
    const spinner = document.getElementById("spinner");
    spinner.style.visibility = "visible";
    // setTimeout(() => {
    //     // spinner.className = spinner.className.replace("show", "");
    //     spinner.style.visibility = "hidden";
    // }, 5000);
}

function hideSpinner() {
  // spinner.className = spinner.className.replace("show", "");
    const spinner = document.getElementById("spinner");
    spinner.style.visibility = "hidden";
}

function createSlider(panel) {
    /*
    <div class="slider-container" id="sliderContainer">
    <div class="slider-content">
      <h1>Hello World Extension Options</h1>

      <label for="buttonColor">Button Color:</label>
      <input type="color" id="buttonColor" value="#ff0000"><br>

      <label for="buttonSize">Button Size:</label>
      <input type="number" id="buttonSize" min="10" max="50" value="20"><br>

      <button id="saveButton">Save</button>
    </div>
    <div class="slider-retract" id="sliderRetract"></div>
  </div>
     */
    const divSlider = document.createElement("div");

    divSlider.setAttribute("id", "sliderContainer");
    document.body.appendChild(divSlider);
    divSlider.classList.add("slider-container");

    const divSliderContent = document.createElement("div");
    divSlider.appendChild(divSliderContent);
    divSliderContent.setAttribute("id", "sliderContent");

    divSliderContent.classList.add("slider-content");
    divSliderContent.appendChild(panel);

    const divSliderRetract = document.createElement("div");
    divSlider.appendChild(divSliderRetract);
    divSliderRetract.setAttribute("id", "sliderRetract");
    divSliderRetract.classList.add("slider-retract");
    return divSlider;
}


function createStyle() {

    document.head.insertAdjacentHTML("beforeend",
        `
        <style type="text/css">
        /*body {*/
        /*  font-family: Arial, sans-serif;*/
        /*  margin: 0;*/
        /*  overflow: hidden;*/
        /*}*/
        
        .slider-container {
          position: fixed;
          top: 0;
          /*left: -50%;*/
          left: 10px;
          width: 50%;
          height: 100%;
          background-color: rgba(255, 255, 255, 0.8);
          transition: left 0.3s ease-in-out;
          z-index: 9999;
        }

        .slider-content {
          width: 100%;
          height: 100%;
          padding: 20px;
          box-sizing: border-box;
          overflow-y: auto;
        }
    
        .slider-retract {
          position: fixed;
          top: 0;
          /*left: 50%;*/
          left: 0;
          width: 10px;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.2);
          cursor: pointer;
        }

        .slider-retract:hover {
          background-color: rgba(0, 0, 0, 0.4);
        }
        </style>`);


}

function createButton() {
    const button = document.createElement("button");
    button.innerHTML = "Summarize";
    button.style.borderRadius = "4px";
    button.style.borderStyle = "solid";
    button.style.borderWidth = "1px";
    button.style.borderColor = "rgb(128,128,128)";
    button.style.color = "rgb(250,250,250)";
    button.style.backgroundColor = "rgba(150,150,150,0.2)";

    button.onclick = async function () {
        showSpinner();
        console.log("Button clicked!");
        const apiUrl = gitHub2ApiUrl(window.location.href);
        const data_issue = await getGitHubIssue(apiUrl);
        console.log('Data issue: ',data_issue);
        const data_comments = await getGitHubIssueComments(apiUrl);
        console.log('Data comments: ',data_comments);
        console.log('Comments: ',data_comments.map(e => e['body']));

        const texts= [data_issue['body']];
        const comments = data_comments.map(e => e['body']);

        comments.map(e => texts.push(e));
        const result_texts = texts.join(" ");
        console.log("Resulted texts: ", result_texts);

        const data_summarization = await summarize(result_texts);

        console.log('Data summarization: ',data_summarization);
        console.log('Summarization: ',data_summarization['choices'][0]['message']['content']);
        const summary = data_summarization['choices'][0]['message']['content'];
        const sumPanel = createSummaryPanel(summary);

        document.getElementById("sliderContent").appendChild(sumPanel);
        hideSpinner();
    };

    return button;
}
window.addEventListener("load", (event) => {
    createStyle();
    const panel = createPanel();
    const button = createButton();
    panel.appendChild(button)
    createSpinner();
    createSlider(panel);

    // Slide the panel when clicked on the retract border
    document.getElementById("sliderRetract").addEventListener("click", function() {
        const sliderContainer = document.getElementById("sliderContainer");

        if (sliderContainer.style.left === "-50%") {
            sliderContainer.style.left = "0";
        } else {
            sliderContainer.style.left = "-50%";
        }
    });
})

async function getGitHubIssue(url) {
    return fetch(url, {
        method: "GET",
        headers: {
            "Accept": "application/json"
        },
    })
        .then(response => response.json())
        .catch(error => {
            console.log("Error: ", error);
        });
}

async function getGitHubIssueComments(url) {
    return fetch(`${url}/comments`, {
        method: "GET",
        headers: {
            "Accept": "application/json"
        },
    })
        .then(response => response.json())

        .catch(error => {
            console.log("Error: ", error);
        });
}

async function summarize(text) {
    let data = await chrome.storage.sync.get(["buttonColor", "buttonSize", "apiKeyChatGPT"]);
    console.log('API key:', data);
    payload = {"model": "gpt-3.5-turbo",
        "messages": [{"role": "user", "content": `Summarize the following text in quotes. '${text}'`}],
        "temperature": 0.7};
    return fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${data['apiKeyChatGPT']}`
        },
        body : JSON.stringify(payload)
    })
        .then(response => response.json())
        .catch(error => {
            console.log("Error: ", error);
        });
}

function gitHub2ApiUrl(url) {
    let message = url;
    const reg = /http[s]?:\/\/github.com\/(.+)\/(.+)\/issues\/(.+)/;
    const res = message.match(reg);
    const target = `https://api.github.com/repos/${res[1]}/${res[2]}/issues/${res[3]}`;
    // Log to console
    console.log(target);
    return target;
}
