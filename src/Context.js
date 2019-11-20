import React from 'react';
import Store from './components/dummy-store';

const Context = React.createContext({
    folders: [],
    notes: []
});

export default Context;