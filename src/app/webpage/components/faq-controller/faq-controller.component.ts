import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../models/question';
import { Observable } from 'rxjs';
import { LanguageService } from 'src/app/shared/services/language.service';

@Component({
  selector: 'app-faq-controller',
  templateUrl: './faq-controller.component.html',
  styleUrls: ['./faq-controller.component.scss']
})
export class FaqControllerComponent implements OnInit {
  @Input() link: string;

  functionalHeadline$: Observable<string>;
  legalHeadline$: Observable<string>;
  introductionHeadline$: Observable<string>;
  implementationHeadline$: Observable<string>;

  functionalQuestions$: Observable<Question[]>;
  legalQuestions$: Observable<Question[]>;
  introductionQuestions$: Observable<Question[]>;
  implementationQuestions$: Observable<Question[]>;
  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
    this.functionalQuestions$ = this.languageService.getTranslationObservable('functionalQuestions', 'landing');
    this.legalQuestions$ = this.languageService.getTranslationObservable('legalQuestions', 'landing');
    this.introductionQuestions$ = this.languageService.getTranslationObservable('introductionQuestions', 'landing');
    this.implementationQuestions$ = this.languageService.getTranslationObservable('implementationQuestions', 'landing');

    this.functionalHeadline$ = this.languageService.getTranslationObservable('functionalHeadline', 'landing');
    this.legalHeadline$ = this.languageService.getTranslationObservable('legalHeadline', 'landing');
    this.introductionHeadline$ = this.languageService.getTranslationObservable('introductionHeadline', 'landing');
    this.implementationHeadline$ = this.languageService.getTranslationObservable('implementationHeadline', 'landing');
    this.functionalHeadline$.subscribe();
    this.legalHeadline$.subscribe();
    this.introductionHeadline$.subscribe();
    this.implementationHeadline$.subscribe();
  }

}
