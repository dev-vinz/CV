import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ProExperiencesComponent } from './components/pro-experiences/pro-experiences.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { AboutMeCarouselComponent } from './components/about-me-carousel/about-me-carousel.component';
import { SocialButtonComponent } from './components/social-button/social-button.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { TimelineCardComponent } from './components/timeline-card/timeline-card.component';
import { EducationComponent } from './components/education/education.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProExperiencesComponent,
    AboutMeComponent,
    AboutMeCarouselComponent,
    SocialButtonComponent,
    TimelineComponent,
    TimelineCardComponent,
    EducationComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, TranslocoModule],
  exports: [HomeComponent],
})
export class HomeModule {}
