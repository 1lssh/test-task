const form = document.querySelector('.form__info');
const selectInput = document.querySelector('.form__select-input');
const nameInput = form.querySelector('.form__name-input');
const modal = document.querySelector('dialog')
const modalBox = document.querySelector('.modal-box')
const submitBtn = document.querySelector('.form__btn')
const rangeMin = document.querySelector('.form__range-min-input')
const rangeMax = document.querySelector('.form__range-max-input')
const age = document.querySelector('.form__age-input')

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

  let radios = form.elements['languageRadio'];
  let selectedRadio = Array.from(radios).find(r => r.checked)?.value;

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
  modalRangeMin.textContent = rangeMin.value
  modalRangeMax.textContent = rangeMax.value
  modalSelect.textContent = selectInput.value
  modalName.textContent = nameInput.value
  modalRadio.textContent = selectedRadio
  modalAge.textContent = age.value
})





document.addEventListener('click', (e) => {
  if (isModalOpen && !modalBox.contains(e.target)) {
    modal.close()
  }
})