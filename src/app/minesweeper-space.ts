export interface MinesweeperSpace {

  isMine(): boolean;

  hasFlag(): boolean;

  wasChecked(): boolean;

  flag(): void;

  check(): void;

  surrounding(): number;

  isHighlighted(): boolean;

  highlight(): void;

  unhighlight(): void;
}
