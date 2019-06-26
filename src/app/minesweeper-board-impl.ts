import { MinesweeperBoard } from './minesweeper-board';
import { MinesweeperSpace } from './minesweeper-space';
import { MinesweeperSpaceImpl } from './minesweeper-space-impl';

export class MinesweeperBoardImpl implements MinesweeperBoard {
  private board: MinesweeperSpace[][];
  private r: number;
  private c: number;
	private mines: number;
	private flags: number;

	constructor(m: number, r: number, c: number) {
    this.r = r;
    this.c = c;
    this.board = new Array(this.r);
    for (let x = 0; x < r; x++) {
      this.board[x] = new Array(this.c);
    }

    for (let i = 0; i < m; i++) {
      this.addMine();
    }

    for (let j = 0; j < r; j++) {
      for (let k = 0; k < c; k++) {
        if (this.board[j][k] == null) {
          console.log("reaching a null space");
          this.board[j][k] = new MinesweeperSpaceImpl(false,
                                         this.around(j,k), j, k);
        }
      }
    }

    this.mines = m;
    this.flags = 0;
  }

  victory() : boolean {
    return this.isGameOver() && this.numMines() == 0;
  }

  isHighlighted(row: number, col: number) : boolean {
    return this.board[row][col].isHighlighted();
  }

  highlight(row: number, col: number) {
    this.board[row][col].highlight();
  }

  unhighlight(row: number, col: number) {
    this.board[row][col].unhighlight();
  }

  around(row: number, col: number) : number {
    let num = 0;

    if (row > 0 && col > 0 && this.board[row - 1][col - 1] != null
          && this.board[row - 1][col - 1].isMine()) {
      num++;
    }

    if (row > 0 && this.board[row - 1][col] != null
          && this.board[row - 1][col].isMine()) {
      num++;
    }

    if (col > 0 && this.board[row][col - 1] != null
          && this.board[row][col - 1].isMine()) {
      num++;
    }

    if (row < this.board.length - 1 && col < this.board[0].length - 1
        && this.board[row + 1][col + 1] != null
        && this.board[row + 1][col + 1].isMine()) {
      num++;
    }

    if (row < this.board.length - 1 && this.board[row + 1][col] != null
      && this.board[row + 1][col].isMine()) {
      num++;
    }

    if (col < this.board[0].length - 1 && this.board[row][col + 1] != null
      && this.board[row][col + 1].isMine()) {
      num++;
    }

    if (row > 0 && col < this.board[0].length - 1
          && this.board[row - 1][col + 1] != null
          && this.board[row - 1][col + 1].isMine()) {
      num++;
    }

    if (row < this.board.length - 1 && col > 0
      && this.board[row + 1][col - 1] != null
      && this.board[row + 1][col - 1].isMine()) {
      num++;
    }

    return num;
  }

  addMine(): void {
    let r = Math.round(Math.random() * this.r);
    let c = Math.round(Math.random() * this.c);
    if (c == 10) c--;
    console.log(this.r + ", " + r + ". " + this.c + ", " + c);
    if (this.board == null || this.board[r] == null || this.board[r][c] != null) {
      this.addMine();
    } else {
      this.board[r][c] = new MinesweeperSpaceImpl(true, -1, r, c);
    }
  }

	getGameState() {
		let state = "";

    let i: number;
    let j: number;


		for (i = 0; i < this.board.length; i++) {
			for (j = 0; j < this.board[i].length; j++) {
				switch (this.board[i][j].surrounding()) {
					case -3:
						state += "_";
						break;
					case -2:
						state += "X";
						break;
					case -1:
						state += "!";
						break;
					default:
						state += this.board[i][j].surrounding();
						break;
				}

				if (j != this.board[i].length) {
					state += " ";
				}
			}

			if (i != this.board.length) {
				state += "\n";
			}
    }
    return state;
	}

  toggleFlag(row: number, col: number) {
    if (this.board[row][col].hasFlag()) {
      this.flags--;
    } else {
      this.flags++;
    }
    this.board[row][col].flag();
  }

  checkSpace(row: number, col: number) {
    this.board[row][col].check();
    if (this.board[row][col].surrounding() == 0) {
      if (row > 0 && col > 0) {
        this.checkSpace(row - 1, col - 1);
      }

      if (row > 0) {
        this.checkSpace(row - 1, col);
      }

      if (col > 0) {
        this.checkSpace(row, col - 1);
      }

      if (row < this.board.length - 1 && col < this.board[0].length - 1) {
        this.checkSpace(row + 1, col + 1);
      }

      if (row < this.board.length - 1) {
        this.checkSpace(row + 1, col);
      }

      if (col < this.board[0].length - 1) {
        this.checkSpace(row, col + 1);
      }

      if (row < this.board.length - 1 && col > 0) {
        this.checkSpace(row + 1, col - 1);
      }

      if (row > 0 && col < this.board[0].length - 1) {
        this.checkSpace(row - 1, col + 1);
      }
    }
  }

  minePortion() : number {
    return 10 * this.numMines() / this.mines;
  }

	isGameOver() {
    let i: number;
    let j: number;
    let flaggedMines = 0;
    for (i = 0; i < this.board.length; i++) {
      for (j = 0; j < this.board[0].length; j++) {
        if (this.board[i][j].isMine()
            && this.board[i][j].wasChecked()) {
          return true;
        } else if (this.board[i][j].isMine()
                    && this.board[i][j].hasFlag()) {
          flaggedMines++;
          if (flaggedMines == this.mines) {
            return true;
          }
        }
      }
    }

    return false;
	}

	boardVals() {
    let vals: number[][];

    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[0].length; j++) {
        vals[i][j] = this.board[i][j].surrounding();
      }
    }

    return vals;
	}

	numMines() {
    return this.mines - this.flags;
  }
}
