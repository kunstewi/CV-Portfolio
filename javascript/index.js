$(document).ready(function() {
    $('#profile_ripple').ripples({
        resolution: 512,
        dropRadius: 10
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const bars = document.querySelectorAll('.progress-bar');

    bars.forEach(function(bar){
        let percentage = bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innerText = percentage;
        bar.style.width = percentage;
    });
});

// Counter Section

const counters = document.querySelectorAll('.counter');
console.log(counters);

function runCounter() {
    counters.forEach(counter => {
        counter.innerText = '0';
        let target = +counter.dataset.count;
        let step = target / 100;

        let countIt = function() {
            let displayedCount = +counter.innerText;
            if (displayedCount < target) {
                counter.innerText = Math.ceil(displayedCount + step);
                setTimeout(countIt, 10);
            } else {
                counter.innerText = target;
            }
        };
        
        countIt();
    });
}

runCounter();