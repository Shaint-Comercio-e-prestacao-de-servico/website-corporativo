import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild
} from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements AfterViewInit {
  @ViewChild('footer', { static: true }) footerElement!: ElementRef;

  currentYear: number = new Date().getFullYear();

  ngAfterViewInit(): void {
    gsap.from(this.footerElement.nativeElement, {
      opacity: 0,
      y: 100,
      duration: 1.2,
      ease: 'power3.out',
      delay: 0.2,
      scrollTrigger: {
        trigger: this.footerElement.nativeElement,
        start: 'top 90%',
        toggleActions: 'play none none none'
      }
    });
  }
}
