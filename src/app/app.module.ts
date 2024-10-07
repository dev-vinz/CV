import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgIconsModule } from '@ng-icons/core';
import {
  faBrandDiscord,
  faBrandGithub,
  faBrandInstagram,
  faBrandLinkedinIn,
} from '@ng-icons/font-awesome/brands';
import {
  faSolidBarsStaggered,
  faSolidFilm,
  faSolidGraduationCap,
  faSolidMapPin,
  faSolidMotorcycle,
  faSolidMountain,
  faSolidMusic,
  faSolidPersonSnowboarding,
  faSolidPersonSwimming,
  faSolidX,
} from '@ng-icons/font-awesome/solid';

import { NgxTypedJsModule } from 'ngx-typed-js';

import { AppComponent } from './app.component';
import { TranslocoRootModule } from './transloco-root.module';

import { AboutComponent } from './sections/about/about.component';
import { ContactComponent } from './sections/contact/contact.component';
import { FooterComponent } from './sections/footer/footer.component';
import { HomeComponent } from './sections/home/home.component';
import { NavbarComponent } from './sections/navbar/navbar.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { TrainingComponent } from './sections/training/training.component';

import { SocialComponent } from './sections/home/components/social/social.component';
import { LangSelectorComponent } from './sections/navbar/components/lang-selector/lang-selector.component';
import { TimelineCardComponent } from './sections/training/components/timeline-card/timeline-card.component';

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
    SocialComponent,
    TrainingComponent,
    TimelineCardComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgIconsModule.withIcons({
      faBrandDiscord,
      faBrandGithub,
      faBrandInstagram,
      faBrandLinkedinIn,
      faSolidBarsStaggered,
      faSolidFilm,
      faSolidGraduationCap,
      faSolidMapPin,
      faSolidMotorcycle,
      faSolidMountain,
      faSolidMusic,
      faSolidPersonSnowboarding,
      faSolidPersonSwimming,
      faSolidX,
    }),
    NgxTypedJsModule,
    TranslocoRootModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
