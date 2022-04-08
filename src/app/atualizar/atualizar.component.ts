import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { computador } from '../models/computador';

@Component({
  selector: 'app-atualizar',
  templateUrl: './atualizar.component.html',
  styleUrls: ['./atualizar.component.css']
})
export class AtualizarComponent implements OnInit {

  items = { ...localStorage }
  computadorArr: Array<computador> = new Array<computador>();
  computador: computador = new computador()
 
  constructor(private route: Router) { }

  ngOnInit(): void {
    this.atualizarDados()
    delete this.items['ObjAtualizar']
    for(let com of Object.values(this.items)){
      let Objcom = JSON.parse(com);
      this.computadorArr.push(Objcom)
    }
    
  }

  atualizarDados(){
    let AtualComp = localStorage.getItem('ObjAtualizar')
    AtualComp == null ? AtualComp = 'teste:teste' : AtualComp
    let AtualComp2 = JSON.parse(AtualComp)
    this.computador = AtualComp2
  }
  
  salvarAlteracao(){
    debugger;
    for(let i=0; i<=this.computadorArr.length-1; i++){
      if(this.computadorArr[i].id == this.computador.id){
        this.computadorArr.splice(i,1)
      }
      
    }
    this.computadorArr.push(this.computador)
    localStorage.clear()
    for(let com of this.computadorArr){
      let ObJString = JSON.stringify(com)
      localStorage.setItem(this.Hash(), ObJString)
      this.route.navigate(['/listar'])
    }
  }
  
  Hash (){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
      });
  }
}
