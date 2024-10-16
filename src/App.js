import React from 'react';
import './App.css';
import GrafanaDashboard from './grafanaDashboard';
import GrafanaEmbed from './grafanaEmbed';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Integração com Grafana</h1>
        <GrafanaEmbed />

      </header>
    </div>
  );
}

export default App;
