import { Component, OnInit } from '@angular/core';

// Décorateur (cf TypeScript)
@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrls: ['./my-first-component.component.scss'],
})
export class MyFirstComponentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
