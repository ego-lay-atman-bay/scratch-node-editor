const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

var version
if (urlParams.has('version')) {
    version = urlParams.get('version')
    loadProject(version)
} else {
    version = "2.3"
    document.body.onload = loadProject(version);
}

var mySelect = document.getElementById('ver-selector');

for(var i, j = 0; i = mySelect.options[j]; j++) {
    if(i.value == version) {
        mySelect.selectedIndex = j;
        break;
    }
}

/**
* Add a URL parameter (or changing it if it already exists)
* @param {search} string  this is typically document.location.search
* @param {key}    string  the key to set
* @param {val}    string  value 
*/
var addUrlParam = function(search, key, val){
    var newParam = key + '=' + val,
        params = '?' + newParam;
  
    // If the "search" string exists, then build params from it
    if (search) {
      // Try to replace an existance instance
      params = search.replace(new RegExp('([?&])' + key + '[^&]*'), '$1' + newParam);
  
      // If nothing was replaced, then add the new param to the end
      if (params === search) {
        params += '&' + newParam;
      }
    }
  
    return params;
  };

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
        url = "https://ego-lay-atman-bay.github.io/scratch-node-editor/beta/nodes.sb3"
    } else {
        url = "https://ego-lay-atman-bay.github.io/scratch-node-editor/release/nodes v" + ver + ".sb3"
    }

    url = "https://turbowarp.org/414716080/embed?project_url=" + url
    iframe.setAttribute("src",url)

    const div = document.getElementById("project");
    div.insertBefore(iframe, div.firstChild)
    
    document.location.pathname + addUrlParam(document.location.search, 'version', ver);
}