import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { PaoDeQueijoComponent } from './pages/receitas/pao-de-queijo/pao-de-queijo.component';
import { LasanhaDeBerinjelaComponent } from './pages/receitas/lasanha-de-berinjela/lasanha-de-berinjela.component';
import { BoloDeCanecaComponent } from './pages/receitas/bolo-de-caneca/bolo-de-caneca.component';
import { SorveteCaseiroComponent } from './pages/receitas/sorvete-caseiro/sorvete-caseiro.component';
import { PudimDeLeiteComponent } from './pages/receitas/pudim-de-leite/pudim-de-leite.component';
import { BrigadeiraoGourmetComponent } from './pages/receitas/brigadeirao-gourmet/brigadeirao-gourmet.component';
import { PizzaDeLiquidificadorComponent } from './pages/receitas/pizza-de-liquidificador/pizza-de-liquidificador.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContentComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    PaoDeQueijoComponent,
    LasanhaDeBerinjelaComponent,
    BoloDeCanecaComponent,
    SorveteCaseiroComponent,
    PudimDeLeiteComponent,
    BrigadeiraoGourmetComponent,
    PizzaDeLiquidificadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
