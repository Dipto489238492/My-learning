// 1. Strict filter to block 'e' and 'E' from being typed at all
function blockLetters(event) {
    if (event.key === 'e' || event.key === 'E') {
        event.preventDefault(); // Stops the key press instantly
    }
}

// 2. The main math engine
function doMath() {
  let rMean = document.getElementById("meanBox").value;
  let rResult = document.getElementById("resultBox").value;
  let RZScore = document.getElementById("zScoreBox").value;

  // SECURITY CHECK: If empty, show the error pop-up
  if(rMean === "" || rResult === "" || RZScore === "") {
    showModal(
        "Missing Data!", 
        "<p style='color: red;'>Please enter valid numbers in all fields. Do not leave them empty.</p>", 
        "Try Again"
    );
    return; // Stop the script
  }

  // Convert to numbers
  let mean = Number(rMean);
  let result = Number(rResult);
  let zScore = Number(RZScore);
  
  // Calculate
  let sd = (result - mean) / zScore;
  let lower2SD = mean - (2 * sd);
  let upper2SD = mean + (2 * sd);
  let lower3SD = mean - (3 * sd);
  let upper3SD = mean + (3 * sd);
  
  // Format the result text for the pop-up
  let successText = `
    <p style="color: #27ae60; font-weight: bold;">2SD Range:<br> ${lower2SD.toFixed(2)} to ${upper2SD.toFixed(2)}</p>
    <p style="color: #27ae60; font-weight: bold;">3SD Range:<br> ${lower3SD.toFixed(2)} to ${upper3SD.toFixed(2)}</p>
  `;

  // Show the success pop-up
  showModal("Success!", successText, "Calculate Again");
}

// 3. Engine to turn ON the pop-up box
function showModal(title, message, buttonText) {
    document.getElementById("modalTitle").innerHTML = title;
    document.getElementById("modalMessage").innerHTML = message;
    document.getElementById("modalButton").innerHTML = buttonText;
    
    // This removes the "hidden" CSS class, making the box appear
    document.getElementById("customModal").classList.remove("hidden");
}

// 4. Engine to turn OFF the pop-up box
function closeModal() {
    // This adds the "hidden" CSS class back, making the box disappear
    document.getElementById("customModal").classList.add("hidden");
    
    // Optional: Clear the boxes so it's ready for a fresh calculation
    document.getElementById("meanBox").value = "";
    document.getElementById("resultBox").value = "";
    document.getElementById("zScoreBox").value = "";
}
