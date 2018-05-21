import { 
  MatButtonModule, MatIconModule, MatInputModule, 
  MatSelectModule, MatSliderModule, MatToolbarModule, MatTabsModule, MatRadioModule,
  MatCardModule, MatSlideToggleModule, MatSnackBarModule, MatCheckboxModule, MatSidenavModule } from '@angular/material';

import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatButtonModule, MatIconModule, MatInputModule, 
    MatSelectModule, MatSliderModule, MatToolbarModule, MatTabsModule, MatRadioModule,
    MatCardModule, MatSlideToggleModule,
    MatSnackBarModule, MatSidenavModule],
  exports: [MatButtonModule, MatCheckboxModule, MatButtonModule, MatIconModule, MatInputModule, 
    MatSelectModule, MatSliderModule, MatToolbarModule, MatTabsModule,
    MatCardModule, MatSlideToggleModule, MatSidenavModule, MatRadioModule,
    MatSnackBarModule],
})
export class MyOwnCustomMaterialModule { }