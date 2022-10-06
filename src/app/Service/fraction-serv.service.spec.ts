import { TestBed, inject } from '@angular/core/testing';
import { Fraction } from 'src/app/Objets/Fraction';
import { FractionServService } from './fraction-serv.service';

describe('FractionServService', () => {
  let service: FractionServService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FractionServService]
    });
    service = TestBed.inject(FractionServService);
  });

  it('should be created', inject([FractionServService], (service: FractionServService) => {
    expect(service).toBeTruthy();
  }));

  it("Ajouter Fonction OK", inject([FractionServService], (service: FractionServService) => {
    const fract1: Fraction = {
      numerateur: 1,
      denominateur: 2
    };
    const fract2: Fraction = {
      numerateur: 1,
      denominateur: 2
    };
    const fractR: Fraction = {
      numerateur: 4,
      denominateur: 4
    };

    //const fract3 = service.ajouter(fract1, fract2);
    expect(service.ajouter(fract1, fract2)).toEqual(fractR);
  }));

    it("Soustraire Fonction OK", inject([FractionServService], (service: FractionServService) => {
    const fract1: Fraction = {
      numerateur: 5,
      denominateur: 2
    };
    const fract2: Fraction = {
      numerateur: 1,
      denominateur: 2
    };
    const fractR: Fraction = {
      numerateur: 8,
      denominateur: 4
    };

    //const fract3 = service.ajouter(fract1, fract2);
    expect(service.soustraire(fract1, fract2)).toEqual(fractR);
    }));

    it("Multiplier Fonction OK", inject([FractionServService], (service: FractionServService) => {
    const fract1: Fraction = {
      numerateur: 1,
      denominateur: 2
    };
    const fract2: Fraction = {
      numerateur: 1,
      denominateur: 2
    };
    const fractR: Fraction = {
      numerateur: 1,
      denominateur: 4
    };

    //const fract3 = service.ajouter(fract1, fract2);
    expect(service.multipier(fract1, fract2)).toEqual(fractR);
    }));

    it("Diviser Fonction OK", inject([FractionServService], (service: FractionServService) => {
    const fract1: Fraction = {
      numerateur: 1,
      denominateur: 2
    };
    const fract2: Fraction = {
      numerateur: 1,
      denominateur: 2
    };
    const fractR: Fraction = {
      numerateur: 2,
      denominateur: 2
    };

    //const fract3 = service.ajouter(fract1, fract2);
    expect(service.diviser(fract1, fract2)).toEqual(fractR);
  }));

});
