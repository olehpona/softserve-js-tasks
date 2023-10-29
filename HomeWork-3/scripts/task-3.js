function createArr(start,end){
    let arr = [];
    for (let i = start; i<=end;i++){
        arr.push(i);
    }
    return arr;
}
function createCount(start,end){
    let count = 1;
    let arr = [];
    for(let i = start;i<=end;i++){
        for (let j =0;j<count;j++){
            arr.push(i);
        }
        count ++;
    }
    return arr.join(',');
}

function randArray(k) {
    const arr = [];
    for (let i = 0; i < k; i++) {
        arr.push(Math.floor(Math.random() * 501));
    }
    return arr;
}

function compact(arr){
    let usedLetters = [];
    let newArr = arr.filter(el => {
        if (usedLetters.includes(el)){
            return false;
        } else {
            usedLetters.push(el);
            return true;
        }
    })
    return newArr;
}

function filterTypes(arr){
    arr = Array.prototype.concat.apply([], arr);
    let numbers = [];
    let strings = [];
    for (let i of arr){
        if (typeof i === 'string'){
            strings.push(i);
        } else {
            numbers.push(i);
        }
    }
    return [numbers,strings];
}

function calc(a,b,operator){
    switch (operator){
        case 1:
            return a-b;
        case 2:
            return a*b;
        case 3:
            return a/b;
        default:
            return a+b;
    }
}

function findUnique(arr){
    let used = [];
    for (let i of arr){
        if (used.includes(i)){
            return false;
        } else {
            used.push(i)
        }
    }
    return true;
}

function create(example){
    return function (text){
        return text === example;
    }
}