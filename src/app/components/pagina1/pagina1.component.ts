import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component {
  constructor(private router: Router){}

  navegar(){
    this.router.navigate(['/pagina2'])
  }
  navegar1(){
    this.router.navigate(['/pagina2'])
  }
  navegar2(){
    this.router.navigate(['/pagina2'])
  }
  navegar3(){
    this.router.navigate(['/pagina2'])
  }
}
