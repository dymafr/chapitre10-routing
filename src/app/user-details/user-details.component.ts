import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  public id: string;
  public name: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.id = params.id
    })

    this.activatedRoute.queryParams.subscribe( qp => {
      this.name = qp.name
    })

    this.activatedRoute.fragment.subscribe( f => {
      console.log(f);
    })
  }


}
