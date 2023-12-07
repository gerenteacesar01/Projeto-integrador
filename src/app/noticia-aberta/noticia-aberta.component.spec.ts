import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaAbertaComponent } from './noticia-aberta.component';

describe('NoticiaAbertaComponent', () => {
  let component: NoticiaAbertaComponent;
  let fixture: ComponentFixture<NoticiaAbertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiaAbertaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiaAbertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
