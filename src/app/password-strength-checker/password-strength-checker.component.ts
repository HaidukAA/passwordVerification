import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-password-strength-checker',
  templateUrl: './password-strength-checker.component.html',
  styleUrls: ['./password-strength-checker.component.scss']
})
export class PasswordStrengthCheckerComponent {
  password: string = '';
  strengthLevel: string = '';
  strengthLabel: string = '';

  calculateStrength(): void {
    const passwordLength = this.password.length;
    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasNumbers = /[0-9]/.test(this.password);
    const hasSymbols = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(this.password);

    if (passwordLength === 0) {
      this.strengthLevel = 'gray';
      this.strengthLabel  = '';
    } else if (passwordLength < 8) {
      this.strengthLevel = 'red';
      this.strengthLabel = 'Add more characters';
    } else if (hasLetters && hasNumbers && hasSymbols) {
      this.strengthLevel = 'green';
      this.strengthLabel = 'Stong';
    } else if ((hasLetters && hasNumbers) || (hasLetters && hasSymbols)|| (hasNumbers && hasSymbols)) {
      this.strengthLevel = 'yellow';
      this.strengthLabel = 'Medium';
    } else {
        this.strengthLevel = 'simple';
        this.strengthLabel = 'Simple';
    }
  }
}
