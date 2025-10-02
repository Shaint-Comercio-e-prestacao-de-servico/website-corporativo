import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import iziToast from 'izitoast';
import { ContactForm, ContactService } from '../../core/services/contact.service';


@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {

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

  contacts = [
    {
      icon: 'bi bi-geo-alt',
      title: 'Endereço',
      description: 'Bairro Morro Bento, Avenida 21 de Janeiro'
    },
    {
      icon: 'bi bi-telephone',
      title: 'Telefone',
      description: '+244 975 964 289'
    },
    {
      icon: 'bi bi-envelope',
      title: 'Email',
      description: 'geral@shaint.ao'
    },
    {
      icon: 'bi bi-clock',
      title: 'Horário de Atendimento',
      description: 'Segunda a Sexta, 8h00 - 17h00'
    }
  ];

  currentStep = 1;
  totalSteps = 4;
  progressPercentage = 0;
  selectedServices: string[] = [];
  isSubmitting = false;
  isSubmitted = false;


  // Propriedades existentes do seu conteúdo
  servicesList = [
    { title: 'Manutenção de TPAs', icon: 'fas fa-tools' },
    { title: 'Monitorização', icon: 'fas fa-desktop' },
    { title: 'Ativação', icon: 'fas fa-power-off' },
    { title: 'Suporte Técnico', icon: 'fas fa-headset' }
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

  formData: ContactForm = {
    nome: '',
    email: '',
    empresa: '',
    servico: '',
    termos: false
  };

  // Lista de serviços disponíveis
  servicos:string[] = [
    'Diagnóstico e Reparação',
    'Substituição de Peças',
    'Atualização de Firmware',
    'Consultoria Especializada',
    'Treinamentos Corporativos',
    'Desenvolvimento de Sistemas'
  ];

 
  loading = false;
  successMsg = '';
  errorMsg = '';

   onSubmit(form: NgForm) {
    if (!form.valid) return;

    this.loading = true;
    this.successMsg = '';
    this.errorMsg = '';

    this.contactService.sendContactForm(this.formData).subscribe({
      next: (res) => {
        this.loading = false;
        this.successMsg = '✅ Formulário enviado com sucesso!';
        form.resetForm();
      },
      error: (err) => {
        this.loading = false;
        this.errorMsg = '❌ Ocorreu um erro ao enviar. Tente novamente.';
        console.error(err);
      }
    });
  }

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {

  }


}
