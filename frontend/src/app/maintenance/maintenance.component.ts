import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-manteinance',
  imports: [TranslatePipe],
  templateUrl: './maintenance.component.html',
  styleUrl: './maintenance.component.css',
  standalone: true,
})
export class MaintenanceComponent {
  jsonPrefix: string = 'maintenance';
}
