import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes:string[]=['Luis','Miguel','Castillo','Olvera'];
  borrado:string='';

  borrarHeroe(){
    this.borrado=this.heroes.shift()||'';
    //console.log(borrado);
  }


}
