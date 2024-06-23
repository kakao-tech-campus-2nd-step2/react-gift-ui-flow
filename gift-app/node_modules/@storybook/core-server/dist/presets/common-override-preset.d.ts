import { PresetProperty } from '@storybook/types';

declare const framework: PresetProperty<'framework'>;
declare const stories: PresetProperty<'stories'>;
declare const typescript: PresetProperty<'typescript'>;
declare const docs: PresetProperty<'docs'>;
declare const build: PresetProperty<'build'>;

export { build, docs, framework, stories, typescript };
