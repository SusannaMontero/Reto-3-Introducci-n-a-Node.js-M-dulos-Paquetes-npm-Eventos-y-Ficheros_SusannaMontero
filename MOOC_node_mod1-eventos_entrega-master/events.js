// Tarea 2: Events, detalle en documento ReadMe.

// Clase EventEmitter
class EventEmitter {
    listeners = {}; // Objeto que contendrá todos los eventos y su lista de callbacks

    on(event, callbacks) { // Asocia el evento event a uno o más de sus callback
        if (!Array.isArray(this.listeners[event])) {
            this.listeners[event] = []; // Crea el evento
            console.log(`EventEmitter::on creando: event(${event}) -> tiene ${Object.keys(this.listeners).length} eventos`);
        }
        this.listeners[event].push(callback); // Asocia al callback al evento event
        console.log(`EventEmitter::on insertando: event->${event} callback->${callback} tiene ${this.listeners[event].length} callbacks`);
    }

    emit(event, args) {
        this.listeners[event].forEach((callback) => { // Recorre todo el array de callbacks
            console.log(`EventEmitter::emit invocando: ${callback}(${args})`);
            callback(args); // Invoca a todos los callbacks del evento con sus parámetros

        });
    }
}

exports = module.exports = EventEmitter;