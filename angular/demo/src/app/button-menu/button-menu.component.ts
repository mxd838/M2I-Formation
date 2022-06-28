import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-menu',
  templateUrl: './button-menu.component.html',
  styleUrls: ['./button-menu.component.scss'],
})
export class ButtonMenuComponent implements OnInit {
  buttons: any[] = [
    {
      buttonTitle: 'Pou',
      AlertMessage: 'Pan',
    },
    {
      buttonTitle: 'Bam',
      AlertMessage: 'Boum',
    },
    {
      buttonTitle: 'Titi',
      AlertMessage: 'Gros Minet',
    },
    {
      buttonTitle: 'Medor',
      AlertMessage: 'Ouaf',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
