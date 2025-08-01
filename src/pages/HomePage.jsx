import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <h2 style={styles.title}>보호자 메인 화면</h2>
      <div style={styles.grid}>
        <button style={styles.card} onClick={() => navigate('/chatbot')}>
          <div style={styles.icon}>💬</div>
          <div style={styles.text}>챗봇 질문하기</div>
        </button>
        <button style={styles.card} onClick={() => navigate('/patient')}>
          <div style={styles.icon}>🧑‍⚕️</div>
          <div style={styles.text}>환자 정보 보기</div>
        </button>
        <button style={styles.card} onClick={() => navigate('/feedback')}>
          <div style={styles.icon}>📝</div>
          <div style={styles.text}>고객 평가 남기기</div>
        </button>
      </div>
    </div>
  );
};

const styles = {
  page: {
    textAlign: 'center',
    marginTop: '80px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  title: {
    fontSize: '28px',
    marginBottom: '40px',
    color: '#333',
    fontWeight: '600',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
    gap: '30px',
    justifyContent: 'center',
    maxWidth: '600px',
    margin: '0 auto',
  },
  card: {
    background: '#ffffff',
    border: '1px solid #eaeaea',
    borderRadius: '16px',
    width: '160px',
    height: '160px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
  },
  icon: {
    fontSize: '36px',
    marginBottom: '12px',
  },
  text: {
    fontSize: '16px',
    color: '#444',
    fontWeight: '500',
  },
};

// 버튼 호버 효과
styles.card[':hover'] = {
  transform: 'scale(1.05)',
  boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
};

export default HomePage;
