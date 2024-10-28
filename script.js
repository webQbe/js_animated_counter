// Define DOM Elements
const counters = document.querySelectorAll('.counter');

// Set Count Speed
const speed = 200;

// Loop through Counters Array
counters.forEach(counter => {

    const updateCount = () => {

        // Get Current Data Target Value
        const target = +counter.getAttribute('data-target');

        // Get Current Element Value as A Number
        const count = +counter.innerText;

        // Get Increment Count to Reach Target
        const step = target / speed;

        console.log(target);
        console.log(step);

        // Check if We've reached Target 
        if(count < target){

            // When we've not reached Target yet
            // Calculate Display Value by 
            // Adding Increment to Current Display Value
            counter.innerText = count + step;

            // Run updateCount() every 1ms
            setTimeout(updateCount, 1);


        } else {

            // When we've reached Target 
            // Display Target Value
            count.innerText = target;

        }


    }

    updateCount();

});