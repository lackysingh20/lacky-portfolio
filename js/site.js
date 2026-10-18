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
    var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');if(x.target.dataset.to&&!x.target.dataset.done){x.target.dataset.done=1;count(x.target)};io.unobserve(x.target)}})},{threshold:0,rootMargin:"0px 0px -40px 0px"});
    d.querySelectorAll('.sec h2').forEach(function(h){io.observe(h)});d.querySelectorAll('.reveal,[data-to],.chart').forEach(function(e){io.observe(e)});
  } else { d.querySelectorAll('.reveal').forEach(function(e){e.classList.add('in')}); d.querySelectorAll('[data-to]').forEach(function(e){e.textContent=e.dataset.to}); }

  var pg=d.querySelector('.progress');function sp(){var h=d.documentElement;pg.style.setProperty('--p',h.scrollTop/Math.max(1,h.scrollHeight-h.clientHeight))}window.addEventListener('scroll',sp,{passive:true});sp();
  d.querySelectorAll('.pgrid,.steps,.cases,.egrid').forEach(function(g){Array.prototype.forEach.call(g.children,function(c,k){c.style.setProperty('--d',(k%3)*0.08+'s')})});
  if(window.matchMedia('(hover:hover)').matches&&!reduce){d.querySelectorAll('.ecard,.case,.step').forEach(function(c){c.classList.add('spot');c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect();c.style.setProperty('--mx',e.clientX-r.left+'px');c.style.setProperty('--my',e.clientY-r.top+'px')})})}
    if(!('IntersectionObserver' in window))d.querySelectorAll('.sec h2').forEach(function(h){h.classList.add('in')});
  if(window.matchMedia('(hover:hover)').matches&&!reduce){
    var g=d.querySelector('.cglow'),raf=0,cx=0,cy=0;window.addEventListener('pointermove',function(e){cx=e.clientX;cy=e.clientY;g.classList.add('on');if(!raf)raf=requestAnimationFrame(function(){g.style.setProperty('--cx',cx+'px');g.style.setProperty('--cy',cy+'px');raf=0})},{passive:true});d.addEventListener('pointerleave',function(){g.classList.remove('on')});
    d.querySelectorAll('.ecard,.ccard,.case,.sgrp').forEach(function(c){c.classList.add('tilt');c.addEventListener('pointerenter',function(){c.classList.add('hov')});c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect(),px=(e.clientX-r.left)/r.width,py=(e.clientY-r.top)/r.height;c.style.transform='perspective(800px) rotateX('+((.5-py)*8).toFixed(2)+'deg) rotateY('+((px-.5)*8).toFixed(2)+'deg) translateY(-3px)'});c.addEventListener('pointerleave',function(){c.classList.remove('hov');c.style.transform=''})});
    d.querySelectorAll('.btn').forEach(function(b){b.addEventListener('pointermove',function(e){var r=b.getBoundingClientRect();b.style.transform='translate('+((e.clientX-r.left-r.width/2)*.18).toFixed(1)+'px,'+((e.clientY-r.top-r.height/2)*.25).toFixed(1)+'px)'});b.addEventListener('pointerleave',function(){b.style.transform=''})});
  }
})();

