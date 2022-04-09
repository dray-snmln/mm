const amountSlider = document.querySelector('.js-slider-amount')
const timeSlider = document.querySelector('.js-slider-time')
const interestSlider = document.querySelector('.js-slider-interest')

const setupSliders = () => {
  if (amountSlider) {
    noUiSlider.create(amountSlider, {
      start: [8500],
      step: 1,
      connect: 'lower',
      range: {
        min: 2100,
        max: 50000,
      },
      tooltips: wNumb({
        decimals: 0,
        thousand: ',',
        prefix: '$',
      }),
    })
  }

  if (timeSlider) {
    noUiSlider.create(timeSlider, {
      start: [30],
      step: 1,
      connect: 'lower',
      range: {
        min: 12,
        max: 36,
      },
      tooltips: wNumb({
        decimals: 0,
        thousand: ',',
        suffix: ' months',
      }),
    })
  }

  if (interestSlider) {
    noUiSlider.create(interestSlider, {
      start: [20],
      step: 5,
      connect: 'lower',
      range: {
        min: 5,
        max: 20,
      },
      tooltips: wNumb({
        decimals: 0,
        thousand: ',',
        suffix: '%',
      }),
    })
  }
}

const setupListeners = () => {
  amountSlider.noUiSlider.on('change', () => {
    updateRepayments()
  })

  timeSlider.noUiSlider.on('change', () => {
    updateRepayments()
  })
  interestSlider.noUiSlider.on('change', () => {
    updateRepayments()
  })
}

const updateRepayments = () => {
  let amountValue = parseInt(amountSlider.noUiSlider.get())
  let timeValue = parseInt(timeSlider.noUiSlider.get())
  let interestValue = parseInt(interestSlider.noUiSlider.get())
  let repaymentMonthly = (amountValue + (amountValue / 100) * interestValue + 10 * timeValue) / timeValue
  let repaymentTotal = amountValue + (amountValue / 100) * interestValue + 10 * timeValue

  document.querySelector('.js-repayment-monthly').innerText = repaymentMonthly.toLocaleString('en-us', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  })
  document.querySelector('.js-repayment-total').innerText = repaymentTotal.toLocaleString('en-us', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  })
}

const init = () => {
  setupSliders()
  setupListeners()
  updateRepayments()
}

init()
