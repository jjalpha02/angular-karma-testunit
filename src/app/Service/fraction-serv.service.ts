import { Injectable } from '@angular/core';
import { Fraction } from '../Objets/Fraction';

@Injectable({
  providedIn: 'root'
})
export class FractionServService {
  public num1: number = 0;
  public num2: number = 0;
  public den1: number = 0;
  public den2: number = 0;
  public fract3: Fraction = {
                              numerateur: 0,
                              denominateur: 0
                            };

  constructor() { }

  public  ajouter(fract1: Fraction, fract2: Fraction) {
    fract3: Fraction;
    this.num1 = fract1.numerateur * fract2.denominateur;
    this.num2 = fract2.numerateur * fract1.denominateur;
    this.den1 = fract1.denominateur * fract2.denominateur;

    this.fract3 = {
      numerateur: this.num1 + this.num2,
      denominateur: this.den1
    }

    return this.fract3;
  };

  public  diviser(fract1: Fraction, fract2: Fraction) {
    fract3: Fraction;
    this.num1 = fract1.numerateur * fract2.denominateur;
    this.den1 = fract1.denominateur * fract2.numerateur;

    this.fract3 = {
      numerateur: this.num1,
      denominateur: this.den1
    }

    return this.fract3;
  };

  public  soustraire(fract1: Fraction, fract2: Fraction) {
    fract3: Fraction;
    this.num1 = fract1.numerateur * fract2.denominateur;
    this.num2 = fract2.numerateur * fract1.denominateur;
    this.den1 = fract1.denominateur * fract2.denominateur;

    this.fract3 = {
      numerateur: this.num1 - this.num2,
      denominateur: this.den1
    }

    return this.fract3;
  };

  public  multipier(fract1: Fraction, fract2: Fraction) {
    fract3: Fraction;
    this.num1 = fract1.numerateur * fract2.numerateur;
    this.den1 = fract1.denominateur * fract2.denominateur;

    this.fract3 = {
      numerateur: this.num1,
      denominateur: this.den1
    }

    return this.fract3;
  };
}
