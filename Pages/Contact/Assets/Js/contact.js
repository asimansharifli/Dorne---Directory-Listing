const submit=document.querySelector('#submit')
const name2=document.querySelector('#name')
const email=document.querySelector('#email')
const subject=document.querySelector('#subject')
const message=document.querySelector('#message')
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
submit.addEventListener('click', (e) => {
    e.preventDefault()
    if(name2.value.trim() && email.value.trim() && subject.value.trim() && message.value.trim() && email.value.match(mailformat)){
        axios({
            method: "post",
            url: 'https://asiman-final-default-rtdb.firebaseio.com/contact.json',
            data: {
                name:name2.value,
                email:email.value,
                subject: subject.value,
                message:message.value,
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
          name2.value = ''
          email.value = ''
          subject.value = ''
          message.value = ''
    }
    else{
      if(name2.value===null || name2.value==="" || name2.value.length<2 || 
      email.value.length<9 || email.value===null || email.value==="" ||
      subject.value===null || subject.value==="" || message.value===null || message.value===""){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'The information you entered is incorrect!',
          footer: '<a href="">Please re-enter the information correctly!</a>'
        })
        if(name2.value===null || name2.value==="" || name2.value.length<2 ){
          document.getElementById("#name").classList.add("invalid");
        }
        
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