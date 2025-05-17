// Glightbox for Portfolio
const lightbox = GLightbox({ loop: true });


// Loading page
$("body").append(
  '<div class="loader" id="loader"><div class="circle"></div></div>'
);
$(window).on("load", function () {
  $("#loader").addClass("loader-out").fadeOut(1000);
  setTimeout(removeLoader, 1000);
});
function removeLoader(){
  $( "#loader" ).remove();
}