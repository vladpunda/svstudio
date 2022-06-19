const headerBurger = document.querySelector('.header__burger');
if (headerBurger) {
  const headerheadWrapper = document.querySelector('.header__headwrapper');
  const headerWrapper = document.querySelector('.header__wrapper');
  const headerTel = document.querySelector('.header__contact');
  headerBurger.addEventListener("click", function (e) {
headerBurger.classList.toggle('active');
headerheadWrapper.classList.toggle('active');
headerWrapper.classList.toggle('active');
headerTel.classList.toggle('active');
  });
}