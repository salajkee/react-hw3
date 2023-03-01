import React, { useState } from 'react';
import './App.css';
import Counter2 from './components/counter-2/Counter2';
import Counter from './components/counter/Counter';
import ShowHide from './components/showHide/ShowHide';
import ShowDialog from './components/showDialog/ShowDialog';
import Selected from './components/selected/Selected';
import UpdateName from './components/updateName/UpdateName';

function Tabs() {
  const [activeTab, setActiveTab] = useState(1);

  const toggleTab = (e) => {
    setActiveTab(+e.target.getAttribute('data-tab'));
  };

  return (
    <div className="tabs__wrapper">
      <ul className="tabs__list">
        <li onClick={toggleTab} data-tab="1">
          1
        </li>
        <li onClick={toggleTab} data-tab="2">
          2
        </li>
        <li onClick={toggleTab} data-tab="3">
          3
        </li>
        <li onClick={toggleTab} data-tab="4">
          4
        </li>
        <li onClick={toggleTab} data-tab="5">
          5
        </li>
        <li onClick={toggleTab} data-tab="6">
          6
        </li>
      </ul>

      <div
        className={
          activeTab === 1
            ? 'tabs__content tabs__content-active'
            : 'tabs__content'
        }
      >
        <Counter />
      </div>
      <div
        className={
          activeTab === 2
            ? 'tabs__content tabs__content-active'
            : 'tabs__content'
        }
      >
        <Counter2 />
      </div>
      <div
        className={
          activeTab === 3
            ? 'tabs__content tabs__content-active'
            : 'tabs__content'
        }
      >
        <ShowHide />
      </div>
      <div
        className={
          activeTab === 4
            ? 'tabs__content tabs__content-active'
            : 'tabs__content'
        }
      >
        <ShowDialog />
      </div>
      <div
        className={
          activeTab === 5
            ? 'tabs__content tabs__content-active'
            : 'tabs__content'
        }
      >
        <Selected />
      </div>
      <div
        className={
          activeTab === 6
            ? 'tabs__content tabs__content-active'
            : 'tabs__content'
        }
      >
        <UpdateName />
      </div>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <Tabs />
    </div>
  );
}

export default App;
