import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastsContainerComponent } from './toasts-container.component';
import { HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ToastsContainerComponent', () => {
  let component: ToastsContainerComponent;
  let fixture: ComponentFixture<ToastsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastsContainerComponent, HttpClientTestingModule],
      providers: [HttpHandler]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ToastsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
