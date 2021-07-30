import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 // heading = "Welcome to Zach Bank"

  // acNo = "please enter account number"

  acno = ""

  pwd = ""

  LoginForm = this.formbuild.group({

    acno : ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pwd : ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]*')]]
  })


  constructor(private routing: Router, private database: DataService, private formbuild:FormBuilder) { }

  ngOnInit(): void {
  }


  login() {



      var account_number = this.LoginForm.value.acno
      //console.log(account_number);

      var password = this.LoginForm.value.pwd
      //console.log(password);

     console.log(this.LoginForm);
      

      var result = this.database.validateLogin(account_number, password)

      if(result){
        alert("login success")
        this.routing.navigateByUrl("dashboard")
      }


  }


  // accnt_no(event:any){
  //   // console.log(event.target.value);
  //   this.acc_num = event.target.value

  // }

  // pwdChange(event:any){
  //   this.pwd = event.target.value
  // }


  //1. by using ngModel

  // login(){

  //   var account_number = this.acno
  //   console.log(account_number);

  //   var password = this.pwd
  //   console.log(password);


  //   let accntDetails = this.database.user

  //   if(account_number in accntDetails){

  //     if(password == accntDetails[account_number]["password"]){

  //       alert("login success")
  //       this.routing.navigateByUrl("dashboard")


  //     }
  //     else{
  //       alert("invalid password")
  //     }

  //   }
  //   else{
  //     alert("invalid acount number")
  //   }
  // }




  //2. By using template referencing variable  (#acno, #pwd)

  // login(a:any,p:any){
  //   // console.log(a);


  //   var account_number = a.value
  //   //console.log(account_number);

  //   var password = p.value
  //   //console.log(password);


  //   let accntDetails = this.user

  //   if(account_number in accntDetails){

  //     if(password == accntDetails[account_number]["password"]){

  //       alert("login success")

  //     }
  //     else{
  //       alert("invalid password")
  //     }

  //   }
  //   else{
  //     alert("invalid acount number")
  //   }
  // }


  // To make login more 


  

}
