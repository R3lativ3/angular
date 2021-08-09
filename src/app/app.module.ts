import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component'
import { HeroesModule } from './heroes/heroes.module';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { DbzModule } from './dbz/dbz.module';
import { AgregarComponent } from './agregar/agregar.component';
@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    UsuariosComponent,
    AgregarComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    HttpClientModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
