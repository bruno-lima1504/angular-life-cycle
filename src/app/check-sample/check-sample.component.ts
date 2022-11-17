import { Component, OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy {

  quantidade: number = 0;

  adicionar(){
    this.quantidade += 1
  }

  decrementar() {
    this.quantidade -= 1
  }

  ngAfterViewInit(): void {
    console.log("AfterViewInit");
  }

  ngAfterViewChecked(): void {
    console.log("AfterViewChecked");
  }

  ngAfterContentInit(): void {
    console.log("AfterContentInit");
  }
  
  ngAfterContentChecked(): void {
    console.log("AfterContentChecked");
  }

  ngDoCheck(): void {
    console.log("DoCheck");
  }

  ngOnInit(): void {
    console.log("OnInit");
  }

  constructor() { }
  ngOnDestroy(): void {
    console.log("goodbye my friend")
  }
}
