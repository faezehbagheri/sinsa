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
        document.querySelector(".mobile-header__suggestion").style.marginTop = "76rem";
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

function toggleTab(selector){
    document.querySelector(selector).classList.toggle("activate");
}

function openIllnessTextMobile(selector){
    document.querySelector(selector).classList.toggle("activate-mobile");
}


var showOption = [false ,false ,false ,false ,false ,false ];
var filterType = ["","takhasos" , "shahr" , "mahale" , "bime" , "jensiat" , "moshavere"];
var id = 1;
function openOption(num){
    var checkboxes = document.getElementsByName(filterType[num]);
    var html=[];
    var newHtml=[];

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

}

var showOption_map = [false ,false ,false ,false ,false ,false ];
var filterType_map = ["", "mahale-map" , "shahr-map" , "ostan-map" , "takhasos-map"  , "bime-map" ];
var id = [1,1,1,1,1,1];
function openFilterOption_map(num){
    var checkboxes = document.getElementsByName(filterType_map[num]);
    var html=[];
    var newHtml=[];

    if(!showOption_map[num]){
        document.querySelector("#map-optios-" + num).style = "top: 100%; height: 19vh; opacity: 1;";
    }else{
        for(var i = 0; i < checkboxes.length; i++)  
        {  
            
            if(checkboxes[i].checked)  {
                document.querySelector(".picked-" + num).innerHTML = '';
                html[i]= "<div class='filter__item flex r-reverse align-center' id='item-%num%-%id%' onclick='removeItem(this.id)'><i class='fas fa-times-circle filter__close-icon'></i><span class='filter__text'>%text%</span></div>"
                newHtml[i] = html[i].replace('%text%' , checkboxes[i].value);
                newHtml[i] = newHtml[i].replace('%num%' , num);
                newHtml[i] = newHtml[i].replace('%id%' , id[num]);
                id[num]++;
            }
        } 
        
        for(var i = 0; i < html.length; i++)  
        {  
            document.querySelector(".picked-" + num).insertAdjacentHTML('beforeend' , newHtml[i]);
        }
        document.querySelector("#map-optios-" + num).style = "top: 0%; height: 0; opacity: 0;";
    }
    showOption_map[num] = ! showOption_map[num];
}
function removeItem(id){
    var el = document.getElementById(id);
    el.parentElement.removeChild(el);
}

var showSubMenu=['',true,true,true,true,true,true,true];
function openSubMenu(num){
    if(showSubMenu[num]){
        document.querySelector("#sub-menu-"+num).style = "transform: translate(0); height: 35rem";
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

var firstTime= true;
function toggleActive(num){
    if(!firstTime){
        document.querySelector('.item-active').classList.remove("item-active");
    }
    document.querySelector("#hospital-"+num).classList.add("item-active");
    document.querySelector(".hospital-details").style.display= "flex";
    document.querySelector(".map-tools").style.top= "75%";

    document.querySelector(".hospital-details").innerHTML= '';
    var html = `
    <div class="hospital-details__container flex r-reverse align-center justi-around">
                <div class="hospital-details__col-1 flex column align-end justi-around">
                    <p class="hospital-details__name">بیمارستان</p>
                    <div class="hospital-details__full-width flex r-reverse align-center justi-between">
                        <span class="hospital-details__type">بیمارستان</span>
                        <div class=" flex r-reverse align-center ">
                            <i class="fas fa-clock hospital-details__clock-icon"></i>
                            <span class="hospital-details__time">7.00</span>
                            <span class="hospital-details__time">10.00</span>
                        </div>
                    </div>
                    <div class="flex r-reverse align-start">
                        <i class="fas fa-map-marker-alt hospital-details__location-icon"></i>
                        <span class="hospital-details__address">استان تهران - تهران - بلوار کشاورز - بین خیابان کارگر و جمالزاده - جنب آزمایشگاه نور - پلاک ۹۵ - طبقه پنجم - واحد، خیابان هشتم
                        </span>
                    </div>
                </div>
                <div class="hospital-details__col-2 flex column align-center justi-around">
                    <div>
                        <i class="far fa-star hospital-details__star-icon"></i>
                        <i class="far fa-star hospital-details__star-icon"></i>
                        <i class="far fa-star hospital-details__star-icon"></i>
                        <i class="far fa-star hospital-details__star-icon"></i>
                        <i class="far fa-star hospital-details__star-icon"></i>
                    </div>
                    <div>
                        <span class="hospital-details__phone">2235563</span>
                        <i class="fas fa-phone hospital-details__phone-icon"></i>
                    </div>
                    <button class="hospital-details__btn">دریافت مشاوره</button>
                </div>
            </div>
    `
    document.querySelector(".hospital-details").insertAdjacentHTML('beforeend',html);
    firstTime= false;
}
function toggleSearchBox(){
    document.querySelector(".map-toolbar__search-box").classList.toggle("map-toolbar__show-searchBox")
}

var data= [
    {
        title: 'بیماری ها',
        data:[]
    },
    {
        title: 'داروها',
        data:[]
    },
    {
        title: 'زندگی سالم',
        data:[
            {
                title: 'عادت های سلامت',
                data: []
            },
            {
                title: 'سلامت روان',
                data:[]
            },
            {
                title: 'زیبایی و تعادل',
                data:[
                    {
                        title : 'سلامت فردی',
                        data:["سلامت و بهداشت" , "سلامت خواب" , "سلامت سنی" , "سلامت زنان" , "سلامت مردان"]
                    },
                    {
                        title : 'ورزشی',
                        data:[]
                    },
                ]
            },
            {
                title: 'رژیم غذایی',
                data:[
                    {
                        title : 'سلامت فردی',
                        data:["سلامت و بهداشت" , "سلامت خواب" , "سلامت سنی" , "سلامت زنان" , "سلامت مردان"]
                    },
                    {
                        title : 'ورزشی',
                        data:[]
                    },
                    {
                        title : 'انگیزشی',
                        data:[]
                    },
                ]
            },
            {
                title: 'کتاب سلامت',
                data:[]
            },
            {
                title: 'پادکست سلامت',
                data:[]
            },
            {
                title: 'منابع',
                data:[]
            }
        ]
    },
    {
        title: 'خانواده',
        data:[]
    },
    {
        title: 'اخبار',
        data:[]
    },
    {
        title: 'مقالات',
        data:[]
    },

]