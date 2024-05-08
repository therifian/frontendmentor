function filter(toFilter) {
    addEvent()
    hideCard(toFilter)
}

function hideCard(toFilter) {
    var cards = document.getElementsByClassName("card")
    for(var i = 0;  i < cards.length; i++) {
        var type = cards[i].className.split(" ")[1]
        if (type == toFilter || toFilter == 'all') {
            cards[i].className = "card " + type
        } else {
            cards[i].className += " hide";
        }     
    }
}

function addEvent() {
    var filterMenu = document.getElementById("filterMenu")
    var buttons = filterMenu.getElementsByTagName("button")
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active")
            current[0].className = current[0].className.replace("active", "")
            className += " active"
        })
    }
}

function fill() {
    const grid = document.getElementById('grid')
    fetch('assets/data.json')
    .then(res => res.json())
    .then(challenges => challenges.forEach(challenge => {
        let tags = []
        challenge.tags.forEach(tag => {
            tags.push(`<span class="technology technology-${tag}">${tag}</span>`)
        })

        const element = `<a class="card ${challenge.level}" href="${challenge.link}">
        <div class="img">
            <img src="${challenge.image}">
        </div>
        <div class="content">
            <h2 class="title">${challenge.title}</h2>
            ${tags.join('')}
            <span class="level">${challenge.level}</span>
            <p class="desc">This HTML & CSS only challenge is perfect for anyone just starting out or anyone
                wanting a small project to play around with.</p>
        </div>
    </a>`
        grid.insertAdjacentHTML('beforeend', element)
    }))
}

fill()

filter('all')
