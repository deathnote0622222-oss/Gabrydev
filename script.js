// Highlight the nav link for the section in view
var links=[].slice.call(document.querySelectorAll('#nav a'));
var secs=links.map(function(a){return document.querySelector(a.getAttribute('href'))});
function spy(){
  var y=window.scrollY+120,cur=-1;
  secs.forEach(function(s,i){if(s&&s.offsetTop<=y)cur=i});
  links.forEach(function(a,i){a.classList.toggle('on',i===cur)});
}
window.addEventListener('scroll',spy,{passive:true});spy();

// Contact form opens the visitor’s mail app (no server needed). Change the address below.
document.getElementById('form').addEventListener('submit',function(e){
  e.preventDefault();
  var f=new FormData(e.target);
  var body=encodeURIComponent(f.get('body')+'\n\n— '+f.get('name')+' ('+f.get('email')+')');
  document.getElementById('msg').textContent='Opening your email app…';
  window.location.href='mailto:you@example.com?subject='+encodeURIComponent('Project enquiry from '+f.get('name'))+'&body='+body;
});

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
