import 'ember-source/types';
import '@glint/environment-ember-loose';
import type EmberIntlRegistry from 'ember-intl/template-registry';
import type EmberWelcomePageRegistry from 'ember-welcome-page/template-registry';

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry
    extends EmberIntlRegistry,
      EmberWelcomePageRegistry {
    // local entries
  }
}
