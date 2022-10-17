import {
  CdkPortal,
  CdkPortalOutlet,
  ComponentPortal,
  DomPortal,
  DomPortalOutlet,
  Portal,
  TemplatePortal,
} from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import {
  ApplicationRef,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  Inject,
  Injector,
  OnInit,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
} from '@angular/core';
import { PortalComponent } from '../portal/portal.component';

@Component({
  selector: 'app-cdk-portal',
  templateUrl: './cdk-portal.component.html',
  styleUrls: ['./cdk-portal.component.scss'],
})
export class CdkPortalComponent implements OnInit {
  //@ViewChild(CdkPortal) cdkPortalDirective : CdkPortal;
  @ViewChildren(CdkPortal) cdkPortalDirective: QueryList<CdkPortal>;
  @ViewChild('cdkPortalTemplateRef') cdkPortalTemplateRef: TemplateRef<any>;
  @ViewChild('domPortalElementRef')
  domPortalElementRef: ElementRef<HTMLElement>;
  @ViewChild('cdkPortalOutletTemplateRef')
  cdkPortalOutletDirective: CdkPortalOutlet;
  domPortalOutlet: DomPortalOutlet;

  currentCdkPortal: Portal<any>;

  // portal for component
  portalComponent: ComponentPortal<PortalComponent>;
  // port for TemplateRef
  templatePortal: TemplatePortal<any>;
  // port for HTMLelement

  // Context
  cdkPortalContext = {
    var: 'im da context',
  };

  domPortal: DomPortal<any>;
  constructor(
    private viewContainerRef: ViewContainerRef,
    private injector: Injector,
    @Inject(DOCUMENT) private document: any,
    private appRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {}

  // cdkPortal directive
  changePortal1() {
    this.currentCdkPortal = this.cdkPortalDirective.first;
    // add context
    this.cdkPortalDirective.first.context = this.cdkPortalContext;
  }
  // cdkPortal structrual directive
  changePortal2() {
    this.currentCdkPortal = this.cdkPortalDirective.last;
  }

  // insert cdk Portal templateRef
  changePortal3() {
    // temRef : templateRef<any> ,
    // v :ViewContainerRef,
    // context? :any
    this.currentCdkPortal = new TemplatePortal(
      this.cdkPortalTemplateRef,
      this.viewContainerRef,
      this.cdkPortalContext
    );
  }

  // Insert cdk Portal Component
  changePortal4() {
    this.portalComponent = new ComponentPortal(PortalComponent);
    this.currentCdkPortal = this.portalComponent;
  }

  // Insert Dom HTEMLelement
  changePortal5() {
    this.currentCdkPortal = new DomPortal(this.domPortalElementRef);
  }

  // dynamically DomPortalOutlet
  createOutletOutOfApp() {
    const element = this.document.createElement('div');
    element.innerHTML = '<br>&lt;div&gt;CONTENTS&lt;div&gt;';
    this.document.body.appendChild(element);
    this.domPortalOutlet = new DomPortalOutlet(element);
  }

  addTemplatePortal() {
    this.domPortalOutlet.attachTemplatePortal(this.cdkPortalDirective.last);
  }
}
