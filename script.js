// Define DOM Elements
const counters = document.querySelectorAll('.counter');

// Set Count Speed
const speed = 200;

// Loop through Counters Array
counters.forEach(counter => {

    const updateCount = () => {

        // Get Current Data Target Value
        const target = +counter.getAttribute('data-target');

        // Get Current Element's Display Value as A Number
        const count = +counter.innerText;

        // Get Step Count to Reach Target
        const step = target / speed;

        console.log(target);
        console.log(step);

    }

    updateCount();

});