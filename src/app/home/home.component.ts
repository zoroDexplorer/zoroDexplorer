import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  mapSrc: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer, private router: Router) {
    const unsafeMapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.6476832313743!2d-80.14629558497986!3d26.169675983458077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d902ca0c684dc1%3A0xb2759ca24e2ce6e6!2sDiscount%20Batteries!5e0!3m2!1sen!2sus!4v1624544945867!5m2!1sen!2sus';
    this.mapSrc = this.sanitizer.bypassSecurityTrustResourceUrl(unsafeMapSrc);
  }

  getDirections() {
    window.open('https://www.google.com/maps/place/Discount+Batteries/@26.169406,-80.1444506,19z/data=!4m16!1m9!3m8!1s0x88d902ca0c684dc1:0xb2759ca24e2ce6e6!2sDiscount+Batteries!8m2!3d26.16982!4d-80.143804!9m1!1b1!16s%2Fg%2F11bwpnfmyc!3m5!1s0x88d902ca0c684dc1:0xb2759ca24e2ce6e6!8m2!3d26.16982!4d-80.143804!16s%2Fg%2F11bwpnfmyc?entry=ttu', '_blank');
  }
   categories = [
    { name: 'Accessories', icon: 'fa-solid fa-screwdriver-wrench ', route: '/bike' },
        { name: 'Car', icon: 'fas fa-car', route: '/car' },
    { name: 'Inverter', icon: 'fas fa-blender', route: '/inverter' },
    { name: 'Others', icon: 'fas fa-ellipsis-h', route: '/others' },
  ];

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
