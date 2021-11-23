import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { Blog } from '../model/blog';
@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit {
  blog: Blog[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Blog[]>(environment.URL + "/").subscribe(a => {
      this.blog = a;
    });
  }

}
