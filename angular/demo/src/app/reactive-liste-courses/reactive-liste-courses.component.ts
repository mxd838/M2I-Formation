import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-liste-courses',
  templateUrl: './reactive-liste-courses.component.html',
  styleUrls: ['./reactive-liste-courses.component.scss'],
})
export class ReactiveListeCoursesComponent implements OnInit {
  article: FormGroup;
  articles: any[] = [];

  constructor() {
    this.article = new FormGroup({
      designation: new FormControl(''),
      price: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  addArticle(): void {
    this.articles.push(this.article.value);
    this.article.reset();
  }

  get totalPrice(): number {
    return this.articles.reduce((total, article) => total + article.price, 0);
  }
}
