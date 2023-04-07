import React from 'react';
import reportWebVitals from './reportWebVitals'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export * from './components/startmenu';
export * from './components/Battle';
export * from './components/Bar';
export * from './components/PlayerSummary';
export * from './components/BattleMenu';
export * from './components/BattleAnnouncer'
export * from './hooks'
export * from './components/MemoryGame'
export * from './App1'


export * from './components1/HomeScreen/HomeScreen'
export * from './components1/StartMenu1'
export * from './components1/Battle1'
export * from './components1/PlayerSummary1'
export * from './components1/Bar1'
export * from './components1/Shared1'
export * from './components1/BattleMenu1'
export * from './components1/BattleAnnouncer1'
export * from './components1/Hooks1'
export * from './components1/EndMenu1'


export * from './components2/HomeScreen2/HomeScreen2'
export * from './components2/StartMenu2/StartMenu2'
export * from './components2/Battle2/Battle2'
export * from './components2/PlayerSummary2/PlayerSummary2'
export * from './components2/Bar2/Bar2'
export * from './components2/Shared2'
export * from './components2/BattleMenu2/BattleMenu2'
export * from './components2/BattleAnnouncer2/BattleAnnouncer2'
export * from './components2/hooks2'
export * from './components2/EndMenu2'
export * from './data'




ReactDOM.render(<App/>,
document.getElementById('root'));
reportWebVitals();
