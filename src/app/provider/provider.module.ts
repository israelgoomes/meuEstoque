import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';

import { ProviderPageRoutingModule } from './provider-routing.module';

import { ProviderPage } from './provider.page';
import { PipesModule } from '../../pipes/pipes.module';
import { MatExpansionModule } from "@angular/material/expansion";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    PipesModule,
    ProviderPageRoutingModule
  ],
  declarations: [ProviderPage]
})
export class ProviderPageModule {}
