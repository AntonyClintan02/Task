import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { BodyComponent } from './component/body/body.component';
import { TopComponent } from './component/body/top/top.component';
import { PartnersComponent } from './component/body/partners/partners.component';
import { ServicesComponent } from './component/body/services/services.component';
import { WorksComponent } from './component/body/works/works.component';
import { WhyComponent } from './component/body/why/why.component';
import { SayComponent } from './component/body/say/say.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    TopComponent,
    PartnersComponent,
    ServicesComponent,
    WorksComponent,
    WhyComponent,
    SayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
