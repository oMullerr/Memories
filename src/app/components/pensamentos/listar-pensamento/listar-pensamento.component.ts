import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos: Pensamento[] = [];

  paginaAtual: number = 1;
  haMaisPensamento: boolean = true;
  filtro: string = '';
  favoritos: boolean = false;

  constructor(private service: PensamentoService) {}

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    });
  }

  carregarMaisPensamentos(): void {
    this.service.listar(++this.paginaAtual, this.filtro, this.favoritos).subscribe(listaPensamentos => {
      this.listaPensamentos.push(...listaPensamentos);
      if(!listaPensamentos.length) {
        this.haMaisPensamento = false;
      }
    })
  }

  pesquisarPensamentos(): void {
    this.paginaAtual = 1;
    this.haMaisPensamento = true;

    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe(listaPensamentos => {
      this.listaPensamentos = listaPensamentos;
    });
    }

    public listarFavoritos(): void {
      this.favoritos = true;
      this.haMaisPensamento = true;
      this.paginaAtual = 1;
      this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe(listaPensamentosFavoritos => {
        this.listaPensamentos = listaPensamentosFavoritos;
      });
    }

}
