import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgIconsModule } from '@ng-icons/core';
import { faSolidBarsStaggered, faSolidX } from '@ng-icons/font-awesome/solid';

import { AppComponent } from './app.component';
import { TranslocoRootModule } from './transloco-root.module';

import { AboutComponent } from './sections/about/about.component';
import { ContactComponent } from './sections/contact/contact.component';
import { FooterComponent } from './sections/footer/footer.component';
import { HomeComponent } from './sections/home/home.component';
import { NavbarComponent } from './sections/navbar/navbar.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { TrainingComponent } from './sections/training/training.component';

import { LangSelectorComponent } from './sections/navbar/components/lang-selector/lang-selector.component';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    LangSelectorComponent,
    NavbarComponent,
    ProjectsComponent,
    TrainingComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgIconsModule.withIcons({ faSolidBarsStaggered, faSolidX }),
    TranslocoRootModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
