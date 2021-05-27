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
            this.className += " active"
        })
    }
}

filter('all')

