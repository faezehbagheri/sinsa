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

function toggleSearchBox(){
    document.querySelector(".map-toolbar__search-box").classList.toggle("map-toolbar__show-searchBox")
}

var data = [
    {
        name: "بیمارستان نیکان",
        type: "بیمارستان جامع",
        address: " تهران - بلوار کشاورز - بین خیابان کارگر و جمالزاده - جنب آزمایشگاه نور - پلاک ۹۵ - طبقه پنجم - واحد",
        time1: 7.00,
        time2: 10.00,
        phone: 225457325,
        star: 5
    },
    {
        name: "بیمارستان فجر",
        type: "داخلی - جراحی",
        address: " تهران - بلوار کشاورز - بین خیابان کارگر و جمالزاده - جنب آزمایشگاه نور - پلاک ۹۵ - طبقه پنجم - واحد",
        time1: 7.00,
        time2: 10.00,
        phone: 22338765,
        star: 5
    },
    {
        name: "بیمارستان اختر",
        type: "داخلی - جراحی",
        address: " تهران - بلوار کشاورز - بین خیابان کارگر و جمالزاده - جنب آزمایشگاه نور - پلاک ۹۵ - طبقه پنجم - واحد",
        time1: 7.00,
        time2: 10.00,
        phone: 22338765,
        star: 5
    },
    {
        name: "بیمارستان هاجر",
        type: "عفونی - پوست",
        address: " تهران - بلوار کشاورز - بین خیابان کارگر و جمالزاده - جنب آزمایشگاه نور - پلاک ۹۵ - طبقه پنجم - واحد",
        time1: 7.00,
        time2: 10.00,
        phone: 22338765,
        star: 5
    },
    {
        name: "بیمارستان امام رضا",
        type: "روانشناسی",
        address: " تهران - بلوار کشاورز - بین خیابان کارگر و جمالزاده - جنب آزمایشگاه نور - پلاک ۹۵ - طبقه پنجم - واحد",
        time1: 7.00,
        time2: 10.00,
        phone: 22338765,
        star: 5
    },
]

var responsiveZoom = (window.innerWidth < 768) ? 6.75 : 12;

