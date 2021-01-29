// const numString = "10"
// const num = 10
// const num0 = 1
// const num1 = 1
// const prawda = true // to 1 jako liczba
// const fałsz = false // to zero jako liczba

// console.log(num0 >= num1);
// console.log(num1 + num0);
// console.log(num0 - num1);
// console.log(num0 !== num1)


// let imie = "Marta"
// const age = 16
// const isHealthy = false

// imie = "Marzena"
// console.log("imie linia 4", imie)

// let imie ="Marzena"
// let age = 16
// let country = "Japan"
// let city = " Tokyo"
// let colour = "Hotpink"

// const sum = 2 + 2

// let imie = "imie"
// console.log(imie)
// const payment = 3000
// const bonus = 500
// const sum = payment + bonus

// function sumPaymentAndBonus(wypłata, premia ) {
//     return wypłata + premia
// }

// // sumPaymentAndBonus(payment, bonus)

// const calaWyplata = sumPaymentAndBonus(payment, bonus)
// console.log(calaWyplata)
// const sth = sumPaymentAndBonus(4, 1)
// console.log(sth)

// let imie = "imie"
// console.log(imie)

function sumString1(par1, par2, par3) {
    if(par1 !== '' && par2 !== '') {
        return par1.trim() + ' ' + par2.trim() + ' ' + par3.trim()
    } else {
        return 'Dałeś pusty string'
    }
}

const napis1 = sumString1("            Marzena          ", "             Magdalena ", "      Curry   ")
console.log(napis1)


function useTrim(ar1, ar2, ar3) {
    if(ar1 !=='' || ar2 !== '' || ar3 !== '') {
        return ar1.trim() + ' ' + ar2.trim() + ' ' + ar3.trim()
    }
    else{
        return " no coś jakieś napisy albo coś XD"
    }
}
const napis3 = useTrim("                       Marzena", "                     chyba","                      tak             ")
console.log(napis3)