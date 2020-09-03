import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { ScrollSpy } from 'materialize-css';
import { MenuTab } from '../../../shared/models/menuTab';
import { Brick } from '../../../shared/models/brick';
import { LanguageService } from 'src/app/shared/services/language.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-webpage',
  templateUrl: './webpage.component.html',
  styleUrls: ['./webpage.component.scss'],
})
export class WebpageComponent implements OnInit {
  // change to https://democracy-life.web.app/ in production
  // https://democracy-life.web.app/home
  // http://localhost:4200/ in development
  link = 'https://democracy-life.web.app/home';
  ideenID = 'ideen';
  gruppenID = 'gruppen';
  eventID = 'events';
  searchID = 'search';
  kommunikationID = 'kommunikation';
  datenID = 'daten';
  prototypID = 'prototyp';
  clickDummyID = 'clickdummy';
  supportID = 'support';
  contactID = 'kontakt';
  teamID = 'team';
  faqID = 'faq';
  impressumID = 'impressum';

  ideasVideos: string[] = [
    '../assets/videos/Idee Erstellen-12.m4v',
    '../assets/videos/Idee Bearbeiten-11.m4v',
    '../assets/videos/Idee Teilen-13.m4v',
    '../assets/videos/Idee Unterstützer-10.m4v'
  ];

  groupVideos: string[] = [
    '../assets/videos/Group Erstellen-7.m4v',
    '../assets/videos/Group Aufgaben-5.m4v',
    '../assets/videos/Group Events-8.m4v',
    '../assets/videos/Group Ideen-6.m4v',
    '../assets/videos/Group Übersicht Und Administration-9.m4v',
  ];

  eventVideos: string[] = [
    '../assets/videos/Event Erstellen-2.m4v',
    '../assets/videos/Event Themen Hinzufügen-1.m4v',
    '../assets/videos/Event Wählen-3.m4v',
    '../assets/videos/Events Protokolle Und Aufgaben-4.m4v'
  ];

  communicationVideos: string[] = [
    '../assets/videos/Kommunikation-14.m4v',
  ];

  searchVideos: string[] = [
    '../assets/videos/Suche-16.m4v'
  ];

  dataVideos: string[] = [
    '../assets/videos/Registrierung-15.m4v'
  ];

  offsetRef: HTMLElement;
  offSetTopLoesungen: number;
  offSetTopPrototyp: number;

  scrollSpyRef1: HTMLElement;
  scrollSpy1: ScrollSpy;

  scrollSpyRef2: HTMLElement;
  scrollSpy2: ScrollSpy;

  translation: string;
  ideaArguments$: Observable<Brick[]>;
  eventArguments$: Observable<Brick[]>;
  groupArguments$: Observable<Brick[]>;
  searchArguments$: Observable<Brick[]>;
  communicationArguments$: Observable<Brick[]>;
  dataArguments$: Observable<Brick[]>;

  ideaHeadline$: Observable<string>;
  groupHeadline$: Observable<string>;
  eventHeadline$: Observable<string>;
  searchHeadline$: Observable<string>;
  communicationHeadline$: Observable<string>;
  dataHeadline$: Observable<string>;

  menuLoesungTabList$: Observable<MenuTab[]>;
  menuTabList$: Observable<MenuTab[]>;

  highlight$: Observable<string>;

  constructor(
    private elementRef: ElementRef,
    private languageService: LanguageService) { }

  ngOnInit(): void {
    this.scrollSpyRef1 = this.elementRef.nativeElement.querySelectorAll('.scrollspy');
    this.scrollSpy1 = ScrollSpy.init(this.scrollSpyRef1);

    this.scrollSpyRef2 = this.elementRef.nativeElement.querySelectorAll('.scrollspy2');
    this.scrollSpy2 = ScrollSpy.init(this.scrollSpyRef2);

    this.ideaArguments$ = this.languageService.getTranslationObservable('ideaArguments', 'landing');
    this.groupArguments$ = this.languageService.getTranslationObservable('groupArguments', 'landing');
    this.eventArguments$ = this.languageService.getTranslationObservable('eventArguments', 'landing');
    this.searchArguments$ = this.languageService.getTranslationObservable('searchArguments', 'landing');
    this.communicationArguments$ = this.languageService.getTranslationObservable('communicationArguments', 'landing');
    this.dataArguments$ = this.languageService.getTranslationObservable('dataArguments', 'landing');

    this.ideaHeadline$ = this.languageService.getTranslationObservable('ideasHeadline', 'landing');
    this.groupHeadline$ = this.languageService.getTranslationObservable('groupsHeadline', 'landing');
    this.eventHeadline$ = this.languageService.getTranslationObservable('eventsHeadline', 'landing');
    this.searchHeadline$ = this.languageService.getTranslationObservable('searchHeadline', 'landing');
    this.communicationHeadline$ = this.languageService.getTranslationObservable('communicationHeadline', 'landing');
    this.dataHeadline$ = this.languageService.getTranslationObservable('dataHeadline', 'landing');

    this.menuLoesungTabList$ = this.languageService.getTranslationObservable('menuLoesungTabList', 'landing');
    this.menuTabList$ = this.languageService.getTranslationObservable('menuTabList', 'landing');
    this.highlight$ = this.languageService.getTranslationObservable('highLight', 'landing');

  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    this.getOffSetTop('#solutions');
    this.offSetTopLoesungen = this.offsetRef.offsetTop;

    this.getOffSetTop('#prototyp');
    this.offSetTopPrototyp = this.offsetRef.offsetTop;
   }

  getOffSetTop(id: string): void {
    this.offsetRef = this.elementRef.nativeElement.querySelector(id);
  }

}
