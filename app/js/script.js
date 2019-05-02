// Counter
function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }
   
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector(".days_counter");
    var hoursSpan = clock.querySelector(".hours_counter");
    var minutesSpan = clock.querySelector(".minutes_counter");
    var secondsSpan = clock.querySelector(".seconds_counter");
   
    function updateClock() {
      var t = getTimeRemaining(endtime);
   
      if (t.total <= 0) {
        clearInterval(timeinterval);
        var deadline = new Date(Date.parse(new Date()) + 5 * 1000);
        initializeClock('clockdiv', deadline);
      }
   
      daysSpan.innerHTML = ("0" + t.days).slice(-2);
      hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
      minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
      secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
    }
   
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
   
  var deadline = new Date(Date.parse(new Date()) + 1071900 * 1000);
  initializeClock("clockdiv", deadline); 


  // Slider

  var slider_data = [
    {name: "Roy Rivera", post: "FrontEnd Developer", company: "S-PRO"},
    {name: "SomeOne", post: "BackEnd Developer", company: "Apple"},
    {name: "AnotherOne", post: "FullStack", company: "Facebook"}
  ];

  var quote_name = document.querySelector('.slider-content_author-name');
  var quote_post = document.querySelector('.slider-content_author-post');
  var quote_company = document.querySelector('.slider-content_author-company');
  var slider_prev = document.querySelector('.slider-pagination_arrow_prev');
  var slider_next = document.querySelector('.slider-pagination_arrow_next');
  var pagination = document.querySelector('.slider-pagination_text span');
  var index = 0;

  slider_prev.onclick = function () {
    index = --index;
    if (index < 0) {
      index = slider_data.length - 1;
    };
    quote_name.innerHTML = slider_data[index].name;
    quote_post.innerHTML = slider_data[index].post;
    quote_company.innerHTML = slider_data[index].company;
    pagination.innerHTML = index + 1;
  };

  slider_next.onclick = function () {
    index = ++index;
    if (index > slider_data.length - 1) {
      index = 0;
    };
    quote_name.innerHTML = slider_data[index].name;
    quote_post.innerHTML = slider_data[index].post;
    quote_company.innerHTML = slider_data[index].company;
    pagination.innerHTML = index + 1;
  };

// Menu for small screen resolution

var button = document.querySelector(".menu");
var menu = document.querySelector(".newNav");

button.onclick = function(e) {
  var target = e.target;
  if (target.classList.contains('closed')) {
      target.classList.remove('closed');
      this.classList.add('opened');
      menu.style.display = "flex";
      button.setAttribute('src', './img/close.svg');
  } else {
      target.classList.remove('opened');
      this.classList.add('closed');
      menu.style.display = "none";
      button.setAttribute('src', './img/menu.svg');
  }
} 