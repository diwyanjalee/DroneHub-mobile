import { Component, OnInit } from '@angular/core';
import { dataService } from '../service/post.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private postService: dataService) { 
    let x = postService.getPosts();
    this.x();

    
  }


  ngOnInit() {
  }

  x() {
    this.postService.getPosts().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      console.log(data)
    });
  }

}
