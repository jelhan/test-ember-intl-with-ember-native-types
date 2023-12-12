import { HelperLike } from '@glint/template';

export type PageTitle = abstract new <T>() => InstanceType<
  HelperLike<{
    Args: {
      Positional: [value: T];
    };
    Return: '';
  }>
>;

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'page-title': PageTitle;
  }
}
