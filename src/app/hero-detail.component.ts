import {Component, OnInit, Input, OnDestroy, EventEmitter, Output} from '@angular/core';
import {Hero} from "./hero";
import {HeroService} from "./hero.service";
import {ActivatedRoute} from "@angular/router";
import {NodeStyleEventEmmitter} from "rxjs/observable/FromEventObservable";

@Component({
  selector: 'app-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit, OnDestroy {
  @Input() hero: Hero;
  @Output() close = new EventEmitter();
  sub: any;
  error: any;
  navigated = false;
  savedHero: Hero;

  constructor(private heroService: HeroService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        let id = +params['id'];
        this.navigated = true;
        this.heroService.getHero(id)
          .then(hero => this.hero = hero);
      } else {
        this.navigated = false;
        this.hero = new Hero();
      }
    });
  }

  save() {
    this.heroService
      .save(this.hero)
      .then(hero => {
        this.hero = hero;
        this.goBack(hero);
      }).catch(error => this.error = error);
  }

  ngOnDestroy(){
    this.sub.unsubscribe();

  }
  // private goBack() {
  //   window.history.back();
  // }

  goBack(savedHero: Hero = null) {
    this.close.emit(savedHero);
    if(this.navigated) {
      window.history.back();
    }
  }

}
