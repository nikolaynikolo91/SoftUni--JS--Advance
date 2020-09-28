function solve(arr) {
    let x1 = Number(arr[0]);
    let y1 = Number(arr[1]);
    let x2 = Number(arr[2]);
    let y2 = Number(arr[3]);

    function isValidRow1(x1, y1) {
        if (x1 == 0 || y1 == 0) {
            return true;
        } else {
            return false;
        }
    }

    function isValidRow2(x2, y2) {
        if (x2 == 0 || y2 == 0) {
            return true;
        } else {
            return false;
        }
    }

    function isValidRow3(x1, y1, x2, y2) {
        if (x1 == y2 || x2 == y1 || x1 == x2 || y1 == y2) {
            return true;
        } else {
            return false;
        }
    }


    if (isValidRow1(x1, y1)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (isValidRow2(x2, y2)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (isValidRow3(x1, y1, x2, y2)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}