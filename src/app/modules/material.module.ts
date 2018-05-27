import { 
  MatButtonModule, MatIconModule, MatInputModule, MatChipsModule, MatProgressSpinnerModule,
  MatSelectModule, MatSliderModule, MatToolbarModule, MatTabsModule, MatRadioModule,
  MatCardModule, MatSlideToggleModule, MatSnackBarModule, MatCheckboxModule, MatSidenavModule } from '@angular/material';

import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatButtonModule, MatIconModule, MatInputModule, 
    MatSelectModule, MatSliderModule, MatToolbarModule, MatTabsModule, MatRadioModule,
    MatCardModule, MatSlideToggleModule, MatChipsModule, MatProgressSpinnerModule,
    MatSnackBarModule, MatSidenavModule],
  exports: [MatButtonModule, MatCheckboxModule, MatButtonModule, MatIconModule, MatInputModule, 
    MatSelectModule, MatSliderModule, MatToolbarModule, MatTabsModule, MatChipsModule,
    MatCardModule, MatSlideToggleModule, MatSidenavModule, MatRadioModule, MatProgressSpinnerModule,
    MatSnackBarModule],
})
export class MyOwnCustomMaterialModule { }