import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { computador } from '../models/computador';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  items = { ...localStorage }
  computadorArr: Array<computador> = new Array<computador>();
  txtFiltro: string = "";
  constructor(private route: Router) { }

  ngOnInit(): void {
    this.convertObj()
  }

  convertObj() {
    delete this.items['ObjAtualizar']
    for(let com of Object.values(this.items)){
      let Objcom = JSON.parse(com);
      this.computadorArr.push(Objcom)
    }
  }

  deletar(computador: string) {
    for(let i=0; i<=this.computadorArr.length-1; i++){
      if(this.computadorArr[i].id == computador){
        this.computadorArr.splice(i,1)
      }
    }
    localStorage.clear()
    for(let com of this.computadorArr){
      let ObJString = JSON.stringify(com)
      localStorage.setItem(this.Hash(), ObJString)
    }
  }
  
  atualizar(computador: computador) {
    let ObJString = JSON.stringify(computador)
    localStorage.setItem('ObjAtualizar', ObJString)
    this.route.navigate(['/atualizar'])
  }

  filtrar(){
   if(this.txtFiltro == "" ){
    this.computadorArr = this.computadorArr
   } else {
    this.computadorArr = this.computadorArr.filter(x=>x.marca.includes(this.txtFiltro))
   }
   
  }

  Hash() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
  }

}
