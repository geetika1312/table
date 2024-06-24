import React from 'react';
import MembersList from './MembersList';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUsers, faBars } from '@fortawesome/free-solid-svg-icons';

library.add(faUsers, faBars);

function App() {
  return (
    <div className="App">
      <MembersList />
    </div>
  );
}

export default App;
