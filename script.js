// === Cube Catcher Game ===

let scene = new THREE.Scene();
scene.background = new THREE.Color("#1e293b"); // dark blue

let camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 5;

let renderer = new THREE.WebGLRenderer({ canvas: document.querySelector("#draw"), antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// Lighting
scene.add(new THREE.AmbientLight(0xffffff, 0.5));
let pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(2, 3, 4);
scene.add(pointLight);

// Cube
let cubeSize = 1;
let geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
let material = new THREE.MeshStandardMaterial({ color: "#10b981" }); // emerald
let cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Raycaster and mouse
let raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();

// Score
let score = 0;
let misses = 0;
let gameOver = false;

// UI
let scoreUI = document.createElement("div");
scoreUI.style.position = "absolute";
scoreUI.style.top = "20px";
scoreUI.style.left = "50%";
scoreUI.style.transform = "translateX(-50%)";
scoreUI.style.color = "white";
scoreUI.style.fontFamily = "Arial";
scoreUI.style.fontSize = "24px";
document.body.appendChild(scoreUI);

function updateScoreUI() {
    if (gameOver) {
        scoreUI.innerHTML = `🎮 Game Over!<br>🏆 Score: ${score}<br><small>Click anywhere to restart</small>`;
    } else {
        scoreUI.textContent = `Score: ${score} | Misses: ${misses}/3`;
    }
}

// Place cube at random position
function placeCubeRandomly() {
    const range = 2;
    cube.position.x = THREE.MathUtils.randFloatSpread(range * 2);
    cube.position.y = THREE.MathUtils.randFloatSpread(range * 2);
    cube.position.z = THREE.MathUtils.randFloat(-1, 1);
    cube.scale.setScalar(1 - score * 0.05); // shrink slightly per point
    cube.material.color.setHex(Math.random() * 0xffffff); // random color
}

// Click handler
window.addEventListener("mousedown", (event) => {
    if (gameOver) {
        resetGame();
        return;
    }

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    let intersects = raycaster.intersectObject(cube);

    if (intersects.length > 0) {
        score++;
        placeCubeRandomly();
    } else {
        misses++;
        if (misses >= 3) {
            gameOver = true;
        }
    }

    updateScoreUI();
});

function resetGame() {
    score = 0;
    misses = 0;
    gameOver = false;
    cube.scale.set(1, 1, 1);
    placeCubeRandomly();
    updateScoreUI();
}

function animate() {
    requestAnimationFrame(animate);

    if (!gameOver) {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
    }

    renderer.render(scene, camera);
}

resetGame();
animate();

// Resize handler
window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
