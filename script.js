
// Highlight the nav link for the section in view
var links = [].slice.call(document.querySelectorAll('#nav a'));
var secs = links.map(function(a) {
  return document.querySelector(a.getAttribute('href'));
});

function spy() {
  var y = window.scrollY + 120, cur = -1;

  secs.forEach(function(s, i) {
    if (s && s.offsetTop <= y) cur = i;
  });

  links.forEach(function(a, i) {
    a.classList.toggle('on', i === cur);
  });
}

window.addEventListener('scroll', spy, { passive: true });
spy();


// CONTACT FORM — SEND MESSAGES TO GMAIL
document.getElementById('form').addEventListener('submit', async function(e) {
  e.preventDefault();

  var form = e.target;
  var msg = document.getElementById('msg');
  var button = form.querySelector('button[type="submit"]');

  var formData = new FormData(form);

  formData.append('_subject', 'New portfolio enquiry');
  formData.append('_template', 'table');

  msg.textContent = 'Sending your message...';
  button.disabled = true;

  try {
    var response = await fetch(

 'https://formsubmit.co/ajax/deathnote0622222@gmail.com',
      {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      }
    );

    var result = await response.json();

    if (response.ok && result.success) {
      msg.textContent = 'Message sent successfully! Thank you.';
      form.reset();
    } else {
      msg.textContent = 'Could not send your message. Please try again.';
    }

  } catch (error) {
    msg.textContent = 'Something went wrong. Please try again.';
  }

  button.disabled = false;
});


// MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("active");

  menuToggle.classList.toggle("active");
  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  });
});
