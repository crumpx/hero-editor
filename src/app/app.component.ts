import { Component, OnInit } from '@angular/core';
import {Hero} from "./hero";
import {HEROES} from "./mock-heroes";
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroService} from "./hero.service";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ ROUTER_DIRECTIVES],
  providers: [HeroService]

})
export class AppComponent implements OnInit{
  title: 'Heroes!!!';

  ngOnInit(){

  }

  goBack(){
    window.history.back();
  }
}
