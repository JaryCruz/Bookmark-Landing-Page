const btnHamburger = document.querySelector('[data-btn-hamburger]')
const mobileMenu = document.querySelector('[data-mobile-menu]')
const featureImage = document.querySelector('[data-feature-image]')
const featureHeading = document.querySelector('[data-feature-heading]')
const featureParagraph = document.querySelector('[data-feature-paragraph]')
const featuresButtons = document.querySelectorAll('[data-btn-feature]')
const questionElements = document.querySelectorAll('[data-question-card]')
const errorMessage = document.querySelector('[data-error-text]')
const errorIcon = document.querySelector('[data-error-icon]')
const emailInput  = document.querySelector('[data-email-input]')
const btnSubmit  = document.querySelector('[data-btn-submit]')

// Stores each Feature Information
const featuresInfo = {
  feature1: {
    heading: 'Bookmark in one click',
    paragraph: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.',
    image: '../images/illustration-features-tab-1.svg'
  },
  feature2: {
    heading: 'Intelligent search',
    paragraph: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
    image: '../images/illustration-features-tab-2.svg'
  },
  feature3: {
    heading: 'Share your bookmarks',
    paragraph: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
    image: '../images/illustration-features-tab-3.svg'
  }
}

btnHamburger.addEventListener('click', toggleMenu)
btnSubmit.addEventListener('click', validateForm)

featuresButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    switchFeature(btn.dataset.btnFeature)
  })
})

questionElements.forEach(question => {
  question.addEventListener('click', () => {
    question.classList.toggle('open')
  })
})

function toggleMenu() {
  btnHamburger.classList.toggle('open')
  mobileMenu.classList.toggle('hidden')
  document.body.classList.toggle('no-overflow')
}

// Changes The Image, Title, & Paragraph
function switchFeature(feature) {
  const { image, heading, paragraph } = featuresInfo[`feature${feature}`]
  featureImage.src = image
  featureHeading.innerText = heading
  featureParagraph.innerText = paragraph
  resetFeatureButtonClass()
  featuresButtons[feature - 1].classList.add('tab-active')
}

function resetFeatureButtonClass() {
  featuresButtons.forEach(btn => {
    btn.classList.remove('tab-active')
  })
}

// Displays an error if email is invalid
function validateForm() {
  const isValidEmail = validateEmail(emailInput.value)

  emailInput.value = ''
  errorMessage.classList.toggle('hidden', isValidEmail)
  errorIcon.classList.toggle('hidden', isValidEmail)
  emailInput.style.color = isValidEmail ? 'black' : 'red'
}


// Check the Email's format
function validateEmail(email){
  const regEx = /\S+@\S+\.\S+/
  return regEx.test(email)
}