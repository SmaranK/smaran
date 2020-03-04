const calculatorScreen = document.querySelector('.calculator-screen');
const updateScreen = (number)=>{
  calculatorScreen.value = number;
}

let prevInput ='0';
let calculationoperator='';
let currentInput='0';
const inputNumber = (number)=>{
  if(currentInput === '0'){
   currentInput=number;
  }else{
    currentInput += number;
  }
 }


const numbers = document.querySelectorAll(".number");

numbers.forEach((number)=>{
  number.addEventListener("click",(event)=>{
    inputNumber(event.target.value);
    updateScreen(currentInput);
  })
})


const inputOperator = operator =>{
  prevInput = currentInput
  calculationOperator = operator
  currentInput='0'
}

const operator = document.querySelectorAll(".operator");

operator.forEach((operator)=>{
  operator.addEventListener("click",(event)=>{
    inputOperator(event.target.value);
    
  })
})


const calculate = ()=>{
  let result=0
  switch (calculationOperator){
   case '+':
   result =parseInt(prevInput)+parseInt(currentInput)
   break
   case '-':
   result = parseInt(prevInput)-parseInt(currentInput)
   break
   case '*':
   result = parseInt(prevInput)*parseInt(currentInput)
   break
   case '/':
   result = parseInt(prevInput)/parseInt(currentInput) 
   break
  default:
  return
  }



currentInput=result.toString()
calculationOperator=''
}

const clearAll=()=>{
  prevInput ='0'
  calculationoperator=''
  currentInput=''
}

const equalSign = document.querySelector(".equalSign")
 equalSign.addEventListener("click",(event)=>{
  calculate()
  updateScreen(currentInput)
})

const clearBtn = document.querySelector('.all-clear')
clearBtn.addEventListener("click",()=>{
  clearAll()
  updateScreen(currentInput)
})






