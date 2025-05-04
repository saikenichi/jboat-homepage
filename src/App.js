function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        alt="바다와 보트"
        style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
      />
      <h1>JBOAT 홈페이지</h1>
      <p>일본 중고 보트를 소개하고 구매를 도와드립니다.</p>
      <button
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          marginTop: "20px"
        }}
      >
        구매 의뢰하기
      </button>
    </div>
  );
}

export default App;
