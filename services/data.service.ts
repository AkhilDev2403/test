import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  user: any = {
    1000: { acc_no: 1000, user_name: "Akhil", password: 123, balance: 15000 },
    2000: { acc_no: 2000, user_name: "Loki", password: 456, balance: 25000 },
    3000: { acc_no: 3000, user_name: "Ben", password: 789, balance: 8000 }
  }

  constructor() { }

  validateRegister(acc_no: any, user_name: any, password: any) {
    let accDetails = this.user

    if (acc_no in accDetails) {
      return false
    }
    else {
      accDetails[acc_no] = {
        acc_no,
        user_name,
        password,
        balance: 0
      }
      return true
    }

  }

  validateLogin(acno:any, password:any) {

     var accntDetails = this.user

    if(acno in accntDetails){
      if(password == accntDetails[acno]["password"]){
        
        return true
         
      }
      else{
        alert("Invalid Password!")
        return false
      }
    }
    else{
      alert("Invalid Account Number!")
      return false
    }

    
  }


  validateDeposit(acc_num: any, pswd: any, amount: any) {

    let accDetails = this.user

    let amt = parseInt(amount)

    if (acc_num in accDetails) {

      if (pswd == accDetails[acc_num]["password"]) {

        accDetails[acc_num]["balance"] += amt
        return accDetails[acc_num]["balance"]
      }
      else {
        alert("invalid password")
        return false
      }
    }
    else {
      alert("invalid account number")
      return false
    }

  }


  validateWithdraw(acc_num: any, pswd: any, amount: any) {

    let accDetails = this.user

    let amt = parseInt(amount)

    if (acc_num in accDetails) {

      if (pswd == accDetails[acc_num]["password"]) {

        if (accDetails[acc_num]["balance"] > amt) {

          accDetails[acc_num]["balance"] -= amt
          return accDetails[acc_num]["balance"]
        }
        else {
          alert("Insufficient Balance")
        }


      }
      else {
        alert("invalid password")
        return false
      }
    }
    else {
      alert("invalid account number")
      return false
    }

  }


}
