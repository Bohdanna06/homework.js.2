//Створити функцію, яка може приймати необмежену кількість вхідних значень, 
//та буде повертати кількість рядків, які будуть серед переданих даних. 
//При рішенні використати стрілочні функції.

const getStringAmount = (...numbers)=>{
    return numbers.filter((number)=>{
        return typeof number === 'string';
    }).length
};
console.log(getStringAmount(1,true,'day',15,false,23,'sunny'));

//Створити масив з різними типами даних та перевірити його функцією з першого завдання. 
//Використовувати оператор рзширення для передачі аргументів функції.

const arr=[1, true,'day', 56, false, 'sanny', 87, 'book']
console.log(getStringAmount(...arr));

//Створити функцію розрахунку ступені числа, яка буде працювати на рекурсії.

const getExponentiation = (number, exponent)=>{
    if(exponent===0){
        return 1;
    }
    if(exponent < 0){
        return 1/ getExponentiation(number,-exponent);
    }

    return number* getExponentiation(number,exponent-1);

}
console.log(getExponentiation(2,3));
console.log(getExponentiation(3,3));
console.log(getExponentiation(3,-3));
console.log(getExponentiation(2,-2));
