declare const globalsNameReferenceMap: {
    readonly react: "__REACT__";
    readonly 'react-dom': "__REACT_DOM__";
    readonly '@storybook/components': "__STORYBOOK_COMPONENTS__";
    readonly '@storybook/channels': "__STORYBOOK_CHANNELS__";
    readonly '@storybook/core-events': "__STORYBOOK_CORE_EVENTS__";
    readonly '@storybook/core-events/manager-errors': "__STORYBOOK_CORE_EVENTS_MANAGER_ERRORS__";
    readonly '@storybook/router': "__STORYBOOK_ROUTER__";
    readonly '@storybook/theming': "__STORYBOOK_THEMING__";
    readonly '@storybook/icons': "__STORYBOOK_ICONS__";
    readonly '@storybook/manager-api': "__STORYBOOK_API__";
    readonly '@storybook/client-logger': "__STORYBOOK_CLIENT_LOGGER__";
    readonly '@storybook/types': "__STORYBOOK_TYPES__";
};
declare const globalPackages: ("react" | "react-dom" | "@storybook/components" | "@storybook/channels" | "@storybook/core-events" | "@storybook/core-events/manager-errors" | "@storybook/router" | "@storybook/theming" | "@storybook/icons" | "@storybook/manager-api" | "@storybook/client-logger" | "@storybook/types")[];

export { globalPackages, globalsNameReferenceMap };
