// // JavaScript for payment form handling

// document.addEventListener("DOMContentLoaded", function() {
//     // Function to handle payment process when the 'Pay' button is clicked
//     function processPayment() {
//         // Get the selected payment method
//         const selectedPaymentMethod = document.querySelector('input[name="paymentMethod"]:checked');

//         // Check if a payment method is selected
//         if (selectedPaymentMethod) {
//             const paymentValue = selectedPaymentMethod.value;

//             // Perform actions based on the selected payment method
//             if (paymentValue === "fonepay") {
//                 // Execute Fonepay payment process
//                 alert("Fonepay payment process initiated!");
//             } else if (paymentValue === "esewa") {
//                 // Execute eSewa payment process
//                 alert("eSewa payment process initiated!");
//             }
//         } else {
//             // If no payment method is selected
//             alert("Please select a payment method.");
//         }
//     }

//     // Event listener for the 'Pay' button click
//     const payButton = document.querySelector('.btn a');
//     if (payButton) {
//         payButton.addEventListener("click", function(event) {
//             event.preventDefault();
//             processPayment();
//         });
//     }
// });



// payment.js

document.addEventListener("DOMContentLoaded", function () {
    const payButton = document.querySelector('.btn a');

    payButton.addEventListener('click', function (event) {
        event.preventDefault();

        // Handle payment based on selected method
        const fonepayChecked = document.getElementById('fonepay').checked;
        const esewaChecked = document.getElementById('esewa').checked;

        if (fonepayChecked) {
            alert('Fonepay selected. Redirecting to Fonepay...');
            // Redirect to Fonepay page or handle payment logic accordingly
        } else if (esewaChecked) {
            alert('eSewa selected. Redirecting to eSewa...');
            // Redirect to eSewa page or handle payment logic accordingly
        } else {
            alert('Please select a payment method.');
        }
    });
});
