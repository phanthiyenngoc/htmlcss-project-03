import React from 'react';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';

function LayoutDefault(props){
    return (
        <div>
            <AppHeader />
            {props.children}
            <AppFooter />
        </div>
    );
};

export default LayoutDefault;