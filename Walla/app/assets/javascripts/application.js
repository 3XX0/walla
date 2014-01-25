// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


$(function () {
  $('#hide').hide();
  $('#header').hide();
  setTimeout(function() {$('#header').fadeIn('slow');}, 2000);
});

function UnhappyCustomer() {
  $('#question span#show').fadeOut('slow');
  setTimeout(function() { 
    $('span#hide').fadeIn('slow');
   }, 620);
}

function ChangeFrame(url) {
  setTimeout(function() {
    $('iframe').remove();
    $('<iframe id="someId" src="' + url + '"/>').appendTo('body');
  }, 10000);
}

function redirectTwitter(){
  setTimeout(function() {
    window.location.replace("http://twitter.com");
  }, 6000);
}


$(function(){
 $("#refused").click(function() {
        var postId = $("#refused").attr('class');
        $.ajax({
           type: "POST",
           url: "/go/" +  postId + "/next",
           success: function(response){
            redirectTwitter();
           },
           error: function(req, response) {
            redirectTwitter();
           }
        });
 });
});













