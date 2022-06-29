function openInNewTab(url) {
    window.open(url, '_blank').focus();
}

function scrollToExplain(){
    document.getElementById('explain').scrollIntoView();
}

function lightColor(id){
    document.getElementById(id).style.backgroundColor= "rgb(77, 77, 201)"
}

function darkColor(id){
    document.getElementById(id).style.backgroundColor= "rgb(51, 51, 192)"
}