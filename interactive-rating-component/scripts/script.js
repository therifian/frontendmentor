const parent = document.getElementById("rates");
    const card = document.getElementById("card");
    const button = document.getElementById("submit");
    const response = document.getElementById("response");
    const note = document.getElementById("note");
    const rates = parent.children;
    let chosen = null;
    for (let i = 0; i < rates.length; i++) {
      rates[i].addEventListener('click', () => {
        for (let j = 0; j < rates.length; j++) {
          rates[j].classList.remove('active');
          chosen = null;
        }
        rates[i].classList.add('active');
        chosen = parseInt(i+1);
      });
    }
    button.addEventListener('click', () => {
      if (chosen != null) {
        card.style.display = 'none';
        note.innerHTML = chosen;
        response.style.display = 'block';
      } 
    })