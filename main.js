// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

document.addEventListener('click', handleLike);

function handleLike(event) {
  if (event.target.classList.contains('like-glyph')) {
    mimicServerCall()
      .then(response => {
        console.log(response);
        event.target.textContent = 
          event.target.textContent === EMPTY_HEART ? FULL_HEART : EMPTY_HEART;
        event.target.classList.toggle('activated-heart');
      })
      .catch(error => handleError(error))
  }

} 

function handleError(error) {
  const modal = document.querySelector('#modal');
  const modalMessage = modal.querySelector('#modal-message');
  modalMessage.textContent = error;
  modal.classList.toggle('hidden');
  setTimeout(() => modal.classList.toggle('hidden'), 3000);
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
