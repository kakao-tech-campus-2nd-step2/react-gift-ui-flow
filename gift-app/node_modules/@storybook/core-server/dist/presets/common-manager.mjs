import { addons } from '@storybook/manager-api';
import { global } from '@storybook/global';

var STATIC_FILTER="static-filter";addons.register(STATIC_FILTER,api=>{let excludeTags=Object.entries(global.TAGS_OPTIONS??{}).reduce((acc,entry)=>{let[tag,option]=entry;return option.excludeFromSidebar&&(acc[tag]=!0),acc},{});api.experimental_setFilter(STATIC_FILTER,item=>{let tags=item.tags??[];return (tags.includes("dev")||item.type==="docs")&&tags.filter(tag=>excludeTags[tag]).length===0});});
