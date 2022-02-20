function modalCreateForm(triggerSelector, modalSelector){
  const modal = document.getElementById(modalSelector)
  const modalTrigger = document.querySelectorAll(triggerSelector)

  modalTrigger.forEach(btn => {
    btn.addEventListener('click', ()=> openModal(modalSelector))
  })
  
  modal.addEventListener('click', (event) => {
    if (event.target === modal || event.target.getAttribute('data-close') == '') {
        closeModal(modalSelector);
    }
  });

  document.addEventListener('keydown', (e) => {
      if (e.code === "Escape" && !modal.classList.contains('hide')) {
          closeModal(modalSelector);
      }
  });

}



function  openModal(modalSelector){
  const modal = document.getElementById(modalSelector)

  modal.classList.remove('hide')
  // document.body.style.overflow = 'hidden'
}

function closeModal(modalSelector){
 const modal = document.getElementById(modalSelector)

  modal.classList.add('hide')
    // document.body.style.overflow = ''
}

// function  destroy(){

// }
export default modalCreateForm;