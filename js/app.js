//Variables
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');

const max = new Date().getFullYear();
const min = max -10

console.log(max)
console.log(min);


//Eventos
document.addEventListener('DOMContentLoaded', () => {
mostrarAutos(); // Muestra los automoviles al cargar

llenarSelect(); //LLena las opciones de años
})

function mostrarAutos(){

    autos.forEach(auto => {

        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
        ${marca} ${modelo} - ${year}  - ${puertas} Puertas - Transimion: ${transmision}  - Precio: ${precio}  - Color: ${color} `;





        //Inserta en el HTML
        resultado.appendChild(autoHTML)

    })
}

//Funciones


//Genera los años del select
function llenarSelect(){
    

    for(let i = max; i>=min; i-- ){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent=i;
        year.appendChild(opcion); //agrega las opciones de año al select
    }

}