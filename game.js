const hitboxes = [
    { x: 91.0374984741211, y: 309.52500915527344 },
    { x: 124.0374984741211, y: 311.52500915527344 },
    { x: 138.0374984741211, y: 311.52500915527344 },
    { x: 177.0374984741211, y: 312.52500915527344 },
    { x: 192.0374984741211, y: 310.52500915527344 },
    { x: 91.0374984741211, y: 267.52500915527344 },
    { x: 124.0374984741211, y: 267.52500915527344 },
    { x: 143.0374984741211, y: 266.52500915527344 },
    { x: 179.0374984741211, y: 266.52500915527344 },
    { x: 193.0374984741211, y: 265.52500915527344 }
];

const signalNames = ["Signal 1", "Signal 2", "Signal 3", "Signal 4", "Signal 5", "Signal 6", "Signal 7", "Signal 8", "Signal 9", "Signal 10"];

const signalNameElement = document.getElementById("signal-name");
const imageContainer = document.getElementById("image-container");
const schemaImage = document.getElementById("schema-image");

let currentSignalIndex = 0;

function displayNextSignal() {
    signalNameElement.textContent = signalNames[currentSignalIndex];
}

displayNextSignal();

imageContainer.addEventListener("click", (event) => {
    const rect = schemaImage.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;

    const hitbox = hitboxes[currentSignalIndex];
    const distance = Math.sqrt(
        Math.pow(clickX - hitbox.x, 2) + Math.pow(clickY - hitbox.y, 2)
    );

    if (distance < 20) { // 20px tolerance for clicking
        const overlay = document.createElement("div");
        overlay.className = "overlay";
        overlay.style.left = `${hitbox.x}px`;
        overlay.style.top = `${hitbox.y}px`;
        overlay.textContent = signalNames[currentSignalIndex];
        imageContainer.appendChild(overlay);

        currentSignalIndex++;
        if (currentSignalIndex < signalNames.length) {
            displayNextSignal();
        } else {
            signalNameElement.textContent = "Game Over!";
        }
    }
});
