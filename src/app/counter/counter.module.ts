import { NgModule } from '@angular/core';
import { CounterComponent } from './components/hero/counter.component';

@NgModule({
  declarations: [CounterComponent],
  exports: [CounterComponent],
})
export class CounterModule {}
