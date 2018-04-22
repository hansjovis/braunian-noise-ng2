import { TestBed, inject } from '@angular/core/testing';

import { NewArticleService } from './new-article.service';

describe('NewArticleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewArticleService]
    });
  });

  it('should be created', inject([NewArticleService], (service: NewArticleService) => {
    expect(service).toBeTruthy();
  }));
});
