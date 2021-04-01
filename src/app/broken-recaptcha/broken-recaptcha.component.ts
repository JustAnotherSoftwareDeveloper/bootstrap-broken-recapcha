import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-broken-recaptcha',
  templateUrl: './broken-recaptcha.component.html',
  styleUrls: ['./broken-recaptcha.component.scss']
})
export class BrokenRecaptchaComponent implements OnInit {

  captcha = '';
  constructor() { }

  ngOnInit(): void {
  }

}
