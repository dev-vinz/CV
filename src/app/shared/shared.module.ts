import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LangageSelectorComponent } from './langage-selector/langage-selector.component';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';

@NgModule({
  declarations: [HeaderComponent, LangageSelectorComponent, ThemeSwitcherComponent],
  imports: [CommonModule, RouterModule, TranslocoModule],
  exports: [HeaderComponent],
})
export class SharedModule {}
