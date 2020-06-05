const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then()
            .catch(e => console.log(e));
        break;

    case 'crear':
        crearArchivo(argv.base)
            .then(archivo => console.log(`archivo creado: ${archivo}`.red))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}

































//let argv2 = process.argv;
//console.log(argv);
//console.log(argv2);
/* 
let parametro = argv[2];
let base = parametro.split('=')[1]
*/