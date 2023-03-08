import colors from "colors"

const [ from, to ] = process.argv.slice(2).map(element => parseInt(element))
if (isNaN(from) || isNaN(to)) {
    console.log(colors.red('wrong value'))
    process.exit(0)

}

const { red, yellow, green} = colors;
const colorCollection = [red,yellow,green];
let index = 0;
const colorDraw = (num) => {
    console.log(colorCollection[index](num))
    if (index === colorCollection.length - 1 ) {
        index = 0
    } else {
        index++
    }
}

const simpleNumber = (num) => {
    if (num < 2) {
        return false
    }

   let i = 2
   while( i < num ) {
        if (num % i===0) {
          return false
        }
        i++
    }
    return true
}

let reallyDiapason = false;
let i = from;

for(; i<=to; i++) {
    if (simpleNumber(i)){
        colorDraw(i)
        reallyDiapason = true
    }
}

if(!reallyDiapason) {
    console.log(colors.red('Not a simple number in the diapason'))
}