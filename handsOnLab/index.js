import productManager from "./manager/productManager.js";

const manager = new ManagerUsuarios();

const env = async () =>{
    let user = {
        nombre: "Juan Pablo",
        apellido: "Bidabehere",
        edad: "42",
        curso: "backend"
    } 

    let result = await manager.crearUsuario(user);
    console.log(result)
    let usuarios = await manager.consultaUsuarios()
    console.log(usuarios)
}

env()