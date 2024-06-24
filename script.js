//selecting popupbox popupovrley button
var overley=document.querySelector(".popup-overley")
var popupbox=document.querySelector(".popup-box")
var addpopup=document.getElementById("add-popup-button")


addpopup.addEventListener("click",function(){
    overley.style.display="block"
    popupbox.style.display="block"
})



//selecting cancel button
var cancelpopup=document.getElementById("cancel-popup")

cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    overley.style.display="none"
    popupbox.style.display="none"

})

//selecting main container, add-book, book-title-input,book-author-input,book-description-input

var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitle=document.getElementById("book-title-input")
var bookauthor=document.getElementById("book-author-input")
var bookdescription=document.getElementById("book-description-input")


addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","class-container")
    div.innerHTML=`<h1>${booktitle.value}</h1>
    <h2>${bookauthor.value}</h2>
    <p>${bookdescription.value}</p>
    <button onclick="deletebox(event)">Delete</button> `
    container.append(div)
    overley.style.display="none"
    popupbox.style.display="none"
})


//select delete box

function deletebox(event)
{
    event.target.parentElement.remove()

}