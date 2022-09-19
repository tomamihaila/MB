const copyToClip = (elemId) => {

    var copiedText = document.getElementById(elemId).innerText;
    navigator.clipboard.writeText(copiedText).then(()=>alert("Copied to clipboard!"));
}

