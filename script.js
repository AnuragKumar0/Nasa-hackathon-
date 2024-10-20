var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
}})

tl.to("#earth",{
    top: "120%",
    left: "0%"
}, 'particles')
tl.to("#moon",{
    top:"160%",
    left: "23%"
}, 'particles')
tl.to("#particles",{
    width: "15%",
    top:"160%",
    right: "10%"
}, 'particles')
tl.to("#asteroid",{
    top:"110%",
    rotate: "130deg",
    left: "70%"
}, 'particles')
tl.to("#asteroid2",{
    top:"110%",
    rotate: "130deg",
    left: "0%"
}, 'particles')


var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
}})

tl2.from(".venus1",{
    rotate: "-90deg",
    left: "80%",
    top: "25%"
}, 'ca')
tl2.from("#planet1",{
    rotate: "-90deg",
    top: "5%",
    left: "60%",
}, 'ca')

tl2.from(".venus2",{
    rotate: "90deg",
    left: "80%",
    top: "25%"
}, 'ca')
tl2.from("#planet3",{
    rotate: "90deg",
    top: "-3%",
    left: "60%",
}, 'ca')

tl2.from(".venus2",{
    rotate: "90deg",
    left: "80%",
    top: "25%"
}, 'ca')
tl2.from("#planet4",{
    rotate: "90deg",
    top: "5%",
    left: "60%",
}, 'ca')

tl2.to("#moon",{
    width:"10%",
    left: "25%",
    top: "210%"
}, 'ca')
tl2.to("#earth",{
    width:"18%",
    top: "220%",
    left: "27.5%",
}, 'ca')

function showInfo(planetId) {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalInfo = document.getElementById("modal-info");

    let planetInfo = {
        1: {
            name: "Gas Giant",
            info: `Jupiter is the largest gas giant in our solar system and has a Great Red Spot, which is a massive storm. It is mostly composed of hydrogen and helium, and has over 79 moons.
            <ul class="custom-bullet">
                <li>Diameter: 139,822 km</li>
                <li>Mass: 1.898 × 10²⁷ kg</li>
                <li>Moons: 79 (including Ganymede, the largest moon in the solar system)</li>
                <li>Distance from the Sun: Approximately 778 million km</li>
                <li>Notable Feature: The Great Red Spot, a gigantic storm larger than Earth.</li>
                <li>Rotation Period: About 10 hours, making it the fastest rotating planet.</li>
            </ul>`
        },
        2: {
            name: "Super Earth",
            info: `Earth, often called a super Earth in a broader sense, is the only planet known to support life, with a diverse range of ecosystems and a protective atmosphere. It has one moon.
            <ul class="custom-bullet">
                <li>Diameter: 12,742 km</li>
                <li>Mass: 5.972 × 10²⁴ kg</li>
                <li>Moons: 1(known as Luna)</li>
                <li>Distance from the Sun: Approximately 150 million km</li>
                <li>Unique Feature: It has liquid water covering about 71% of its surface.</li>
                <li>Atmosphere: Composed mainly of nitrogen (78%) and oxygen (21%), essential for life.</li>
            </ul>`
        },
        3: {
            name: "Ice Giant",
            info: `Neptune is an ice giant, known for its striking blue color due to the presence of methane in its atmosphere. It has 14 known moons and features some of the fastest winds in the solar system.
            <ul class="custom-bullet">
                <li>Diameter: 49,244 km</li>
                <li>Mass: 1.024 × 10²⁶ kg</li>
                <li>Moons: 14 (including Triton, the largest moon)</li>
                <li>Distance from the Sun: Approximately 4.5 billion km</li>
                <li>Notable Feature: The winds on Neptune can reach speeds of up to 2,100 km/h (1,300 mph).</li>
                <li>Rings: Neptune has faint rings made of dust particles and ice, which are not as prominent as Saturn's.</li>
            </ul>`
        },
        4: {
            name: "Terrestrial",
            info: `Mars is often called the "Red Planet" due to its reddish appearance, which is caused by iron oxide (rust) on its surface. It's known for its thin atmosphere and the presence of the largest volcano in the solar system.
            <ul class="custom-bullet">
                <li>Diameter: 6,779 km</li>
                <li>Mass: 6.39 × 10²³ kg</li>
                <li>Moons: 2 (Phobos and Deimos)</li>
                <li>Distance from the Sun: Approximately 227.9 million km</li>
                <li>Notable Feature: Olympus Mons, the tallest volcano and the highest known mountain in the solar system, stands about 22 km high.</li>
                <li>Atmosphere: Primarily composed of carbon dioxide, with traces of nitrogen and argon.</li>
            </ul>`
        }
    };
    
    modalTitle.textContent = planetInfo[planetId].name;
    modalInfo.innerHTML = planetInfo[planetId].info; 
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

window.onscroll = function() {
    // Check if the user has scrolled to the bottom of the page and if the alert has not been shown yet
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !localStorage.getItem('alertShown')) {
        alert("Refresh the website when you reach the bottom only once or twice:(Use ctr + shift + R).");
        localStorage.setItem('alertShown', 'true'); // Set the flag to avoid showing the alert again
    }
};

// Clear the flag when the page is refreshed
window.onbeforeunload = function() {
    localStorage.removeItem('alertShown');
};
