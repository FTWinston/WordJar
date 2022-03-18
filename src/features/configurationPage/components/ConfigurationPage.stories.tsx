import { ConfigurationPage as PageComponent } from './ConfigurationPage';
import { action } from '@storybook/addon-actions'
import { defaultGameRules } from 'src/utils/defaultGameRules';

export default {
    title: 'Configuration Page',
    component: PageComponent,
};

export const ConfigurationPage = () => (
    <PageComponent
        onSave={action('save')}
        {...defaultGameRules}
    />
);
