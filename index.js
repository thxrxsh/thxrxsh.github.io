




// Please reload the page when you change the viewport. Otherwise, the website will not work properly.





var home_bac = document.querySelector('.home');
var message_box = document.querySelector('.message');
const notification_area = document.querySelector('.notification-area');
const main_image = document.querySelector('.image img');
const main_image_box = document.querySelector('.image');
const drop_down = document.querySelector('.drop-down');
const drop_down_btn = document.querySelector('.drop-down-btn');
const top_nav = document.querySelector('.top-nav');
const top_nav_btns = document.querySelectorAll('.top-nav-btn');
const top_nav_btn = document.querySelector('.top-nav-btn');
const logo = document.querySelector('.logo');
const menu_button = document.querySelector('.menu-button');
const menu_button_bar = document.querySelector('.menu-button-bar');
const menu_button_bars = document.querySelectorAll('.menu-button-bar');
const take_tour = document.querySelector('.tour-button');
const about_service_portfolio = document.querySelector('#about-service-portfolio');
const about_service_header = document.querySelector('.about_service-header');
const about_service_header_text = document.querySelector('.about_service-header-text');
const about_service_container = document.querySelector('.about_service-container');
const description_tester = document.querySelector('.description-tester');
const description_developer = document.querySelector('.description-developer');

const contact = document.querySelector('#contact');
const btn_home = document.querySelector('#btn-home');


var text_change_point = home_bac.offsetHeight + ( home_bac.offsetHeight /2 );
var sticky_point = home_bac.offsetHeight;


// var prevScrollpos = window.pageYOffset;



//     ---  Pre Loader ---

window.addEventListener('load', function() {
  this.document.querySelector('.pre-loader-area').style.display = 'none';
});



window.onscroll = function() {
  // topNavHide();
  headerChange();
  stickySection();
  aboutServiceTextEffect();

  // console.log("home_bac = "+home_bac.offsetHeight+"\tscrollTop = "+document.documentElement.scrollTop);
};



function headerChange() {
  if ((document.body.scrollTop > 80 && document.body.scrollTop < home_bac.offsetHeight-50)|| (document.documentElement.scrollTop > 80 && document.documentElement.scrollTop < home_bac.offsetHeight-50)) {

    top_nav.classList.add('top-nav-white');
    top_nav.classList.remove('top-nav-black');
    top_nav_btns.forEach(top_nav_btn => {
      top_nav_btn.classList.add('top-nav-text-black');
      top_nav_btn.classList.remove('top-nav-text-white');
    }); 

    menu_button_bars.forEach(menu_button_bar => {
      menu_button_bar.classList.add('menu-button-bar-black');
    });

    logo.classList.add('logo-black');

  }
  else if (document.body.scrollTop > home_bac.offsetHeight-50 || document.documentElement.scrollTop > home_bac.offsetHeight-50){

  top_nav.classList.remove('top-nav-white');
  top_nav.classList.add('top-nav-black');
  top_nav_btns.forEach(top_nav_btn => {
    top_nav_btn.classList.remove('top-nav-text-black');
    top_nav_btn.classList.add('top-nav-text-white');
  });


  menu_button_bars.forEach(menu_button_bar => {
    menu_button_bar.classList.remove('menu-button-bar-black');
  });

  logo.classList.remove('logo-black');

  

  } else {


  top_nav.classList.remove('top-nav-white');
  top_nav.classList.remove('top-nav-black');
  top_nav_btns.forEach(top_nav_btn => {
    top_nav_btn.classList.remove('top-nav-text-black');
    top_nav_btn.classList.add('top-nav-text-white');
  });

  menu_button_bars.forEach(menu_button_bar => {
    menu_button_bar.classList.remove('menu-button-bar-black');
  });

  logo.classList.remove('logo-black');
}};







function stickySection(){
  
  if ((document.body.scrollTop > sticky_point )|| (document.documentElement.scrollTop > sticky_point )) {
    about_service_portfolio.classList.add("sticky");
  } 

  else {
    about_service_portfolio.classList.remove("sticky");
  }
}

function aboutServiceTextEffect(){

  if ((document.body.scrollTop > text_change_point )|| (document.documentElement.scrollTop > text_change_point )) {
    about_service_header_text.innerHTML = '&lt; Full Stack Developer &gt;';
    description_tester.style.cssText = "display:none;"
    description_developer.style.cssText = "display:block;"

  } else {
    about_service_header_text.innerHTML = '&lt; Penetration Tester &gt;';
    description_developer.style.cssText = "display:none;"
    description_tester.style.cssText = "display:block;"
   }
  
}



function notification(message){
    message_box.innerHTML = message;
    message_box.style.opacity='1';
    notification_area.style.opacity='1';
    notification_area.classList.add('show-notification');;
    setTimeout(() => {
      message_box.style.opacity='0';
      notification_area.style.opacity='0';
    }, 1000);

    setTimeout(() => {
      notification_area.classList.remove('show-notification');
    }, 2000);
}




drop_down_btn.onclick = function() {
  menu_button.classList.toggle("change");
  drop_down.classList.toggle('change');
  
}
menu_button.onclick = function() {
  menu_button.classList.toggle("change");
  drop_down.classList.toggle('change');
  
}

take_tour.onclick = function() {


  if (window.innerWidth > 912) {
    document.querySelector('#top-nav-home').click();
    setTimeout(() => {notification("Let's go !"); }, 500);
    
    setTimeout(() => { document.querySelector('#top-nav-about').click(); }, 1500);
  
    setTimeout(() => { window.scrollBy(0,sticky_point)}, 6000);
  
    setTimeout(() => { window.scrollBy(0,sticky_point*1.2)}, 8000);
  
    setTimeout(() => { document.querySelector('#top-nav-contact').click(); }, 12000);
  
    setTimeout(() => { document.querySelector('#top-nav-home').click(); }, 14000);
  
  
  } else if (window.innerWidth < 913 && window.innerWidth > 749) {
    document.querySelector('#top-nav-home').click();
    setTimeout(() => {notification("Let's go !"); }, 500);
    
    setTimeout(() => { document.querySelector('#top-nav-about').click(); }, 2000);
  
    setTimeout(() => { window.scrollBy(0,sticky_point*0.8)}, 6000);
  
    setTimeout(() => { window.scrollBy(0,sticky_point*1.2)}, 11000);
  
    setTimeout(() => { document.querySelector('#top-nav-contact').click(); }, 15000);
  
    setTimeout(() => { document.querySelector('#top-nav-home').click(); }, 18000);
  
  } else if (window.innerWidth < 750){
    document.querySelector('#top-nav-home').click();
    setTimeout(() => {notification("Let's go !"); }, 500);
    
    setTimeout(() => { window.scrollBy(0,sticky_point)}, 2000); //Tester
  
    setTimeout(() => { window.scrollBy(0,sticky_point*0.9)}, 5000); // Developer

    setTimeout(() => { window.scrollBy(0,sticky_point)}, 8000); //About

    setTimeout(() => { window.scrollBy(0,sticky_point*1.2)}, 12000); //Portfolio
  
  
    setTimeout(() => { document.querySelector('#top-nav-contact').click(); }, 15000); //Contact
  
    setTimeout(() => { document.querySelector('#top-nav-home').click(); }, 18000); //Home
  }


}
