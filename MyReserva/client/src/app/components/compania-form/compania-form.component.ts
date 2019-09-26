import { Component, OnInit,HostBinding } from '@angular/core';
import {Compania} from 'src/app/models/compania';
import {CompaniaService} from 'src/app/services/compania.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-compania-form',
  templateUrl: './compania-form.component.html',
  styleUrls: ['./compania-form.component.css']
})
export class CompaniaFormComponent implements OnInit {

  @HostBinding('class')classes='row';

companias: any= [];

  compania: Compania={
  id: 0,
  nombre: '',
  direccion: '',
  telefono: '',
  idExterno:'',
  created_at:  new Date()
    };

    edit: boolean = false;

    constructor(private companiaService:CompaniaService,private router:Router,private activeRoute:ActivatedRoute) { }

    ngOnInit( ) {
    const params=  this.activeRoute.snapshot.params;
console.log(params)
  if(params){
       this.companiaService.getCompania(params.id)
       .subscribe(
               res =>{
                 console.log(res);
                 this.compania=res;
                 this.edit=true;
               },
               err=> console.error(err)
               )

  }
    }

    saveNewCompania(){

 const param=this.compania;


param.idExterno =param.nombre.substring(0,4) + param.telefono.substring(6,10)+"NE";


       delete param.created_at;
       delete param.id;

       this.companiaService.saveCompania(param)
       .subscribe(
               res =>{
                 console.log(res);
                 this.router.navigate(['/companias']);
               },
               err=> console.error(err)
               )

    }

    updatedCompania(){
      delete this.compania.created_at;

             this.compania.idExterno =this.compania.nombre.substring(0,4) + this.compania.telefono.substring(6,10)+"NE";
     this.companiaService.updatedCompania(this.compania.id, this.compania)
     .subscribe(
             res =>{
               console.log(res);
               this.router.navigate(['/companias']);
             },
             err=> console.error(err)
             )


    }

    }
