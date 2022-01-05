import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = '';
  length = 0;
  includeLetters = false;
  inlcudeNumbers = false;
  includeSymbols = false;
  password = '';

  
  onchangeLength(ev:any) {
    const actualValue = parseInt(ev.target.value)
    if (!isNaN(actualValue)) {
      this.length = actualValue;
    }
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }
    onChangeUseNumbers() {
    this.inlcudeNumbers = !this.inlcudeNumbers;
    }
    onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }
  onButtonClick() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const numbers = '1234567890';
    const symbol = '!@#$%^&*()-'

    let char = '';
    if (this.includeLetters) {
      char += letters
    }
    if (this.inlcudeNumbers) {
      char += numbers;
    }
    if (this.includeSymbols) {
      char += symbol;
    }

    if (!this.includeLetters && !this.inlcudeNumbers && !this.includeSymbols) {
      this.message = 'select atleast one option'
    } else {

      let generatedPassword = '';
      for (let i = 0; i < this.length; i++) {
        const index = Math.floor(Math.random() * char.length);
        generatedPassword += char[index]
      }
      this.password = generatedPassword;
      this.message  = ''
    }
  }
  
}
