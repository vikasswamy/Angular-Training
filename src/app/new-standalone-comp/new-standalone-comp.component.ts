import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-standalone-comp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-standalone-comp.component.html',
  styleUrls: ['./new-standalone-comp.component.scss']
})
export class NewStandaloneCompComponent {

}
