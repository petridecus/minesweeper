import { Component, OnInit, Input } from '@angular/core';
import { MinesweeperSpaceImpl } from '../../minesweeper-space-impl';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.less']
})

export class SpaceComponent implements OnInit {
  @Input() space: MinesweeperSpaceImpl;
  over: boolean;

  constructor() { }

  ngOnInit() {
    if (!this.space.wasChecked()) {
      console.log("ok good");
    }
    this.over = false;
  }

  highlight() {
    this.over = true;
  }

  unhighlght() {
    this.over = false;
  }

  check() {
    this.space.check();
  }

  toggleFlag() {
    this.space.flag();
  }
}
