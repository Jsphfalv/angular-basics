import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 45;
  public realName: string = 'Tony Stark';

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroeDescription(): string {
    return `${this.name}-${this.age}`;
  }

  changeHero(): void {
    this.name = 'Spiderman';
    this.realName = 'Peter Parker';
  }

  changeAge(): void {
    this.age = 25;
  }

  Reset(): void {
    this.name = 'Ironman';
    this.realName = 'Tony Stark';
    this.age = 45;
  }
}
