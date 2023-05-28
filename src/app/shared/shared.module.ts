import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LangageSelectorComponent } from './langage-selector/langage-selector.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, LangageSelectorComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent],
})
export class SharedModule {}
