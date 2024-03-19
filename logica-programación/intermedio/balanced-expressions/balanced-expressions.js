
// ,')',']','}'
const balanceExpressionValidator = (expression) => {
  const openDelimiters = ['{','[','(']
  const formatedExpression = expression.replaceAll(' ', '')
  const formatedDelimiters = []
  if(formatedExpression[0] === ')' || formatedExpression[0] === '}' || formatedExpression[0] === ']') return false;
  for (let i = 0; i < formatedExpression.length; i++ ) {
    if (openDelimiters.includes(formatedExpression[i])) {
      formatedDelimiters.push(formatedExpression[i])
    }
    else {
      if (formatedExpression[i] === '}' && formatedDelimiters[formatedDelimiters.length - 1] === '{'){
        formatedDelimiters.pop()
      }
      else if (formatedExpression[i] === ']' && formatedDelimiters[formatedDelimiters.length - 1] === '['){
        formatedDelimiters.pop()
      }
      else if (formatedExpression[i] === ')' && formatedDelimiters[formatedDelimiters.length - 1] === '('){
        formatedDelimiters.pop()
      }
      else return false;
    }
    
  }
  return formatedDelimiters.length === 0
}



balanceExpressionValidator('{[()]{[]}}') ? console.log('si esta balanceado') : console.log('no esta balanceado')





