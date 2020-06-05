const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime la tabla de multiplicar en terminal', opts)
    .command('crear', 'Crea un archivo de tablas de multiplicar', opts)
    .help()
    .argv;


module.exports = {
    argv
}