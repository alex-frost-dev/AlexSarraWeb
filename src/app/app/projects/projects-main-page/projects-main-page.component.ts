import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projects-main-page',
  templateUrl: './projects-main-page.component.html',
  styleUrls: ['./projects-main-page.component.css'],
  standalone: false
})
export class ProjectsMainPageComponent {
  constructor(private translate: TranslateService) {
    // Cambia el idioma activo
    this.translate.use('es');
    this.mostrarBienvenida();
  }
  mostrarBienvenida() {
    this.translate.get('HOME.WELCOME').subscribe((texto: string) => {
      alert(texto);
    });
    this.translate.get(['HELLO', 'WELCOME']).subscribe((res: any) => {
      console.log(res.HELLO);
      console.log(res.WELCOME);
    });
  }
}
