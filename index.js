const idPizza = document.getElementById('inputID');
const btnBuscar = document.getElementById('btnBuscar');
const containerCard = document.querySelector('.container__card');
const templateCard = document.querySelector('#templateCard').content;
const fragment = document.createDocumentFragment();


const Pizza = [{
    ID: 1,
    nombre: 'Muzzarella',
    ingradientes: ["Muzzarella", "Salsa de tomate", "Aceituna", "Oregano"],
    precio: 540,
    img: 'https://www.nueva-ciudad.com.ar/advf/imagenes/editadas/5e05008a2355e_800x550.jpg'
},
{
    ID: 2,
    nombre: 'Napolitana',
    ingradientes: ["Muzzarella", "Salsa de tomate", "Tomate", "Jamon"],
    precio: 580,
    img: 'https://www.clarin.com/img/2022/02/02/xqwJySBdj_1256x620__2.jpg#1643806393672'
},
{
    ID: 3,
    nombre: 'Calabresa',
    ingradientes: ["Muzzarella", "Longaniza", "Provolone", "Aceituna"],
    precio: 600,
    img: 'https://www.recetas-argentinas.com/base/stock/Recipe/43-image/43-image_web.jpg'
},
{
    ID: 4,
    nombre: '4 Queso',
    ingradientes: ["Muzzarella", "Roquefort", "Parmesano", "Gruyer"],
    precio: 620,
    img: 'https://www.comedera.com/wp-content/uploads/2022/04/Pizza-cuatro-quesos-shutterstock_1514858234.jpg'
},
{
    ID: 5,
    nombre: 'Panceta',
    ingradientes: ["Muzzarella", "Panceta", "Huevo frito", "Aceituna"],
    precio: 670,
    img: 'https://www.solopizzas.info/wp-content/uploads/2021/01/White-and-Yellow-Simple-Fireworks-Photo-New-Year-Card-1.jpg'
},
{
    ID: 6,
    nombre: 'Jamon crudo',
    ingradientes: ["Muzzarella", "Jamon crudo", "Aceituna negras", "Rucula"],
    precio: 700,
    img: 'https://pizzasargentinas.com/wp-content/uploads/2020/12/rucula-y-jamon-crudo.jpg'
}
]

localStorage.setItem('ListaPizza', JSON.stringify(Pizza));

const limpiar = () => {
    while (containerCard.firstChild) {
        containerCard.removeChild(containerCard.firstChild);
    }
}

btnBuscar.addEventListener('click', () =>{
    limpiar();
    let pizza = idPizza.value;
    const resultadoBusqueda = Pizza.find(el => el.ID == pizza);
    if (resultadoBusqueda){
        templateCard.querySelector('h3').textContent = `${resultadoBusqueda.nombre}`;
        templateCard.querySelector('img').setAttribute('src', `${resultadoBusqueda.img}`);
        templateCard.querySelector('h4').textContent = `$${resultadoBusqueda.precio}`;
        templateCard.querySelector('p').textContent = `Los ingredientes son: ${resultadoBusqueda.ingradientes}`;
        const clone = document.importNode(templateCard, true);
        fragment.appendChild(clone);
        containerCard.appendChild(fragment);
        idPizza.value = '';
    } else alert('No se encontro la pizza');
    
})