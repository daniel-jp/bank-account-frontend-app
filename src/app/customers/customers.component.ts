import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // Inclui o HttpClientModule
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'] // Corrigido para styleUrls e no plural
})
export class CustomersComponent implements OnInit {
  customers: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get("http://192.168.1.7:8888/CUSTOMER-SERVICE/customers") // Corrigido o URL
      .subscribe({
        next: data => {
          this.customers = data; // Armazena os dados recebidos na variável customers
        },
        error: err => {
          console.log("Error:", err); // Exibe o erro no console
        }
      });
  }
}
