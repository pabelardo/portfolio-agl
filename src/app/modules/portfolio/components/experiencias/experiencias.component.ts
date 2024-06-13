import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrl: './experiencias.component.scss',
  standalone: true,
  imports: [],
})
export class ExperienciasComponent {
  public experienciasArray = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Mid Fullstack Developer',
        p: 'Wipro | jun/2022 - Presente',
      },
      text: '<p>Desde junho de 2022, atuo como Analista de Sistema na Wipro, destacando-me nas áreas Front-end, utilizando Html5, Css3, Javascript, TypeScript, Angular, Angular Material, Razor Pages e Back-end, o c# com ASP NET Framework e ASP NET Core 3.0 e superiores (dependendo do projeto).</p> <p>Além disso, minha experiência abrange a integração com Git, Jira e Scrum. Atualmente, enfrento o desafio significativo de contribuir para o desenvolvimento de sistemas e de realizar manutenções em sites e automações sustentadas no banco Itaú, juntamente com anaslistas de negócios para implementar a ferramenta desenvolvida que deve estar em conformidade com os marcos regulatórios.</p> <p>Destaco também minhas contribuições para a qualidade do software, introduzindo práticas de teste e validação de código, aumentando a qualidade geral do software da empresa.</p>',
    },
    {
      summary: {
        strong: 'Mid Fullstack Developer',
        p: 'InnoLevels | abril/2022 – junho/2022',
      },
      text: '<p>Durante o meu curto período na InnoLevels, atuei como Analista de Sistema fullstack, atuando no desenvolvimento de sistemas web para setores administrativos e departamento pessoal.</p> <p>Minhas responsabilidades no front-end incluíram o uso de Bootstrap, Jquery, HTML, CSS, Angular, enquanto no back-end, trabalhei com ASP.NET Core 3.0 (Web API RESTFul, MVC) e SQL Server.</p>',
    },
    {
      summary: {
        strong: 'Junior Backend Developer',
        p: 'Tasken | agosto/2019 – março/2022',
      },
      text: '<p>Em minha jornada como desenvolvedor backend na Tasken, tive a oportunidade de trabalhar para várias empresas de cobrança.</p> <p>Por meio de projetos cuidadosamente elaborados, explorei o universo de backend e um pouco de frontend, utilizando c# com asp net framework 4.8 e asp net core 3.0 (Web API RESTFul, Windows Services), SQL Server, GIT, Delphi, Azure, Bootstrap, Jquery, HTML, CSS.</p> <p>Além disso, fui responsável por desenvolver e manter sistemas de cobrança e integrar sistemas de cobrança com sistemas de clientes',
    },
  ]);
}
