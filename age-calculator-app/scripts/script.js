const dayTxt = document.getElementById("days");
const monthTxt = document.getElementById("months");
const yearTxt = document.getElementById("years");
const labels = document.getElementsByTagName("label");
const spans = document.getElementsByClassName("error-text");
const btn = document.getElementById("submitBtn");

const d = document.getElementById("day");
const m = document.getElementById("month");
const y = document.getElementById("year");

btn.addEventListener('click', () => {
    
    spans[0].innerHTML = "";
    spans[1].innerHTML = "";
    spans[2].innerHTML = "";

    labels[0].classList.remove("error");
    labels[1].classList.remove("error");
    labels[2].classList.remove("error");
    
    d.classList.remove("error");
    m.classList.remove("error");
    y.classList.remove("error");

    if (d.value === "") {
        labels[0].classList.add("error");
        d.classList.add("error");
        spans[0].innerHTML = "This field is required";
    }

    if (m.value === "") {
        labels[1].classList.add("error");
        m.classList.add("error");
        spans[1].innerHTML = "This field is required";
    }

    if (y.value === "") {
        labels[2].classList.add("error");
        y.classList.add("error");
        spans[2].innerHTML = "This field is required";
    }

    const dI = Number(d.value);
    const mI = Number(m.value);
    const yI = Number(y.value);

    if (isNaN(dI) || isNaN(mI) || isNaN(yI)) {
        labels[0].classList.add("error");
        labels[1].classList.add("error");
        labels[2].classList.add("error");
        d.classList.add("error");
        m.classList.add("error");
        y.classList.add("error");
        spans[0].innerHTML = "Must be a valid date";
        return;
    }

    if (validDate(dI, mI, yI) && !(isNaN(dI) || isNaN(mI) || isNaN(yI))) {
        const now = new Date();
        const old = new Date(`"${yI}/${mI}/${dI}"`);
        let year = now.getFullYear() - old.getFullYear();
        let month = 0;
        let day = 0;
        
        if (now.getMonth() >= old.getMonth())
            month = now.getMonth() - old.getMonth();
        else {
            year--;
            month = 12 + now.getMonth() - old.getMonth();
        }

        if (now.getDate() >= old.getDate())
            day = now.getDate() - old.getDate();
        else {
            month--;
            day = 31 + now.getDate() - old.getDate();
            if (month < 0) {
                year--;
                month = 11;
            }
        }
        yearTxt.innerHTML = year;
        monthTxt.innerHTML = month;
        dayTxt.innerHTML = day;
    } else {
        yearTxt.innerHTML = "--";
        monthTxt.innerHTML = "--";
        dayTxt.innerHTML = "--";
    }

})

function validDate(d, m, y) {
    if (d < 1 || d > 31) {
        document.getElementById("day").classList.add("error");
        labels[0].classList.add("error");
        spans[0].innerHTML = "Must be a valid day";
        return false;
    }
    if (m < 1 || m > 12) {
        document.getElementById("month").classList.add("error");
        labels[1].classList.add("error");
        spans[1].innerHTML = "Must be a valid month";
        return false;
    }
    if (y > new Date().getFullYear()) {
        document.getElementById("year").classList.add("error");
        labels[2].classList.add("error");
        spans[2].innerHTML = "Must be a valid year";
        return false;
    }

    if (new Date().getTime() < new Date(`"${y}/${m}/${d}"`).getTime()) {
        labels[0].classList.add("error");
        labels[1].classList.add("error");
        labels[2].classList.add("error");
        document.getElementById("day").classList.add("error");
        document.getElementById("month").classList.add("error");
        document.getElementById("year").classList.add("error");
        spans[0].innerHTML = "Must be a valid date";
        spans[1].innerHTML = "";
        spans[2].innerHTML = "";
        return false;
    }

    switch (m) {
        case 4:
        case 6:
        case 9:
        case 11:
            if (d < 1 || d > 30) {
                labels[0].classList.add("error");
                labels[1].classList.add("error");
                labels[2].classList.add("error");
                document.getElementById("day").classList.add("error");
                document.getElementById("month").classList.add("error");
                document.getElementById("year").classList.add("error");
                spans[0].innerHTML = "Must be a valid date";
                spans[1].innerHTML = "";
                spans[2].innerHTML = "";
                return false;
            } 
            break;
        case 2:
            if ((y % 4 === 0 && y % 100 !== 0) || (y % 400 ==0))
                if ( day < 1 || d > 29) return false;
            if (d < 1 || d > 28) return false;
            break;
    }

    return true;
}