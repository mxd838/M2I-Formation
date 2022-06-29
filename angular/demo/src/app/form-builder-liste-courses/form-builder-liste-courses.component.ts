import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder-liste-courses',
  templateUrl: './form-builder-liste-courses.component.html',
  styleUrls: ['./form-builder-liste-courses.component.scss'],
})
export class FormBuilderListeCoursesComponent implements OnInit {
  articles: any[] = [];
  article: FormGroup = this.formBuilder.group({
    designation: ['', Validators.required],
    price: ['', Validators.required],
  });

  submitted: boolean = false;
  // injection de dependances dans angular se fait dans le constructeur
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  private addArticle(): void {
    this.articles.push(this.article.value);
    this.article.reset();
    this.submitted = false;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.article.valid) {
      this.addArticle();
    } else {
      console.log('Formulaire invalide');
    }
  }

  get totalPrice(): number {
    let total = 0;
    for (let article of this.articles) {
      total += article.price;
    }
    return total;
  }

  get form() {
    return this.article.controls;
  }
}
