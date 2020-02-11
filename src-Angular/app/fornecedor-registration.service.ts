import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fornecedor } from './fornecedor';

@Injectable({
  providedIn: 'root'
})
export class FornecedorRegistrationService {

  constructor(private http:HttpClient) { }

  public doRegistration(fornecedor){
    return this.http.post("http://localhost:8080/register",fornecedor,{responseType:'text' as 'json'});
  }

  public getFornecedor(){
    return this.http.get("http://localhost:8080/getAllFornecedor");
  }

  public getFornecedorByEmail(email){
    return this.http.get("http://localhost:8080//findFornecedor/"+email);
  }

  public deleteFornecedor(id){
    return this.http.delete("http://localhost:8080/cancel/"+id);
  }

  public getFornecedorById(id){
    return this.http.get<Fornecedor>("http://localhost:8080/search/"+id);
  }

  public updateFornecedor(fornecedor:Fornecedor){
    return this.http.put<Fornecedor>("http://localhost:8080/updateFornecedor/"+fornecedor.id,fornecedor);
  }
}
