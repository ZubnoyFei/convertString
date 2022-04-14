const someString = 'This is some strange string';

function reverse(str) {
if(typeof(str)!== 'string') {
    return "Error"
}
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr
}

reverse(someString);

