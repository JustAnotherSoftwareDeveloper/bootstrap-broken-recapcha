import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fixed-recaptcha',
  templateUrl: './fixed-recaptcha.component.html',
  styleUrls: ['./fixed-recaptcha.component.scss']
})
export class FixedRecaptchaComponent implements OnInit {

  captcha = '';
  constructor() { }

  ngOnInit(): void {
  }

}
