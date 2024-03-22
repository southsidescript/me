document.addEventListener('DOMContentLoaded',()=>{


  document.body.addEventListener('mousemove',(e)=>{

    document.querySelector('#cursor').style.left = e.pageX +'px';
    document.querySelector('#cursor').style.top = e.pageY +'px';
    document.querySelector('#cursor_aura').style.left = e.pageX +'px';
    document.querySelector('#cursor_aura').style.top = e.pageY +'px';
  })



})


