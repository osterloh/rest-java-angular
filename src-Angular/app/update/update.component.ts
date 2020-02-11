import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FornecedorRegistrationService } from '../fornecedor-registration.service';
import { Fornecedor } from '../fornecedor';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  fornecedor:Fornecedor = new Fornecedor(0, '', '', '', '');
  message:String = "Dados editados com sucesso!!!";

  constructor(private router:Router, private service:FornecedorRegistrationService) { }

  ngOnInit(): void {
    this.update();
  }

  public update(){
    let id = localStorage.getItem("id");
    this.service.getFornecedorById(+id)
    .subscribe((data)=>this.fornecedor=data);
  }

  public atualizar(fornecedor:Fornecedor){
    this.service.updateFornecedor(fornecedor)
    .subscribe((data)=>this.fornecedor=data);
    this.router.navigate(['search']);
  }

}
