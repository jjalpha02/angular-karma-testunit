import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { Fraction } from 'src/app/Objets/Fraction';
import { FractionServService } from '../../Service/fraction-serv.service';
import { FractionCompComponent } from './fraction-comp.component';

describe('FractionCompComponent', () => {
  let component: FractionCompComponent;
  let fixture: ComponentFixture<FractionCompComponent>;
  let service: FractionServService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FractionCompComponent],
      providers: [FractionServService],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FractionCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should be created', inject([FractionServService], (service: FractionServService) => {
  //   expect(service).toBeTruthy();
  // }));

  // it("Ajouter Resultat OK", inject([FractionServService], (service: FractionServService) => {
  //   const fract1: Fraction = {
  //     numerateur: 1,
  //     denominateur: 2
  //   };
  //   const fract2: Fraction = {
  //     numerateur: 1,
  //     denominateur: 2
  //   };
  //   const fractR: Fraction = {
  //     numerateur: 4,
  //     denominateur: 4
  //   };

  //   //const fract3 = service.ajouter(fract1, fract2);
  //   expect(service.ajouter(fract1, fract2)).toEqual(fractR);
  // }));


});
