import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-conteudo-homme',
  templateUrl: './conteudo-homme.component.html',
  styleUrls: ['./conteudo-homme.component.css']
})
export class ConteudoHommeComponent {
  services = [
    {
      title: 'Manutenção e Assistência Técnica',
      icon: 'bi bi-tools'
    },
    {
      title: 'Gestão de Parques de Terminais TPA',
      icon: 'bi bi-credit-card'
    },
    {
      title: 'Monitorização e Incidentes de Parques de Terminais',
      icon: 'bi bi-graph-up-arrow'
    },
    {
      title: 'Configuração e Ativação de Terminais TPA',
      icon: 'bi bi-gear'
    }
  ];
  teamMembers = [
            { name: 'Carlos Mendes', position: 'Diretor Técnico', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80', description: 'Especialista em sistemas de pagamento com mais de 15 anos de experiência no setor.' },
            { name: 'Ana Silva', position: 'Gerente de Projetos', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80', description: 'Gerenciou mais de 50 implementações de terminais de pagamento em grandes empresas.' },
            { name: 'Miguel Santos', position: 'Desenvolvedor Sênior', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80', description: 'Especialista em integração de sistemas e desenvolvimento de APIs para serviços financeiros.' }
        ];
        

  expertise = [
    {
      title: 'Diagnóstico e Reparação',
      description: 'Identificamos e corrigimos falhas em TPAs de forma eficiente, garantindo o seu funcionamento contínuo.',
      icon: 'bi bi-bug'
    },
    {
      title: 'Substituição de Peças',
      description: 'Trocamos peças danificadas por componentes de alta qualidade para restaurar a performance ideal.',
      icon: 'bi bi-cpu'
    },
    {
      title: 'Atualização de Firmware',
      description: 'Mantemos os terminais atualizados com as versões mais seguras e compatíveis.',
      icon: 'bi bi-cloud-arrow-up'
    },
    {
      title: 'Consultoria Especializada',
      description: 'Aconselhamento sobre regulamentações, sistemas de pagamento e segurança em TPAs.',
      icon: 'bi bi-person-check'
    },
    {
      title: 'Treinamentos Corporativos',
      description: 'Capacitação em gestão de terminais e segurança no uso dos dispositivos.',
      icon: 'bi bi-mortarboard'
    },
    {
      title: 'Desenvolvimento de Sistemas',
      description: 'Criação de soluções digitais para TPA´s, desde aplicativos web até sistemas corporativos completos.',
      icon: 'bi bi-code-slash'
    }
  ];

  portfolio = [
    { title: 'Solução para Bancos', image: 'assets/img/bank-solution.jpg' },
    { title: 'TPAs Empresariais', image: 'assets/img/tpa-business.jpg' },
    { title: 'Monitoramento em Tempo Real', image: 'assets/img/monitoring.jpg' },
    { title: 'Consultoria em Pagamentos Digitais', image: 'assets/img/consulting.jpg' }
  ];

  process = [
    {
      icon: 'bi bi-search',
      title: 'Diagnóstico Técnico',
      description: 'Analisamos detalhadamente o estado dos terminais para propor soluções adequadas.'
    },
    {
      icon: 'bi bi-tools',
      title: 'Implementação de Soluções',
      description: 'Executamos serviços de reparação, atualização ou substituição de forma eficiente.'
    },
    {
      icon: 'bi bi-mortarboard',
      title: 'Capacitação & Consultoria',
      description: 'Treinamos as equipas e fornecemos orientações sobre o uso e a regulamentação dos TPAs.'
    },
    {
      icon: 'bi bi-headset',
      title: 'Suporte e Monitorização',
      description: 'Acompanhamos os terminais com assistência contínua e gestão proativa de incidentes.'
    }

  ];

  clientLogos = [
    'assets/shaintlogo.png'
  ];

  ngAfterViewInit() {
    // What We Do - Fade + Slide from Top
    gsap.from('#what-we-do', {
      opacity: 0,
      y: -50,
      duration: 1,
      scrollTrigger: {
        trigger: '#what-we-do',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });

    // Areas of Expertise - Fade + Scale Up
    gsap.from('#expertise', {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      scrollTrigger: {
        trigger: '#expertise',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });

    // Portfolio - Fade + Slide from Left
    gsap.from('#portfolio', {
      opacity: 0,
      x: -100,
      duration: 1,
      scrollTrigger: {
        trigger: '#portfolio',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });

    // Our Process - Fade + Slide from Bottom
    gsap.from('#process', {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: '#process',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });

    // Clients - Fade + Rotate In
    gsap.from('#clients', {
      opacity: 0,
      rotateY: 90,
      duration: 1,
      transformOrigin: 'left center',
      scrollTrigger: {
        trigger: '#clients',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
  }

}
