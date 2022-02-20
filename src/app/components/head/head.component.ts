import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {
  public isOpen: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }
  goHome(index:string) {
        this.router.navigateByUrl('/');
        this.goOpen()
    
  }
  goOpen(){
    this.isOpen = !this.isOpen

  }

  

}
