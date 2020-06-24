//Objective is to turn a roman numeral into an integer.

let num = 159

//O(1) solution where we hash all of the roman values from greatest to least
//Then we begin subtracting the values from the number and add the mapped roman
//numeral to the answer.

let map = {
    '1000': 'M',
    '900': 'CM',
    '500': 'D',
    '400': 'CD',
    '100': 'C',
    '90': 'XC',
    '50': 'L',
    '40': 'XL',
    '10': 'X',
    '9': 'IX',
    '5': 'V',
    '4': 'IV',
    '1': 'I'
}
let result = ''

let nums = Object.keys(map).sort((a,b) => {
    return b - a
})
  
for (let i = 0; i < nums.length; i++) {
    while (num >= nums[i]) {
        num -= nums[i]
        result += map[nums[i]]
    }
      
    if (num <= 0) {
        break
    }
}
  
console.log(result)