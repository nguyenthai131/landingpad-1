
var cardButtons = document.querySelectorAll('.card .btn') ;
var closeButton = document.querySelector('.popup-box__close') ;
var popup = document.querySelector('.popup') ;
var popupBox = document.querySelector('.popup-box') ;


for(var i = 0 ; i < cardButtons.length ; i++) {
    cardButtons[i].addEventListener('click' , function() {
        popup.style.visibility = 'visible' ;
        popup.style.opacity = '1' ;

        popupBox.style.opacity = '1' ;
        popupBox.style.transform = 'translate(-50% , -50%) scale(1)'

    })

}

closeButton.onclick = function() {

    setTimeout(function() {
        popupBox.style.opacity = '0' ;
        popupBox.style.transform = 'translate(-50% , -50%) scale(.5)'
    } ,100)

    setTimeout(function() {
        popup.style.visibility = 'hidden' ;
        popup.style.opacity = '0' ;

    } , 500)

}





