import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import iziToast from 'izitoast';


@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit{
   services = [
    {
      id: 1,
      title: 'Manutenção e Assistência Técnica',
      icon: 'bi bi-tools'
    },
    {
      id: 2,
      title: 'Gestão de Parques de Terminais TPA',
      icon: 'bi bi-credit-card'
    },
    {
      id: 3,
      title: 'Monitorização e Incidentes de Parques de Terminais',
      icon: 'bi bi-graph-up-arrow'
    },
    {
      id: 4,
      title: 'Configuração e Ativação de Terminais TPA',
      icon: 'bi bi-gear'
    }
  ];
  teamMembers = [
    { name: 'Luciano Gonçalves', position: 'Coordenador de TI', image: 'assets/img/luciano.jpg', description: 'Especialista em sistemas de informação com mais de 15 anos de experiência no setor.' },
    { name: 'Wester Tito', position: 'Desenvolvedor Frontend', image: 'assets/img/wester.jpg', description: 'Especialista em desenvolvimento frontend e design de layouts intuitivos.' },
    { name: 'Pedro Kondo', position: 'Desenvolvedor Backend', image: 'assets/img/pedro.jpg', description: 'Especialista em integração de sistemas e desenvolvimento de APIs.' }
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
    'assets/keve.png',
    'assets/atlantico.png',
    'assets/mdc.png',
    'assets/suge.png',
    'assets/shaintlogo.png'
  ];

  // Propriedades para o formulário
  contactForm: FormGroup;
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

  formData = {
    nome: '',
    email: '',
    empresa: '',
    termos: false
  };

  onSubmit(form: any) {
    if (this.formData.termos) {
      console.log('Formulário enviado:', this.formData);

      iziToast.success({
        title: 'Formulário Enviado',
        message: 'Entraremos em contacto em breve.',
        position: 'topRight'
      });

      // Resetar formulário inteiro
      form.resetForm();
    }
  }



  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      companyName: ['', Validators.required],
      industry: ['', Validators.required],
      companyDescription: [''],
      specificNeeds: [''],
      fullName: ['', Validators.required],
      position: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      agreeTerms: [false, Validators.requiredTrue]
    });
  }

  ngOnInit(): void {
    this.updateProgress();
  }

  // Métodos do formulário
  nextStep(): void {
    if (this.validateCurrentStep()) {
      if (this.currentStep < this.totalSteps) {
        this.currentStep++;
        this.updateProgress();
      }
    }
  }

  prevStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
      this.updateProgress();
    }
  }

  validateCurrentStep(): boolean {
    let isValid = true;

    switch (this.currentStep) {
      case 1:
        if (this.contactForm.get('companyName')?.invalid) {
          this.contactForm.get('companyName')?.markAsTouched();
          isValid = false;
        }
        if (this.contactForm.get('industry')?.invalid) {
          this.contactForm.get('industry')?.markAsTouched();
          isValid = false;
        }
        break;
      case 3:
        if (this.contactForm.get('fullName')?.invalid) {
          this.contactForm.get('fullName')?.markAsTouched();
          isValid = false;
        }
        if (this.contactForm.get('email')?.invalid) {
          this.contactForm.get('email')?.markAsTouched();
          isValid = false;
        }
        break;
    }

    return isValid;
  }

  updateProgress(): void {
    this.progressPercentage = ((this.currentStep - 1) / (this.totalSteps - 1)) * 100;
  }

  onServiceChange(event: any, service: string): void {
    if (event.target.checked) {
      this.selectedServices.push(service);
    } else {
      const index = this.selectedServices.indexOf(service);
      if (index > -1) {
        this.selectedServices.splice(index, 1);
      }
    }
  }

  getIndustryName(value: string): string {
    const industries: { [key: string]: string } = {
      'financeiro': 'Financeiro/Bancário',
      'varejo': 'Varejo',
      'servicos': 'Serviços',
      'outro': 'Outro'
    };
    return industries[value] || value;
  }



  resetForm(): void {
    this.contactForm.reset();
    this.selectedServices = [];
    this.currentStep = 1;
    this.updateProgress();
    this.isSubmitted = false;
  }
}
