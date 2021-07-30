import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css']
})
export class FundTransferComponent implements OnInit {

  d_acno=""
  d_pwd=""
  d_amt=""

  wacno=""
  wpwd=""
  wamt=""

  constructor(private database:DataService) { }

  ngOnInit(): void {
  }

  withdraw(){
    var withdraw_acno = this.wacno
    var withdraw_pwd = this.wpwd
    var withdraw_amt = this.wamt
    var res = this.database.validateWithdraw(withdraw_acno, withdraw_pwd, withdraw_amt)

    if(res){
      alert("withdraw amount of" +withdraw_amt+"debited successfully, New Balance is"+res)
    }
   
  }

  deposit(){
    var deposit_acno = this.d_acno
    var deposit_pwd = this.d_pwd
    var deposit_amount = this.d_amt

    var result = this.database.validateDeposit(deposit_acno, deposit_pwd, deposit_amount)

    if(result){


      alert("deposited amount of" +deposit_amount+"credited successfully, New Balance is"+result)
    }
    
  }

  


}
