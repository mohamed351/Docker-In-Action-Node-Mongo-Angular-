import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {
  form: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required)
  });

  get Title() {
    return this.form.get("title");
  }
  get Content() {
    return this.form.get("content");
  }
  constructor(private http: HttpClient, private Router: Router) { }

  ngOnInit(): void {
  }
  submitData() {
    console.log(this.form.value);
    return this.http.post(environment.URL + "/api/Blog", this.form.value).subscribe(data => {
      this.Router.navigate(["/"]);
    });
  }

}
