let a = '';
let b = '';
let sing = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const action = ['+', '-', 'X', '/']

const out = document.querySelector('.calc-screen p')

function elect() {
    a = '';
    b = '';
    sing = '';
    finish = false;
    out.textContent = '0'
}

document.querySelector('.ac').onclick = elect

document.querySelector('.buttons').onclick = (e) => {
    if (!e.target.classList.contains('btn')) return;
    if (e.target.classList.contains('ac')) return;
    out.textContent = ''

    const key = e.target.textContent
    if (digit.includes(key)) {
        if (b === '' && sing === '') {
            a += key
            out.textContent = a
        } else if (b !== '' && a !== '' && finish) {
            b += key
            finish = false;
            out.textContent = b
        } else {
            b += key
            out.textContent = b
        }
    }
    if (action.includes(key)) {
        sing += key
        out.textContent = sing
        return;
    }
    if (key === '=') {
        if (b === '') a = b
        switch (sing) {
            case "+":
                a = (+a) + (+b)
                break;
            case "-":
                a = a - b
                break;
            case "X":
                a = a * b;
                break;
            case "/":
                if (b === "0") {
                    out.textContent = 'none'
                    a = '';
                    b = '';
                    sing = '';
                    return;
                }
                a = a / b
                break;
        }
        finish = true
        out.textContent = a
    }

}

// let a = ''
// let b = ''
// let sing = ''
// let finish = false
//
// const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
// const action = ['+', '-', 'X', '/']
//
// const out = document.querySelector('.calc-screen p')
//
// function elect() {
//     a = ''
//     b = ''
//     sing = ''
//     finish = false
//     out.textContent = '0'
// }
//
// document.querySelector('.ac').onclick = elect
//
// document.querySelector('.buttons').onclick = (event) => {
//     if (!event.target.classList.contains('btn')) return;
//     if (event.target.classList.contains('ac')) return;
//     out.textContent = ''
//     const key = event.target.textContent
//     if (digit.includes(key)) {
//         if (b === '' && sing === '') {
//             a += key;
//             out.textContent = a
//         } else if (b !== '' && a !== '' && finish) {
//             b = key
//             finish = false
//             out.textContent = b
//         } else {
//             b += key
//             out.textContent = b
//         }
//         return;
//
//     }
//     if (action.includes(key)) {
//         sing += key
//         out.textContent = sing
//         return;
//     }
//     if (key === '=') {
//         if (b === '') b = a
//         switch (sing) {
//             case '+':
//                 a = (+a) + (+b)
//                 break;
//             case '-':
//                 a = a - b
//                 break;
//             case 'X':
//                 a = a * b
//                 break;
//             case '/':
//                 if (b === '0'){
//                     out.textContent ='error'
//                     a = ''
//                     b = ''
//                     sing=''
//                     return;
//                 }
//                 a = a / b
//                 break;
//         }
//         finish = true
//         out.textContent = a
//     }
// }


