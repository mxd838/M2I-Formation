import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  nom: string = 'Hudson';
  prenom: string = 'River';
  img: string =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJmw7QCe_0bnfIL-VbpJ7XpvdYvic-Js5uzg&usqp=CAU';
  job: string = 'notaire';

  constructor() {}

  ngOnInit(): void {}
}
