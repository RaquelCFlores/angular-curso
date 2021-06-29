import { Component } from "@angular/core";



@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})
export class HeroeComponent {
    //propiedades y métodos 
    nombre:string = 'Iroman';
    edad:number = 45;

    get nombreCapitalizado():string {  //Este no es un método es un geter
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string{
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre():void{
        this.nombre = 'Spiderman';
    }

    cambiarEdad():void{
        this.edad = 30;
    }


}