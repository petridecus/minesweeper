import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-standard-block',
  templateUrl: './standard-block.component.html',
  styleUrls: ['./standard-block.component.less']
})
export class StandardBlockComponent implements OnInit {
  @Input() char: string;

  constructor() { }

  ngOnInit() {
  }

}
