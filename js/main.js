// assign variables
let infoDivs = document.querySelectorAll('.info');
let photoIcons = document.querySelectorAll('.photo-icon');
let players = document.querySelectorAll('audio');

// function to hide all divs
function hideAll() {
  infoDivs.forEach(function(el) {
    el.style.display = 'none';
  });
}

// run that function right away
hideAll();

// when any album is clicked, make the suitable div appear
photoIcons.forEach(function(el) {
  el.onclick = (e) => {
    // hide all the divs to ensure that only one will be open
    hideAll();

    //switch statement to handle opening the right div
    switch (e.target.getAttribute('id')) {
      case 'a':
        document.querySelector('#songA')
        	.style.display = 'block';
          players.forEach(function(el) {
                  el.pause();
                  el.currentTime = 0;
              });
        break;

      case 'b':
        document.querySelector('#songB')
        	.style.display = 'block';
          players.forEach(function(el) {
                  el.pause();
                  el.currentTime = 0;
              });
        break;

      case 'c':
        document.querySelector('#songC')
        .style.display = 'block';
        players.forEach(function(el) {
                el.pause();
                el.currentTime = 0;
            });
        break;

      case 'd':
        document.querySelector('#songD')
        .style.display = 'block';
        players.forEach(function(el) {
                el.pause();
                el.currentTime = 0;
            });
        break;
    } // end of switch
    // switch does not need default for this

  } // end of function for clicking

}); // end of forEach()
