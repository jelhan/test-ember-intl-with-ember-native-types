import 'ember-source/types';
import '@glint/environment-ember-loose';
import type EmberWelcomePageRegistry from 'ember-welcome-page/template-registry';

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry
    extends EmberWelcomePageRegistry /* other addon registries */ {
    // local entries
  }
}
