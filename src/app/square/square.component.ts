import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Square } from '../interfaces/square';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {

  @Input() data!: Square;
  icon$!: Observable<string>;

  constructor(private state: StateService) { 
    this.icon$ = this.state.getNextIcon();
  }

  selectSquare(icon: string) {
    if (this.data.value === '') {
      this.state.updateSquare(this.data.key, icon);
    }
  }
}
