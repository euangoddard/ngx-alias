import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly value$ = new BehaviorSubject(0);

  increment(): void {
    this.value$.next(this.value$.getValue() + 1);
  }
}
