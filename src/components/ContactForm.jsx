import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [statusMsg, setStatusMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg('Sending...');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      

      const data = await response.json();

      if (response.ok) {
        setStatusMsg(data.message || 'Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatusMsg(data.message || 'Failed to send message.');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setStatusMsg('Unable to connect to server. Is the backend running?');
      const response = await fetch('https://porchelvan-portfolio-backend.onrender.com/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '30px auto', padding: '24px', backgroundColor: '#18181b', borderRadius: '8px' }}>
      <h3 style={{ color: '#fff', marginBottom: '16px' }}>Send Me a Message</h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #3f3f46', backgroundColor: '#27272a', color: '#fff' }}
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #3f3f46', backgroundColor: '#27272a', color: '#fff' }}
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          rows="4" 
          value={formData.message} 
          onChange={handleChange} 
          required 
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #3f3f46', backgroundColor: '#27272a', color: '#fff' }}
        />
        <button 
          type="submit" 
          disabled={loading}
          style={{ 
            padding: '10px', 
            backgroundColor: loading ? '#4f46e5' : '#6366f1', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: loading ? 'not-allowed' : 'pointer', 
            fontWeight: 'bold' 
          }}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      {statusMsg && <p style={{ marginTop: '12px', color: '#818cf8', fontSize: '14px' }}>{statusMsg}</p>}
    </div>
  );
}

export default ContactForm;