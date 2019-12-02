import { NgModule, PLATFORM_INITIALIZER } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PaoDeQueijoComponent } from './pages/receitas/pao-de-queijo/pao-de-queijo.component';
import { LasanhaDeBerinjelaComponent } from './pages/receitas/lasanha-de-berinjela/lasanha-de-berinjela.component';
import { BoloDeCanecaComponent } from './pages/receitas/bolo-de-caneca/bolo-de-caneca.component';
import { SorveteCaseiroComponent } from './pages/receitas/sorvete-caseiro/sorvete-caseiro.component';
import { PudimDeLeiteComponent } from './pages/receitas/pudim-de-leite/pudim-de-leite.component';
import { BrigadeiraoGourmetComponent } from './pages/receitas/brigadeirao-gourmet/brigadeirao-gourmet.component';
import { PizzaDeLiquidificadorComponent } from './pages/receitas/pizza-de-liquidificador/pizza-de-liquidificador.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pages/home', component: HomeComponent },
  { path: 'pages/receitas/pao-de-queijo', component: PaoDeQueijoComponent },
  { path: 'pages/receitas/lasanha-de-berinjela', component: LasanhaDeBerinjelaComponent },
  { path: 'pages/receitas/bolo-de-caneca', component: BoloDeCanecaComponent },
  { path: 'pages/receitas/pizza-de-liquidificador', component: PizzaDeLiquidificadorComponent },
  { path: 'pages/receitas/sorvete-caseiro', component: SorveteCaseiroComponent },
  { path: 'pages/receitas/pudim-de-leite', component: PudimDeLeiteComponent },
  { path: 'pages/receitas/brigadeirao-gourmet', component: BrigadeiraoGourmetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
