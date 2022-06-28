import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss'],
})
export class ListeComponent implements OnInit {
  // attributs ici
  personnages: string[] = [
    'Twilight',
    'Sparkle',
    'Fluttershy',
    'Pinkie Pie',
    'Princesse Celestia',
    'Rarity',
    'Rainbow Dash',
  ];

  constructor() {}

  ngOnInit(): void {}
  // methodes ici
}
