import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-conteudo-home',
  templateUrl: './conteudo-home.component.html',
  styleUrls: ['./conteudo-home.component.css']
})
export class ConteudoHomeComponent {
  ngAfterViewInit(): void {
    // HEADER anima de cima para baixo
    gsap.from("#header", {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power4.out"
    });

    // HERO fade + scale
    gsap.from("#hero", {
      opacity: 0,
      scale: 0.9,
      duration: 1.2,
      delay: 0.5,
      ease: "power3.out"
    });

    // ABOUT fade left
    gsap.from("#about", {
      scrollTrigger: "#about",
      x: -150,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    // SERVICES com stagger (um por um)
    gsap.from("#services .card", {
      scrollTrigger: "#services",
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });

    // SOCIAL PROOF zoom in
    gsap.from("#social", {
      scrollTrigger: "#social",
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: "back.out(1.7)"
    });

    // EXTRAS fade right
    gsap.from("#extras", {
      scrollTrigger: "#extras",
      x: 150,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    // FOOTER sobe de baixo
    gsap.from("#footer", {
      scrollTrigger: "#footer",
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out"
    });
  }
}
