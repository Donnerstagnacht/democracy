import { Component, OnInit, ElementRef, HostListener, AfterViewInit } from '@angular/core';
import { Brick } from '../argument/brick';
import { ScrollSpy } from 'materialize-css';
import { MenuTab } from '../bar-side/menuTab';

@Component({
  selector: 'app-webpage',
  templateUrl: './webpage.component.html',
  styleUrls: ['./webpage.component.scss']
})
export class WebpageComponent implements OnInit, AfterViewInit {
  highlight = 'Wir können jederzeit Unterstützung gebrauchen!';

  ideasHeadline = 'Ideen & Anträge';
  ideasBrick: Brick[] = [
    {
      title: 'Entwickeln',
      text: `Das Herz einer Partei sind politische Ideen, Anträge und Debatten. Unsere App ermöglicht es Ideen
      gemeinsam zu entwickeln. Ein integriertes Vorschlags- und Abstimmungssystem strukturiert den
      Erstellprozess.`
    },
    {
      title: 'Automatisieren',
      text: `Die Idee wird automatisch an Events zur Beratung und Entscheidung weitergeleitet.`
    },
    {
      title: 'Teilen',
      text: `Ideen werden beworben und in andere soziale Netzwerke geteilt. Wer die Idee gut findet, kann die Idee
      klonen.`
    },
    {
      title: 'Vereinfachen',
      text: `Neue Supporter stärken die Relevanz. Mehr Raum für die Idee, weniger Raum für die
      Bürokratie.`
    }
  ];

  ideasImages: string[] = [
    '../assets/images/gifs/idee/Idee erstellen.gif',
    '../assets/images/gifs/idee/Idee bearbeiten1.gif',
    '../assets/images/gifs/idee/Idee bearbeiten2.gif',
    '../assets/images/gifs/idee/Idee bearbeiten3.gif',
    '../assets/images/gifs/idee/Idee teilen.gif',
    '../assets/images/gifs/idee/Idee unterstuetzer.gif'
  ];

  ideasVideos: string[] = [
    '../assets/videos/Event Erstellen-2.m4v',
    '../assets/videos/Event Themen Hinzufügen-1.m4v',
    '../assets/videos/Event Wählen-3.m4v',
    '../assets/videos/Events Protokolle Und Aufgaben-4.m4v'
  ];

  groupImages: string[] = [
    '../assets/images/gifs/group/Group erstellen.gif',
    '../assets/images/gifs/group/Group wiki.gif',
    '../assets/images/gifs/group/Group wiki administrators.gif',
    '../assets/images/gifs/group/Group ideen.gif',
    '../assets/images/gifs/group/Group events.gif'
  ];

  groupVideos: string[] = [
    '../assets/videos/Group Erstellen-7.m4v',
    '../assets/videos/Group Aufgaben-5.m4v',
    '../assets/videos/Group Events-8.m4v',
    '../assets/videos/Group Ideen-6.m4v',
    '../assets/videos/Group Übersicht Und Administration-9.m4v',
  ];

  eventsImages: string[] = [
    '../assets/images/gifs/events/Event erstellen.gif',
    '../assets/images/gifs/events/Event thema erstellen.gif',
    '../assets/images/gifs/events/Event waehlen.gif',
    '../assets/images/gifs/events/Event aufgaben und protokolle.gif'
  ];

  eventVideos: string[] = [
    '../assets/videos/Event Erstellen-2.m4v',
    '../assets/videos/Event Themen Hinzufügen-1.m4v',
    '../assets/videos/Event Wählen-3.m4v',
    '../assets/videos/Events Protokolle Und Aufgaben-4.m4v'
  ];

