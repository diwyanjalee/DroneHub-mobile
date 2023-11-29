import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { BlogService } from 'src/app/service/blog.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {
  blog :any;
  isBlogDisplay = true;
  isDisplayCreateBtn = true;
  constructor(private router: Router, private blogService: BlogService) { 
    this.retrieveBlog(); 
  }

  ngOnInit(): void {
  }

  retrieveBlog(): void {
    this.blogService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.blog = data;
      this.blog.reverse();
      console.log(this.blog)
    });
  }

  createBlog() {
    this.isBlogDisplay = false;
    this.isDisplayCreateBtn = false;
  }

}
