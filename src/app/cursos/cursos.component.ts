import { Component, OnInit } from '@angular/core';
import { CursoServiceService } from './curso-service.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos: string[] = []
  // cursosService: CursoServiceService

  constructor(
    private cursosService: CursoServiceService
  ) {
    // this.cursosService = _cursosService
  }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos()
  }

}
