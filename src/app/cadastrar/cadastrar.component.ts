import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { computador } from './computador';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  
  computador: computador = new computador() 
  
  constructor() { }

  ngOnInit(): void {
    
  }

  salvarDados(){
    let objJson = JSON.stringify(this.computador);
    localStorage.setItem(this.broofa().toString(), objJson);
  }

  broofa() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}

}


