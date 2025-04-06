import { useState } from "react";
import axios from "axios";

export default function CalculatorForm() {
  const [age, setAge] = useState(30);
  const [gender, setGender] = useState("M");
  const [coverage, setCoverage] = useState(1000000);
  const [premium, setPremium] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/calculate", {
      age,
      gender,
      coverage,
    });
    setPremium(res.data.premium);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>年齡：</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} /><br />
        
        <label>性別：</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="M">男</option>
          <option value="F">女</option>
        </select><br />
        
        <label>保額：</label>
        <input type="number" value={coverage} onChange={(e) => setCoverage(e.target.value)} /><br />
        
        <button type="submit">計算保費</button>
      </form>

      {premium !== null && (
        <h3>試算保費結果：{premium.toLocaleString()} 元</h3>
      )}
    </div>
  );
}