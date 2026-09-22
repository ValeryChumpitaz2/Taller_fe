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
      descripcion: 'Café intenso preparado al momento.',
      precio: 8,
      imagen: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80'
    },
    {
      nombre: 'Croissant',
      descripcion: 'Croissant artesanal recién horneado.',
      precio: 7,
      imagen: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80'
    },
    {
      nombre: 'Cheesecake',
      descripcion: 'Cheesecake cremoso con frutos rojos.',
      precio: 12,
      imagen: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80'
    },
    {
      nombre: 'Frappé',
      descripcion: 'Bebida fría de café y chocolate.',
      precio: 11,
      imagen: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80'
    }
  ];


}

