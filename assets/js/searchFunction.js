
var showSearchAdvanced = true;
function openSearchAdvanced(){
    if(showSearchAdvanced){
        var searchBox = document.querySelector(".mobile-header__search");
        searchBox.style.height = "60rem";
        searchBox.style.overflow = "visible";
        searchBox.style.backgroundColor = "#EEF1EF"
        document.querySelector(".mobile-category__icon").style.display= "block";
        document.querySelector(".box-1").style.backgroundColor = "#fff";
        document.querySelector(".input-1").style.backgroundColor = "#fff";
        document.querySelector(".box-2").style.backgroundColor = "#fff";
        document.querySelector(".input-2").style.backgroundColor = "#fff";
        document.querySelector(".mobile-header__filter").style.marginTop = "79rem";
    }else{
        colseSearchAdvanced();
    }
    showSearchAdvanced = !showSearchAdvanced;
}

function colseSearchAdvanced(){
    var searchBox = document.querySelector(".mobile-header__search");
    searchBox.style.height = "10rem";
    searchBox.style.overflow = "hidden";
    searchBox.style.backgroundColor = "#fff"
    document.querySelector(".mobile-category__icon").style.display= "none";
    document.querySelector(".box-2").style.backgroundColor = "#EEF1EF";
    document.querySelector(".input-2").style.backgroundColor = "#EEF1EF";
    document.querySelector(".box-1").style.backgroundColor = "#EEF1EF";
    document.querySelector(".input-1").style.backgroundColor = "#EEF1EF";
    document.querySelector(".mobile-header__filter").style.marginTop = "25rem";
}

function openSuggestionBox(num){
  var searchInput = document.querySelectorAll(".search__input");
  var suggestion = document.querySelectorAll(".suggestion");
    if(searchInput[num].value.length >= 2){
        console.log("ff");
        suggestion[num].style= "display: flex";
        // document.querySelector(".mobile-header__search").style.height = "43rem"
    }else{
      colseSuggestionBox(num);
    }
}

function colseSuggestionBox(num){
  var suggestion = document.querySelectorAll(".suggestion");
  suggestion[num].style= "display:none"; 
  // document.querySelector(".mobile-header__search").style.height = "12rem";
}