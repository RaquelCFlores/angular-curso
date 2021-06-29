import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})

export class ListadoComponent{
  //propiedades y métodos
  heroes:string[] = ["Spiderman", "Iroman", "Hulk", "Thor"];
  heroeBorrado:string = ""; //Podemos poner string || undefined pero no es lo recomendable

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || "";  //Forma de resolver cuando se devuelve undefined
  }

}
