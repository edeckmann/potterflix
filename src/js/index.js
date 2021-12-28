function changeMovie(param) {
  const ordem = param.replace("hp",'');
  const iframe = document.getElementById("movies");
  iframe.setAttribute("src", linkMovies(+ordem-1));
  modal.style.display = "block";
}

const linkMovies = (ordem) => {
  const arr = [
    "https://www.youtube.com/embed/NBClQpIsEXk?enablejsapi=1",
    "https://www.youtube.com/embed/VjN5_mB7KFs?enablejsapi=1",
    "https://www.youtube.com/embed/MjoMN9RMKAY?enablejsapi=1",
    "https://www.youtube.com/embed/QkSJdNy1AsM?enablejsapi=1",
    "https://www.youtube.com/embed/-ok_8UuFZ4Y?enablejsapi=1",
    "https://www.youtube.com/embed/HcryxumRxUI?enablejsapi=1",
    "https://www.youtube.com/embed/CBjMbbFSZMI?enablejsapi=1",
    "https://www.youtube.com/embed/KHBCzAFXUok?enablejsapi=1",
    "https://www.youtube.com/embed/wJeGxDhIwHU?enablejsapi=1",
    "https://www.youtube.com/embed/G8uRgZQ6zio?enablejsapi=1",
  ];
  return arr[ordem];
};


var modal = document.getElementById("myModal");



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];



// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  const iframe = document.getElementById("movies");
  iframe.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}