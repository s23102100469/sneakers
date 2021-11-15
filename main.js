document.addEventListener('DOMContentLoaded', function(){
    const header = document.querySelector('.header');
    const btn = document.querySelector('.header__btn');
    

    const open = function(){
        header.classList.toggle('open');
    };

    btn.addEventListener('click', open); 

    const li = document.querySelectorAll('.header__ultop > li');
    li.forEach(function(top){
            top.addEventListener('click', function(){
            header.classList.remove('open');    
        }) 
    })  

    const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
  for (let i = 0; i < smoothScrollTrigger.length; i++){
    smoothScrollTrigger[i].addEventListener('click', (e) => {
      e.preventDefault();
      let href = smoothScrollTrigger[i].getAttribute('href');
        let targetElement = document.getElementById(href.replace('#', ''));
      const rect = targetElement.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const gap = 80;
      const target = rect + offset - gap;
      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    });
  }

})    


const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    slidesPerView: 1.5,
    centeredSlides : true,

    autoplay: {
        delay: 5000,
    }
});


const content = document.querySelectorAll('.main__content');

const cb = function(entries, observes){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('come');
            observes.unobserve(entry.target);
        }
    });
}

const option = {
    root: null,
    rootMargin: "0px 0px -100px 0px"
};

const io = new IntersectionObserver(cb, option);
content.forEach(function(con){
    io.observe(con);
})








