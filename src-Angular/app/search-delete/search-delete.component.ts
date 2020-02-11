import { Component, OnInit } from '@angular/core';
import { FornecedorRegistrationService } from '../fornecedor-registration.service';
import { Router } from '@angular/router';
import { Fornecedor } from '../fornecedor';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit {

  fornecedores:any;
  email:string;

  constructor(private service:FornecedorRegistrationService, private router:Router) { }

  public deleteFornecedor(id:number){
    let resp= this.service.deleteFornecedor(id);
    resp.subscribe((data)=>this.fornecedores=data);
   }

   public findFornecedorByEmailId(){
    let resp= this.service.getFornecedorByEmail(this.email);
    resp.subscribe((data)=>this.fornecedores=data);
   }

   public updateFornecedor(fornecedor:Fornecedor):void{
     localStorage.setItem("id",fornecedor.id.toString());
     this.router.navigate(["update"]);
   }

  ngOnInit(): void {
    let resp=this.service.getFornecedor();
    resp.subscribe((data)=>this.fornecedores=data);
  }

}
