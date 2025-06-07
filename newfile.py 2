<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>NeuroCoin</title>
  <style>
    body {
      background: #1b1b2f;
      color: white;
      font-family: sans-serif;
      text-align: center;
      margin: 0;
      padding: 0;
    }
    .coin {
      width: 150px;
      margin: 60px auto 10px;
      animation: pulse 2s infinite;
      cursor: pointer;
    }
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.1); }
      100% { transform: scale(1); }
    }
    .counter {
      font-size: 2em;
      margin-bottom: 20px;
    }
    .boost-btn {
      background: hotpink;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 12px;
      font-size: 1em;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <img src="https://i.imgur.com/hYKjjYT.png" class="coin" id="coin" alt="NeuroCoin"/>
  <div class="counter">Монет: <span id="counter">0</span></div>
  <button class="boost-btn" id="boost">⚡ Буст x2</button>

  <script>
    let counter = 0;
    let boost = 1;
    const counterEl = document.getElementById("counter");
    const coin = document.getElementById("coin");
    const boostBtn = document.getElementById("boost");

    coin.onclick = () => {
      counter += boost;
      counterEl.textContent = counter;
    };

    boostBtn.onclick = () => {
      boost = 2;
      boostBtn.disabled = true;
      boostBtn.textContent = "⚡ Буст активен (10с)";
      setTimeout(() => {
        boost = 1;
        boostBtn.disabled = false;
        boostBtn.textContent = "⚡ Буст x2";
      }, 10000);
    };
  </script>
</body>
</html>