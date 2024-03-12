// Function to animate text with kinetic typography
function animateKineticTypography(element, strings) {
  let index = 0;
  let currentString = '';
  
  // Function to update text with animation
  function updateText() {
      element.innerHTML = currentString;
  }

  // Animate text based on user interactions or external events
  // For example, you could use mouse movements, clicks, or even data from APIs
  function animate() {
      // Example: React to mouse movement
      element.addEventListener('mousemove', function(event) {
          const mouseX = event.clientX;
          const mouseY = event.clientY;
          const fontSize = Math.abs((mouseX - window.innerWidth / 2) / 20) + 10; // Adjust font size based on mouse position
          currentString = `<span style="font-size: ${fontSize}px;">${strings[index]}</span>`;
          updateText();
      });

      // Example: Loop through strings with fading effect
      setInterval(() => {
          element.style.transition = 'opacity 1s ease-in-out'; // Add fade effect
          element.style.opacity = 0; // Fade out
          setTimeout(() => {
              currentString = strings[index];
              index = (index + 1) % strings.length;
              updateText();
              element.style.transition = 'opacity 1s ease-in-out'; // Reset transition
              element.style.opacity = 1; // Fade in
          }, 1000); // Change 1000 to adjust the speed of string changes
      }, 4000); // Change 4000 to adjust the overall speed
  }

  animate(); // Start animation
}

// Usage example
const textElement = document.querySelector(".text");
const strings = ["Social Impact", "Entrepreneurship", "Consultancy", "Ity Jain", "Wet Dream"]; // Add more creative strings
animateKineticTypography(textElement, strings);

const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})
document.addEventListener("DOMContentLoaded", function() {
  var setVanta = () => {
      if (window.VANTA) {
          window.VANTA.WAVES({
              el: ".pj",
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              scale: 1.00,
              scaleMobile: 1.00,
              color: 0x0,
              shininess: 25.00,
              waveHeight: 40.00,
              waveSpeed: 0.50
          });
      }
  };

  setVanta();
});
document.addEventListener("DOMContentLoaded", function() {
  var setVanta = () => {
      if (window.VANTA) {
          window.VANTA.WAVES({
            //   el: ".header",
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              scale: 1.00,
              scaleMobile: 1.00,
              color: 0x0,
              shininess: 146.00,
              waveHeight: 40.00,
              waveSpeed: 0.50
          });
      }
  };

  setVanta();
});
document.addEventListener("DOMContentLoaded", function() {
  var setVanta = () => {
      if (window.VANTA) {
          window.VANTA.WAVES({
              el: ".about",
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 1600.00,
              minWidth: 1600.00,
              scale: 1.00,
              scaleMobile: 1.00,
              color: 0x0,
              shininess: 25.00,
              waveHeight: 40.00,
              waveSpeed: 0.50
          });
      }
  };

  setVanta();
});

document.addEventListener("DOMContentLoaded", function() {
    var setVanta = () => {
        if (window.VANTA) {
            window.VANTA.WAVES({
                el: ".home",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x0,
                shininess: 25.00,
                waveHeight: 40.00,
                waveSpeed: 0.50
            });
        }
    };

    setVanta();
});

document.addEventListener("DOMContentLoaded", function() {
  var setVanta = () => {
      if (window.VANTA) {
          window.VANTA.WAVES({
              el: ".pp",
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 1600.00,
              minWidth: 1600.00,
              scale: 1.00,
              scaleMobile: 1.00,
              color: 0x0,
              shininess: 25.00,
              waveHeight: 40.00,
              waveSpeed: 0.50
          });
      }
  };

  setVanta();
});
document.addEventListener("DOMContentLoaded", function() {
  var setVanta = () => {
      if (window.VANTA) {
          window.VANTA.WAVES({
              el: ".background",
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              scale: 1.00,
              scaleMobile: 1.00,
              color: 0x0,
              shininess: 25.00,
              waveHeight: 40.00,
              waveSpeed: 0.50
          });
      }
  };

  setVanta();
});
  function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    var body = "Name: " + name + "\n";
    body += "Email: " + email + "\n";
    body += "Phone: " + phone + "\n";
    body += "Subject: " + subject + "\n\n";
    body += "Message: " + message;

    window.location.href = "mailto:jaindevansh16@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  }

  VANTA.NET({
    el: "#net",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x3fe8ff,
    backgroundColor: 0xf2a52
  })