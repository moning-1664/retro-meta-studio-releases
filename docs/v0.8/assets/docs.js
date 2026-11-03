/* 목차 하이라이트, 사용 설명서 찾기, 모바일 목차 접기 */
(()=>{
  const mq=matchMedia('(max-width:900px)');
  const nb=document.querySelector('.navbox');
  if(nb){const f=()=>{nb.open=!mq.matches};f();mq.addEventListener('change',f);}

  const q=document.getElementById('find');
  if(q){
    const cards=[...document.querySelectorAll('.pc')];
    const groups=[...document.querySelectorAll('.grp')];
    q.addEventListener('input',()=>{
      const v=q.value.trim().toLowerCase();
      cards.forEach(c=>{c.hidden=v&&!c.textContent.toLowerCase().includes(v);});
      groups.forEach(g=>{g.hidden=![...g.querySelectorAll('.pc')].some(c=>!c.hidden);});
    });
  }
})();

// Local screenshots remain readable without JavaScript; this adds reversible zoom.
(()=>{let lastTrigger=null;const dialog=document.createElement('dialog');dialog.className='capture-dialog';const close=document.createElement('button');close.textContent='닫기 (Esc)';const image=document.createElement('img');dialog.append(close,image);document.body.append(dialog);close.addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});dialog.addEventListener('close',()=>lastTrigger?.focus());for(const link of document.querySelectorAll('.capture-open'))link.addEventListener('click',e=>{e.preventDefault();lastTrigger=link;image.src=link.href;image.alt=link.querySelector('img').alt;dialog.showModal();close.focus();});
 const q=document.getElementById('find');if(q){const empty=document.createElement('p');empty.className='search-empty';empty.setAttribute('role','status');empty.hidden=true;empty.textContent='일치하는 기능이 없습니다. 검색어를 줄이거나 지워 주세요.';q.closest('main')?.append(empty);const update=()=>{empty.hidden=[...document.querySelectorAll('.pc')].some(c=>!c.hidden);};q.addEventListener('input',update);}
 const top=document.querySelector('.top'),bar=document.querySelector('.pidx');const measure=()=>{const h=top?.getBoundingClientRect().height||0;document.documentElement.style.setProperty('--top-height',h+'px');if(bar)bar.style.top=h+'px';document.documentElement.style.scrollPaddingTop=(h+(bar?.getBoundingClientRect().height||0)+18)+'px';};measure();new ResizeObserver(measure).observe(top);addEventListener('resize',measure);
 const current=()=>{const items=[...document.querySelectorAll('.pidx a')];let active=items[0];for(const a of items){const target=document.getElementById(decodeURIComponent(a.hash.slice(1)));if(target&&target.getBoundingClientRect().top<=(bar?.getBoundingClientRect().bottom||0)+35)active=a;}for(const a of items){a.classList.toggle('on',a===active);if(a===active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');}};current();addEventListener('scroll',current,{passive:true});
})();

(()=>{const file=location.pathname.split('/').pop();const redirects={'editing.html#csv':'csv.html','files.html#dashboard':'dashboard.html','files.html#recovery':'recovery.html','settings.html#launch':'launch.html','navigation.html#views':'views.html','collections.html#storage-registration':'storage.html'};const reroute=()=>{const dest=redirects[file+location.hash];if(dest)location.replace(dest);};reroute();addEventListener('hashchange',reroute);})();
