import React from 'react';

const GrafanaEmbed = () => {
  const grafanaUrl = 'http://localhost:3000/d-solo/abc123/dashboard-name?orgId=1&panelId=2&theme=light';

  return (
    <div style={{ width: '100%', height: '500px' }}>
     <iframe src="http://localhost:3000/dashboard-solo/new?orgId=1&from=1729048739724&to=1729070339724&panelId=1" width="100%" height="100%" frameborder="0"></iframe>
    </div>
  );
};

export default GrafanaEmbed;
