const balanceExpressionValidator = (expression) => {
  const validDelimiters = ['{','[','(', ')',']','}']
  const formatedExpression = expression.replaceAll(' ', '')
  const formatedDelimiters = []
  for (let i = 0; i < expression.length; i++ ) {
    if (validDelimiters.includes(expression[i])) {
      formatedDelimiters.push(expression[i])
    }
  }

  if (formatedDelimiters.length % 2 !== 0) {
    return false;
  }

  let i = 0 ;
  while (true) {
    if (formatedDelimiters.length === 0) return true;
    else if (formatedDelimiters.length > 0 && (
      (!formatedDelimiters.includes('{') && formatedDelimiters.includes('}')) || 
      (!formatedDelimiters.includes('[') && formatedDelimiters.includes(']')) || 
      (!formatedDelimiters.includes('(') && formatedDelimiters.includes(')')) )) {
      
      return false;
    }
    else if (formatedDelimiters[i] === '{' && formatedDelimiters[i + 1 ] === '}')
    {
      formatedDelimiters.splice(i, 2);
      i = 0;
    }
    else if (formatedDelimiters[i] === '(' && formatedDelimiters[i + 1 ] === ')')
    { 
      formatedDelimiters.splice(i, 2);
      i = 0;
    }
    else if (formatedDelimiters[i] === '[' && formatedDelimiters[i + 1 ] === ']')
    {  
      formatedDelimiters.splice(i, 2);
      i = 0;
    } else {
      i = i + 1 ;
    }
  }

  
}

balanceExpressionValidator('{ a * ( c + d ) ] - 5 }') ? console.log('si esta balanceado') : console.log('no esta balanceado')

