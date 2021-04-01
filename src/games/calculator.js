import generateNumber from "../generate.js"
import playGame from "../index.js"

const rule = "What is the result of the expression?"

const getOperation = () => {
  const operations = ["+", "*", "-"]
  const operationIndex = generateNumber(0, operations.length - 1)

  return operations[operationIndex]
}

const calc = (operation, firstNumber, secondNumber) => {
  switch (operation) {
    case "+":
      return firstNumber + secondNumber
    case "*":
      return firstNumber * secondNumber
    case "-":
      return firstNumber - secondNumber
    default:
      throw new Error("incorrect operation")
  }
}

const maxNumber = 20

const getQuestionAndAnswer = () => {
  const firstNum = generateNumber(0, maxNumber)
  const secondNum = generateNumber(0, maxNumber)

  const operation = getOperation()
  const question = `${firstNum} ${operation} ${secondNum}`
  const answer = calc(operation, firstNum, secondNum)

  return [question, String(answer)]
}

const playCalcGame = () => {
  playGame(rule, getQuestionAndAnswer)
}

export default playCalcGame
