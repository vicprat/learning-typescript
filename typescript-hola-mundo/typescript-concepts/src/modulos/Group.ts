//Como nosotros no queremos tener interaccion con otras funciones fuera de la clase en otros archivos hacemos un export default
export default class Group {
    constructor(public id: number, public name:string){}
}

//Detalle de implementación
//Esta funcion es solamente utilizada por la clase Group
const manejaUsusarios = () => {

}

export const defaultGroups = {
    users: 'users',
    admin: 'admin'
}