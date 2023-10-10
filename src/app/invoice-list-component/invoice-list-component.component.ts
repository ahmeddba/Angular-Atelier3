import { Component, OnInit } from '@angular/core';
import { Invoice } from '../Models/Invoice';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice-list-component',
  templateUrl: './invoice-list-component.component.html',
  styleUrls: ['./invoice-list-component.component.css']
})
export class InvoiceListComponentComponent implements OnInit{
  id : number;
  active : boolean;

   invoices: Invoice[] = [
   {idFacture: 1, montantFacture:120,  montantRemise:10 ,dateFacture:"12/12/2021", active:true },
   {idFacture: 2, montantFacture:1020, montantRemise:90 ,dateFacture:"22/11/2020", active:true },
   {idFacture: 3, montantFacture:260,  montantRemise:30 ,dateFacture:"18/10/2020", active:false},
   {idFacture: 4, montantFacture:450,  montantRemise:40 ,dateFacture:"14/12/2020", active:true }
    // Add more Invoice objects as needed
  ];

  constructor(private route: ActivatedRoute) {
    
  }


  ngOnInit(): void {
    // Récupérer les paramètres d'URL
    this.id = this.route.snapshot.paramMap.get('id') ;
    this.active = this.route.snapshot.paramMap.get('active') === 'true';
}
}