  communicationImages: string[] = [
    '../assets/images/gifs/kommunikation/Chat.gif',
    '../assets/images/gifs/kommunikation/Chat group.gif'
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

  groupsHeadline = 'Gruppen';
  groupsBrick: Brick[] = [
    {
      title: 'Organisieren',
      text: `Jede Gliederung hat ihren eigenen "Space". Ein gewähltes Administratorenteam leitet den Space.
      Ein Wiki bietet eine Übersicht über gewählte
      Mandatsträger, Untergruppen und politische Kerninhalte.`
    },
    {
      title: 'Diskutieren',
      text: `Jeder Space enthält einen Stream, in dem gemeinsam diskutiert wird. Tools zum Projektmanagement und ein
      Event-Tool ermöglichen mehr Power im Wahlkampf!`
    },
    {
      title: 'Informieren',
      text: `Alle Mitglieder werden automatisch über News informiert.`
    }
  ];

  eventsHeadline = 'Events';
  eventsBrick: Brick[] = [
    {
      title: 'Entscheiden',
      text: `Unser System automatisiert Veranstaltungen im Hintergrund und schafft Zeit für das Wesentliche:
      Politik zu gestalten und Entscheidungen zu treffen!`
    },
    {
      title: 'Koordinieren',
      text: `Unser Managementsystem für Events erstellt eine automatisierte Timeline. Themen
      werden integriert (z.B. Wahlen, Ideen usw.), Debatten koordiniert.`
    },
    {
      title: 'Aktualisieren',
      text: `Protokolle, ToDo Listen und Antragsweiterleitung werden gestartet. Enscheidungen liegen in Real Time
      weltweit vor. Politik wird schneller und nachvollziehbarer.`
    }
  ];

  searchHeadline = 'Smart Search';
  searchBrick: Brick[] = [
    {
      title: 'Inkludieren',
      text: `Unser System schafft einen dezentralen Zugang zu allen Informationen über
      politische Ideen,
      Schwerpuntke von Politikern, Anträge, Events, Aufgaben und Gliederungen - zu jedem Zeitpunkt und jedem
      Ort dieser Welt!`
    },
    {
      title: 'Finden',
      text: `Damit Informationen einen Mehrwert liefern, müssen die richtigen Informationen zum richtigen Zeitpunkt
      greifbar sein. Dazu liefern wir ein intelligentes Suchsystem mit.`
    },
    {
      title: 'Nutzen',
      text: `State of the art searching ermöglicht bessere Entscheidungen und einen Wissensvorsprung für bessere
      Kampagnen und bessere Wahlkämpfe.`
    }
  ];

  communicationHeadline = 'Kommunikation';
  communicationBrick: Brick[] = [
    {
      title: 'Chatten',
      text: `Moderne Chats ermöglichen moderne Kommunikation. Plattformübergreifende
      Integration ermöglicht die Integration klassischer Emailkommunikation.`
    },
    {
      title: 'Einbinden',
      text: `Unsere Streams binden alle Mitglieder in Diskussionen ein - unabhänig davon, ob sie Kinder ins Bett
      bringen oder Nachtschicht haben. Streams bilden das Herzstück unser internen Kommunikation. Perspektivisch können
      Verhinderte über Videochats zu Veranstaltungen dazukommen.`
    },
    {
      title: 'Erneuern',
      text: `Moderne Kommunikationstools ermöglichen moderne Arbeitsweisen und damit die Einbindung junger und neuer
      Mitglieder!`
    }
  ];

  dataHeadline = 'Daten & Inklusion';
  dataBrick: Brick[] = [
    {
      title: 'Vertraulich',
      text: `Die App benötigt nur Informationen, die bereits bekannt sind: Wo du wohnst, wo du politisch aktiv bist
      und welche Themen dich interessieren! Es werden keine zusätzlichen Informationen erhoben oder ausgewertet.`
    },
    {
      title: 'Global & barrierefrei',
      text: `Unser Netzwerk ist mehrsprachig, lässt sich vom Browser vorlesen und ist somit
      global und barrierefrei zugänglich.`
    },
    {
      title: 'Universal',
      text: `Die App selbst ist als Progressive Web App plattformunabhängig im Browser als auch in App-Stores z.B. im
      Google Playstore verfügbar. Damit sind alle Funktionen unabhängig von der technischen Ausstattung.`
    }
  ];

  menuTabList: MenuTab[] = [
    {
      tabName: 'HOME',
      tabLink: '#'
    },
    {
      tabName: 'LÖSUNGEN',
      tabLink: '#loesungen'
    },
    {
      tabName: 'PROTOTPY',
      tabLink: '#prototyp'
    },
    {
      tabName: 'SUPPORT',
      tabLink: '#support'
    },
    {
      tabName: 'KONTAKT',
      tabLink: '#kontakt'
    },
    {
      tabName: 'TEAM',
      tabLink: '#team'
    },
    {
      tabName: 'FAQ',
      tabLink: '#faq'
    },
    {
      tabName: 'IMPRESSUM',
      tabLink: '#impressum'
    },
  ];

  menuLoesungTabList: MenuTab[] = [
    {
      tabName: 'Ideen',
      tabLink: '#ideen'
    },
    {
      tabName: 'Gruppen',
      tabLink: '#gruppen'
    },
    {
      tabName: 'Events',
      tabLink: '#events'
    },
    {
      tabName: 'Smart Search',
      tabLink: '#search'
    },
    {
      tabName: 'Kommunikation',
      tabLink: '#kommunikation'
    },
    {
      tabName: 'Daten & Inklusion',
      tabLink: '#daten'
    },
  ];

  htmlElement: HTMLElement;
  offSetTopLoesungen: number;
  offSetTopPrototyp: number;

  elem: HTMLElement;
  instance: ScrollSpy;

  elem2: HTMLElement;
  instance2: ScrollSpy;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    // M.AutoInit();
    this.elem = this.elementRef.nativeElement.querySelectorAll('.scrollspy');
    this.instance = ScrollSpy.init(this.elem);

    this.elem2 = this.elementRef.nativeElement.querySelectorAll('.scrollspy2');
    this.instance2 = ScrollSpy.init(this.elem2);
  }

  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.

  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    this.getOffSetTop('#loesungen');
    this.offSetTopLoesungen = this.htmlElement.offsetTop;

    this.getOffSetTop('#prototyp');
    this.offSetTopPrototyp = this.htmlElement.offsetTop;
   }

  getOffSetTop(id: string): void {
    this.htmlElement = this.elementRef.nativeElement.querySelector(id);
  }

}
