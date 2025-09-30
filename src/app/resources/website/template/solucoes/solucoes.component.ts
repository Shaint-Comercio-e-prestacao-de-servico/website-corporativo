import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';

@Component({
  selector: 'app-solucoes',
  templateUrl: './solucoes.component.html',
  styleUrls: ['./solucoes.component.css']
})
export class SolucoesComponent implements OnInit, OnDestroy  {
 produtos = [
    { title: 'Produto 1' },
    { title: 'Produto 2' },
    { title: 'Produto 3' },
    { title: 'Produto 4' },
    { title: 'Produto 5' },
    { title: 'Produto 6' },
    { title: 'Produto 7' },
    { title: 'Produto 8' }
  ];

  currentIndex = 0;
  itemWidth = 0;
  interval: any;

  ngOnInit(): void {
    this.setItemWidth();
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  @HostListener('window:resize')
  onResize() {
    this.setItemWidth();
  }

  setItemWidth() {
    this.itemWidth = window.innerWidth / 4; // 4 itens sempre visíveis
  }

  startAutoSlide() {
    this.interval = setInterval(() => {
      if (this.currentIndex < this.produtos.length - 4) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0; // volta ao início
      }
    }, 2500); // 2.5s por slide
  }


}
