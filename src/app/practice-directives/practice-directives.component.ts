import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice-directives',
  templateUrl: './practice-directives.component.html',
  styleUrls: ['./practice-directives.component.css']
})
export class PracticeDirectivesComponent implements OnInit {
  showPassword= false;
  logCounter= 0;
  logArray = [];

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.showPassword = !this.showPassword ;
    this.logCounter = this.logCounter + 1;
    this.logArray.push(this.logCounter + " " + new Date())
  }
}
