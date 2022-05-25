$(document).ready(function(){
    
// toggle sidebar
$(".toggle-icon").click(function(){
    $(".main-content").toggleClass("main-content-toggle");
    $(".toggle-icon .fa-bars").toggle();
    $(".toggle-icon .fa-xmark").toggle();
    $(".sidebar .sidebar-list li a .left-icon").toggleClass("mr-22");
})


// toggle sidebar sub list item
$(".sidebar-list li").click(function(){
    const targetElement = this.children[1];
    const showItem = document.querySelector(".show")
    // remove open sub item
    if(!targetElement.classList.contains("show") && showItem){
        showItem.classList.remove("show");
    }
    // toggle show class 
    targetElement.classList.toggle("show");
    console.log(targetElement.parentNode.children[0].children[0])
    console.log(targetElement.parentNode.children[0].children[1])
    // targetElement.parentNode.children[0].children[0].toggle();
    // targetElement.parentNode.children[0].children[1].toggle();

});








})