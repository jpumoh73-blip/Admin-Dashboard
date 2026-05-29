function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold' }}>My Dashboard</h1>
      
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        
        <div style={{ background: '#3b82f6', color: 'white', padding: '20px', borderRadius: '8px', flex: 1 }}>
          <h3>Revenue</h3>
          <p style={{ fontSize: '24px' }}>₦1.2M</p>
        </div>
        
        <div style={{ background: '#10b981', color: 'white', padding: '20px', borderRadius: '8px', flex: 1 }}>
          <h3>Users</h3>
          <p style={{ fontSize: '24px' }}>2.2M,</p>
        </div>
        <div style={{ background: '#f59e0b', color: 'white', padding: '20px', borderRadius: '8px', flex: 1 }}>
          <h3>Orders</h3>
          <p style={{ fontSize: '24px' }}>1.2M</p>
        </div>
        
        
      </div>
    </div>
  );
}

export default App;