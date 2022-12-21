import { Component, OnInit } from '@angular/core';
import { blogElementRequest, blogElementResponse } from 'src/app/interfaces/itemBlog';

import { BlogServiceService } from 'src/app/services/blog-service.service';


@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.scss']
})
export class AdminBlogComponent implements OnInit {

  public postsAdmin: Array<blogElementResponse> = [  ];
  public newTitle = '';
  public newText = '';
  public newAuthor = '';

  public editStatus = false;
  public editID!: number;

  constructor(private blogService: BlogServiceService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.blogService.getAll().subscribe(data => {
      this.postsAdmin = data;
    })
  }

  addItem(): void {
    const newPost: blogElementRequest = {
      title: this.newTitle,
      text: this.newText,
      author: this.newAuthor,
    }
    this.blogService.create(newPost).subscribe(data => {
      this.getData();
      this.resetForm();
    })
  }

  deleteItem(post: blogElementResponse): void {
    if (confirm('Delete ?')) {
      this.blogService.delete(post.id).subscribe(data => {
        this.getData();
      })
    }
  }

  editItem(post: blogElementResponse): void {
    this.editID = post.id;
    this.editStatus = true;
    this.newTitle = post.title;
    this.newText = post.text;
    this.newAuthor = post.author;
  }

  updateItem(): void {
    const updatePost: blogElementRequest = {
      title: this.newTitle,
      text: this.newText,
      author: this.newAuthor,
    }
    this.blogService.update(updatePost, this.editID).subscribe(data => {
      this.getData();
      this.resetForm();
    })

  }

  resetForm(): void {
    this.newTitle = '';
    this.newText = '';
    this.newAuthor = '';
    this.editStatus = false;
  }

}
