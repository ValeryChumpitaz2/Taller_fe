import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  standalone: false,
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

productos = [
  {
    nombre: 'Café Americano',
    descripcion: 'Café filtrado con agua caliente, de sabor suave y aroma intenso.',
    precio: 2.50,
    imagen: 'https://i.blogs.es/139e0f/cafe-americano2/840_560.jpeg'
  },

  { 
    nombre: 'Croissant',
    descripcion: 'Delicioso croissant recién horneado, con mantequilla y un toque de dulzura.',
    precio: 3.00,
    imagen: 'https://www.recetasderechupete.com/wp-content/uploads/2019/01/croissant-casero.jpg'
  },

  { 
    nombre: 'Té Verde',
    descripcion: 'Té verde de alta calidad, con propiedades antioxidantes y un sabor refrescante.',
    precio: 2.00,
    imagen: 'https://www.verywellfit.com/thmb/0g1j6k5J7X8Z3z2n4v9x5y5y5yM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/green-tea-56a8f3e53df78cf772a1b6d2.jpg'
  }

];
}
