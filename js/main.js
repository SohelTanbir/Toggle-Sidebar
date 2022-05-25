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
    // set default width on main-content if toggle sub list item on sidebar 
    const mainContent =  document.querySelector(".main-content");
    if(mainContent.classList.contains("main-content-toggle")){
         $(".main-content").removeClass("main-content-toggle");
         $(".toggle-icon .fa-bars").toggle();
         $(".toggle-icon .fa-xmark").toggle();
         $(".sidebar .sidebar-list li a .left-icon").toggleClass("mr-22");
    }
    
    // $(".main-content").removeClass("main-content-toggle");
    // $(".main-content").toggleClass("main-content-toggle");

});
// toggle list item right icon of sidebar
$(".sidebar-list li").click(function(){
    const activeElement =this.children[0].children[1];
    // toggle angle down and up icon 
    activeElement.children[0].classList.toggle("hide");
    activeElement.children[1].classList.toggle("angle_up");
});








})