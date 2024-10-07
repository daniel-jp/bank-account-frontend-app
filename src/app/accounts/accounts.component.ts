import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { error } from 'console';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports:[CommonModule, HttpClientModule],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css'
})
export class AccountsComponent implements OnInit {
  accounts: any;
  constructor(private http: HttpClient){}

  ngOnInit(): void {
      this.http.get( "http://192.168.1.7:8888/ACCOUNT-SERVICE/accounts")

      .subscribe({
        next : data =>{
            this.accounts = data
          },
          error:err =>{

            console.log(err)
          }

      })

  }

  }


