function screenInit() {
    const container = document.querySelector(".grid-container");
    let gridCell = document.createElement("div")
    gridCell.classList.add("cell")
    console.log(gridCell)

    for(let i = 0; i<16; i++){
        container.appendChild(gridCell.cloneNode(true))
    }
}

function hoverToggle() {
    this.classList.toggle("hover");
}

screenInit();

const grid = document.querySelectorAll(".cell")

const handlerEvents = ['mouseover', 'mouseout'];
handlerEvents.forEach(ev => {
    grid.forEach(el => {
        el.addEventListener(`${ev}`, hoverToggle.bind(el));
    });
});

