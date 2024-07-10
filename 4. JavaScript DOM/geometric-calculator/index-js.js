function shapeType(figure) {
    const shapeList = ['triangle', 'rectangle', 'parallelogram', 'rhombus', 'pentagon', 'ellipse'];
    for (const shape of shapeList) {
        if (shape === figure) {
            document.getElementById(shape).style.display = 'flex';
        }
        else {
            document.getElementById(shape).style.display = 'none';
        }
    }
    console.log('inside the shape type');
}

function calculateArea(...args) {
    console.log('inside the calculate area');
    let ans = 1, basIndex = 0, heightIndex = 1;
    if (args.length === 3) {
        ans *= parseFloat(args[0]);
        basIndex = 1; heightIndex = 2;
    }
    ans *= parseFloat(document.getElementById(args[basIndex]).value);
    ans *= parseFloat(document.getElementById(args[heightIndex]).value);

    if (isNaN(ans) === true) {
        document.getElementById('result').innerText = 'Enter the valid inputs';
        document.getElementById('result').style.color = 'red';
    }
    else {
        document.getElementById('result').innerHTML = `Result is: ${ans} cm<sup>2</sup>`;
        document.getElementById('result').style.color = 'green';
    }
}

// const shapeContainer = document.getElementById('shape-select');

// // Calculation Functions
// function calculateTriangle() {
//     const base = parseFloat(document.getElementById('triangle-base').value);
//     const height = parseFloat(document.getElementById('triangle-height').value);
//     const area = 0.5 * base * height;
//     document.getElementById('area-result').innerText = `${area} cm²`;
// }

// function calculateRectangle() {
//     const width = parseFloat(document.getElementById('rectangle-width').value);
//     const length = parseFloat(document.getElementById('rectangle-length').value);
//     const area = width * length;
//     document.getElementById('area-result').innerText = `${area} cm²`;
// }

// function calculateParallelogram() {
//     const base = parseFloat(document.getElementById('parallelogram-base').value);
//     const height = parseFloat(document.getElementById('parallelogram-height').value);
//     const area = base * height;
//     document.getElementById('area-result').innerText = `${area} cm²`;
// }

// function calculateRhombus() {
//     const d1 = parseFloat(document.getElementById('rhombus-d1').value);
//     const d2 = parseFloat(document.getElementById('rhombus-d2').value);
//     const area = 0.5 * d1 * d2;
//     document.getElementById('area-result').innerText = `${area} cm²`;
// }

// function calculatePentagon() {
//     const peri = parseFloat(document.getElementById('pentagon-peri').value);
//     const apo = parseFloat(document.getElementById('pentagon-apo').value);
//     const area = 0.5 * peri * apo;
//     document.getElementById('area-result').innerText = `${area} cm²`;
// }

// function calculateEllipse() {
//     const majorR = parseFloat(document.getElementById('ellipse-major-r').value);
//     const minorR = parseFloat(document.getElementById('ellipse-minor-r').value);
//     const area = Math.PI * majorR * minorR;
//     document.getElementById('area-result').innerText = `${area.toFixed(2)} cm²`;
// }

// // Connection
// document.addEventListener('DOMContentLoaded', () => {
//     const shapeSelect = document.getElementById('shape-select');
//     const shapes = ['triangle', 'rectangle', 'parallelogram', 'rhombus', 'pentagon', 'ellipse'];

//     function updateShapeCards() {
//         shapes.forEach(shape => {
//             document.getElementById(`${shape}-card`).classList.add('hidden');
//         });

//         const selectedShape = shapeSelect.value;
//         document.getElementById(`${selectedShape}-card`).classList.remove('hidden');
//     }

//     shapeSelect.addEventListener('change', updateShapeCards);
//     updateShapeCards(); // Initialize default view
// });
