import { MinesweeperSpace } from './minesweeper-space';

export class MinesweeperSpaceImpl implements MinesweeperSpace {

  mine: boolean;
  aflag: boolean;
  checked: boolean;
  around: number;
  row: number;
  col: number;
  highlighted: boolean;

  constructor(mine: boolean, around: number, row: number, col: number) {
    this.mine = mine;
    this.around = around;
    this.aflag = false;
    this.checked = false;
    this.row = row;
    this.col = col;
    this.highlighted = false;
  }

  isHighlighted() : boolean {
    return this.highlighted;
  }

  highlight() {
    this.highlighted = true;
  }

  unhighlight() {
    this.highlighted = false;
  }

  isMine() {
    return this.mine;
  }

  hasFlag() {
    return this.aflag;
  }

  wasChecked() {
    return this.checked;
  }

  flag() {
    if (!this.checked) {
      this.aflag = !this.aflag;
    }
  }

  check() {
    this.checked = true;
  }

  surrounding() {
    if (!this.checked && !this.aflag) {
      return -3;
    } else if (!this.checked) {
      return -2;
    } else {
      return this.around;
    }
  }

  character() : string {
    let s = this.surrounding();
    switch(s) {
      case -3:
        return "_";
      case -2:
        return "!";
      case -1:
        return "x";
      default:
        return "" + this.around;
    }
  }
}
