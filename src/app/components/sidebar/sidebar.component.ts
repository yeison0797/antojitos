import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private router: Router){}
  navegar(){
    this.router.navigate(['/productos'])
  }
  navegar1(){
    this.router.navigate(['/users'])
  }
  navegar2(){
    this.router.navigate(['/ventas'])
  }
  navegar3(){
    this.router.navigate(['/pagina2'])
  }
}
