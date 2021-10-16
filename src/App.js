import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import Login from './components/Login';


import './App.css';

const projectID = 'c7f64139-9fac-4781-a7d4-720f90b2037e';

const App = () => {

    if(!localStorage.getItem('username')) return <Login />

    return (
        <ChatEngine
            heigth="100vh"
            projectID={projectID}
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    );
}

export default App;
