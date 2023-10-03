import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';

import { SharedModule } from 'src/app/shared/shared.module';

import { OrganizationsRoutingModule } from './organizations-routing.module';
import { OrganizationsComponent } from './organizations.component';
import { PreviewCardComponent } from './components/preview-card/preview-card.component';

@NgModule({
  declarations: [OrganizationsComponent, PreviewCardComponent],
  imports: [
    CommonModule,
    OrganizationsRoutingModule,
    SharedModule,
    TranslocoModule,
  ],
  exports: [OrganizationsComponent],
})
export class OrganizationsModule {}
