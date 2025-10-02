import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import iziToast from 'izitoast';
import { ContactForm, ContactService } from '../../core/services/contact.service';


@Component({
  selector: 'app-form-contactos',
  templateUrl: './form-contactos.component.html',
  styleUrls: ['./form-contactos.component.css']
})
export class FormContactosComponent {

  formData: ContactForm = {
    nome: '',
    email: '',
    empresa: '',
    servico: '',
    termos: false
  };

  // Lista de serviços disponíveis
  servicos: string[] = [
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

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {
    if (!form.valid) return;

    this.loading = true;
    this.successMsg = '';
    this.errorMsg = '';

    this.contactService.sendContactForm(this.formData).subscribe({
      next: (res) => {
        this.loading = false;
        iziToast.success({
          title: 'Sucesso',
          message: 'Email recebido, brevemente entraremos em contacto.',
          position: 'topRight'
        });
        form.resetForm();
      },
      error: (err) => {
        this.loading = false;
        iziToast.warning({
          title: 'Error',
          message: 'Erro interno, brevemente resolveremos.',
          position: 'topRight'
        });
        console.error(err);
      }
    });
  }

}
