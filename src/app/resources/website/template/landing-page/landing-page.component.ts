import { Component, AfterViewInit, ElementRef, HostListener } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements AfterViewInit {

  constructor(private el: ElementRef) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.updateNavbarBackground();
  }

  // garante atualização inicial
  private updateNavbarBackground() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    if (window.scrollY > 50) { // altura a partir da qual muda o fundo
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  ngAfterViewInit(): void {
    // ----------------------------
    // garante atualização inicial
    this.updateNavbarBackground();
    // SLIDESHOW (GSAP timeline)
    // ----------------------------
    const slides: HTMLElement[] = Array.from(this.el.nativeElement.querySelectorAll('.slideshow .slide'));

    if (slides.length) {
      // inicializa invisíveis
      gsap.set(slides, { autoAlpha: 0, scale: 1 });

      let current = 0;

      const nextSlide = () => {
        const prev = current;
        current = (current + 1) % slides.length;

        // fade out e escala do slide atual
        gsap.to(slides[prev], { duration: 0.8, autoAlpha: 0, scale: 0.95 });

        // fade in e escala do próximo slide
        gsap.fromTo(
          slides[current],
          { autoAlpha: 0, scale: 1.05 },
          { duration: 0.8, autoAlpha: 1, scale: 1, ease: 'power2.out' }
        );
      };

      // inicia o primeiro slide
      gsap.set(slides[0], { autoAlpha: 1 });

      // troca de slides a cada 3 segundos
      setInterval(nextSlide, 3000);
    }


    // ----------------------------
    // HERO CONTENT (timeline cinematográfica)
    // ----------------------------
    const tl = gsap.timeline({ delay: 0.4 });

    tl.from('.badge', { y: -30, autoAlpha: 0, duration: 0.9, ease: 'back.out(1.4)' })
      .from('.hero-title', { y: 60, autoAlpha: 0, skewY: 6, duration: 1.4, ease: 'power4.out' }, '-=0.35')
      .from('.hero-subtitle', { y: 30, autoAlpha: 0, duration: 1.2, ease: 'power3.out' }, '-=0.9')
      .from('.btn-hero', { scale: 0.75, autoAlpha: 0, duration: 1.0, ease: 'elastic.out(1, 0.5)', stagger: 0.15 }, '-=0.6');

    // pulso discreto no highlight
    gsap.to('.highlight', { textShadow: '0 0 12px rgba(180,194,231,0.9)', duration: 2.8, repeat: -1, yoyo: true, ease: 'sine.inOut' });

    // hover nos botões
    const buttons = this.el.nativeElement.querySelectorAll('.btn-hero');
    buttons.forEach((btn: HTMLElement) => {
      btn.addEventListener('mouseenter', () => {
        gsap.to(btn, { scale: 1.08, boxShadow: '0 0 22px #B4C2E7', duration: 0.28, ease: 'power2.out' });
      });
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { scale: 1, boxShadow: 'none', duration: 0.28, ease: 'power2.inOut' });
      });
    });
  }
}
