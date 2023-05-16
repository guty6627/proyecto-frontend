import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componenta/header/header.component';
import { LogoapComponent } from './componenta/logoap/logoap.component';
import { RedsocialComponent } from './componenta/redsocial/redsocial.component';
import { BannerComponent } from './componenta/banner/banner.component';
import { DatosComponent } from './componenta/datos/datos.component';
import { ExperienciaComponent } from './componenta/experiencia/experiencia.component';
import { EducacionComponent } from './componenta/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { GraficoComponent } from './componenta/grafico/grafico.component';
import { ProyectoComponent } from './componenta/proyecto/proyecto.component';
import { FooterComponent } from './componenta/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoapComponent,
    RedsocialComponent,
    BannerComponent,
    DatosComponent,
    ExperienciaComponent,
    EducacionComponent,
    GraficoComponent,
    ProyectoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
