document.body.onload = loadProject(2.2);

function loadProject (ver) {
    var elementExists = !!document.getElementById("player");

    var iframe

    if (!elementExists) {
        iframe = document.createElement("iframe");
    
        iframe.setAttribute("id","player")
        iframe.width = 499
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
        url = "https://ego-lay-atman-bay.github.io/scratch-node-editor/beta/nodes.sb3"
    } else {
        url = "https://ego-lay-atman-bay.github.io/scratch-node-editor/release/nodes v" + ver + ".sb3"
    }

    url = "https://turbowarp.org/414716080/embed?project_url=" + url
    iframe.setAttribute("src",url)

    const div = document.getElementById("project");
    div.appendChild(iframe)
}