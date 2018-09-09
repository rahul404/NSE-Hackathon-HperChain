import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { SecuritiesRoutingModule, routedComponents } from './securities-routing.module';
import { SmartTableService } from '../../@core/data/smart-table.service';
import {ApiService} from '../../api.service';

@NgModule({
  imports: [
    ThemeModule,
    SecuritiesRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    SmartTableService,
    ApiService
  ],
})
export class SecuritiesModule { }
