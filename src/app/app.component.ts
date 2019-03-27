import { Component } from '@angular/core';
import { CrudService } from '../app/shared/crud.service'
import { Observable, Subject, throwError} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'silat-database';
  datalist: any;
  filteredList: any;
  belt: string;
  description: string;
  family: string;
  stripe: number;
  technique: string;
  filters = {};
  image_url: string;
   
  constructor(private crudServ: CrudService) {
    crudServ.GetUsersList().valueChanges().subscribe( data => {
      //this.datalist = data;
      this.filters['stripe'] = val => val == 1
      this.filteredList = _.filter(data, _.conforms(this.filters) )
      this.image_url = this.GetVimeoIDbyUrl('https://vimeo.com/326008718');
    })
  }

  GetVimeoIDbyUrl(url:string) {
    var thumbnail_url = "";
    var request = new XMLHttpRequest();
    request.open('GET', 'https://vimeo.com/api/oembed.json?url='+url , false);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        var response = JSON.parse(request.responseText);
        if(response.thumbnail_url) {
          thumbnail_url = response.thumbnail_url;
        }
      }
    };
    request.send();
    return thumbnail_url;
  }

/*   GetVimeoIDbyUrlRXJS(url:string) {

    var thumbnail = this.http.get('https://vimeo.com/api/oembed.json?url='+url).map(
      result => result.thumbnail_url
    );
    console.log()
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        var response = JSON.parse(request.responseText);
        if(response.thumbnail_url) {
          thumbnail_url = response.thumbnail_url;
        }
      }
    };

  } */
}
