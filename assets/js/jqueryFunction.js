$(document).ready(function () {  

    // $("#body:not(.suggestion)").on('click' , function(){
    //     $('.suggestion').hide();
    // })

    // $("#body:not(.visit__option)").on('click' , function(){
    //     $('.visit__option').hide();
    // })
    var activeBtnTab = $(".btn-tabs").find('a.btn-active').data('trigger');
    $('#' + activeBtnTab).show();

    $('.btn-tabs>a').on('click', function () {
        var tabId = $(this).data('trigger');
        $('#' + tabId).show();
        $('.tab-amodi__tabcontent:not(#' + tabId + ')').hide();
        $(this).addClass('btn-active');
        $(this).siblings('a').removeClass('btn-active');
    });

    var activeTabMobile = $(".tabs-mobile").find('a.active').data('trigger');
    $('#' + activeTabMobile).show();

    $('.tabs-mobile>a').on('click', function () {
        var tabId = $(this).data('trigger');
        $('#' + tabId).show();
        $('.tab-amodi__tabcontent:not(#' + tabId + ')').hide();
        $(this).addClass('active');
        $(this).siblings('a').removeClass('active');
    });

    $('.tab-amodi__tabcontent').hide();
    var activeTab = $(".tabs").find('a.active').data('trigger');
    $('#' + activeTab).show();

    $('.tabs>a').on('click', function () {
        var tabId = $(this).data('trigger');
        $('#' + tabId).show();
        $('.tab-amodi__tabcontent:not(#' + tabId + ')').hide();
        $(this).addClass('active');
        $('.owl-item>a').removeClass('active');
    });

    $('.tab-amodi__prev-control').on('click', function () {
        var tabslen = $('.tabs>a').length - 1;
        var activetablen = $('.tabs>a.active').index();
        var activetabs = $('.tabs>a.active');
        var activeTab = $('.tabs>a.active').data('trigger');
        if (activetablen == tabslen) {
            return false;
        } else {
            $(activetabs).removeClass('active');
            $(activetabs).next().addClass('active');
            $('#' + activeTab).hide();
            $('#' + activeTab).next().show();
        }
    });

    $('.tab-amodi__next-control').on('click', function () {
        var tabslen = $('.tabs>a').length - 1;
        var activetablen = $('.tabs>a.active').index();
        var activetabs = $('.tabs>a.active');
        var activeTab = $('.tabs>a.active').data('trigger');
        if (activetablen == 0) {
            return false;
        } else {
            $(activetabs).removeClass('active');
            $(activetabs).prev().addClass('active');
            $('#' + activeTab).hide();
            $('#' + activeTab).prev().show();
        }
    });

    $('.far').hover(
        function(){
            $(this).toggleClass('fas');
            $(this).toggleClass('doctors-page__icon-active');
        }
    )

    $('.tabcontent').hide();
    var activeSearchTabMobile = $(".tabs").find('a.active').data('trigger');
    $('#' + activeSearchTabMobile).show();

    $('.tabs>a').on('click', function () {
        var tabId = $(this).data('trigger');
        $('#' + tabId).show();
        $('.tabcontent:not(#' + tabId + ')').hide();
        $(this).addClass('active');
        $(this).siblings('a').removeClass('active');
    });
       
    var search = $("#search");
    var $doctors = $("#doctors");
    var $comment = $("#comment");
    var $suggestion = $("#suggestion");
    var $specialty = $('#specialty');
    var $article = $('#article');
    var $category = $('#category');
    var $submenu = $(".submenu");
    var $filter = $("#filter");
    var $dastebansi = $('#dastebansi');
    var $articleDesktop = $("#articleDesktop");
    var $mobileHeaderFilter = $("#mobile-header-filter");
    var $mobileFilter = $("#mobile-filter");
    var $tabs = $("#tabs");

    /// tabs ///
    $tabs.children().each(function (index) {
        $(this).attr('data-position', index);
    });

    $tabs.owlCarousel({
        rtl: true,
        responsive:{
            0:{
                items: 2,
            },
            600:{
                items: 4,
            }
        }
        
    });

    $(document).on('click', '.owl-item>div', function () {
        var $speed = 300;  // in ms
        $tabs.trigger('to.owl.carousel', [$(this).data('position'), $speed]);
    });
    
    

    /// mobileFilter ///
    $mobileFilter.children().each(function (index) {
        $(this).attr('data-position', index);
    });

    $mobileFilter.owlCarousel({
        rtl: true,
        items: 3,
    });

    $(document).on('click', '.owl-item>div', function () {
        var $speed = 300;  // in ms
        $mobileFilter.trigger('to.owl.carousel', [$(this).data('position'), $speed]);
    });
    
    
    /// mobileHeaderFilter ///
    $mobileHeaderFilter.children().each(function (index) {
        $(this).attr('data-position', index);
    });

    $mobileHeaderFilter.owlCarousel({
        rtl: true,
        items: 4,
    });

    $(document).on('click', '.owl-item>div', function () {
        var $speed = 300;  // in ms
        $mobileHeaderFilter.trigger('to.owl.carousel', [$(this).data('position'), $speed]);
    });

    /// articleDesktop ///
    $articleDesktop.children().each(function (index) {
        $(this).attr('data-position', index);
    });

    $articleDesktop.owlCarousel({
        rtl:true,
        loop: true,
        responsive: {
            0: {
                items: 3
            },
            400: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    $(document).on('click', '.owl-item>div', function () {
        var $speed = 300;  // in ms
        $articleDesktop.trigger('to.owl.carousel', [$(this).data('position'), $speed]);
    });
    
    /// dastebansi ///
    $dastebansi.children().each(function (index) {
    $(this).attr('data-position', index);
    });

    $dastebansi.owlCarousel({
        items: 4,
        rtl: true
    });

    $(document).on('click', '.owl-item>div', function () {
        var $speed = 300;  // in ms
        $dastebansi.trigger('to.owl.carousel', [$(this).data('position'), $speed]);
    });

    /// filter ///
    $filter.children().each(function (index) {
        $(this).attr('data-position', index);
    });

    $filter.owlCarousel({
        rtl:true,
        loop: true,
        items: 1,
    });

    $(document).on('click', '.owl-item>div', function () {
        var $speed = 300;  // in ms
        $filter.trigger('to.owl.carousel', [$(this).data('position'), $speed]);
    });


    /// submenu ///
    $submenu.children().each(function (index) {
        $(this).attr('data-position', index);
    });

    $submenu.owlCarousel({
        rtl:true,
        loop: true,
        items: 1,
    });

    $(document).on('click', '.owl-item>div', function () {
        var $speed = 300;  // in ms
        $submenu.trigger('to.owl.carousel', [$(this).data('position'), $speed]);
    });

    search.owlCarousel({
        rtl:true,
        loop: true,
        margin: 10,
        nav: true,
        navText: [
            "<i class='fa fa-angle-left' style='font-size: 2rem; color: #fff; margin 5rem;'></i>",
            "<i class='fa fa-angle-right' style='font-size: 2rem; color: #fff; margin 5rem;'></i>"
        ],
        responsive: {
            0: {
                items: 5
            },
            600: {
                items: 5
            },
            1000: {
                items: 6
            }
        }
    });


    $comment.children().each(function (index) {
        $(this).attr('data-position', index);
    });

    $comment.owlCarousel({
        rtl:true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        items: 4,
    });

    $(document).on('click', '.owl-item>div', function () {
        var $speed = 300;  // in ms
        $comment.trigger('to.owl.carousel', [$(this).data('position'), $speed]);
    });

    /// doctors ///
    $doctors.children().each(function (index) {
        $(this).attr('data-position', index);
    });

    $doctors.owlCarousel({
        rtl:true,
        center: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        items: 5,
    });

    $(document).on('click', '.owl-item>div', function () {
        var $speed = 300;  // in ms
        $doctors.trigger('to.owl.carousel', [$(this).data('position'), $speed]);
    });

    /// suggestion ///
    $suggestion.children().each(function (index) {
        $(this).attr('data-position', index);
    });

    $suggestion.owlCarousel({
        items: 4,
        rtl: true
    });

    $(document).on('click', '.owl-item>div', function () {
        var $speed = 300;  // in ms
        $suggestion.trigger('to.owl.carousel', [$(this).data('position'), $speed]);
    });

    /// specialty ///
    $specialty.children().each(function (index) {
        $(this).attr('data-position', index);
    });

    $specialty.owlCarousel({
        rtl: true,
        responsive: {
            300: {
                items: 3
            },
            600: {
                items: 3
            },
            700: {
                items: 3
            }
        }
    });

    $(document).on('click', '.owl-item>div', function () {
        var $speed = 300;  // in ms
        $specialty.trigger('to.owl.carousel', [$(this).data('position'), $speed]);
    });

    /// article ///
    $article.children().each(function (index) {
        $(this).attr('data-position', index);
    });

    $article.owlCarousel({
        items: 1,
        rtl: true,
    });

    $(document).on('click', '.owl-item>div', function () {
        var $speed = 300;  // in ms
        $article.trigger('to.owl.carousel', [$(this).data('position'), $speed]);
    });
    
    /// category ///
    $category.children().each(function (index) {
        $(this).attr('data-position', index);
    });

    $category.owlCarousel({
        items: 4,
        rtl: true
    });

    $(document).on('click', '.owl-item>div', function () {
        var $speed = 300;  // in ms
        $category.trigger('to.owl.carousel', [$(this).data('position'), $speed]);
    });

});

$(function(){

    $('input.filter__input').keyup(function(){

        var searchText = $(this).val();

        $('.filter__list > ul > li').each(function(){

            var currentLiText = $(this).text(),
                showCurrentLi = currentLiText.indexOf(searchText) !== -1;

            $(this).toggle(showCurrentLi);

        });     
    });

 
    

});


function matchStart(term, text) {
    if (text.toUpperCase().indexOf(term.toUpperCase()) == 0) {
        return true;
    }

    return false;
}

$.fn.select2.amd.require(['select2/compat/matcher'], function (oldMatcher) {
    $("select").select2({
        matcher: oldMatcher(matchStart),
        dropdownAutoWidth: true,
        dir: "rtl",
        language: "fa"
    })
    $('#multiple').select2({
        // matcher: oldMatcher(matchStart),
        maximumSelectionLength: 3,
        dir: "rtl",
        // placeholder: 'داروی خود را وارد کنید'
      });
});