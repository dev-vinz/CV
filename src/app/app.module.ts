import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslocoRootModule } from './transloco-root.module';

import { HomeModule } from './features/home/home.module';
import { ProjectsModule } from './features/projects/projects.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    TranslocoRootModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
