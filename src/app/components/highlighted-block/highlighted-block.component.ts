import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-highlighted-block',
  templateUrl: './highlighted-block.component.html',
  styleUrls: ['./highlighted-block.component.less']
})
export class HighlightedBlockComponent implements OnInit {
  @Input() char: string;

  constructor() { }

  ngOnInit() {
  }

}
