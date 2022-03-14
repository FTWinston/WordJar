import { LandingPage as PageComponent } from './LandingPage';
import { action } from '@storybook/addon-actions'

export default {
    title: 'Landing Page',
    component: PageComponent,
};

export const LandingPage = () => (
    <PageComponent
        onJoin={async () => Promise.resolve(true)}
        onHost={async () => Promise.resolve()}
    />
);
