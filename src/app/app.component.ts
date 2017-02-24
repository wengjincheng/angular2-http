import { Component,OnInit } from '@angular/core';
import { UserService } from './service'
import { Name } from './name'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit{
  title = '起飞!';
  names: Name[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getNames()
      .then(names => {this.names = names;console.log(this.names)});
  }


}
