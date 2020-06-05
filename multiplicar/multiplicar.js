const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`la base ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= 10; i++) {

            data += `${base} x ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}.txt`)
        });

    });
}

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base) && !Number(limite)) {

            reject(`El valor ${ base } o el valor ${ limite }, no son numeros validos`);
            return;
        }



        for (let i = 0; i <= limite; i++) {

            resolve(console.log(`${base} x ${i} = ${base * i}\n`));

        }

    })

}



module.exports = {
    crearArchivo,
    listarTabla
}