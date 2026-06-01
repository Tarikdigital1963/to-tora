const express = require("express");
const app = express();

const products = [
  {name:"Smart Watch", price:"19.99€", img:"https://images.unsplash.com/photo-1523275335684-37898b6baf30", link:"https://www.aliexpress.com/"},
  {name:"Wireless Earbuds", price:"14.99€", img:"https://images.unsplash.com/photo-1585386959984-a41552231693", link:"https://www.aliexpress.com/"},
  {name:"Phone Stand", price:"5.99€", img:"https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f", link:"https://www.aliexpress.com/"},
  {name:"LED Lamp", price:"12.99€", img:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c", link:"https://www.aliexpress.com/"},
  {name:"Gaming Mouse", price:"22.99€", img:"https://images.unsplash.com/photo-1527814050087-3793815479db", link:"https://www.aliexpress.com/"},
  {name:"Keyboard", price:"29.99€", img:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8", link:"https://www.aliexpress.com/"},
  {name:"Smart Light", price:"9.99€", img:"https://images.unsplash.com/photo-1503602642458-232111445657", link:"https://www.aliexpress.com/"},
  {name:"Fitness Band", price:"17.99€", img:"https://images.unsplash.com/photo-1510017803434-a899398421b3", link:"https://www.aliexpress.com/"},
  {name:"USB Hub", price:"8.99€", img:"https://images.unsplash.com/photo-1587829741301-dc798b83add3", link:"https://www.aliexpress.com/"},
  {name:"Mini Speaker", price:"11.99€", img:"https://images.unsplash.com/photo-1589003077984-894e133dabab", link:"https://www.aliexpress.com/"},
  {name:"Tripod", price:"13.99€", img:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32", link:"https://www.aliexpress.com/"},
  {name:"VR Headset", price:"39.99€", img:"https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac", link:"https://www.aliexpress.com/"},
  {name:"Action Camera", price:"49.99€", img:"https://images.unsplash.com/photo-1519183071298-a2962be96f83", link:"https://www.aliexpress.com/"},
  {name:"Smart Plug", price:"10.99€", img:"https://images.unsplash.com/photo-1584277261846-69c89f05b4e8", link:"https://www.aliexpress.com/"},
  {name:"Desk Organizer", price:"7.99€", img:"https://images.unsplash.com/photo-1583947215259-38e31be8751f", link:"https://www.aliexpress.com/"}
];

app.get("/", (req,res)=>{

let html = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>TO TORA</title>

<style>
body{
  margin:0;
  font-family:Arial;
  background:#0b0b0b;
  color:white;
}

h1{
  text-align:center;
  font-size:55px;
  color:#00ffcc;
  margin-top:30px;
}

.grid{
  display:grid;
  grid-template-columns:repeat(auto-fit, minmax(220px,1fr));
  gap:15px;
  padding:20px;
}

.card{
  background:#1a1a1a;
  border-radius:12px;
  overflow:hidden;
  transition:0.3s;
}

.card:hover{
  transform:scale(1.05);
}

img{
  width:100%;
  height:160px;
  object-fit:cover;
}

.content{
  padding:10px;
}

.price{
  color:#00ffcc;
  font-weight:bold;
}

button{
  width:100%;
  padding:10px;
  background:#00ffcc;
  border:none;
  font-weight:bold;
  cursor:pointer;
}
</style>

</head>

<body>

<h1>TO TORA</h1>

<div class="grid">
`;

products.forEach(p=>{
  html += `
  <div class="card">
    <img src="${p.img}">
    <div class="content">
      <h3>${p.name}</h3>
      <p class="price">${p.price}</p>
      <button onclick="window.open('${p.link}','_blank')">
        Acheter
      </button>
    </div>
  </div>
  `;
});

html += `
</div>
</body>
</html>
`;

res.send(html);
});

app.listen(3000,"0.0.0.0",()=>{
  console.log("TO TORA 15 produits lancé");
});
