const form = document.querySelector('.form__info');
const selectInput = document.querySelector('.form__select-input');
const nameInput = form.querySelector('.form__name-input');
// const radioInput = form.elements("language")
const modal = document.querySelector('dialog')
const modalBox = document.querySelector('.modal-box')
const submitBtn = document.querySelector('.form__btn')

const modalRangeMin = document.querySelector('.modal-box__range-min')
const modalRangeMax = document.querySelector('.modal-box__range-max')
const modalSelect = document.querySelector('.modal-box__select')
const modalRadio = document.querySelector('.modal-box__radio')
const modalName = document.querySelector('.modal-box__name')
const modalAge = document.querySelector('.modal-box__age')

let isModalOpen = false

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let isError = false
  let fullName = nameInput.value.split(' ')
  

  if (fullName.length == 3) {
    fullName.forEach((str) => {
      if (str.length < 2 || str.length > 50) {
        isError = true
      }
    })
  } else {
    isError = true
  }

  if (isError) {
    alert('Не допустимые значения ФИО')
  } else {
    // form.submit()
    modal.showModal()
    isModalOpen = true
    e.stopPropagation()
  }

  modalSelect.textContent = selectInput.value
  modalName.textContent = nameInput.value
  console.log(
    selectInput.value,
    nameInput.value,
    // radioInput.value
  )
})





document.addEventListener('click', (e) => {
  if (isModalOpen && !modalBox.contains(e.target)) {
    modal.close()
  }
})