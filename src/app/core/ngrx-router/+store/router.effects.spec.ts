import { Location } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';

import { RouterEffects } from './router.effects';

describe('RouterEffects', () => {
  let actions;
  let effects: RouterEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({}), RouterTestingModule],
      providers: [RouterEffects, provideMockActions(() => actions), Location],
    });

    effects = TestBed.inject(RouterEffects);
  });

  describe('someEffect', () => {
    it('should work', async () => {
      expect(true).toBeTruthy();
    });
  });
});
