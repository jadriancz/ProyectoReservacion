import { Component, OnInit,HostBinding} from '@angular/core';
import {CompaniaService} from '../../services/compania.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-compania-list',
  templateUrl: './compania-list.component.html',
  styleUrls: ['./compania-list.component.css']
})
export class CompaniaListComponent implements OnInit {

 @HostBinding('class') classes = 'row';
  companias: any= [];

  constructor(private companiaService: CompaniaService, private router:Router) { }

  ngOnInit() {

  this.companiaService.getCompanias().subscribe(
         res =>{
           this.companias=res;
         },
         err => console.error(err)
  );

  }

  deleteCompania(id :string){
  this.companiaService.deleteCompania(id).subscribe(
      res =>{
        this.ngOnInit()

      },
      err => console.log(err)
    )
  }


  }
