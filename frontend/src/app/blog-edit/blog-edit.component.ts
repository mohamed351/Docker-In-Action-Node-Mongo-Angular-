import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Blog } from '../model/blog';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
  BlogData: Blog = null;
  formEdit: FormGroup = new FormGroup({
    _id: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required)
  })

  get Title() {
    return this.formEdit.get("title");
  }
  get Content() {
    return this.formEdit.get("content");
  }
  constructor(private ActiveRouter: ActivatedRoute, private http: HttpClient, private Router: Router) { }

  ngOnInit(): void {
    this.ActiveRouter.params.subscribe(a => {

      this.http.get<Blog>(environment.URL + "/api/Blog/" + a.id).subscribe(c => {

        this.formEdit.get("_id").setValue(c._id);
        this.formEdit.get("title").setValue(c.title);
        this.formEdit.get("content").setValue(c.content);
        this.BlogData = c;
      });
    });
  }
  submitData() {
    this.http.put<Blog>(environment.URL + "/api/Blog", this.formEdit.value).subscribe(c => {
      this.Router.navigate(['/']);
    });
  }

}
