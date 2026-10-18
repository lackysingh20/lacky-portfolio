document.documentElement.classList.add("js");(function(){
  var d=document;
  d.getElementById('yr').textContent=new Date().getFullYear();
  var b=d.querySelector('.burger'),n=d.querySelector('.links');
  b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
  n.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){n.classList.remove('open');b.setAttribute('aria-expanded','false')})});
  var lines=['convincing agents to ask a human first','grading LLM answers with another LLM','turning SQL into plain English','making backtests wait less','drinking coffee number 4201'];
  var el=d.getElementById('rot'),i=0,reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!reduce)setInterval(function(){el.classList.add('out');setTimeout(function(){i=(i+1)%lines.length;el.textContent=lines[i];el.classList.remove('out')},300)},2800);
  function count(e){var t=+e.dataset.to,s=null;function f(ts){if(!s)s=ts;var p=Math.min((ts-s)/1600,1);e.textContent=Math.round(t*(1-Math.pow(1-p,3))).toLocaleString('en-IN');if(p<1)requestAnimationFrame(f)}requestAnimationFrame(f)}
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');if(x.target.dataset.to)count(x.target);io.unobserve(x.target)}})},{threshold:0,rootMargin:"0px 0px -40px 0px"});
    d.querySelectorAll('.sec h2').forEach(function(h){io.observe(h)});d.querySelectorAll('.reveal,[data-to]').forEach(function(e){io.observe(e)});
  } else { d.querySelectorAll('.reveal').forEach(function(e){e.classList.add('in')}); d.querySelectorAll('[data-to]').forEach(function(e){e.textContent=e.dataset.to}); }

  var pg=d.querySelector('.progress');function sp(){var h=d.documentElement;pg.style.setProperty('--p',h.scrollTop/Math.max(1,h.scrollHeight-h.clientHeight))}window.addEventListener('scroll',sp,{passive:true});sp();
  d.querySelectorAll('.pgrid,.steps,.cases,.egrid').forEach(function(g){Array.prototype.forEach.call(g.children,function(c,k){c.style.setProperty('--d',(k%3)*0.08+'s')})});
  if(window.matchMedia('(hover:hover)').matches&&!reduce){d.querySelectorAll('.pcard,.ecard,.case,.step').forEach(function(c){c.classList.add('spot');c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect();c.style.setProperty('--mx',e.clientX-r.left+'px');c.style.setProperty('--my',e.clientY-r.top+'px')})})}
  var ld=d.querySelector('.loader');function hide(){if(ld)ld.classList.add('done')}if(reduce)hide();else{window.addEventListener('load',function(){setTimeout(hide,700)});setTimeout(hide,2500)}
  if(!('IntersectionObserver' in window))d.querySelectorAll('.sec h2').forEach(function(h){h.classList.add('in')});
  if(window.matchMedia('(hover:hover)').matches&&!reduce){
    var g=d.querySelector('.cglow'),raf=0,cx=0,cy=0;window.addEventListener('pointermove',function(e){cx=e.clientX;cy=e.clientY;g.classList.add('on');if(!raf)raf=requestAnimationFrame(function(){g.style.setProperty('--cx',cx+'px');g.style.setProperty('--cy',cy+'px');raf=0})},{passive:true});d.addEventListener('pointerleave',function(){g.classList.remove('on')});
    d.querySelectorAll('.pcard,.ecard,.ccard,.case').forEach(function(c){c.classList.add('tilt');c.addEventListener('pointerenter',function(){c.classList.add('hov')});c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect(),px=(e.clientX-r.left)/r.width,py=(e.clientY-r.top)/r.height;c.style.transform='perspective(800px) rotateX('+((.5-py)*8).toFixed(2)+'deg) rotateY('+((px-.5)*8).toFixed(2)+'deg) translateY(-3px)'});c.addEventListener('pointerleave',function(){c.classList.remove('hov');c.style.transform=''})});
    d.querySelectorAll('.btn').forEach(function(b){b.addEventListener('pointermove',function(e){var r=b.getBoundingClientRect();b.style.transform='translate('+((e.clientX-r.left-r.width/2)*.18).toFixed(1)+'px,'+((e.clientY-r.top-r.height/2)*.25).toFixed(1)+'px)'});b.addEventListener('pointerleave',function(){b.style.transform=''})});
  }
})();
