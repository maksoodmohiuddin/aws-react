import React from 'react';
import logo from './logo.svg';
import './App.css';

import API, { graphqlOperation } from '@aws-amplify/api'
import config from './aws-exports';
// using hooks
import { useEffect, useReducer } from 'react' 
import { listNotificationEventss } from './graphql/queries';

// Configure Amplify
API.configure(config);

const initialState = {notificationevents:[]};
const reducer = (state, action) =>{
  switch(action.type){
    case 'QUERY':
      return {...state, notificationevents:action.notificationevents}
    case 'SUBSCRIPTION':
      return {...state, notificationevents:[...state.notificationevents, action.notificationevent]}
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    const notificationEventsData = await API.graphql(graphqlOperation(listNotificationEventss))
    dispatch({type:'QUERY', notificationevents: notificationEventsData.data.listNotificationEventss.items});
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Notifications Events
        </p>
        <div>
          { state.notificationevents.map((notificationevent, i) => <p key={notificationevent.id}>{notificationevent.name} at {notificationevent.description}</p>) }
        </div>
   
        </header>
        
    </div>
  );
}

export default App;