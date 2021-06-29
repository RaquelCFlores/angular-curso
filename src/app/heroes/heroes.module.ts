import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations: [ //Lo que quiero que sea visible dentro de este modulo
        HeroeComponent,
        ListadoComponent
    ],
    exports: [  //Lo que quiero que se vea fuera del módulo
        ListadoComponent
    ],
    imports: [  // Van sólo módulos
        CommonModule 
    ]
})
export class HeroesModule {}