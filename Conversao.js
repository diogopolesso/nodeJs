// Conversão de Numeros:

var n1 = 1545.5
n1
    '1545.5'

n1.toFixed(2) // com duas casas decimais
    '1545.50'

n1.toFixed(2).replace('.', ',') // trocar o ponto pela virgula
    '1545,50'

n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})  // Em Real BR
    R$ '1.545,50'

n1.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})  // Em Dolar U$
    U$ '1.545,50'

n1.toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'})  // Em Euro 
    € '1.545,50'

