export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url);

    const sharedCSS = `
      @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;900&display=swap');
      :root { --ice-blue: #a5f2ff; --bg: #050505; }
      @keyframes icePulse {
          0% { box-shadow: 0 0 15px rgba(165, 242, 255, 0.4); border-color: rgba(165, 242, 255, 0.3); }
          50% { box-shadow: 0 0 40px rgba(165, 242, 255, 0.8); border-color: rgba(165, 242, 255, 1); }
          100% { box-shadow: 0 0 15px rgba(165, 242, 255, 0.4); border-color: rgba(165, 242, 255, 0.3); }
      }
      @keyframes textIce {
          0% { text-shadow: 0 0 10px var(--ice-blue); color: var(--ice-blue); }
          50% { text-shadow: 0 0 25px #fff; color: #fff; }
          100% { text-shadow: 0 0 10px var(--ice-blue); color: var(--ice-blue); }
      }
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { background: var(--bg); color: #fff; font-family: 'Orbitron', sans-serif; min-height: 100vh; display: flex; flex-direction: column; align-items: center; overflow-x: hidden; }
      .glass-card { margin: 50px 20px; padding: 40px; width: 95%; max-width: 900px; background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 20px; backdrop-filter: blur(20px); animation: icePulse 4s infinite ease-in-out; }
      h1 { color: var(--ice-blue); text-transform: uppercase; letter-spacing: 5px; margin-bottom: 25px; }
      footer { margin-top: auto; padding: 40px; opacity: 0.4; font-size: 0.75rem; letter-spacing: 3px; text-align: center; }
      a { color: var(--ice-blue); text-decoration: none; transition: 0.3s; }
      a:hover { text-shadow: 0 0 15px var(--ice-blue); }
    `;

    const footerHTML = `
      <footer>
          <a href="/">HOME</a> | <a href="/impressum">IMPRESSUM</a> | <a href="/datenschutz">DATENSCHUTZ</a>
          <br><br>OSTpole IMP // STRATEGIC PROTOCOL // EST. 2004
      </footer>
    `;

    if (pathname === "/impressum") {
      return new Response(`<html><head><style>${sharedCSS}</style></head><body>
        <div class="glass-card"><h1>Impressum</h1><p>${ADMIRAL_NAME}<br>${ADMIRAL_STRASSE}<br>${ADMIRAL_PLZ_STADT}</p><p>Tel: ${ADMIRAL_PHONE}<br>Mail: ${ADMIRAL_MAIL}</p></div>${footerHTML}</body></html>`, { headers: { "Content-Type": "text/html" } });
    }

    if (pathname === "/datenschutz") {
      return new Response(`<html><head><style>${sharedCSS}</style></head><body>
        <div class="glass-card"><h1>Datenschutz</h1><p>Kein Tracking. Keine Cookies. Pure Souveränität.</p></div>${footerHTML}</body></html>`, { headers: { "Content-Type": "text/html" } });
    }

    const mainHTML = `<!DOCTYPE html><html><head><style>${sharedCSS}
      body { justify-content: center; overflow: hidden; cursor: none; }
      .frame { padding: 5rem; border: 2px solid var(--ice-blue); border-radius: 30px; background: rgba(255, 255, 255, 0.01); backdrop-filter: blur(15px); text-align: center; animation: icePulse 3s infinite ease-in-out; }
      h1.title { font-size: clamp(2.5rem, 8vw, 5.5rem); font-weight: 900; letter-spacing: 15px; animation: textIce 5s infinite ease-in-out; display: flex; align-items: flex-start; justify-content: center; }
      .imp-suffix { font-size: 0.35em; letter-spacing: 5px; margin-left: 10px; margin-top: 10px; opacity: 0.7; color: var(--ice-blue); vertical-align: super; }
      #cursor { width: 25px; height: 25px; border: 2px solid var(--ice-blue); border-radius: 50%; position: fixed; pointer-events: none; z-index: 9999; box-shadow: 0 0 15px var(--ice-blue); animation: icePulse 2s infinite ease-in-out; }
      .stars { position: absolute; width: 100%; height: 100%; z-index: 1; perspective: 1000px; }
      .star { position: absolute; background: #fff; border-radius: 50%; animation: m 10s infinite linear; }
      @keyframes m { from { transform: translateZ(-1000px); opacity: 0; } to { transform: translateZ(500px); opacity: 0; } }
    </style></head><body>
      <div id="cursor"></div><div class="stars" id="s"></div>
      <main class="frame">
          <h1 class="title">OSTpole<span class="imp-suffix">IMP</span></h1>
          <p style="color:var(--ice-blue);letter-spacing:10px;opacity:0.8;margin-top:20px;">STRATEGIC GNOSIS // EST. 2004</p>
      </main>
      <footer style="position:absolute;bottom:20px;opacity:0.3;"><a href="/impressum">IMPRESSUM</a> | <a href="/datenschutz">DATENSCHUTZ</a></footer>
      <script>
        const c=document.getElementById('cursor'); document.addEventListener('mousemove',e=>{c.style.left=e.clientX-12+'px';c.style.top=e.clientY-12+'px';});
        const f=document.getElementById('s'); for(let i=0;i<150;i++){const s=document.createElement('div');s.className='star';s.style.left=Math.random()*100+'%';s.style.top=Math.random()*100+'%';const z=Math.random()*2+1+'px';s.style.width=z;s.style.height=z;s.style.animationDelay=Math.random()*10+'s';f.appendChild(s);}
      </script></body></html>`;
    return new Response(mainHTML, { headers: { "Content-Type": "text/html" } });
  }
};
