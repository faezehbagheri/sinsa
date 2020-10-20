function romoveActiveClass(){
    document.querySelector(".article__main-active").classList.add("article__main-inactive");
    document.querySelector(".article__main-active").classList.remove("article__main-active");
}

function clicked1(){
    romoveActiveClass()
    document.querySelector("#article-1").classList.add("article__main-active");
    document.querySelector("#article-1").classList.remove("article__main-inactive");
}
function clicked2(){
    romoveActiveClass()
    document.querySelector("#article-2").classList.add("article__main-active");
    document.querySelector("#article-2").classList.remove("article__main-inactive");
}
function clicked3(){
    romoveActiveClass()
    document.querySelector("#article-3").classList.add("article__main-active");
    document.querySelector("#article-3").classList.remove("article__main-inactive");
}
function clicked4(){
    romoveActiveClass()
    document.querySelector("#article-4").classList.add("article__main-active");
    document.querySelector("#article-4").classList.remove("article__main-inactive");
}
function clicked5(){
    romoveActiveClass()
    document.querySelector("#article-5").classList.add("article__main-active");
    document.querySelector("#article-5").classList.remove("article__main-inactive");
}

function showSearchAdvanced(){
    var label = document.querySelector(".search__advanced-label");
    var searchAdvanced= document.querySelector(".search-advanced");

    if( searchAdvanced.style.display === "none" ){
        label.style.display = "none";
    
        searchAdvanced.style.display = "block";
    
        document.querySelector(".search__advanced-btn").style.backgroundImage = "url(../../img/iconic-ios-close-circle-outline@2x.png)";
        document.querySelector(".search__advanced-btn").style.backgroundColor = "#E43F6F"; 
    }else{
        label.style.display = "block";
    
        searchAdvanced.style.display = "none";
    
        document.querySelector(".search__advanced-btn").style.backgroundImage = "url(../../img/advanced@2x.png)";
    }
}

function openSearchAdvanced(){
    var searchBox = document.querySelector(".mobile-header__search");
    searchBox.style.height = "60rem";
    searchBox.style.overflow = "visible";
    searchBox.style.backgroundColor = "#EEF1EF"
    document.querySelector(".mobile-category__icon").style.display= "block";
    document.querySelector(".box-1").style.backgroundColor = "#fff";
    document.querySelector(".input-1").style.backgroundColor = "#fff";
    document.querySelector(".box-2").style.backgroundColor = "#fff";
    document.querySelector(".input-2").style.backgroundColor = "#fff";
    document.querySelector(".mobile-header__suggestion").style.marginTop = "76rem";
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
    document.querySelector(".mobile-header__suggestion").style.marginTop = "25rem";
}

var show = true;
function showButton(){
    if(show){
        document.querySelector(".left-side__box").style.top = "-400%"
        document.querySelector(".left-side__box").style.opacity = "1";
        show = false;
    }else{
        document.querySelector(".left-side__box").style.top = "95%"
        document.querySelector(".left-side__box").style.opacity = "0";
        show = true;
    }
}

function openIllnessText(num){
    document.querySelector(".activate").classList.remove("activate");
    document.querySelector("#box-"+num).classList.add("activate");
}

function openIllnessTextMobile(num){
    console.log('ss');
    document.querySelector(".activate-mobile").classList.remove("activate-mobile");
    document.querySelector("#mobile-box-"+num).classList.add("activate-mobile");
}


var showOption = [false ,false ,false ,false ,false ,false ];
var filterType = ["","takhasos" , "shahr" , "mahale" , "bime" , "jensiat" , "moshavere"];
var id = 1;
function openOption(num){
    var checkboxes = document.getElementsByName(filterType[num]);
    var html=[];
    var newHtml=[];


    if(showOption[num]){
        document.querySelector(".filter__optios-" + num).style.display = "block";
        document.querySelector(".filter__picked-" + num).style.display = "none";
    }else{
        document.querySelector(".filter__picked-" + num).innerHTML = '';
        for(var i = 0; i < checkboxes.length; i++)  
        {  
            
            if(checkboxes[i].checked)  {
                html[i]= "<div class='filter__item flex r-reverse align-center' id='item-%id%' onclick='removeItem(this.id)'><i class='fas fa-times-circle filter__close-icon'></i><span class='filter__text'>%text%</span></div>"
                newHtml[i] = html[i].replace('%text%' , checkboxes[i].value);
                newHtml[i] = newHtml[i].replace('%id%' , id);
                id++;
            }
        } 
        
        for(var i = 0; i < html.length; i++)  
        {  
            document.querySelector(".filter__picked-" + num).insertAdjacentHTML('beforeend' , newHtml[i]);
        }

        document.querySelector(".filter__optios-" + num).style.display = "none";
        document.querySelector(".filter__picked-" + num).style.display = "block";
    }
    showOption[num] = ! showOption[num];
}

function removeItem(id){
    var el = document.getElementById(id);
    el.parentElement.removeChild(el);
}

var showSubMenu=['',true,true,true,true,true,true,true];
function openSubMenu(num){
    if(showSubMenu[num]){
        document.querySelector("#sub-menu-"+num).style = "transform: translate(0); height: 30vh";
        document.querySelector("#left-icon-"+num).style.display= "none";
        document.querySelector("#down-icon-"+num).style= "padding-left: 3rem; display: inline-block; ";
    }else{
        document.querySelector("#sub-menu-"+num).style = "transform: translate(150%); height: 0";
        document.querySelector("#left-icon-"+num).style= "padding-left: 3rem; display: inline-block; ";
        document.querySelector("#down-icon-"+num).style.display= "none";        
    }

    showSubMenu[num] = !showSubMenu[num]
}

function openSuggestionBox(){
    var value= document.querySelector(".search__input").value;
    if(value.length >= 2){
        console.log("ff");
        document.querySelector(".suggestion").style.display= "flex";
        document.querySelector(".search__advanced").style.display = "none";
    }else{
        document.querySelector(".suggestion").style.display= "none"; 
        document.querySelector(".search__advanced").style.display = "flex";
    }
}

// window.addEventListener("scroll", function(event) { 
    
//     if(this.scrollY > 700){
//         console.log("lll");
//     }
// });