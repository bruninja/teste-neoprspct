import { Component, OnInit } from '@angular/core';
import { User } from './shared/user';
import { Subject } from 'rxjs/Subject';
import { FormsModule } from '@angular/forms';
import {Http} from "@angular/http";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private users: User[] = [];
  public data;
  public filterQuery = "";
  public rowsOnPage = 10;
  public sortBy = "email";
  public sortOrder = "asc";

  constructor(private http: Http) { }

  ngOnInit(): void {
    this.http.get("http://demo5698684.mockable.io/users")
        .subscribe((data)=> {
            setTimeout(()=> {
                this.data = data.json();
            }, 1000);
        });
  }

  public toInt(num: string) {
      return +num;
  }

  public sortByWordLength = (a: any) => {
      return a.city.length;
  }

  deleteUser(user){
    if (confirm("Você optou por apagar " + user.name + " , porém, a funcionalidade de remoção de usuários não foi implementada ainda.")) {
      var index = this.users.indexOf(user);
      this.users.splice(index, 1);

      // this.user.deleteUser(user.id)
      //   .subscribe(null,
      //     err => {
      //       alert("Não foi possivel apagar.");
      //       // Revert the view back to its original state
      //       this.users.splice(index, 0, user);
      //     });
    }
  }

}
