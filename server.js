const express = require( "express" )


const app = express()

app.get( "/", ( res, req ) => {
    res.json( {
        status: 200,
        message: "Hellos RVT"
    } )
} )

app.listen( 9550, () => {
    console.log( "Server is listening on port 9550 " )
} )