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
    d.querySelectorAll('.reveal,[data-to]').forEach(function(e){io.observe(e)});
  } else { d.querySelectorAll('.reveal').forEach(function(e){e.classList.add('in')}); d.querySelectorAll('[data-to]').forEach(function(e){e.textContent=e.dataset.to}); }
})();
