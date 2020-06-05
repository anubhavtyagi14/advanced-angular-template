import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // @HostListener('click', ['$event'])
  // changeBackground(): void {
  //   this.renderer.setStyle(this.elmenetRef.nativeElement, 'background', 'skyblue');
  // }
}
