import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { FormBuilder } from '@angular/forms';
import { getBrowserLang } from '@ngneat/transloco';
import { LanguageService } from '../../services/language.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-switch-language',
  templateUrl: './switch-language.component.html',
  styleUrls: ['./switch-language.component.scss']
})
export class SwitchLanguageComponent implements OnInit {
  selectLanguageForm = this.fb.group({
    language: ''
  });

  languages: any;
  selectedLanguage: string;

  switchLanguage$: Observable<string>;

  constructor(
    private fb: FormBuilder,
    private service: TranslocoService,
    private languageService: LanguageService
    ) { }

  ngOnInit(): void {
    const browserLanguage = getBrowserLang();
    if (browserLanguage) {
      this.service.setActiveLang(browserLanguage);
    } else {
      this.service.setActiveLang(this.service.getDefaultLang());
    }
    this.languages = this.service.getAvailableLangs();
    this.selectedLanguage = this.service.getActiveLang();

    this.switchLanguage$ = this.languageService.getTranslationObservable('switchLanguage', 'landing');
    this.switchLanguage$.subscribe();
  }

  changeLanguage(): void {
    console.log('language ', this.selectedLanguage);
    this.service.setActiveLang(this.selectedLanguage);
  }

}
