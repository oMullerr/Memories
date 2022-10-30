import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css'],
})
export class PensamentoComponent implements OnInit {
  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'conteudo 1',
    autoria: 'autor 1',
    modelo: 'modelo1',
    favorito: false,
  };

  @Input() listaFavoritos: Pensamento[] = [];

  constructor(private service: PensamentoService) {}

  ngOnInit(): void {}

  public larguraPensamento() {
    if (this.pensamento.conteudo.length > 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

  public mudarIconeFavorito() {
    if (this.pensamento.favorito == false) {
      return 'inativo';
    }
    return 'ativo';
  }

  public atualizarFavoritos() {
    this.service.mudarFavorito(this.pensamento).subscribe(() => {
      this.listaFavoritos.splice(this.listaFavoritos.indexOf(this.pensamento), 1);
    });
  }
}
