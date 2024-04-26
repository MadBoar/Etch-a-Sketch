function screenInit(count = 16) {
    const container = document.querySelector(".grid-container");
    let gridCell = document.createElement("div");
    
    //gridRoot to find optimal box size, used to find how many 'pixels' and their width
    const gridRoot = Math.floor(Math.sqrt(count));
    const pixelCount = gridRoot**2;
    const pixelWidth = 450 / gridRoot; 

    gridCell.style.width = `${pixelWidth}px`;
    gridCell.style.height = `${pixelWidth}px`;
    gridCell.classList.add("cell");

    
    for(let i = 0; i < pixelCount; i++){
        container.appendChild(gridCell.cloneNode(true));
    }
}
screenInit();

function hoverToggle() {
    this.classList.toggle("hover");
}

//mouse over event listener
const grid = document.querySelectorAll(".cell")
const handlerEvents = ['mouseover', 'mouseout'];
handlerEvents.forEach(ev => {
    grid.forEach(el => {
        el.addEventListener(`${ev}`, hoverToggle.bind(el));
    });
});

/*
    Input pixel count
    grid container adjusts to the (rounded down) square root of the pixel count
    append a notification below the grid stating the adjusted pixel count

    1000px count = sqrt(1000) rounded down => width 
*/
const pixelInput = document.querySelector("input");

//get cell width count by squaring the 'pixel' input
document.querySelector("button").addEventListener('click', () => {
    const pixelCount = pixelInput.value;
    screenInit(pixelCount);
})