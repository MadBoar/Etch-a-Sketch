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
    console.log(1)
}

screenInit();

const grid = document.querySelectorAll(".cell")

const handlerEvents = ['mouseover', 'mouseout'];
handlerEvents.forEach(ev => {
    grid.forEach(el => {
        el.addEventListener(`${ev}`, function(e) {
            this.classList.toggle("hover");
        });
    });
});

