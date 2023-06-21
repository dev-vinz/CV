import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';

import { OrganizationsRoutingModule } from './organizations-routing.module';
import { OrganizationsComponent } from './organizations.component';

@NgModule({
  declarations: [OrganizationsComponent],
  imports: [CommonModule, OrganizationsRoutingModule, TranslocoModule],
})
export class OrganizationsModule {}
