import "../scss/main.scss";
import * as d3 from 'd3';
import moment from 'moment';

window.$('.icon-facebook').click((e) => {
  e.preventDefault();
  const uri = encodeURIComponent(window.location.href);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${uri}`);
});


window.$('.icon-twitter').click((e) => {
  e.preventDefault();
  const uri = window.location.href;
  const status = encodeURIComponent(`${window.tweetText} ${uri}`);
  window.open(`https://twitter.com/intent/tweet?text=${status}`);
});

var m = moment("2018-12-14");  // or whatever start date you have
var today = moment().startOf('day');
var days = Math.round(moment.duration( m - today).asDays())


// d3.select("#g-days")
// 	.html(days + " days")

  const options = {
    width: 8, // number of digits
    format: null, // options for jquery.numberformatter, if loaded
    align: 'left', // aligns values to the left or right of display
    padding: '&nbsp;', // value to use for padding
    chars: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's'],
    // array of characters that Flapper can display
    // chars_preset: 'alpha', // 'num', 'hexnum', 'alpha' or 'alphanum'
    timing: 250, // the maximum timing for digit animation
    min_timing: 50, // the minimum timing for digit animation
    threshhold: 100, // the point at which Flapper will switch from
    // simple to detailed animations
    transform: false, // Flapper automatically detects the jquery.transform
    // plugin. Set this to false if you want to force transform to off
    on_anim_start: null, // Callback for start of animation
    on_anim_end: null, // Callback for end of animation
  };

$('#display').flapper(options).val(days + " days").change();
// let's dynamically add/remove classes on different breakpoints
  const resizeFlapper = () => {
    if ($(window).width() <= 400) {
      $('.flapper').removeClass('M');
      $('.flapper').addClass('S');
    } else{
      $('.flapper').removeClass('S');
      $('.flapper').addClass('M');
    } 
  };
  // call on load
  resizeFlapper();


  // call on resize
  $(window).resize(() => resizeFlapper());