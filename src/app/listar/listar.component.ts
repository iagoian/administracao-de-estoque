import { Component, OnInit } from '@angular/core';
import { computador } from '../models/computador';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  items = { ...localStorage }
  computadorArr: Array<computador> = new Array<computador>();

  constructor() { }

  ngOnInit(): void {
    this.convertObj()
  }

  convertObj() { 
    for(let com of Object.values(this.items)){
      let Objcom = JSON.parse(com);
      this.computadorArr.push(Objcom)

    }
    console.log(this.computadorArr)
  }

}
