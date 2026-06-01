const express = require("express");
const app = express();

const products = [
  {t:"Smart Watch Pro",p:"19.99€",i:"https://images.unsplash.com/photo-1523275335684-37898b6baf30"},
  {t:"Wireless Earbuds",p:"14.99€",i:"https://images.unsplash.com/photo-1585386959984-a41552231693"},
  {t:"Gaming Mouse",p:"22.99€",i:"https://images.unsplash.com/photo-1527814050087-3793815479db"},
  {t:"VR Headset",p:"39.99€",i:"https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac"},
  {t:"Smart Lamp",p:"11.99€",i:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c"},
  {t:"Action Camera",p:"49.99€",i:"https://images.unsplash.com/photo-1519183071298-a2962be96f83"},
  {t:"Smart Plug",p:"9.99€",i:"https://images.unsplash.com/photo-1584277261846-69c89f05b4e8"},
  {t:"Mini Speaker",p:"12.99€",i:"https://images.unsplash.com/photo-1589003077984-894e133dabab"},
  {t:"USB Hub",p:"8.99€",i:"https://images.unsplash.com/photo-1587829741301-dc798b83add3"}
];

app.get("/",(req,res)=>{

let html = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>TO TORA</title>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;600;800&display=swap" rel="stylesheet">

<style>

body{
margin:0;
font-family:Inter;
background:#0b0b0b;
color:white;
}

/* NAV */
nav{
display:flex;
justify-content:space-between;
align-items:center;
padding:15px 30px;
background:#0f0f0f;
border-bottom:1px solid #222;
}

.logo{
font-size:24px;
font-weight:800;
color:#00ffcc;
letter-spacing:3px;
}

.nav-links a{
color:white;
margin:0 10px;
text-decoration:none;
opacity:0.8;
}

.nav-links a:hover{
color:#00ffcc;
}

/* HERO */
.hero{
text-align:center;
padding:80px 20px;
background:radial-gradient(circle at top,#111,#000);
}

.hero h1{
font-size:65px;
color:#00ffcc;
margin:0;
}

.hero p{
opacity:0.7;
font-size:18px;
}

/* SOCIAL BUTTONS */
.social{
margin-top:20px;
}

.social a{
display:inline-block;
margin:5px;
padding:10px 15px;
border:1px solid #00ffcc;
color:white;
text-decoration:none;
border-radius:20px;
transition:0.3s;
}

.social a:hover{
background:#00ffcc;
color:black;
}

/* SECTIONS */
.section{
padding:30px;
font-size:20px;
font-weight:600;
color:#00ffcc;
}

/* GRID */
.grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:20px;
padding:20px 40px;
}

/* CARD */
.card{
background:#111;
border-radius:15px;
overflow:hidden;
transition:0.3s;
}

.card:hover{
transform:scale(1.05);
box-shadow:0 10px 25px rgba(0,255,204,0.2);
}

.card img{
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
padding:12px;
background:linear-gradient(90deg,#00ffcc,#00aaff);
border:none;
font-weight:bold;
cursor:pointer;
}

/* FOOTER */
footer{
text-align:center;
padding:40px;
border-top:1px solid #222;
opacity:0.7;
}

</style>

</head>

<body>

<nav>
<div class="logo">TO TORA</div>
<div class="nav-links">
<a href="#">Home</a>
<a href="#">Deals</a>
<a href="#">Contact</a>
</div>
</nav>

<div class="hero">
<h1>TO TORA</h1>
<p>Find the best AliExpress deals in one place</p>

<div class="social">
<a href="https://facebook.com" target="_blank">Facebook</a>
<a href="https://tiktok.com" target="_blank">TikTok</a>
<a href="https://instagram.com" target="_blank">Instagram</a>
</div>
</div>

<div class="section">🔥 Trending Products</div>

<div class="grid">
`;

products.forEach(p=>{
html += `
<div class="card">
<img src="${p.i}">
<div class="content">
<h3>${p.t}</h3>
<div class="price">${p.p}</div>
<button onclick="window.open('https://www.aliexpress.com','_blank')">
Acheter
</button>
</div>
</div>
`;
});

html += `
</div>

<footer>
TO TORA © Premium Affiliate Store — All rights reserved
</footer>

</body>
</html>
`;

res.send(html);
});

console.log("TO TORA FINAL UI lancé");
});
