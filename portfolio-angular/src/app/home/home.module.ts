import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectCarouselComponent } from './project-carousel/project-carousel.component';
import { MeContacterComponent } from './me-contacter/me-contacter.component';
import { TechnoMaitriseComponent } from './techno-maitrise/techno-maitrise.component';

@NgModule({
  declarations: [
    HomeComponent,
    LandingPageComponent,
    AboutMeComponent,
    ProjectCarouselComponent,
    MeContacterComponent,
    TechnoMaitriseComponent,
  ],
  imports: [CommonModule],
})
export class HomeModule {}
