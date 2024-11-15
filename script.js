// script.js

// Handle age eligibility
const ageInput = document.getElementById('age');
const ageEligibility = document.getElementById('age-eligibility');

ageInput.addEventListener('input', () => {
  const age = parseInt(ageInput.value);
  if (age >= 21 && age < 60) {
    ageEligibility.textContent = 'Eligible';
    ageEligibility.className = 'eligible';
  } else {
    ageEligibility.textContent = 'Not Eligible';
    ageEligibility.className = 'not-eligible';
  }
  ageEligibility.classList.remove('hidden');
  updateFinalEligibility();
});

// Handle height and gender eligibility
const genderInputs = document.querySelectorAll('input[name="gender"]');
const heightInput = document.getElementById('height');
const heightEligibility = document.getElementById('height-eligibility');

function checkHeightEligibility() {
  const gender = document.querySelector('input[name="gender"]:checked');
  const height = parseFloat(heightInput.value);

  if (gender && height) {
    if (
      (gender.value === 'female' && height >= 157) ||
      (gender.value === 'male' && height >= 170)
    ) {
      heightEligibility.textContent = 'Eligible';
      heightEligibility.className = 'eligible';
    } else {
      heightEligibility.textContent = 'Not Eligible';
      heightEligibility.className = 'not-eligible';
    }
    heightEligibility.classList.remove('hidden');
    updateFinalEligibility();
  }
}

genderInputs.forEach((input) => input.addEventListener('change', checkHeightEligibility));
heightInput.addEventListener('input', checkHeightEligibility);

// Update final eligibility
const finalEligibility = document.getElementById('final-eligibility');

function updateFinalEligibility() {
  const isAgeEligible = ageEligibility.textContent === 'Eligible';
  const isHeightEligible = heightEligibility.textContent === 'Eligible';

  if (isAgeEligible && isHeightEligible) {
    finalEligibility.textContent = 'Final Eligibility: Eligible';
    finalEligibility.className = 'eligible';
  } else {
    finalEligibility.textContent = 'Final Eligibility: Not Eligible';
    finalEligibility.className = 'not-eligible';
  }
  finalEligibility.classList.remove('hidden');
}
