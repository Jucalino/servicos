import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursoServiceService {

  getCursos() {
    return ['Angular', 'SQL', 'React']
  }

  constructor() { }
}
