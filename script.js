document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll(".square");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {
        squares.forEach((square, index) => {
            const originalX = parseFloat(square.style.left);
            const originalY = parseFloat(square.style.top);

            const speedFactor = 0.02 + index * 0.005;

            const targetX = (mouseX - window.innerWidth / 2) * speedFactor;
            const targetY = (mouseY - window.innerHeight / 2) * speedFactor;

            let currentTransform = square.style.transform.match(/translate\(([-\d.]+)px, ([-\d.]+)px\)/);
            let currentX = currentTransform ? parseFloat(currentTransform[1]) : 0;
            let currentY = currentTransform ? parseFloat(currentTransform[2]) : 0;

            const newX = currentX + (targetX - currentX) * 0.05;
            const newY = currentY + (targetY - currentY) * 0.05;

            square.style.transform = `translate(${newX}px, ${newY}px)`;
        });

        requestAnimationFrame(animate);
    }

    animate();
});
