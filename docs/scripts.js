const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

var project_url
var version

if (urlParams.has('version')) {
    version = urlParams.get('version')
    loadProject(version)
} else {
    fetch('version.txt')
    .then(response => response.text())
    .then(data => {
  	// Do something with your data
      console.log(data)
      version = data;
      document.body.onload = loadProject(version);
  });
}

function loadProject (ver) {
    var elementExists = !!document.getElementById("player");
    var iframe


    if (!elementExists) {
        iframe = document.createElement("iframe");
    
        iframe.setAttribute("id","player")
        iframe.width = 495
        iframe.height = 416
        iframe.setAttribute("allowtransparency","true")
        iframe.setAttribute("frameborder",0)
        iframe.setAttribute("scrolling","no")
        iframe.setAttribute("allowfullscreen","")
    } else {
        iframe = document.getElementById("player");
    }
    
    console.log(elementExists)

    var url
    if (ver == "beta") {
        project_url = "https://ego-lay-atman-bay.github.io/scratch-node-editor/beta/nodes.sb3"
    } else {
        project_url = "https://ego-lay-atman-bay.github.io/scratch-node-editor/release/nodes v" + ver + ".sb3"
    }

    url = "./turbowarp/index.html?version=" + ver
    iframe.setAttribute("src",url)

    const div = document.getElementById("project");
    div.insertBefore(iframe, div.firstChild)
}

function switchTheme() {
    var body = document.body;
    body.classList.toggle('dark-mode');
}

function loadDoc(file, element) {const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        element.innerHTML = 
        this.responseText;
    }
    xhttp.open("GET", file);
    xhttp.send();
}

loadDoc("credits.md",document.getElementById("credits-text"))

function toggleMouse() {
    var iframe = document.getElementById('player');
    var canvas = iframe.contentWindow.document.querySelector('.sc-canvas');
    canvas.classList.toggle('cur-normal');
}

function toggleMouseHandler() {
    var iframe = document.getElementById('player');
    var canvas = iframe.contentWindow.document.querySelector('.sc-canvas');
    var element = document.getElementById("toggle-mouse");
    console.log(canvas.classList.contains('cur-normal'));
    if (canvas.classList.contains('cur-normal')) {
        element.innerHTML = "Show mouse"
    } else {
        element.innerHTML = "Hide mouse"
    }
    toggleMouse();
}