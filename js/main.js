document.querySelector(".burger_menu").addEventListener("click", function(){
    document.querySelector(".burger_menu").classList.toggle("active")
    document.querySelector(".burger_navbar").classList.toggle("active")
})

document.querySelector(".box_4_item_1").addEventListener("click", function(){
    document.querySelector(".box_4_item_content_1").classList.toggle("box_4_active")
})
document.querySelector(".box_4_item_2").addEventListener("click", function(){
    document.querySelector(".box_4_item_content_2").classList.toggle("box_4_active")
})
document.querySelector(".box_4_item_3").addEventListener("click", function(){
    document.querySelector(".box_4_item_content_3").classList.toggle("box_4_active")
})