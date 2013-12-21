#pragma strict

var couleurEntrer : Color = Color.red;
var couleurSortie : Color = Color.white;
var tailleEntrer : float = 20;
var tailleSortie : float = 20;

function OnMouseEnter() {
    guiText.material.color = couleurEntrer;
    guiText.fontSize = guiText.fontSize + tailleEntrer;
}

function OnMouseExit() {
    guiText.material.color = couleurSortie;
    guiText.fontSize = guiText.fontSize - tailleSortie;
}

function Start () {

}

function Update () {

}