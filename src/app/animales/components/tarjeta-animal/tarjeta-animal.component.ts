import { Component } from '@angular/core';

@Component({
  selector: 'tarjeta-animal',
  templateUrl: './tarjeta-animal.component.html',
  styleUrls: ['./tarjeta-animal.component.css']
})
export class TarjetaAnimalComponent {
  public gallinasBD: any[] | undefined;

  ngOnInit() {
    this.gallinasBD = [
      {
        src: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg',
        tipo: 'Gallina',
        color: 'Cafe',
        informacion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas'
      },
      {
        src: 'https://primefaces.org/cdn/primeng/images/galleria/galleria2.jpg',
        tipo: 'Gallo',
        color: 'negro',
        informacion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas'
      },
      {
        src: 'https://primefaces.org/cdn/primeng/images/galleria/galleria3.jpg',
        tipo: 'Gallina',
        color: 'negro',
        informacion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas'
      },
      {
        src: 'https://primefaces.org/cdn/primeng/images/galleria/galleria4.jpg',
        tipo: 'Gallina',
        color: 'blanca',
        informacion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas'
      },
      {
        src: 'https://primefaces.org/cdn/primeng/images/galleria/galleria5.jpg',
        tipo: 'Gallina',
        color: 'gris',
        informacion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas'
      },
      {
        src: 'https://primefaces.org/cdn/primeng/images/galleria/galleria6.jpg',
        tipo: 'Gallo',
        color: 'blanco',
        informacion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas'
      },
      {
        src: 'https://primefaces.org/cdn/primeng/images/galleria/galleria7.jpg',
        tipo: 'Gallo',
        color: 'gris',
        informacion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas'
      },
      {
        src: 'https://primefaces.org/cdn/primeng/images/galleria/galleria8.jpg',
        tipo: 'Gallo',
        color: 'Cafe',
        informacion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas'
      },
      {
        src: 'https://primefaces.org/cdn/primeng/images/galleria/galleria9.jpg',
        tipo: 'Gallo',
        color: 'Cenizo',
        informacion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas'
      },
      {
        src: 'https://primefaces.org/cdn/primeng/images/galleria/galleria10.jpg',
        tipo: 'Gallina',
        color: 'Pinta',
        informacion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas'
      },
      {
        src: 'https://primefaces.org/cdn/primeng/images/galleria/galleria11.jpg',
        tipo: 'Gallo',
        color: 'Cafe',
        informacion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas'
      },
      {
        src: 'https://primefaces.org/cdn/primeng/images/galleria/galleria12.jpg',
        tipo: 'Gallina',
        color: 'Colorada',
        informacion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas'
      },
      {
        src: 'https://primefaces.org/cdn/primeng/images/galleria/galleria13.jpg',
        tipo: 'Gallo',
        color: 'negro',
        informacion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas'
      },
      {
        src: 'https://primefaces.org/cdn/primeng/images/galleria/galleria14.jpg',
        tipo: 'Gallina',
        color: 'blanca',
        informacion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas'
      },
      {
        src: 'https://primefaces.org/cdn/primeng/images/galleria/galleria15.jpg',
        tipo: 'Gallina',
        color: 'ceniza',
        informacion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas'
      }
    ]
  }

}
