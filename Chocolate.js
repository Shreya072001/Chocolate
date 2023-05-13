const chocolates = [
  { name: "Chocolate A", price: 2.5, quantity: 5 },
  { name: "Chocolate B", price: 3, quantity: 3 },
  { name: "Chocolate C", price: 4, quantity: 2 },
  { name: "Chocolate D", price: 2, quantity: 8 },
  { name: "Chocolate E", price: 2.5, quantity: 5 },
  { name: "Chocolate F", price: 3, quantity: 3 },
  { name: "Chocolate G", price: 4, quantity: 2 },
  { name: "Chocolate H", price: 2, quantity: 8 },
]

// Function to render the list of chocolates
function renderChocolates() {
  const chocolatesList = document.getElementById("chocolates-list")
  chocolatesList.innerHTML = ""

  chocolates.forEach((chocolate) => {
    const chocolateDiv = document.createElement("div")
    chocolateDiv.className = "chocolate"

    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.value = chocolate.price
    checkbox.addEventListener("change", updateTotalPrice)

    const chocolateName = document.createElement("span")
    chocolateName.textContent = chocolate.name

    chocolateDiv.appendChild(checkbox)
    chocolateDiv.appendChild(chocolateName)

    chocolatesList.appendChild(chocolateDiv)
  })
}

// Function to calculate and update the total price
function updateTotalPrice() {
  const checkboxes = document.querySelectorAll(
    "#chocolates-list input[type='checkbox']:checked"
  )
  let totalPrice = 0

  checkboxes.forEach((checkbox) => {
    totalPrice += parseFloat(checkbox.value)
  })

  document.getElementById("total-price").textContent = totalPrice.toFixed(2)
}

//// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault()

  const checkboxes = document.querySelectorAll(
    "#chocolates-list input[type='checkbox']:checked"
  )

  if (checkboxes.length > 8) {
    alert("You can only select up to 8 chocolates.")
    return
  }

  const selectedChocolates = Array.from(checkboxes).map(
    (checkbox) => checkbox.parentNode.textContent
  )

  // Process the order, e.g., send to the backend or store the selection in the database

  alert(
    `Your custom pack with the following chocolates has been processed: ${selectedChocolates.join(
      ", "
    )}`
  )
}

// Attach event listener to the form submission
const customPackForm = document.getElementById("custom-pack-form")
customPackForm.addEventListener("submit", handleFormSubmit)

// Render the list of chocolates and initialize the total price
renderChocolates()
updateTotalPrice()
