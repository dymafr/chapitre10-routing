import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public users: any[] = [
    {
      name: 'Jean',
      id: 1
    },
    {
      name: 'Paul',
      id: 2
    },
    {
      name: 'Julie',
      id:3
    }
  ]


  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    console.log(this.activatedRoute.data.subscribe( data => {
      console.log(data.user)
    }))
  }

  redi(name: string, id: number){
    this.router.navigate(['/users', id], {
      queryParams: {
        name: name
      }
  })
  }

}
