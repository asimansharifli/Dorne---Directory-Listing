// Checkoxes
document.getElementById('credits').addEventListener('click', function(event) {
  event.preventDefault();
  var target = document.getElementById('credits_control');
  if (target.classList.contains('check')) {
    target.classList.remove('check');
  } else {
    target.classList.add('check');
  }
});
document.getElementById('parking').addEventListener('click', function(event) {
  event.preventDefault();
  var targetParking = document.getElementById('parking_control');
  if ( targetParking.classList.contains('check')) {
      targetParking.classList.remove('check');
  } else {
      targetParking.classList.add('check');
  }
});
document.getElementById('internet').addEventListener('click', function(event) {
  event.preventDefault();
  var target = document.getElementById('internet_control');
  if (target.classList.contains('check')) {
    target.classList.remove('check');
  } else {
    target.classList.add('check');
  }
});
document.getElementById('reservation').addEventListener('click', function(event) {
  event.preventDefault();
  var targetParking = document.getElementById('reservation_control');
  if ( targetParking.classList.contains('check')) {
      targetParking.classList.remove('check');
  } else {
      targetParking.classList.add('check');
  }
});
document.getElementById('private').addEventListener('click', function(event) {
  event.preventDefault();
  var targetParking = document.getElementById('private_control');
  if ( targetParking.classList.contains('check')) {
      targetParking.classList.remove('check');
  } else {
      targetParking.classList.add('check');
  }
});
document.getElementById('smoking').addEventListener('click', function(event) {
  event.preventDefault();
  var targetParking = document.getElementById('smoking_control');
  if ( targetParking.classList.contains('check')) {
      targetParking.classList.remove('check');
  } else {
      targetParking.classList.add('check');
  }
});
document.getElementById('whellchair').addEventListener('click', function(event) {
  event.preventDefault();
  var targetParking = document.getElementById('whellchair_control');
  if ( targetParking.classList.contains('check')) {
      targetParking.classList.remove('check');
  } else {
      targetParking.classList.add('check');
  }
});

document.getElementById('coupons').addEventListener('click', function(event) {
  event.preventDefault();
  var targetParking = document.getElementById('coupons_control');
  if ( targetParking.classList.contains('check')) {
      targetParking.classList.remove('check');
  } else {
      targetParking.classList.add('check');
  }
});

// Contact Besiess API
const singlesubmit=document.querySelector('#singlesubmit')
const singlename=document.querySelector('#singlename')
const singleemail=document.querySelector('#singleemail')
const singlemessage=document.querySelector('#singlemessage')
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
singlesubmit.addEventListener('click', (e) => {
    e.preventDefault()
    if(singlename.value.trim() && singleemail.value.trim() && singlemessage.value.trim() && singleemail.value.match(mailformat)){
        axios({
            method: "post",
            url: 'https://asiman-final-default-rtdb.firebaseio.com/events2.json',
            data: {
                name:singlename.value,
                email:singleemail.value,
                message:singlemessage.value,
            }
          })
          .then(() => {
            Swal.fire({
              title: 'Your message has been sent successfully!',
              showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
            })
          })

          .catch(err=> {
              console.log(err)
          })
          singlename.value = ''
          singleemail.value = ''
          singlemessage.value = ''
    }
    else{
      if(singlename.value===null || singlename.value==="" || singlename.value.length<2 || 
      singleemail.value.length<9 || singleemail.value===null || singleemail.value==="" ||
       singlemessage.value===null || singlemessage.value===""){
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

//Tab Page
let len = document.querySelector('.listing_nav_list_item');
  function tabPage(id){
   for(let i = 0;i<len.length;i++){
    len[i].style.display = "none";
   }
   document.getElementById(id).style.display='block';
  }