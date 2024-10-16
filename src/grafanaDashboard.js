import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GrafanaDashboard = () => {
  const [dashboards, setDashboards] = useState([]);
  const [newDashboard, setNewDashboard] = useState({
    title: '',
    uid: '',
    panels: []
  });

  const GRAFANA_URL = 'http://localhost:3000/api'; // URL da API do Grafana
  const API_KEY = 'glsa_NdmKXqviS5l2ieHja77A6EK8Y1WN5QAY_3f4e6d99'; // Coloque o token que você gerou aqui

  useEffect(() => {
    // Função para buscar dashboards existentes no Grafana
    const fetchDashboards = async () => {
      try {
        const response = await axios.get(`${GRAFANA_URL}/search`, {
          headers: { Authorization: `Bearer ${API_KEY}` }
        });
        setDashboards(response.data);
      } catch (error) {
        console.error('Erro ao buscar dashboards:', error);
      }
    };
    fetchDashboards();
  }, []);

  const createDashboard = async () => {
    const data = {
      dashboard: {
        title: newDashboard.title,
        uid: newDashboard.uid, // Identificador único para o dashboard
        panels: newDashboard.panels
      },
      overwrite: false // Evitar sobrescrever dashboards existentes
    };

    try {
      const response = await axios.post(`${GRAFANA_URL}/dashboards/db`, data, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json'
        }
      });
      console.log('Dashboard criado com sucesso:', response.data);
    } catch (error) {
      console.error('Erro ao criar o dashboard:', error);
    }
  };

  return (
    <div>
      <h1>Dashboards no Grafana</h1>
      <ul>
        {dashboards.map((dashboard) => (
          <li key={dashboard.uid}>
            {dashboard.title} (UID: {dashboard.uid})
          </li>
        ))}
      </ul>

      <h2>Criar Novo Dashboard</h2>
      <input
        type="text"
        placeholder="Título do Dashboard"
        value={newDashboard.title}
        onChange={(e) => setNewDashboard({ ...newDashboard, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="UID do Dashboard"
        value={newDashboard.uid}
        onChange={(e) => setNewDashboard({ ...newDashboard, uid: e.target.value })}
      />
      <button onClick={createDashboard}>Criar Dashboard</button>
    </div>
  );
};

export default GrafanaDashboard;
