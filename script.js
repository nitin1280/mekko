// Function to submit order details
function submitOrder() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const comments = document.getElementById('comments').value;
     
    if(name.trim() === ''){
        alert('please enter your name')
      return;
    }
    if(email.trim() === ''){
        alert('please enter your email')
      return;
    }
 
    // Populate form on maakeetoo.com
    // Example: document.getElementById('maakeetooName').value = name;
    // ...
    alert("Form Submit Succsessfully✔")
    // setTimeout(()=>{
    //     location.reload();
    // },1000);
    window.location.href="sign.html"
}


// Highlight plan based on slider value
// Function to highlight the plan based on the clicked button
function highlightPlan(planIndex) {
    const userSlider = document.getElementById('userSlider');
    const highlightedPlan = document.getElementById('highlightedPlan');
    const planWidth = 100 / 3;  // Assuming 3 plans

    // Calculate the width to highlight based on the plan index
    const highlightWidth = planWidth * (planIndex + 1);

    // Update the slider value to highlight the corresponding range
    userSlider.value = highlightWidth;

    // Update the highlighted plan div
    highlightedPlan.style.width = `${highlightWidth}%`;
}

// Function to highlight the plan based on the slider value
function highlightPlanFromSlider() {
    const userSlider = document.getElementById('userSlider');
    const highlightedPlan = document.getElementById('highlightedPlan');

    // Update the highlighted plan div
    highlightedPlan.style.width = `${userSlider.value}%`;
}

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Submit Succsessfully.✔');
    setTimeout(()=>{
            location.reload();
         },1000);
  });