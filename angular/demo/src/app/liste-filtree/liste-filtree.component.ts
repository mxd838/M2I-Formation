import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-filtree',
  templateUrl: './liste-filtree.component.html',
  styleUrls: ['./liste-filtree.component.scss'],
})
export class ListeFiltreeComponent implements OnInit {
  items: string[] = [
    'Saul Hudson',
    'David Bowie',
    'Stevie Nicks',
    'Jimi Hendrix',
    'Johnny Halliday',
  ];

  constructor() {}

  ngOnInit(): void {}
}
