import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // name=""
  // acno=""
  // pwd=""

  RegisterForm = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('[0-9a-zA-z]*')]],
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pwd: ['', [Validators.required, Validators.pattern('[0-9a-zA-z]*')]]
  })

  constructor(private database: DataService, private rout: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }


  register() {

    

      var username = this.RegisterForm.value.uname
      var account_num = this.RegisterForm.value.acno
      var pswd = this.RegisterForm.value.pwd

      
      //alert("clicked")
      //console.log(this.RegisterForm);


      let result = this.database.validateRegister(account_num, username, pswd)
      if (result) {
        alert("Account created successfully!")
        this.rout.navigateByUrl("")
      }
      else {
        alert("Already Exist! Please Log in")
        this.rout.navigateByUrl("")
      }


  

    

  
  }


}
