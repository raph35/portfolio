import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnoMaitriseComponent } from './techno-maitrise.component';

describe('TechnoMaitriseComponent', () => {
  let component: TechnoMaitriseComponent;
  let fixture: ComponentFixture<TechnoMaitriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnoMaitriseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnoMaitriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
