import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UsersService {

  private url: string = "http://demo5698684.mockable.io/users";

  ngOnInit(){
  	this.url.sort( function(name1, name2) {
  	    if ( name1.first_name < name2.first_name ){
  	    	return -1;
  	    }else if( name1.first_name > name2.first_name ){
  	        return 1;
  	    }else{
  	    	return 0;
  	    }
  	});
  }

  constructor(private http: Http) { }

  getUsers() {
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getUser(id){
    return this.http.get(this.getUserUrl(id))
      .map(res => res.json());
  }

  deleteUser(id){
    return this.http.delete(this.getUserUrl(id))
      .map(res => res.json());
  }

  private getUserUrl(id){
    return this.url + "/" + id;
  }
}
