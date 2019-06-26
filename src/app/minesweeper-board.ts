export interface MinesweeperBoard {

	// Interface constructed same way as Java model?
	// NO NEED FOR A SERVER, THIS IS A GAME!!!

	// Same methods as Java interface...

	/*
	 * Returns a String value,
	 * representing the current state of the game.
	 */
  getGameState(): string;

	/*
	 * Toggles flag if the given space is not
	 * yet checked.
	 */
	toggleFlag(row: number, col: number): void;

	/*
	 * If the given coordinate is valid and has
	 * not yet been checked, then it is checked.
	 *
	 * If the given coordinate contains a mine,
	 * the game is over. Otherwise, the number
	 * of corresponding mines is revealed...
	 */
	checkSpace(row: number, col: number): void;

	// Returns true if the user has won/lost.
	isGameOver(): boolean;

	/* Returns an array of numbers representing
	 * the contents of the board.
	 */
	boardVals(): number[][];

	/* The number of mines on the board
	 * minus the number of flags.
	 */
  numMines(): number;
}
