import { Component, OnInit } from '@angular/core';
import { blogElementResponse } from 'src/app/interfaces/itemBlog';
import { BlogServiceService } from 'src/app/services/blog-service.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(private blogService: BlogServiceService) { }
  public postsUser: Array<blogElementResponse> = []
  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.blogService.getAll().subscribe(data => {
      this.postsUser = data;
    })
  }

}
