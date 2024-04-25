import fastify from 'fastify'

export const app = fastify({
    logger: false
});

app.listen({ port: 3000}, function(error, address) {
    if (error) {
        console.log(error)
        process.exit(1)
    }

    console.log("Servidor rodando", address)

});