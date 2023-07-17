const shareOption = document.querySelector('.share__option');
document.querySelector('.share__button').addEventListener('click', function () {
  this.classList.toggle('active');
  shareOption.classList.toggle('active');
});