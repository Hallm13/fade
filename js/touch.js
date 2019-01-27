$(document).ready(function() {
  (function(){
    var dropDownClass = 'dropdown-content';
    var showClass = 'show';
    var dropDowns = document.getElementsByClassName('dropdown');

    var open = function(e){
        var openDropDown = e.target.nextElementSibling;
        var dropdowns = document.getElementsByClassName(dropDownClass);

        openDropDown.classList.toggle(showClass);

        var closeDropDown = function(event) {
            if (event.target === e.target) {
                return;
            }
            if (openDropDown.classList.contains(showClass)) {
                openDropDown.classList.remove(showClass);
            }
            window.removeEventListener('click', closeDropDown);
        };
        window.addEventListener('click', closeDropDown);
    }

    for(var i = 0; i < dropDowns.length; i++){
        dropDowns[i].children[0].addEventListener('click', open);
    }
}());
});
