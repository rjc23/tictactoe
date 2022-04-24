import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Square } from './interfaces/square';
import { StateService } from './services/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  state$!: Observable<Square[]>
  isWinner$!: Observable<boolean>;
  
  constructor(private state: StateService) {
    this.state$ = this.state.getSquares();
    this.isWinner$ = this.state.getWinnerStatus();
  }

  resetGame() {
    this.state.resetGame();
  }
}
