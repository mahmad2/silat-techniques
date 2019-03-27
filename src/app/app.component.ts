import { Component } from '@angular/core';
import { CrudService } from '../app/shared/crud.service'
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
  filters = {}

   constructor(private crudServ: CrudService) {
    crudServ.GetUsersList().valueChanges().subscribe( data => {
      //this.datalist = data;
      this.filters['stripe'] = val => val == 1
      this.filteredList = _.filter(data, _.conforms(this.filters) )
    })
   }
}
