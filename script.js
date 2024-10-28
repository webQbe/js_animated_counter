// Define DOM Elements
const counters = document.querySelectorAll('.counter');

// Set Count Speed
const speed = 200;

// Loop through Counters Array
counters.forEach(counter => {

    const updateCount = () => {

        // Get Current Data Target Value
        const target = +counter.getAttribute('data-target');
        console.log(target);
        console.log(typeof target);

    }

    updateCount();

});