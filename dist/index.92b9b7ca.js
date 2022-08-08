const canvas = document.getElementById("canvas");
canvas.width = 200;
const ctx = canvas.getContext("2d");
const car = new Car(100, 100, 30, 50);
animate();
function animate() {
    car.update();
    canvas.height = window.innerHeight;
    car.draw(ctx);
    requestAnimationFrame(animate);
}

//# sourceMappingURL=index.92b9b7ca.js.map
