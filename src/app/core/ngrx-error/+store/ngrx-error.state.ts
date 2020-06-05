export const ngrxErrorFeatureKey = 'ngrxError';
export interface NgrxErrorState {
  code: number;
  message?: string;
}

// export interface NgrxErrorState {
//   readonly ngrxError: NgrxError;
// }

export const ngrxErrorInitialState: NgrxErrorState = {
  code: -1,
};
