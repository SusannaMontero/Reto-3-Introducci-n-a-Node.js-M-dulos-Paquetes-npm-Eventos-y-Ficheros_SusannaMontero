// Tarea 1, detalle en documento ReadMe

const EventEmitter = require('./events'); // Tarea 2 El archivo es un módulo CommonJS; se puede convertir a un módulo ES6

// Importar módulo Later.js:
const later = require('later');

// Clase Programador
class Programador extends EventEmitter {
    constructor(configuracion) {
        super();

        // set later to use local time
        later.date.localTime();

        configuracion.forEach((programa, i) => {
            later.setInterval(() => {
                this.emit('ideal', programa.temperatura);
                console.log(`Programa num. ${i}: Modificando temperatura ideal a ${programa.temperatura} gradosC`);
            }, later.parse.text(`at ${programa.hora}`));

        });
    }
}

exports = module.exports = Programador;