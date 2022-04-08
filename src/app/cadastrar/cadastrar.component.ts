import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { computador } from '../models/computador';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  
  computador: computador = new computador() 
  
  
  constructor(private route: Router) { }

  ngOnInit(): void {
    
  }

  salvarDados(){
    this.computador.id = this.Hash()
    let objJson = JSON.stringify(this.computador);
    localStorage.setItem(this.Hash().toString(), objJson);
    this.route.navigate(['/listar'])
  }

  Hash() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
  }

}


