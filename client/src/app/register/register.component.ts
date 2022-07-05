import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model : any ={};
  constructor(private accountService :AccountService) { }
  users: any; 
  @Input() usersFromHomeComponent :any;
  @Output()cancelRegister = new EventEmitter();
  ngOnInit(): void {
  }
  register(){
    this.accountService.register(this.model).subscribe(response =>{
      console.log(response);
      this.cancel();
    },error=>{
      console.log(error);
    })
  }
  cancel(){
    this.cancelRegister.emit(false);
  }


}
