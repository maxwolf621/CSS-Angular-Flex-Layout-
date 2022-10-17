import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  coms = [
    { name: 'home', link: 'home' },
    { name: 'Overflow&Flow&Clear', link: 'ofc' },
    { name: 'em&rem', link: 'emandrem' },
    { name: 'flexLayout', link: 'flexlayout' },
    { name: 'position', link: 'position' },
    { name: 'media-rwd', link: 'media-rwd' },
    { name: 'css-flex', link: 'cssf-lex' },
    {name : 'cdkPortal' , link: 'cdk-portal'}
  ];
}
