import { Component, signal } from '@angular/core';
import { IConhecimento } from '../../interface/IConhecimento.interface';

@Component({
  selector: 'app-conhecimento',
  standalone: true,
  imports: [],
  templateUrl: './conhecimento.component.html',
  styleUrl: './conhecimento.component.scss',
})
export class ConhecimentoComponent {
  public arrayConhecimentos = signal<IConhecimento[]>([
    {
      src: 'assets/icons/conhecimento/html5colorful.svg',
      alt: 'Ícone de conhecimento HTML5',
      nome: 'HTML5',
    },
    {
      src: 'assets/icons/conhecimento/css3colorful.svg',
      alt: 'Ícone de conhecimento CSS3',
      nome: 'CSS3',
    },
    {
      src: 'assets/icons/conhecimento/js.svg',
      alt: 'Ícone de conhecimento Javascript',
      nome: 'Javascript',
    },
    {
      src: 'assets/icons/conhecimento/angularv18.svg',
      alt: 'Ícone de conhecimento Angular',
      nome: 'Angular',
    },
    {
      src: 'assets/icons/conhecimento/csharp.svg',
      alt: 'Ícone de conhecimento C#',
      nome: 'C#',
    },
    {
      src: 'assets/icons/conhecimento/netCore.svg',
      alt: 'Ícone de conhecimento Asp.Net Core',
      nome: '.NET Core',
    },
  ]);
}
