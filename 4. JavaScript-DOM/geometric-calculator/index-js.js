// shape find-out
function shapeType(figure) {
    const shapeList = ['triangle', 'rectangle', 'parallelogram', 'rhombus', 'pentagon', 'ellipse'];
    for (const shape of shapeList) {
        if (shape === figure) {
            document.getElementById(shape).style.display = 'flex';
            document.getElementById('result').innerText = 'Here you will see the area of your specified shape...';
            document.getElementById('result').style.color = '#3C3E40';
        }
        else {
            document.getElementById(shape).style.display = 'none';
        }
    }
};

// area calculations
function calculateArea(...args) {
    let ans = 1, basIndex = 0, heightIndex = 1;
    if (args.length === 3) {
        ans *= parseFloat(args[0]);
        basIndex = 1; heightIndex = 2;
    }
    ans *= parseFloat(document.getElementById(args[basIndex]).value);
    ans *= parseFloat(document.getElementById(args[heightIndex]).value);
    ans = ans.toFixed(2);

    if (isNaN(ans) === true) {
        document.getElementById('result').innerText = 'Enter the valid inputs';
        document.getElementById('result').style.color = 'red';
    }
    else {
        document.getElementById('result').innerHTML = `Area = ${ans} cm<sup>2</sup>`;
        document.getElementById('result').style.color = 'green';
    }
};