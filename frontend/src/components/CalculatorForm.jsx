import { useState } from "react";
import axios from "axios";
import "./index.css";  // 記得這行要加進來！

export default function CalculatorForm() {
  const [age, setAge] = useState(30);
  const [gender, setGender] = useState("M");
  const [coverage, setCoverage] = useState(1000000);
  const [premium, setPremium] = useState(null);
  const [type, setType] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/calculate`, {
      age,
      gender,
      coverage,
      type,
    });
    setPremium(res.data.premium);
  };

  return (
    <div className="center-wrapper">
    
      <div className="form-container">
        <h1 className="form-title">公平保費試算器</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label>年齡：</label>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
          </div>

          <div className="form-row">
            <label>性別：</label>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="M">男</option>
              <option value="F">女</option>
            </select>
          </div>

          <div className="form-row">
            <label>保額：</label>
            <input type="number" value={coverage} onChange={(e) => setCoverage(e.target.value)} />
          </div>

          <div className="form-row">
            <label>繳費年期：</label>
            <select value={type} onChange={(e) => setType(Number(e.target.value))}>
              <option value= "1">五年定期險</option>
              <option value="2">二十年定期險</option>
              <option value="3">終身壽險</option>
            </select>
          </div>

          <div className="form-submit">
            <button type="submit">計算保費</button>
          </div>
        </form>

        {premium !== null && (
          <h3 className="form-result">
            試算保費結果：{premium.toLocaleString()} 元
          </h3>
        )}
      </div>
    </div>
  );
}