import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';

import { NgrxErrorEffects } from './ngrx-error.effects';

describe('NgrxErrorEffects', () => {
  let actions;
  let effects: NgrxErrorEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [NgrxErrorEffects, provideMockActions(() => actions)],
    });

    effects = TestBed.inject(NgrxErrorEffects);
  });

  describe('someEffect', () => {
    it('should work', async () => {
      expect(true).toBeTruthy();
    });
  });
});
