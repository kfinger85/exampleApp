import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Margins/Header'
import Footer from './Margins/Footer'
import Body from './Body'

export default function Page() {
    return (
        
        <Body /> 
    );
}
ReactDOM.render(<Page />, document.getElementById('page'));
