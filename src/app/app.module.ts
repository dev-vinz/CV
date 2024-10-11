import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
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
  faSolidAddressCard,
  faSolidArrowUpRightFromSquare,
  faSolidBarsStaggered,
  faSolidBinoculars,
  faSolidBrain,
  faSolidBullseye,
  faSolidCakeCandles,
  faSolidFlag,
  faSolidGraduationCap,
  faSolidHandshake,
  faSolidHouseChimney,
  faSolidLaptopCode,
  faSolidMapPin,
  faSolidMotorcycle,
  faSolidMountain,
  faSolidMusic,
  faSolidPersonSnowboarding,
  faSolidPersonSwimming,
  faSolidUserSecret,
  faSolidUsersRays,
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

import { BirthdayBallonsComponent } from './animations/birthday-ballons/birthday-ballons.component';

import { SocialComponent } from './sections/home/components/social/social.component';
import { LangSelectorComponent } from './sections/navbar/components/lang-selector/lang-selector.component';
import { ProjectCardComponent } from './sections/projects/components/project-card/project-card.component';
import { ProjectModalComponent } from './sections/projects/components/project-modal/project-modal.component';
import { TimelineCardComponent } from './sections/training/components/timeline-card/timeline-card.component';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    BirthdayBallonsComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    LangSelectorComponent,
    NavbarComponent,
    ProjectCardComponent,
    ProjectModalComponent,
    ProjectsComponent,
    SocialComponent,
    TimelineCardComponent,
    TrainingComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgbModule,
    NgIconsModule.withIcons({
      faBrandDiscord,
      faBrandGithub,
      faBrandInstagram,
      faBrandLinkedinIn,
      faSolidAddressCard,
      faSolidArrowUpRightFromSquare,
      faSolidBarsStaggered,
      faSolidBinoculars,
      faSolidBullseye,
      faSolidBrain,
      faSolidCakeCandles,
      faSolidFlag,
      faSolidGraduationCap,
      faSolidHandshake,
      faSolidHouseChimney,
      faSolidLaptopCode,
      faSolidMapPin,
      faSolidMotorcycle,
      faSolidMountain,
      faSolidMusic,
      faSolidPersonSnowboarding,
      faSolidPersonSwimming,
      faSolidUserSecret,
      faSolidUsersRays,
      faSolidX,
    }),
    NgxTypedJsModule,
    ReactiveFormsModule,
    TranslocoRootModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
