import server from "./graphql/server.js"
import dbconnection from './database.js'
dbconnection()

server.listen({port:3100}).then(({ url }) => {
    console.log(`server runnig on ${url}`);
});

