import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

	posts: Object;
	colors: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
		this.data.getPosts().subscribe((data: any) => {
			this.posts = data.splice(0,5);
		});
		// this.data.getPosts().subscribe(data => {   // could not use .splice() with this
		// 	this.posts = data;
		// });

		this.data.getColors()
			.subscribe((data: any) => {
				this.colors = data;
				console.log('color data is', this.colors);
			});
  }

}
