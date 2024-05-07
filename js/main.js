

    $(document).ready(function() {
 
 $("#owl-gallery").owlCarousel({
   navigation : true,
   items : 4, 
       stagePadding: 50,

   loop:true,
      nav:true,
      margin:10,
   animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      navText:["<div class='nav-btn prev-slide'><img src='img/left-arrow.webp'/></div>","<div class='nav-btn next-slide'><img src='img/right-arrow.webp' /></div>"],

 });
 $("#owl-review").owlCarousel({
   navigation : true,
   items : 3, 

   loop:true,
      nav:true,
      margin:10,
   animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      navText:["<div class='nav-btn prev-slide'><img src='img/left-arrow.webp'/></div>","<div class='nav-btn next-slide'><img src='img/right-arrow.webp' /></div>"],

 });

});

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
