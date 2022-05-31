function signing() {
  var modal = document.getElementById('myModal')
  const showSign = () => {
      modal.classList.add('show')
  }
  modal.addEventListener('click', showSign())
}


function backMain() {
  var back = document.getElementById('myModal')
  const backing = () => {
      back.classList.remove('show')
  }
  back.addEventListener('click', backing())
}


function trogiup() {
  var helps = document.getElementById('troGiup')
  const showHelp = () => {
      helps.classList.add('show-tro-giup')
  }
  helps.addEventListener('click', showHelp())
}

function xTroGiup() {
  var xHelp = document.getElementById('troGiup')
  const xhelping = () => {
      xHelp.classList.remove('show-tro-giup')
  }
  xHelp.addEventListener('click', xhelping())
}

// slide
$(document).ready(function(){
  setInterval(function(){
  $('.slick-next').trigger('click');
},3000);
  $('.khoi-slide').slick({
      
      prevArrow:`<button type='button' class='slick-prev pull-left'><i class="fas fa-chevron-left"></button>`,
      nextArrow:`<button type='button' class='slick-next pull-right'><i class="fas fa-chevron-right"></i></button>`
  });
});