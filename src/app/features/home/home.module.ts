import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { EducationTimelineComponent } from './components/education-timeline/education-timeline.component';
import { ProExperiencesComponent } from './components/pro-experiences/pro-experiences.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { AboutMeCarouselComponent } from './components/about-me-carousel/about-me-carousel.component';
import { SocialButtonComponent } from './components/social-button/social-button.component';

@NgModule({
  declarations: [HomeComponent, EducationTimelineComponent, ProExperiencesComponent, AboutMeComponent, AboutMeCarouselComponent, SocialButtonComponent],
  imports: [CommonModule, HomeRoutingModule, TranslocoModule],
  exports: [HomeComponent],
})
export class HomeModule {}
