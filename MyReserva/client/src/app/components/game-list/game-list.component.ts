import { Component, OnInit,HostBinding } from '@angular/core';
import {GamesService} from '../../services/games.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

    @HostBinding('class') classes = 'row';
    games: any= [];

  constructor(private gamesService: GamesService, private router:Router) { }

  ngOnInit() {
   this.gamesService.getGames().subscribe(
           res =>{
             this.games=res;
           },
           err => console.error(err)
   );

    }

deleteGame(id :string){
this.gamesService.deleteGame(id).subscribe(
        res =>{
          this.ngOnInit()

        },
        err => console.log(err)
      )
}


}
