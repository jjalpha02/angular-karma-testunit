import { Component, OnInit } from '@angular/core';
import { User } from "../../Objets/User";
import { UserServService } from '../../Service/user-serv.service';

@Component({
  selector: 'app-user-comp',
  templateUrl: './user-comp.component.html',
  styleUrls: ['./user-comp.component.scss']
})
export class UserCompComponent implements OnInit {

  title = 'angular-testunit-karma';
  users: User[] = [];

  constructor(private userService: UserServService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((res) => {
      this.users = res;
      return this.users;
    });
  }

}
