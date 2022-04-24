import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Square } from '../interfaces/square';
import { InitialStateService } from './initial-state.service';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(private initialState: InitialStateService) { }

  private squares = new BehaviorSubject<Square[]>(JSON.parse(JSON.stringify(this.initialState.getInitialState())));
  private icon = new BehaviorSubject<string>('x');
  private winner = new BehaviorSubject<boolean>(false);

  getSquares(): Observable<Square[]> {
    return this.squares.asObservable();
  }

  getNextIcon(): Observable<string> {
    return this.icon.asObservable();
  }

  getWinnerStatus(): Observable<boolean> {
    return this.winner.asObservable();
  }

  isThereAWinner(){
    const currentState = this.squares.value;
    const combos = [
      currentState[0].value + currentState[1].value + currentState[2].value,
      currentState[3].value + currentState[4].value + currentState[5].value,
      currentState[6].value + currentState[7].value + currentState[8].value,
      currentState[0].value + currentState[3].value + currentState[6].value,
      currentState[1].value + currentState[4].value + currentState[7].value,
      currentState[2].value + currentState[5].value + currentState[8].value,
      currentState[0].value + currentState[4].value + currentState[8].value,
      currentState[6].value + currentState[4].value + currentState[2].value
    ]

    combos.forEach(el => {
      if(el === "xxx" || el === "ooo") {
        this.winner.next(true);
      }
    });
  }

  updateSquare(id: number, icon: string): void {
    if (this.winner.value === false) {
      let currentState = this.squares.value;
      currentState[id-1].value = icon;
      this.squares.next(currentState);
      this.changeIcon();
      this.isThereAWinner();
    }
  }

  changeIcon() {
    // Change the next icon, i.e. 'x' or 'o'
    let currentIcon = this.icon.value;
    if (currentIcon === 'x') {
      this.icon.next('o');
    } else {
      this.icon.next('x');
    }
  }

  resetGame() {
    // populate squares with the initial state
    this.squares.next(JSON.parse(JSON.stringify(this.initialState.getInitialState())));
    this.winner.next(false);
    this.icon.next('x');
  }
}
