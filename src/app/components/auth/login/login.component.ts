import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from '../../../services/http.service';
import { AuthService } from '../../../services/auth.service';
import { materialModules } from '../../../material';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    materialModules
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [HttpService]
})
export class LoginComponent implements OnInit {
  public passHide: boolean = true;
  public form: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  constructor(private _httpService: HttpService, private _authService: AuthService ) {}

  ngOnInit(): void {
    this._authService.checkLogin();
  }
  public onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    // console.log('Form values:', this.form.value);
    this._httpService
      .login({ ...this.form.value, expiresInMins: 600 })
      .subscribe({
        next: (val) => {
          this._authService.setLoginData(val);
        },
      });
  }
}
