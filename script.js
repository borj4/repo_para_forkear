let users = [
    {
        "name": "Pepe",
        "pass": "1234"
        },
]

let oneUser = {
    "name": "Tiburcio",
    "pass": "0000"
}

console.log(window.sessionStorage);



const fuu = () => {
        
    // para escribir, pasamos todo de JSON a string
    // sessionStorage.setItem( "users", JSON.stringify(users) );
        

    // para recuperar la info, pasamos todo de string a JSON
    // console.log( JSON.parse(sessionStorage.getItem("users")) ); // de todo el array
    // console.log( JSON.parse(sessionStorage.getItem("users"))[0] ); // de todo el objeto
    // console.log( JSON.parse(sessionStorage.getItem("users"))[0].name ); // de una propiedad
    // console.log( JSON.parse(sessionStorage.getItem("users"))[JSON.parse(sessionStorage.getItem("users")).length-1]?.name ); // de una propiedad


    // para borrar la info seleccionada
    // sessionStorage.removeItem("users");


    // para borrar toda la info
    // sessionStorage.clear;


    // para añadir info, primero recuperamos lo que hay, le añadimos lo que queramos, y volvemos a subir
    let loQueHay = JSON.parse(sessionStorage.getItem("users"));
    loQueHay.push(oneUser);
    sessionStorage.setItem( "users", JSON.stringify(loQueHay) );

}

// fuu();



// devs just wanna have fun!
const currificado = () => {

    let admins = [
        { "name": "Muchelle",
          "pass": "ornitorrinco_de_venecia"
        },
        { "name": "Alvaru",
        "pass": "cider_in_the_jarrows"
        },
    ];

    let master = {
        "name": "Sergeant",
        "pass": "dammed*italians"
    };
    
    let call = "curri";

    const storage = (key) => (content) => {
        if (content) { JSON.parse(sessionStorage.getItem(key)) }
        else sessionStorage.setItem( key, JSON.stringify(content) );
        console.log(!content);
    };
    

    // para escribir, pasamos todo de JSON a string
    // sessionStorage.setItem( "users", JSON.stringify(users) ); // after
    // storage(call)(admins);
        

    // para recuperar la info, pasamos todo de string a JSON
    console.log( storage(call)() ); // de todo el array
    // console.log( JSON.parse(sessionStorage.getItem("users"))[0] ); // de todo el objeto
    // console.log( JSON.parse(sessionStorage.getItem("users"))[0].name ); // de una propiedad
    // console.log( JSON.parse(sessionStorage.getItem("users"))[JSON.parse(sessionStorage.getItem("users")).length-1]?.name ); // de una propiedad


    // para borrar la info seleccionada
    // sessionStorage.removeItem("users");


    // para borrar toda la info
    // sessionStorage.clear;


    // para añadir info, primero recuperamos lo que hay, le añadimos lo que queramos, y volvemos a subir
    let loQueHay = JSON.parse(sessionStorage.getItem("users"));
    loQueHay.push(oneUser);
    sessionStorage.setItem( "users", JSON.stringify(loQueHay) );

}

currificado();