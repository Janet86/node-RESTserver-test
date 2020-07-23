// declaro mi puerto para en caso q no exista
// lo llame por el 3000

process.env.PORT = process.env.PORT || 3000;

//configuro la variable de entorno PORT para qe le diga a mi
// servidor web qué puerto debe escuchar en caso que no
//exista otro puerto configurado, es decir, toma el valor
// que tenga process.env.PORT y sino toma 3000