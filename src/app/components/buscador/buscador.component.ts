import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, heroe } from '../../services/heroes.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent implements OnInit {

  termino:string="";
  heroes:any[]=[]
  
  constructor(private activatedRoute:ActivatedRoute, private _heroesService: HeroesService,
    private router:Router
    
  ){

  }

  ngOnInit(){
    this.activatedRoute.params.subscribe(params=>{
      this.termino= params['termino'];
      this.heroes= this._heroesService.buscarHeroe(params['termino']);
      console.log(this.heroes);

    });
  }

  
  

}