function initMap() {
    var firstTime= true;
    toggleActive = (num)  => {
        
        switch (num){
            case '0' :
                console.log("niikaaan");
                map.panTo(nikanHos.getPosition());
                map.setZoom(14);
                break;
            case '1' :
                map.panTo(fajrHos.getPosition());
                map.setZoom(14);
                break;
            case '2' :
                map.panTo(akhtarHos.getPosition());
                map.setZoom(14);
                break;
            case '3' :
                map.panTo(hajarHos.getPosition());
                map.setZoom(14);
                break;
            case '4' :
                map.panTo(emamRezaHos.getPosition());
                map.setZoom(14);
                break;
        }
        
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
                        <p class="hospital-details__name">بیمارستان %name%</p>
                        <div class="hospital-details__full-width flex r-reverse align-center justi-between">
                            <span class="hospital-details__type">بیمارستان %type%</span>
                            <div class=" flex r-reverse align-center ">
                                <i class="fas fa-clock hospital-details__clock-icon"></i>
                                <span class="hospital-details__time">%time1%</span>
                                <span class="hospital-details__time">%time2%</span>
                            </div>
                        </div>
                        <div class="flex r-reverse align-start">
                            <i class="fas fa-map-marker-alt hospital-details__location-icon"></i>
                            <span class="hospital-details__address">%address%</span>
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
                            <span class="hospital-details__phone">%phone%</span>
                            <i class="fas fa-phone hospital-details__phone-icon"></i>
                        </div>
                        <button class="hospital-details__btn">دریافت مشاوره</button>
                    </div>
                </div>
        `
        html = html.replace('%name%' , data[num].name);
        html = html.replace('%type%' , data[num].type);
        html = html.replace('%time1%' , data[num].time1);
        html = html.replace('%time2%' , data[num].time2);
        html = html.replace('%address%' , data[num].address);
        html = html.replace('%phone%' , data[num].phone);
        document.querySelector(".hospital-details").insertAdjacentHTML('beforeend',html);
        firstTime= false;
    }
  var myLatlng = new google.maps.LatLng(35.69439, 51.42151);
  var mapOptions = {
    styles: [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#00338D"
          },
          {
            "visibility": "on"
          },
          {
            "weight": 2
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
           "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dadada"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#bbdefb"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      }
    ],
    zoom: responsiveZoom,
    minZoom: 6,
    maxZoom: 17,
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.DEFAULT
    },
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false,
    panControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    overviewMapControl: false,
    rotateControl: false
  };
  var map = new google.maps.Map(
    document.getElementById("map-canvas"),
    mapOptions
  );

  // بیمارستان نیکان  
  var nikanHos = new google.maps.Marker({
    position: new google.maps.LatLng(35.803514, 51.489504),
    map: map,
    title: "بیماستان نیکان",
    icon: "/assets/img/hospital.png"
  });
  google.maps.event.addListener(nikanHos, "click", function() {
    hideInfo();
    showInfo(0);
    map.panTo(this.getPosition());
    map.setZoom(14);
  });

  // بیمارستان فجر
  var fajrHos = new google.maps.Marker({
    position: new google.maps.LatLng(35.692758, 51.464980),
    map: map,
    title: "بیمارستان فجر ",
    icon: "/assets/img/hospital.png"
  });
  google.maps.event.addListener(fajrHos, "click", function() {
    hideInfo();
    showInfo(1);
    map.panTo(this.getPosition());
    map.setZoom(14);
  });

   // بیماستان اختر
   var akhtarHos = new google.maps.Marker({
    position: new google.maps.LatLng(35.789252, 51.431101),
    map: map,
    title: "بیمارستان اختر",
    icon: "/assets/img/hospital.png"
  });
  google.maps.event.addListener(akhtarHos, "click", function() {
    hideInfo();
    showInfo(2);
    map.panTo(this.getPosition());
    map.setZoom(14);
  });

   // بیمارستان هاجر
   var hajarHos = new google.maps.Marker({
    position: new google.maps.LatLng(35.733988, 51.403742),
    map: map,
    title: "بیمارستان هاجر",
    icon: "/assets/img/hospital.png"
  });
  google.maps.event.addListener(hajarHos, "click", function() {
    hideInfo();
    showInfo(3);
    map.panTo(this.getPosition());
    map.setZoom(14);
  });

    // بیمارستان امام رضا
    var emamRezaHos = new google.maps.Marker({
    position: new google.maps.LatLng(35.720969, 51.382468),
    map: map,
    title: "بیمارستان امام رضا",
    icon: "/assets/img/hospital.png"
    });
    google.maps.event.addListener(emamRezaHos, "click", function() {
    hideInfo();
    showInfo(4);
    map.panTo(this.getPosition());
    map.setZoom(14);
    });

  // back to offices overview
  document.querySelector("#map-overview").addEventListener("click", function() {
    map.panTo(myLatlng);
    map.setZoom(responsiveZoom);
    hideInfo();
  });
  
  window.addEventListener("resize", function() {
    if (window.innerWidth < 768) responsiveZoom = 6.75
    else if (window.innerWidth > 768) responsiveZoom = 7.75
    map.setZoom(responsiveZoom);
  });
  
}

function showInfo(num) {  
  toggleActive(num);
  document.querySelector("#map-canvas").classList.add("zoomed");
  document.querySelector("#map-overview").classList.remove("hidden");
}

function hideInfo() {
  if (document.querySelector(".shown")) {
    document.querySelector(".shown").classList.remove("shown");
  }
  document.querySelector("#map-canvas").classList.remove("zoomed");
  document.querySelector("#map-overview").classList.add("hidden");
}

function showContactInfo(num){
  document.querySelector("#div-" + num).classList.toggle('personal-card-large__contact-open');
  document.querySelector("#btn-" + num).classList.toggle("personal-card-large__btn-pos-bottom");
}

var largeType = true;
function changeListType(id){
  document.querySelector('.doctors__type-active').classList.remove('doctors__type-active');
  document.querySelector(id).classList.add('doctors__type-active');

  if(largeType){
    document.querySelector('.personal-card').style.display = 'none';
    document.querySelector('.personal-card-large').style.display = 'flex';
  }else{
    document.querySelector('.personal-card-large').style.display = 'none';
    document.querySelector('.personal-card').style.display = 'flex';
  }

  largeType = !largeType;
}