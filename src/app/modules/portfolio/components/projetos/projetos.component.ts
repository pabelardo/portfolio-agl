import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss',
})
export class ProjetosComponent {
  #dialog = inject(MatDialog);

  public projetosArray = signal<IProjects[]>([
    {
      src: 'assets/img/projects/aguarde-em-breve.png',
      alt: 'Imagem de uma logo em breve',
      title: 'Em breve',
      width: '100px',
      height: '90px',
      description:
        '<p>Calma pequeno(a) gafanhoto(a), estamos trabalhando nisso!</p>',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://vidafullstack.com.br',
        },
      ],
    },
    {
      src: 'assets/img/projects/aguarde-em-breve.png',
      alt: 'Imagem de uma logo em breve',
      title: 'Em breve',
      width: '100px',
      height: '90px',
      description:
        '<p>Calma pequeno(a) gafanhoto(a), estamos trabalhando nisso!</p>',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://vidafullstack.com.br',
        },
      ],
    },
    {
      src: 'assets/img/projects/aguarde-em-breve.png',
      alt: 'Imagem de uma logo em breve',
      title: 'Em breve',
      width: '100px',
      height: '90px',
      description:
        '<p>Calma pequeno(a) gafanhoto(a), estamos trabalhando nisso!</p>',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://vidafullstack.com.br',
        },
      ],
    },
    {
      src: 'assets/img/projects/aguarde-em-breve.png',
      alt: 'Imagem de uma logo em breve',
      title: 'Em breve',
      width: '100px',
      height: '90px',
      description:
        '<p>Calma pequeno(a) gafanhoto(a), estamos trabalhando nisso!</p>',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://vidafullstack.com.br',
        },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
