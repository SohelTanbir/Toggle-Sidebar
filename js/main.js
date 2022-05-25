$(document).ready(function(){
    
// toggle sidebar
$(".toggle-icon").click(function(){
    $(".main-content").toggleClass("main-content-toggle");
    $(".toggle-icon .fa-bars").toggle()
    $(".toggle-icon .fa-xmark").toggle()
})


// toggle sidebar sub list item
$(".sidebar-list li.user").click(function(){
    $(".sidebar-list li.user .angle_down").toggle()
    $(".sidebar-list li.user .angle_up").toggle();
    $(".sidebar-list li.user .sidebar-sub-list").slideToggle();
})
$(".sidebar-list li.message").click(function(){
    $(".sidebar-list li.message .angle_down").toggle()
    $(".sidebar-list li.message .angle_up").toggle();
    $(".sidebar-list li.message .sidebar-sub-list").slideToggle();
})
$(".sidebar-list li.bookmark").click(function(){
    $(".sidebar-list li.bookmark .angle_down").toggle()
    $(".sidebar-list li.bookmark .angle_up").toggle();
    $(".sidebar-list li.bookmark .sidebar-sub-list").slideToggle();
})
$(".sidebar-list li.file").click(function(){
    $(".sidebar-list li.file .angle_down").toggle()
    $(".sidebar-list li.file .angle_up").toggle();
    $(".sidebar-list li.file .sidebar-sub-list").slideToggle();
})
$(".sidebar-list li.stats").click(function(){
    $(".sidebar-list li.stats .angle_down").toggle()
    $(".sidebar-list li.stats .angle_up").toggle();
    $(".sidebar-list li.stats .sidebar-sub-list").slideToggle();
})
$(".sidebar-list li").click(function(){
    console.log($(".sidebar-list li"));
});






})