#  Premium Calculator

這是一個使用 **React (Vite)** + **Flask** 實作的壽險保費計算器，前後端分離架構。  
使用者輸入年齡、性別、保額、和繳費年期，即可即時獲得對應的公平保費試算結果。

---

##  專案結構
premium-calculator/
├── backend/ # Flask 後端 API
│ ├── app.py
│ ├── calculator.py
│ ├── mortality_tables.xlsx
│
├── frontend/ # React + Vite 前端

---

##  Demo 網址
- Insurance Premium Calculator(公平保費試算器)：[https://insurance-premium-calculator-36ud.onrender.com/]

---

##  使用技術

### 🔹 前端
- React (Vite)
- JavaScript / CSS

### 🔹 後端
- Flask
- Python
- Excel

---
##  優化目標
-  改進保費計算模型邏輯，納入更多壽險商品（ex: 還本壽險、分紅型保單）
-  加入輸入驗證（防止負數、空值、年齡限制等）
-  利率假設使用殖利率曲線


---

##  作者
何柏翰

---
