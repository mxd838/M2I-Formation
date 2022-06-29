import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-courses',
  templateUrl: './data-courses.component.html',
  styleUrls: ['./data-courses.component.scss'],
})
export class DataCoursesComponent implements OnInit {
  articles: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  addArticle(article: any): void {
    this.articles.push(article);
  }

  get total() {
    return this.articles.reduce((total, article) => total + article.prix, 0);
  }
}
