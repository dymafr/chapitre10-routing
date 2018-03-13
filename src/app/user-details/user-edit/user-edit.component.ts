import { Component, OnInit } from '@angular/core';
import { CanComponentDeactivate } from '../../app.auth.guard';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit, CanComponentDeactivate {
  public save: boolean = false;


  canDeactivate(){
    if (this.save) {
      return true;
    } else {
      return confirm('Do you really want to leave without saving ?');
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
