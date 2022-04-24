import { Injectable } from '@angular/core';
import { Square } from '../interfaces/square';

@Injectable({
  providedIn: 'root'
})
export class InitialStateService {

  public initialSquares: Square[] = [
    {
      key: 1,
      value: "",
      border: {
        topBorder: false,
        rightBorder: true,
        bottomBorder: true,
        leftBorder: false
      }
    },
    {
      key: 2,
      value: "",
      border: {
        topBorder: false,
        rightBorder: true,
        bottomBorder: true,
        leftBorder: true
      }
    },
    {
      key: 3,
      value: "",
      border: {
        topBorder: false,
        rightBorder: false,
        bottomBorder: true,
        leftBorder: true
      }
    },
    {
      key: 4,
      value: "",
      border: {
        topBorder: true,
        rightBorder: true,
        bottomBorder: true,
        leftBorder: false
      }
    },
    {
      key: 5,
      value: "",
      border: {
        topBorder: true,
        rightBorder: true,
        bottomBorder: true,
        leftBorder: true
      }
    },
    {
      key: 6,
      value: "",
      border: {
        topBorder: true,
        rightBorder: false,
        bottomBorder: true,
        leftBorder: true
      }
    },
    {
      key: 7,
      value: "",
      border: {
        topBorder: true,
        rightBorder: true,
        bottomBorder: false,
        leftBorder: false
      }
    },
    {
      key: 8,
      value: "",
      border: {
        topBorder: true,
        rightBorder: true,
        bottomBorder: false,
        leftBorder: true
      }
    },
    {
      key: 9,
      value: "",
      border: {
        topBorder: true,
        rightBorder: false,
        bottomBorder: false,
        leftBorder: true
      }
    }
  ]

  getInitialState() {
    return this.initialSquares;
  }
}