(function(){
  var d=document,reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  /* terminal intro: first visit only, skippable */
  var ld=d.querySelector('.loader'),tty=d.getElementById('tty'),seen=false;
  try{seen=localStorage.getItem('ls_intro')==='1'}catch(e){}
  function hide(){if(!ld||ld.classList.contains('done'))return;ld.classList.add('done');try{localStorage.setItem('ls_intro','1')}catch(e){}}
  if(!ld){}else if(seen||reduce||/[?&]nointro/.test(location.search)){ld.style.display='none'}else{
    var L=[['$ ','load models --role "AI Engineer"'],['  ','<b>ok</b> agents, RAG, evals'],['$ ','load playbook --role "Product"'],['  ','<b>ok</b> PRDs, users, metrics'],['$ ','ship --owner "Lacky Singh"'],['  ','<em>shipping products...</em>']];
    var out='',li=0,ci=0;
    function step(){if(ld.classList.contains('done'))return;if(li>=L.length){setTimeout(hide,250);return}var l=L[li];if(l[0]==='  '){out+=l[0]+l[1]+'\n';tty.innerHTML=out;li++;setTimeout(step,120);return}
      if(ci===0)out+=l[0];var t=l[1];out+=t.charAt(ci);ci++;tty.innerHTML=out+'<span class="cur">_</span>';if(ci>=t.length){out+='\n';li++;ci=0;setTimeout(step,90)}else setTimeout(step,14)}
    step();setTimeout(hide,2500);
    d.querySelector('.skip').addEventListener('click',hide);ld.addEventListener('click',hide);addEventListener('keydown',hide,{once:true});
  }
  /* skills filter */
  var bs=d.querySelectorAll('.sf'),gs=d.querySelectorAll('.sgrp');
  bs.forEach(function(b){b.addEventListener('click',function(){var f=b.dataset.f;bs.forEach(function(x){var on=x===b;x.classList.toggle('on',on);x.setAttribute('aria-pressed',on)});gs.forEach(function(g){var m=f==='all'||g.dataset.c===f;g.classList.toggle('dim',!m);g.classList.toggle('hit',m&&f!=='all')});if(f!=='all'){var t=d.querySelector('.sgrp[data-c="'+f+'"]');if(t&&innerWidth<1025)t.scrollIntoView({block:'nearest',behavior:reduce?'auto':'smooth'})}})});
  /* projects gallery: hover/tap reveal + filter with FLIP reflow */
  var cards=[].slice.call(d.querySelectorAll('.pgal .pcard')),hov=matchMedia('(hover:hover)').matches;var R=d.documentElement;function mouse(e){if(e.pointerType==='mouse'&&innerWidth>640){if(!R.classList.contains('ov')){R.classList.add('ov');d.querySelectorAll('.ptap').forEach(function(t){t.textContent='Hover for details'})}}else if(e.pointerType!=='mouse'&&R.classList.contains('ov')){R.classList.remove('ov');d.querySelectorAll('.ptap').forEach(function(t){t.textContent='Tap for details'})}}addEventListener('pointermove',mouse,{passive:true});addEventListener('pointerdown',mouse,{passive:true});
  cards.forEach(function(c){var b=c.querySelector('.pbody'),ex=d.createElement('div'),inn=d.createElement('div');ex.className='pexp';ex.appendChild(inn);
    ['.pfacts','.chips','.pmore'].forEach(function(q){var e=b.querySelector(':scope > '+q);if(e)inn.appendChild(e)});b.appendChild(ex);
    var t=d.createElement('span');t.className='ptap';t.textContent='Tap for details';b.insertBefore(t,ex);
    c.setAttribute('tabindex','0');c.setAttribute('aria-expanded','false');
    function set(o){c.classList.toggle('open',o);c.setAttribute('aria-expanded',o)}
    c.addEventListener('pointerenter',function(e){if(R.classList.contains('ov'))set(true)});c.addEventListener('pointerleave',function(e){if(R.classList.contains('ov'))set(false)});
    c.addEventListener('click',function(e){if(e.target.closest('.pmore,a'))return;if(!R.classList.contains('ov')){var o=!c.classList.contains('open');cards.forEach(function(x){x.classList.remove('open');x.setAttribute('aria-expanded','false')});set(o)}});
    c.addEventListener('keydown',function(e){if(e.target===c&&(e.key==='Enter'||e.key===' ')){e.preventDefault();set(!c.classList.contains('open'))}});
    c.addEventListener('focusout',function(e){if(hov&&!c.contains(e.relatedTarget))set(false)})});
  var pfs=d.querySelectorAll('.pf');
  pfs.forEach(function(b){b.addEventListener('click',function(){var f=b.dataset.f;pfs.forEach(function(x){x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',x===b)});
    var first=cards.map(function(c){return c.getBoundingClientRect()});
    cards.forEach(function(c){var m=f==='all'||c.dataset.cat.split(' ').indexOf(f)>-1;c.classList.toggle('gone',!m);c.classList.remove('open')});
    if(reduce)return;
    cards.forEach(function(c,k){if(c.classList.contains('gone'))return;var l=c.getBoundingClientRect(),f0=first[k];var dx=f0.left-l.left,dy=f0.top-l.top;
      if(f0.width===0){c.animate([{opacity:0,transform:'scale(.9)'},{opacity:1,transform:'none'}],{duration:400,easing:'cubic-bezier(.2,.8,.2,1)'});return}
      if(dx||dy)c.animate([{transform:'translate('+dx+'px,'+dy+'px)'},{transform:'none'}],{duration:450,easing:'cubic-bezier(.2,.8,.2,1)'})});
    if(window.ScrollTrigger)setTimeout(function(){ScrollTrigger.refresh()},500)})});
  /* skill tooltips show the group */
  d.querySelectorAll('.sgrp').forEach(function(g){var h=g.querySelector('h3').textContent;g.querySelectorAll('.chip.sk').forEach(function(c){c.dataset.tip=h;c.setAttribute('tabindex','0')})});
  /* GSAP + Lenis scroll layer */
  if(reduce||!window.gsap||!window.ScrollTrigger)return;
  gsap.registerPlugin(ScrollTrigger);
  if(window.Lenis){var le=new Lenis({lerp:.1});le.on('scroll',ScrollTrigger.update);gsap.ticker.add(function(t){le.raf(t*1000)});gsap.ticker.lagSmoothing(0);d.documentElement.style.scrollBehavior='auto';
    d.querySelectorAll('a[href^="#"]').forEach(function(a){a.addEventListener('click',function(e){var id=a.getAttribute('href');if(id.length>1&&d.querySelector(id)){e.preventDefault();le.scrollTo(id,{offset:-70})}})})}
  gsap.to('.hero-in',{yPercent:18,opacity:.25,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
  gsap.utils.toArray('.sec').forEach(function(sec){var e=sec.querySelector('.eyebrow');if(e)gsap.fromTo(e,{x:-30,opacity:0},{x:0,opacity:1,duration:.8,ease:'power3.out',scrollTrigger:{trigger:sec,start:'top 80%'}});
    gsap.fromTo(sec,{'--sh':0},{'--sh':1,ease:'none',scrollTrigger:{trigger:sec,start:'top bottom',end:'top 40%',scrub:true}})});
  var bq=d.querySelector('.banner');if(bq&&innerWidth>760){bq.classList.add('pin-quote');gsap.fromTo('.banner p',{scale:.86,opacity:.3},{scale:1,opacity:1,ease:'none',scrollTrigger:{trigger:bq,start:'top 85%',end:'center center',scrub:true}})}
  gsap.utils.toArray('.mq-t').forEach(function(t,i){gsap.to(t.parentNode,{x:i?60:-60,ease:'none',scrollTrigger:{trigger:'#skills',start:'top bottom',end:'bottom top',scrub:true}})});
  addEventListener('load',function(){ScrollTrigger.refresh()});
})();
