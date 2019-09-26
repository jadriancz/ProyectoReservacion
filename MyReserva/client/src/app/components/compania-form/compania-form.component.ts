import { Component, OnInit } from '@angular/core';
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

  compania: Compania={
  id: 0,
  nombre: '',
  description: '',
  telefono: '',
  idExterno:'',
  created_at:  new Date()
    };

    edit: boolean = false;

    constructor(private companiaService:CompaniaService,private router:Router,private activeRoute:ActivatedRoute) { }

    ngOnInit( ) {
    const params=  this.activeRoute.snapshot.params;

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
        delete this.compania.created_at;
        delete this.compania.id;
       console.log(this.idExterno + this.id + this.telefono );
       this.companiaService.saveCompania(this.compania)
       .subscribe(
               res =>{
                 console.log(res);
                 this.router.navigate(['/compania']);
               },
               err=> console.error(err)
               )

    }

    updatedCompania(){
      delete this.compania.created_at;

     this.companiaService.updatedCompania(this.compania.id, this.compania)
     .subscribe(
             res =>{
               console.log(res);
               this.router.navigate(['/compania']);
             },
             err=> console.error(err)
             )


    }

    }
