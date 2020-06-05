import { createAction, props } from '@ngrx/store';
import { NgrxRoute } from './router.state';

const go = createAction('[router] Go', props<{ to: NgrxRoute }>());
const back = createAction('[router] BACK');
const forward = createAction('[router] FORWARD');

export const NgrxRouterActions = {
  go, back, forward
};

