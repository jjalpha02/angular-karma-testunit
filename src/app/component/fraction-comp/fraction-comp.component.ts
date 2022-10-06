import { Component, OnInit } from '@angular/core';
import { Fraction } from 'src/app/Objets/Fraction';
import { FractionServService } from 'src/app/Service/fraction-serv.service';

@Component({
  selector: 'app-fraction-comp',
  templateUrl: './fraction-comp.component.html',
  styleUrls: ['./fraction-comp.component.scss']
})
export class FractionCompComponent implements OnInit {
  f1: Fraction = {
                    numerateur: 0,
                    denominateur: 0
  };
  f2: Fraction = {
                  numerateur: 0,
                  denominateur: 0
  };
  f3: Fraction = {
                  numerateur: 0,
                  denominateur: 0
  };



  constructor(private fractionService: FractionServService) { }

  ngOnInit(): void {
    this.f1.numerateur = 1;
    this.f1.denominateur = 2;
    this.f2.numerateur = 1;
    this.f2.denominateur = 2;

    this.f3 = this.fractionService.ajouter(this.f1, this.f2);
    console.log(this.f3)
  }

}
