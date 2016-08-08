import { Component, OnInit } from '@angular/core';
import {HeroService} from "./hero.service";
import {Hero} from "./hero";
import {HeroDetailComponent} from "./hero-detail.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css'],
  directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService, private router: Router){}

  heroes: Hero[];
  selectedHero: Hero;
  error: any;

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  getHeroes(){
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit(){
    this.getHeroes();
  }

  gotoDetail() {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  addingHero: any;

  addHero() {
    this.addingHero = true;
    this.selectedHero = null;
  }

  close(savedHero: Hero) {
    this.addingHero = false;
    if (savedHero) {
      this.getHeroes();
    }
  }

  deleteHero(hero: Hero, event: any) {
    event.stopPropagation();
    this.heroService
      .delete(hero)
      .then(res => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero ) {
          this.selectedHero = null;
        }
      })
      .catch(error => this.error = error);
  }

}
