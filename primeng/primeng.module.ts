import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  imports: [
    CommonModule,
    CheckboxModule,
    ButtonModule,
    MenubarModule,
    SidebarModule
  ],
  exports: [
    CheckboxModule,
    ButtonModule,
    MenubarModule,
    SidebarModule
  ]
})
export class PrimengModule { }
