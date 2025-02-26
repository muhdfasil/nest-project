import { Component } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-all-details',
  imports: [],
  templateUrl: './all-details.component.html',
  styleUrl: './all-details.component.css'
})
export class AllDetailsComponent {
  constructor(public api:ApiService){}
  details:any=[]
  ngOnInit(){
    this.api.getDetails().subscribe((data:any)=>{
      this.details=data.users;
    })
  }
  

}
