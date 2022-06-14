import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormGroupDirective } from '@angular/forms';
import { RegisterService } from 'src/app/services/registerServices/RegisterService';
import { UserService } from 'src/app/services/UserService/user.service';
@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  @Input() submitted: boolean = false;
  online: boolean = true;
  resultConfirmPass: boolean = false;
  constructor(
    private registerService: RegisterService,
    private formBuilder: FormBuilder,
    private userValue: UserService
  ) { }
  genders = ['Male', 'Fmale'];
  public signupForm!: FormGroup;
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstName: new FormControl('', Validators.required),
      LastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),

      nationalCard: new FormControl(''),
      terms: new FormControl(false, Validators.requiredTrue),
      gender: new FormControl('Male'),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(40)
      ]),
      passwordConfirm: new FormControl('', Validators.required)
    })
  }
  onSubmit() {
    if (this.signupForm.invalid) {
      this.submitted = false;
      this.online = false;
      console.error("invalid");
    }
    if (this.signupForm.valid) {
      this.submitted = true;
      this.online = true;
      alert('Log in to your account')
      this.userValue.usrValue.next(this.signupForm.get('firstName')?.value);
      this.registerService.allFormData.next(this.submitted)
    }
  }
}