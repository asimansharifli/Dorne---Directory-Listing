// Responsive Burger Menu 
document.getElementById('icon').onclick =function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
    
  }

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown 2 content */
document.getElementById('dropdown2').onclick =function myFunctionDropdown2() {
    if (document.getElementById("navbar_dropdown").style.display === "block"){
         document.getElementById("navbar_dropdown").style.display = "none";
         if (document.getElementById("navbar_dropdown2").style.display === "block") {
             document.getElementById("navbar_dropdown2").style.display = "none";
           } 
           else {
             document.getElementById("navbar_dropdown2").style.display = "block";
           }
     }
     else{
       if (document.getElementById("navbar_dropdown2").style.display === "block") {
           document.getElementById("navbar_dropdown2").style.display = "none";
         } else {
            document.getElementById("navbar_dropdown2").style.display = "block";
          }
    }
    
 }

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
document.getElementById('dropdown').onclick =function myFunctionss() {
    if (document.getElementById("navbar_dropdown2").style.display==="block"){
        document.getElementById("navbar_dropdown2").style.display="none";
        document.getElementById("navbar_dropdown").classList.toggle("show");       
    }
    else{
        document.getElementById("navbar_dropdown").classList.toggle("show");
    }
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('#dropdown')) {
      var dropdowns = document.getElementsByClassName("dropdown_menu");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

//Header Scroll
var className = "inverted";
var className2 = "scroll";
var className3="search_height";
var scrollTrigger = 1;

window.onscroll = function() {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add(className);
    document.getElementsByClassName("nav_link")[0].classList.add(className2);
    document.getElementsByClassName("search")[0].classList.add(className3);

  } else {
    document.getElementsByTagName("header")[0].classList.remove(className);
    document.getElementsByClassName("nav_link")[0].classList.remove(className2);
    document.getElementsByClassName("search")[0].classList.remove(className3);

  }
};
 

//Open Search Button
document.getElementById('dorne_search_btn').onclick=function openNav() {
  document.getElementById("dorne_search_form").style.display="flex";
}
//Close Search Button
document.getElementById('closeBtn').onclick=function closeNav() {
  document.getElementById("dorne_search_form").style.display="none";
}

//Open Top Menu Search Button
document.getElementById('search__btn').onclick =function open(){
  document.getElementById("dorne_search_form").style.display="flex";
}

// Register
document.getElementById('dorne_signin_btn').onclick =function login() {
  var registr = document.getElementById("registr");
  if (registr.style.display === "block") {
    registr.style.display = "none";
  } else {
    registr.style.display = "block";
  }
}

//Open Resgistr 
document.getElementById('signin_btn').onclick=function openResgistr() {
document.getElementById("registr").style.display="block";
}
//Close Registr
document.getElementById('registrCloseBtn').onclick=function closeregistr() {
document.getElementById("registr").style.display="none";
}

var mybutton = document.getElementById("sroll_btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
var className = "inverted";
var className2 = "scroll";
var className3="search_height";
var className4="registr_scroll";
var scrollTrigger = 1;
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    document.getElementsByTagName("header")[0].classList.add(className);
    document.getElementsByClassName("nav_link")[0].classList.add(className2);
    document.getElementsByClassName("search")[0].classList.add(className3);
    document.getElementsByClassName("registr")[0].classList.add(className4);

  } else {
    mybutton.style.display = "none";
    document.getElementsByTagName("header")[0].classList.remove(className);
    document.getElementsByClassName("nav_link")[0].classList.remove(className2);
    document.getElementsByClassName("search")[0].classList.remove(className3);
    document.getElementsByClassName("registr")[0].classList.remove(className4);

  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


const registrsumbit=document.querySelector('#registrsumbit')
const registrpswd=document.querySelector('#registrpswd')
const registrname=document.querySelector('#registrname')
const registremail=document.querySelector('#registremail')
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
registrsumbit.addEventListener('click', (e) => {
    e.preventDefault()
    if(registrname.value.trim() && registrpswd.value.trim() && registremail.value.trim() && registremail.value.match(mailformat)){
        axios({
            method: "post",
            url: 'https://asiman-final-default-rtdb.firebaseio.com/events2.json',
            data: {
                name:registrname.value,
                email:registremail.value,
                password:registrpswd.value,
            }
          })
          .then(() => {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Congratulations, Successfully registered',
              showConfirmButton: false,
              timer: 1500
            })
          })

          .catch(err=> {
              console.log(err)
          })
          registrname.value = ''
          registremail.value = ''
          registrpswd.value = ''
    }
    else{
      if(registrname.value===null || registrname.value==="" || registrname.value.length<2 || 
      registremail.value.length<9 || registremail.value===null || registremail.value==="" ||
       registrpswd.value===null ||  registrpswd.value.length<6 || registrpswd.value===""){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'The information you entered is incorrect!',
          footer: '<a href="">Please re-enter the information correctly!</a>'
        })
      }
        else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'The information you entered is incorrect!',
            footer: '<a href="">Please re-enter the information correctly!</a>'
          })
        }

    }
  })


  setTimeout(() => {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
}, 2000)