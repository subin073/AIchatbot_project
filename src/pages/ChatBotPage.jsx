import React, { useState } from 'react';
import FAQModal from '../components/FAQModal';

const ChatBotPage = () => {
  const [isFAQOpen, setIsFAQOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: '안녕하세요! 무엇을 도와드릴까요?' },
  ]);
  const [input, setInput] = useState('');

  const toggleFAQ = () => setIsFAQOpen(prev => !prev);

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessage = { sender: 'user', text: input };
    setMessages([...messages, newMessage]);
    setInput('');

    // 챗봇 응답 시뮬레이션
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { sender: 'bot', text: '좋은 질문이네요! 답변을 준비 중입니다.' },
      ]);
    }, 500);
  };

  return (
    <div style={styles.page}>
      {/* 헤더 */}
      <div style={styles.header}>
        <h2 style={styles.headerText}>AI Care 챗봇</h2>
        <button style={styles.faqBtn} onClick={toggleFAQ} title="FAQ 보기">❓</button>
      </div>

      {/* 채팅 영역 */}
      <div style={styles.chatArea}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              ...styles.message,
              ...(msg.sender === 'user' ? styles.userMessage : styles.botMessage),
            }}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* 입력창 */}
      <div style={styles.inputArea}>
        <input
          style={styles.input}
          placeholder="메시지를 입력하세요..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button style={styles.sendBtn} onClick={handleSend}>전송</button>
      </div>

      {/* FAQ 모달 */}
      {isFAQOpen && <FAQModal onClose={toggleFAQ} />}
    </div>
  );
};

const styles = {
  page: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    background: '#ffffff',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#333',
  },
  header: {
    background: '#f7f7f7',
    color: '#333',
    padding: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #ddd',
  },
  headerText: {
    margin: 0,
    fontSize: '20px',
    fontWeight: '600',
  },
  faqBtn: {
    background: '#eaeaea',
    color: '#555',
    border: '1px solid #ddd',
    borderRadius: '50%',
    width: '38px',
    height: '38px',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.25s ease',
  },
  chatArea: {
    flex: 1,
    padding: '20px',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    background: '#fafafa',
  },
  message: {
    maxWidth: '75%',
    padding: '12px 16px',
    borderRadius: '12px',
    fontSize: '15px',
    lineHeight: '1.5',
    wordBreak: 'break-word',
  },
  userMessage: {
    alignSelf: 'flex-end',
    background: '#d9eaff', // 파스텔 블루 (사용자)
    color: '#222',
    borderTopRightRadius: '0',
  },
  botMessage: {
    alignSelf: 'flex-start',
    background: '#f1f1f1', // 연회색 (봇)
    color: '#333',
    borderTopLeftRadius: '0',
  },
  inputArea: {
    display: 'flex',
    padding: '12px',
    borderTop: '1px solid #ddd',
    background: '#fff',
  },
  input: {
    flex: 1,
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    outline: 'none',
    fontSize: '15px',
    background: '#fff',
    color: '#333',
  },
  sendBtn: {
    marginLeft: '8px',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '8px',
    background: '#4a90e2', // 파스텔 블루 포인트
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
};

export default ChatBotPage;
