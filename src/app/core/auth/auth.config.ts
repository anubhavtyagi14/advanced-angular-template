import { UserManagerSettings } from 'oidc-client';
import { environment } from '@env/environment';

export const authConfig: UserManagerSettings = {
  authority: environment.stsAuthority,
  client_id: environment.clientId,
  redirect_uri: `${environment.clientRoot}signin-callback`,
  scope: 'openid profile projects-api',
  response_type: 'code',
  post_logout_redirect_uri: `${environment.clientRoot}signout-callback`,
  automaticSilentRenew: true,
  silent_redirect_uri: `${environment.clientRoot}assets/silent-callback.html`
}
