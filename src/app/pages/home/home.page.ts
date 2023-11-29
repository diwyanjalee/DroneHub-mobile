import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HomeService } from 'src/app/service/home.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  posts :any;
  constructor(private router: Router, private homeService: HomeService) { 
    this.retrievePosts(); 
  }

  ngOnInit(): void {
  }

  retrievePosts(): void {
    this.homeService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.posts = data;
      this.posts.reverse();
      console.log(this.posts)
    });
  }


}
