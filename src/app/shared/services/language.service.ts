import { Injectable } from '@angular/core';
import { TranslocoService, TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private translocoService: TranslocoService) { }

  getTranslation(translationkey: string, translationScope: string) {
    this.translocoService.load('de').subscribe();
    this.translocoService.events$.pipe(filter(event => event.type === 'translationLoadSuccess')).subscribe(() => {
      const test = this.translocoService.translate(translationkey, {}, translationScope);
      // console.log(test);
    });
  }

  getTranslationObservable(translationkey: string, translationScope: string) {
    return this.translocoService.selectTranslate(translationkey, {}, translationScope);
    // test.subscribe((translation) => console.log(translation));
  }

  getTranslationObjectObservable(translationkey: string, translationScope: string) {
    const test = this.translocoService.selectTranslateObject(translationkey, {}, translationScope);
    // test.subscribe((translation) => console.log(translation));
  }
}
