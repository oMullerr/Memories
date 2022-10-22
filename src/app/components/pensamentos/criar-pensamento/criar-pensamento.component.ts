import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent implements OnInit {
  pensamento = {
    id: '1',
    conteudo: 'Penso, logo existo',
    autoria: 'Descartes',
    modelo: 'modelo1',
  };

  constructor() {}

  ngOnInit(): void {}

  public criaPensamento(): void {
    alert('Pensamento criado com sucesso!');
  }
}
