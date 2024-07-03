import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'battery_discount';
  isLoading: boolean = true;

  ngOnInit() {
    this.simulateLoading();
  }

  simulateLoading() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000); // Simulates 3 seconds of loading time
  }
}
