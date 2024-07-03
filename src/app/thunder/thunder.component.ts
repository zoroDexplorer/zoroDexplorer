import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-thunder',
  templateUrl: './thunder.component.html',
  styleUrls: ['./thunder.component.css']
})
export class ThunderComponent {
  @Input() isLoading: boolean = true;
}
