import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrokenRecaptchaComponent } from './broken-recaptcha/broken-recaptcha.component';
import { FixedRecaptchaComponent } from './fixed-recaptcha/fixed-recaptcha.component';

const routes: Routes = [
  {
    path: 'broken',
    component: BrokenRecaptchaComponent
  },
  {
    path: 'fixed',
    component: FixedRecaptchaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
