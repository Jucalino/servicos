import { Component, OnInit } from '@angular/core';
import { CursoServiceService } from '../cursos/curso-service.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.scss']
})
export class CriarCursoComponent implements OnInit {

  cursos: string[] = []

  constructor(private cursosService: CursoServiceService) { }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos()
  }

}
