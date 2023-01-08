//con export default exportamos de manera principal un modulo y no tenemos que acceder a el como un objetyo liuteral
//para exportar otros objetos o funciones que no sean el modulo por defecto del mismo archivo y queremos acceder a el, lo hacemos con una coma y llaves, a esto lo llamamos named exports
// * nos funciona para impotar todo lo que se encuentre dentro de un archivo
import * as G from "./Group"
import {Point, PUNTITO} from "./Point"
import { Caballos, Chanchitos, Animales } from "./Animales"

console.log(Animales, Caballos, Chanchitos)

const point = new Point(1,2)
//Si queremos acceder a algun objeto del archivo despues de exportar con wildcard, lo que necesitamos para utilizarlo es utilizar el nombre que le asignamos al import y punto para que nos de acceso a todo lo que contiene ese archivo
const grup = new G.default(1, 'Chanchito Feliz')
console.log(PUNTITO)
console.log(G.defaultGroups.users)