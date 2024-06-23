import { removeAddon } from '@storybook/core-common';
import { Options, PresetPropertyFn, CoreConfig, PresetProperty, Indexer } from '@storybook/types';
import { Channel } from '@storybook/channels';

type OptionsWithRequiredCache = Exclude<Options, 'cache'> & Required<Pick<Options, 'cache'>>;

declare const staticDirs: PresetPropertyFn<'staticDirs'>;
declare const favicon: (value: string | undefined, options: Pick<Options, 'presets' | 'configDir'>) => Promise<string>;
declare const babel: (_: unknown, options: Options) => Promise<{}>;
declare const title: (previous: string, options: Options) => string | false;
declare const logLevel: (previous: any, options: Options) => any;
declare const previewHead: (base: any, { configDir, presets }: Options) => Promise<string>;
declare const env: () => Promise<Record<string, string>>;
declare const previewBody: (base: any, { configDir, presets }: Options) => Promise<string>;
declare const typescript: () => {
    check: boolean;
    reactDocgen: string;
    reactDocgenTypescriptOptions: {
        shouldExtractLiteralValuesFromEnum: boolean;
        shouldRemoveUndefinedFromOptional: boolean;
        propFilter: (prop: any) => boolean;
        savePropValueAsString: boolean;
    };
};
declare const experimental_serverAPI: (extension: Record<string, Function>, options: Options) => {
    removeAddon: typeof removeAddon;
};
/**
 * If for some reason this config is not applied, the reason is that
 * likely there is an addon that does `export core = () => ({ someConfig })`,
 * instead of `export core = (existing) => ({ ...existing, someConfig })`,
 * just overwriting everything and not merging with the existing values.
 */
declare const core: (existing: CoreConfig, options: Options) => Promise<CoreConfig>;
declare const features: PresetProperty<'features'>;
declare const csfIndexer: Indexer;
declare const experimental_indexers: PresetProperty<'experimental_indexers'>;
declare const frameworkOptions: (_: never, options: Options) => Promise<Record<string, any> | null>;
declare const docs: PresetProperty<'docs'>;
declare const managerHead: (_: any, options: Options) => Promise<string>;
declare const experimental_serverChannel: (channel: Channel, options: OptionsWithRequiredCache) => Promise<Channel>;
/**
 * Try to resolve react and react-dom from the root node_modules of the project
 * addon-docs uses this to alias react and react-dom to the project's version when possible
 * If the user doesn't have an explicit dependency on react this will return the existing values
 * Which will be the versions shipped with addon-docs
 */
declare const resolvedReact: (existing: any) => Promise<any>;
/**
 * Set up `dev-only`, `docs-only`, `test-only` tags out of the box
 */
declare const tags: (existing: any) => Promise<any>;
declare const managerEntries: (existing: any, options: Options) => Promise<any[]>;

export { babel, core, csfIndexer, docs, env, experimental_indexers, experimental_serverAPI, experimental_serverChannel, favicon, features, frameworkOptions, logLevel, managerEntries, managerHead, previewBody, previewHead, resolvedReact, staticDirs, tags, title, typescript };
