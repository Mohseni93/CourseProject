import { Component, OnInit, Output , Input , EventEmitter } from '@angular/core';
import { FormControl, FormGroup , Validators , FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  @Input('submitted') online: boolean = false;
  submitted = false;
  minLenghtPass : boolean = false;
  constructor(private router : Router, private registerService:RegisterService , private formBuilder: FormBuilder) { }
  genders = ['Male', 'Fmale'];
  public signupForm! : FormGroup ;
  formData:any[]=[];
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstName : new FormControl('' , Validators.required),
      LastName: new FormControl('' , Validators.required),
      email: new FormControl('' , [Validators.required, Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      password: new FormControl('' , [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(40)
      ]),
      passwordConfirm: new FormControl('', Validators.required),
      nationalCard: new FormControl('', Validators.required),
      gender: new FormControl('Male'),
    });
  }
  get f() { return this.signupForm.controls; }
  onSubmit(){
    this.submitted = true;
    if (this.signupForm.invalid) {
      return;
    }
    if(this.signupForm.valid){
    console.log(this.signupForm);
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signupForm.value))
    this.formData.push({
      firstName:this.signupForm.get('firstName')?.value,
      nationalCard:this.signupForm.get('nationalCard')?.value,
     })
     this.registerService.allFormData.next(this.formData)
     console.log(this.formData);
}
}
