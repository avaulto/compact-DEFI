import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupportUsPageRoutingModule } from './support-us-routing.module';

import { SupportUsPage } from './support-us.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
SharedModule,
    SupportUsPageRoutingModule
  ],
  declarations: [SupportUsPage]
})
export class SupportUsPageModule {}
