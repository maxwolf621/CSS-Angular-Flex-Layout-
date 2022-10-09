import { Component, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-fx-layout',
  templateUrl: './fx-layout.component.html',
  styleUrls: ['./fx-layout.component.css']
})
export class FxLayoutComponent implements OnInit {

  public mediaAlias$: Observable<{ mqAlias: string, mediaQuery: string }>;
  
  /**
   * 
   * matches - whether the mediaQuery  \
   *            is currently activated, 
   *            defaults to false
   * mediaQuery - e.g. (min-width: 600px) 
   *              and (max-width: 959px), defaults to ‘all’
   * mqAlias- e.g. gt-sm, md, gt-lg, defaults to ‘’
   * suffix - e.g. GtSM, Md, GtLg, defaults to ‘’
   */
  constructor(private mediaObserver : MediaObserver){
    this.mediaAlias$ = mediaObserver.asObservable().pipe(
      map((value: MediaChange[]) => {
      return {
        mqAlias: value[0].mqAlias,
        mediaQuery: value[0].mediaQuery
      }
    }));
  }
  ngOnInit(){
    this.mediaAlias$.subscribe(
      value=>(console.log(value))
    )
  }
}