
function outHandler() {

    this.style.backgroundColor = "rgba(135,206,235,1)"
    
};

//mouse over event listener
function cellEventHandler (){
    const grid = document.querySelectorAll(".cell")
    
    grid.forEach(el => {
        el.addEventListener('mouseover', outHandler.bind(el));
    });
};

function screenInit(count = 16) {
    const container = document.querySelector(".grid-container");
    const gridCell = document.createElement("div");
    document.querySelectorAll(".cell").forEach(el => el.remove());

    //gridRoot to find optimal box size, used to find how many 'pixels' and their width
    const gridRoot = Math.floor(Math.sqrt(count));
    const pixelCount = gridRoot**2;
    const pixelWidth = 450 / gridRoot; 

    gridCell.style.width = `${pixelWidth}px`;
    gridCell.style.height = `${pixelWidth}px`;
    gridCell.classList.add("cell");

    
    for(let i = 0; i < pixelCount; i++){
        container.appendChild(gridCell.cloneNode(true));
    };
    cellEventHandler();
};

screenInit();




const pixelInput = document.querySelector("input");

//get cell width count by squaring the 'pixel' input
document.querySelector("button").addEventListener('click', () => {
    const pixelCount = pixelInput.value;
    screenInit(pixelCount);
});