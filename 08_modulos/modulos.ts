import areaRetangulo from './retangulo'
import { areaCircunferencia as circ } from './circunferencia'

console.log('Modulo carregado...')
console.time()
console.log(areaRetangulo(7, 8))
console.log(circ(2))
console.timeEnd()

const { digaOi } = require('./novo')
console.log(digaOi('Ana'))