import React from 'react'
import {renderToString} from 'react-dom/server'
import App from './App'

window.render = function(template, model){
    const state = JSON.parse(model.state);
    const markup = renderToString(<App name={state.username} />);

    template = template.replace('_SERVER_STATE', model.state);
    return template.replace('SERVER_RENDERED_HTML', markup);
}