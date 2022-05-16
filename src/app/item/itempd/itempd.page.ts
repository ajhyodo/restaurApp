import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-itempd',
  templateUrl: './itempd.page.html',
  styleUrls: ['./itempd.page.scss'],
})
export class ItempdPage implements OnInit {
  public idref: string;
  public detalhe: string;
  public preco: string;
  public imagem: string;
  public titulo: string;
  public subTitulo: string;

  constructor(private activatedRouted: ActivatedRoute) {}

  ngOnInit() {
    this.idref = this.activatedRouted.snapshot.paramMap.get('itemref');
    if (this.idref === 'r01') {
      this.titulo = 'Prato';
      this.subTitulo = 'Batata Chips';
      this.detalhe =
        'Batatas no formato redondo (Chips), saborosas e crocantes.';
      this.preco = 'R$ 15,00';
      this.imagem =
        'https://images.aws.nestle.recipes/resized/92f7fa4ac9e6fb6176446b1595fd51ae_batata-chips-receitas-nestle_1200_600.jpg';
    } else if (this.idref === 'r02') {
      this.titulo = 'Prato';
      this.subTitulo = 'Mandioca Frita';
      this.detalhe = 'Mandioca frita, bem crocante e sem gordura trans.';
      this.preco = 'R$ 12,50';
      this.imagem =
        'https://cdn.panelinha.com.br/receita/964494000000-Mandioca-frita.jpg';
    } else if (this.idref === 'r03') {
      this.titulo = 'Prato';
      this.subTitulo = 'Bife Acebolado';
      this.detalhe =
        'Bife contra-file frito com cebolas, acompanha arroz e feijao.';
      this.preco = 'R$ 31,00';
      this.imagem =
        'https://www.anamariabrogui.com.br/assets/uploads/receitas/fotos/usuario-2077-b65fe4f97c5c133943a8438502f1e2bd_medium.jpg.webp';
    } else if (this.idref === 'r04') {
      this.titulo = 'Prato';
      this.subTitulo = 'Parmegiana de Carne';
      this.detalhe =
        'Parmegiana tradicional com queijo e molho de tomate temperado, acompanha arroz e feijao.';
      this.preco = 'R$ 35,00';
      this.imagem =
        'https://media.gazetadopovo.com.br/bomgourmet/2016/05/parmegiana-cae978d0.jpg';
    } else if (this.idref === 'r05') {
      this.titulo = 'Prato';
      this.subTitulo = 'Feijoada';
      this.detalhe =
        'Feijoada completa com vinagrete, torresmo, colve e farofa. Acompanha arroz e feijao';
      this.preco = 'R$ 38,00';
      this.imagem =
        'https://img.cybercook.com.br/receitas/776/feijoada-840x480.jpeg?q=75';
    } else {
      this.titulo = '   ';
      this.subTitulo = '  ';
      this.detalhe = 'Sem definicao.';
      this.preco = 'R$ 0,00';
      this.imagem = '  ';
    }
  }
}
