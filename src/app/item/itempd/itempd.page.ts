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
    } else if (this.idref === 'l01') {
      this.titulo = 'Lanche';
      this.subTitulo = 'X-Salada';
      this.detalhe =
        'Lanche X-Salada tradicional com hamburguer artesanal e maionese especial da casa';
      this.preco = 'R$ 16,00';
      this.imagem =
        'https://assets.unileversolutions.com/recipes-v2/106684.jpg?imwidth=1600';
    } else if (this.idref === 'l02') {
      this.titulo = 'Lanche';
      this.subTitulo = 'X-Egg';
      this.detalhe =
        'Lanche X-Egg tradicional com ovo estalado, hamburguer artesanal e maionese especial da casa';
      this.preco = 'R$ 16,00';
      this.imagem =
        'https://www.sorteiefb.com.br/images/promocoes/603071.900x350.jpg';
    } else if (this.idref === 'l03') {
      this.titulo = 'Lanche';
      this.subTitulo = 'Lanche Americano';
      this.detalhe =
        'Lanche Americano com presunto, queijo mussarela, alface, tomate e pao frances.';
      this.preco = 'R$ 13,00';
      this.imagem =
        'https://loja.barracadoze.com.br/wp-content/uploads/sites/5/2020/10/lanche-americano-600x374.jpg';
    } else if (this.idref === 'l04') {
      this.titulo = 'Lanche';
      this.subTitulo = 'X-Churrasco';
      this.detalhe =
        'Lanche X-Churrasco com queijo, contra-file bem macio e pao frances.';
      this.preco = 'R$ 18,00';
      this.imagem =
        'http://3.bp.blogspot.com/-A6amxUUJ9wM/VGe4dOmrBgI/AAAAAAAADHM/Nawz6ZIJBEk/s1600/xchurrasco.jpg';
    } else if (this.idref === 'l05') {
      this.titulo = 'Lanche';
      this.subTitulo = 'Lanche Natural';
      this.detalhe =
        'Lanche Natural com peito de peru defumado, pao frances, alface e tomate.';
      this.preco = 'R$ 15,00';
      this.imagem =
        'https://receitatodahora.com.br/wp-content/uploads/2015/10/sanduiche-natural-para-vender.jpg';
    } else if (this.idref === 's01') {
      this.titulo = 'Sobremesa';
      this.subTitulo = 'Torta de Morango';
      this.detalhe =
        'Pedaco de torta de morango com chantili, doce de leite e massa crocante.';
      this.preco = 'R$ 11,00';
      this.imagem =
        'https://www.receitas-sem-fronteiras.com/media/torta-de-morango-4_crop.jpg/rh/torta-de-morango.jpg';
    } else if (this.idref === 's02') {
      this.titulo = 'Sobremesa';
      this.subTitulo = 'Banoffe de Banana';
      this.detalhe =
        'Pedaco de tradicional Banoffe de Banana feito com muito capricho.';
      this.preco = 'R$ 11,00';
      this.imagem =
        'https://www.juicysantos.com.br/wp-content/uploads/2019/12/la_banoffeeria-3-630x473.jpg';
    } else if (this.idref === 's03') {
      this.titulo = 'Sobremesa';
      this.subTitulo = 'Pudim de Leite';
      this.detalhe =
        'Pedaco de Pudim de Leite tradicional com cobertura de calda de caramelo.';
      this.preco = 'R$ 10,50';
      this.imagem =
        'https://amoradoceria.com.br/wp-content/uploads/2022/03/receita-pudim-simples-de-leite-500x500.jpg';
    } else if (this.idref === 's04') {
      this.titulo = 'Sobremesa';
      this.subTitulo = 'Salada de Frutas';
      this.detalhe =
        'Salada de frutas de epoca cortadas em pedacos regado com suco de laranja.';
      this.preco = 'R$ 13,00';
      this.imagem =
        'https://img.imageboss.me/consul/cdn/animation:true/wp-content/uploads/2021/01/receitas-de-salada-de-fruta-simples.jpg';
    } else if (this.idref === 's05') {
      this.titulo = 'Sobremesa';
      this.subTitulo = 'Creme de Papaia';
      this.detalhe =
        'Sorvete de creme batido com mamao maduro e finalizado com licor de creme de cassis.';
      this.preco = 'R$ 15,00';
      this.imagem =
        'https://static.clubedaanamariabraga.com.br/wp-content/uploads/2017/06/creme-de-papaia-com-cassis-14140.jpg';
    } else if (this.idref === 'b01') {
      this.titulo = 'Bebidas';
      this.subTitulo = 'Coca-cola 350ml';
      this.detalhe = 'Coca-cola de 350 ml em lata.';
      this.preco = 'R$ 5,00';
      this.imagem =
        'https://pastapizza.com.br/wp-content/uploads/2021/09/Lata-Coca-Cola.jpg';
    } else if (this.idref === 'b02') {
      this.titulo = 'Bebidas';
      this.subTitulo = 'Garrafa de agua';
      this.detalhe = 'Garrafa de agua sem gas de 500ml.';
      this.preco = 'R$ 2,00';
      this.imagem =
        'https://www.garciasupermercados.com.br/wp-content/uploads/2020/11/gua_mineral_sem_g_s_crystal_500ml.jpg';
    } else if (this.idref === 'b03') {
      this.titulo = 'Bebidas';
      this.subTitulo = 'Cerveja Brahma';
      this.detalhe = 'Lata de cerveja Brahma de 350ml.';
      this.preco = 'R$ 3,00';
      this.imagem =
        'https://emporiovillaborghese.com.br/parse/files/emporio/70fb4a460bf3c82c377c850ce831bd77_image.jpg';
    } else if (this.idref === 'b04') {
      this.titulo = 'Bebidas';
      this.subTitulo = 'Cerveja Heineken';
      this.detalhe = 'Lata de cerveja Heineken de 350ml.';
      this.preco = 'R$ 4,00';
      this.imagem =
        'https://static.paodeacucar.com/img/uploads/1/623/17634623.png';
    } else if (this.idref === 'b05') {
      this.titulo = 'Bebidas';
      this.subTitulo = 'Suco de Laranja';
      this.detalhe = 'Suco de Laranja de 1 LT.';
      this.preco = 'R$ 10,00';
      this.imagem =
        'https://araujo.vteximg.com.br/arquivos/ids/4049055-1000-1000/07896931614170.jpg?v=637444358927070000';
    } else {
      this.titulo = '   ';
      this.subTitulo = '  ';
      this.detalhe = 'Sem definicao.';
      this.preco = 'R$ 0,00';
      this.imagem = '  ';
    }
  }
}
