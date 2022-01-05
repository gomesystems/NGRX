import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { decrementaContador, IAppState, incrementaContador } from './store/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx';
 
constructor(private store: Store<{app: IAppState}>) {}

  //counter = 0 ;
  //passo o alias do reducer acima

  counter$ = this.store.select('app')
  .pipe(
    map(e => e.counter)
  );

  incrementaContador(){
    this.store.dispatch(incrementaContador())
  }

  decrementaContador(){
    this.store.dispatch(decrementaContador())
  }
  
}
