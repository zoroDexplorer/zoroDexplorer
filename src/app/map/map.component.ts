import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  mapSrc: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    const unsafeMapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.6476832313743!2d-80.14629558497986!3d26.169675983458077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d902ca0c684dc1%3A0xb2759ca24e2ce6e6!2sDiscount%20Batteries!5e0!3m2!1sen!2sus!4v1624544945867!5m2!1sen!2sus';
    this.mapSrc = this.sanitizer.bypassSecurityTrustResourceUrl(unsafeMapSrc);
  }

  getDirections() {
    window.open('https://www.google.com/maps/dir/?api=1&destination=Discount+Batteries,26.16982,-80.143804', '_blank');
  }
}