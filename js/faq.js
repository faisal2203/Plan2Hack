function faqSwitch(e){

  var content = e.lastChild.previousElementSibling
  let header = e.firstElementChild


  let x = parseInt(document.getElementById('footer-section').style.marginTop)

  if(content.classList == "answer")
  {
    content.classList.add("show")
    content.classList.remove ("answer")

    e.firstElementChild.lastChild.previousElementSibling.style.transform = 'rotate(180deg)'

    header.firstElementChild.style.fontWeight = "700"
    
    let extraHeight = 0;
    if (Math.max(window.screen.width, window.innerWidth) > 1000)
      extraHeight = 0;
    else 
      extraHeight = 40;


    document.getElementById('footer-section').style.marginTop = x + content.offsetHeight + extraHeight + 'px';
    
  }
  else 
  {
    let extraHeight = 0;
    if (Math.max(window.screen.width, window.innerWidth) > 1000)
      extraHeight = 0;
    else 
      extraHeight = 40;

    document.getElementById('footer-section').style.marginTop = x - content.offsetHeight - extraHeight + 'px';

    e.firstElementChild.lastChild.previousElementSibling.style.transform = 'rotate(0deg)'

    content.classList.remove ("show")
    content.classList.add("answer")
    
    header.firstElementChild.style.fontWeight = "400"
    
  
  }
}


