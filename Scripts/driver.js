//driver code for particle effects
document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#00818a',
    lineColor: '#00818a'
  });
  var start = document.getElementById('start');
  start.style.marginTop = - start.offsetHeight / 2 + 'px';
}, false);

