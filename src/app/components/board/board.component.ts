import { Component, OnInit } from '@angular/core';
import { MinesweeperBoardImpl } from '../../minesweeper-board-impl';
import { MinesweeperBoard } from '../../minesweeper-board';
import { SpaceComponent } from '../space/space.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.less']
})

export class BoardComponent implements OnInit {
  board: MinesweeperBoardImpl;
  fbox: boolean;
  constructor() { }

  ngOnInit() {
    this.board = new MinesweeperBoardImpl(10, 10, 10);
    console.log(this.board);
    this.fbox = false;
  }

  fboxtoggle() {
    this.fbox = !this.fbox;
  }

  toggleFlag(row: number, col: number) {
    this.board.toggleFlag(row, col);
  }

  check(row: number, col: number) {
    if (this.fbox) {
      this.board.toggleFlag(row, col);
    } else {
      this.board.checkSpace(row, col);
    }
  }

  isHighlighted(row: number, col: number) : boolean{
    return this.board.isHighlighted(row, col);
  }

  highlight(row: number, col: number) {
    this.board.highlight(row, col);
  }

  unhighlight(row: number, col: number) {
    this.board.unhighlight(row, col);
  }
}
