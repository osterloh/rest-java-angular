import { Component, OnInit } from '@angular/core';
import { FornecedorRegistrationService } from '../fornecedor-registration.service';
import { Fornecedor } from '../fornecedor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
 
  fornecedor : Fornecedor = new Fornecedor(0, '', '', '', '');
  message:any;

  constructor(private service:FornecedorRegistrationService, private router:Router) { }

  ngOnInit(): void {
  }

  public registerNow(){
    let resp=this.service.doRegistration(this.fornecedor);
    resp.subscribe((data)=>this.message=data);
    this.router.navigate(['search']);
  }

}
