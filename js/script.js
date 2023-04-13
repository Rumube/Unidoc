//Document initiation
//document.onload = initJS()
document.addEventListener('DOMContentLoaded', function () {
    initJS();
}, false);

function initJS() {
    initTabs()
}

//Tab funtions
function initTabs() {
    closeAllRightPanels();
    removeAllActives();
    ActiveTabAndRightPanel('Code');
}

function closeAllRightPanels() {
    let tab_content = document.getElementsByClassName("tab_content");
    for (i = 0; i < tab_content.length; i++) {
        tab_content[i].style.display = "none";
    }
}

function removeAllActives() {
    let tab_links = document.getElementsByClassName('tab')[0].children;
    for (i = 0; i < tab_links.length; i++) {
        tab_links[i].className = tab_links[i].className = 'btnDisabled';
    }
}

function openTab(tabPress) {
    closeAllRightPanels();
    removeAllActives();
    ActiveTabAndRightPanel(tabPress);
}

function ActiveTabAndRightPanel(tabPress) {
    let idTab = 'id_tab_' + tabPress;
    let idHierarchy = 'id_hier_' + tabPress;
    let idPanel = 'id_panel_' + tabPress;

    document.getElementById(idTab).className = 'btnActive';
    document.getElementById(idHierarchy).style.display = "block";
    document.getElementById(idPanel).style.display = "block";
    initHierarchy();
}

//Hierarchy Funtions

function initHierarchy() {
    initCaret();
}

function initCaret() {
    let toggler = document.getElementsByClassName("caret");
    let i;

    for (i = 0; i < toggler.length; i++) {
        toggler[i].removeEventListener("click", clickedElementCaret);
        toggler[i].addEventListener("click", clickedElementCaret);
    }
}

function clickedElementCaret() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
}

function clickedElement(elementPress) {
    console.log(elementPress);
}