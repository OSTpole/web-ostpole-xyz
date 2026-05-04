export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url);

    const CONFIG = {
      titel: "OSTpole IMP",
      slogan: "STRATEGIC GNOSIS // EST. 2004",
      beschreibung: "Digitale Souveränität & Bionische Infrastruktur.<br>Ihre Vision, unsere Architektur.",
      
      links: {
        beq: "https://app-api.beq.com/visit?referral=FLddufm8V8YDuPWp7XMXagupB1L6adYk31rNtP0r0G83Uhhd2dHbOR9d1ihr39RA",
        youtube: "https://www.youtube.com/@ostpole",
        hub: "https://hub.ostpole.xyz"
      },

      impressum: "https://raw.githubusercontent.com/OSTpole/web-ostpole-xyz/main/OSTpole_IMP_ressum_2026.pdf",
      datenschutz: "https://raw.githubusercontent.com/OSTpole/web-ostpole-xyz/main/OSTpole_IMP_Datenschutzerklärung_DSGVO.pdf"
    };

    const styles = `
      @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;900&display=swap');
      :root { 
        --ice-blue: #a5f2ff; --bg: #050505; --yt-red: #ff4d4d; 
        --3g-purple: #d182ff; --hub-green: #8dff8d; 
        --bio-yellow: #ffffa1; --strat-orange: #ffb347; 
      }
      
      * { margin: 0; padding: 0; box-sizing: border-box; cursor: none !important; }
      body { background: var(--bg); color: #fff; font-family: 'Orbitron', sans-serif; min-height: 100vh; display: flex; flex-direction: column; align-items: center; overflow-x: hidden; }

      #bionic-cursor { position: fixed; width: 22px; height: 22px; border: 2px solid var(--ice-blue); border-radius: 50%; pointer-events: none; z-index: 9999; animation: cursorPulse 3s infinite; }
      @keyframes cursorPulse { 0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; } 50% { transform: translate(-50%, -50%) scale(1.3); opacity: 1; } }
      
      .stars { position: fixed; width: 100%; height: 100%; z-index: 1; perspective: 1000px; }
      .star { position: absolute; background: #fff; border-radius: 50%; animation: moveStars 15s infinite linear; }
      @keyframes moveStars { from { transform: translateZ(-1000px); opacity: 0; } to { transform: translateZ(500px); opacity: 0.8; } }

      /* --- DER LEBENDIGE RAHMEN --- */
      @keyframes framePulse {
        0%, 100% { 
          transform: scale(1); border-color: rgba(165, 242, 255, 0.3);
          box-shadow: 0 0 20px rgba(165, 242, 255, 0.1), inset 0 0 10px rgba(165, 242, 255, 0.05);
        }
        50% { 
          transform: scale(1.02); border-color: rgba(165, 242, 255, 1);
          box-shadow: 0 0 40px rgba(165, 242, 255, 0.6), 0 0 60px rgba(165, 242, 255, 0.2), inset 0 0 20px rgba(165, 242, 255, 0.3);
        }
      }
      .frame { 
        margin-top: 60px; padding: 40px; border: 2px solid var(--ice-blue); border-radius: 30px; 
        background: rgba(255, 255, 255, 0.02); backdrop-filter: blur(15px); text-align: center; 
        z-index: 10; width: 90%; max-width: 800px; animation: framePulse 4s infinite ease-in-out; 
      }

      h1 { font-size: clamp(1.5rem, 5vw, 3rem); letter-spacing: 12px; margin-bottom: 10px; color: var(--ice-blue); text-shadow: 0 0 15px var(--ice-blue); display: inline-block; position: relative; }
      @keyframes impFloat {
        0%, 100% { transform: translateY(0); text-shadow: 0 0 10px var(--ice-blue); opacity: 0.7; }
        50% { transform: translateY(-8px); text-shadow: 0 0 25px #fff; opacity: 1; }
      }
      .imp-sigil { font-size: 40%; vertical-align: super; position: absolute; animation: impFloat 6s infinite ease-in-out; letter-spacing: 4px; margin-left: 10px; }
      
      .btn { display: inline-block; padding: 12px 24px; border: 1px solid var(--ice-blue); color: var(--ice-blue); text-decoration: none; border-radius: 5px; margin: 10px; transition: 0.5s; font-size: 0.7rem; letter-spacing: 2px; }
      .btn-beq:hover { background: var(--ice-blue); color: #000; box-shadow: 0 0 30px var(--ice-blue); }
      .btn-yt:hover { border-color: var(--yt-red); color: var(--yt-red); box-shadow: 0 0 30px var(--yt-red); background: rgba(255, 77, 77, 0.1); }

      .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; width: 90%; max-width: 1000px; z-index: 10; margin: 40px 0; }
      .box { padding: 30px; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(165, 242, 255, 0.1); border-radius: 20px; transition: 0.6s ease; text-align: left; }
      .box h3 { margin-bottom: 15px; letter-spacing: 2px; transition: 0.4s; }
      .box p { font-size: 0.8rem; opacity: 0.6; line-height: 1.6; }

      /* FARB-INTERAKTIONEN (UPDATE) */
      .box-bionic:hover { border-color: var(--bio-yellow); box-shadow: 0 0 40px rgba(255, 255, 161, 0.2); transform: translateY(-5px); }
      .box-bionic:hover h3 { color: var(--bio-yellow); text-shadow: 0 0 10px var(--bio-yellow); }
      
      .box-3g:hover { border-color: var(--3g-purple); box-shadow: 0 0 40px rgba(209, 130, 255, 0.2); transform: translateY(-5px); }
      .box-3g:hover h3 { color: var(--3g-purple); text-shadow: 0 0 10px var(--3g-purple); }
      
      .box-strat:hover { border-color: var(--strat-orange); box-shadow: 0 0 40px rgba(255, 179, 71, 0.2); transform: translateY(-5px); }
      .box-strat:hover h3 { color: var(--strat-orange); text-shadow: 0 0 10px var(--strat-orange); }
      
      .box-hub:hover { border-color: var(--hub-green); box-shadow: 0 0 40px rgba(141, 255, 141, 0.2); transform: translateY(-5px); }
      .box-hub:hover h3 { color: var(--hub-green); text-shadow: 0 0 10px var(--hub-green); }

      footer { padding: 50px 20px; opacity: 0.4; font-size: 0.7rem; text-align: center; z-index: 10; width: 100%; margin-top: auto; border-top: 1px solid rgba(165, 242, 255, 0.1); }
      footer a { color: var(--ice-blue); text-decoration: none; margin: 0 20px; transition: 0.4s; letter-spacing: 2px; }
      footer a:hover { color: #fff; text-shadow: 0 0 10px #fff, 0 0 20px #fff; opacity: 1; }
    `;

    const html = `
      <!DOCTYPE html>
      <html lang="de">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>OSTpole IMP</title>
        <style>${styles}</style>
      </head>
      <body>
        <div id="bionic-cursor"></div>
        <div class="stars" id="s"></div>
        
        <main class="frame">
          <h1>OSTpole<span class="imp-sigil">IMP</span></h1>
          <p style="color:var(--ice-blue); letter-spacing: 6px; font-size:0.6rem; opacity:0.8; margin-bottom:20px;">${CONFIG.slogan}</p>
          <p style="font-size:0.9rem; line-height:1.6; opacity:0.9;">${CONFIG.beschreibung}</p>
          <div style="margin-top:30px;">
            <a href="${CONFIG.links.beq}" class="btn btn-beq" target="_blank">beQ > be connect App</a>
            <a href="${CONFIG.links.youtube}" class="btn btn-yt" target="_blank">YouTube > CHANNEL</a>
          </div>
        </main>

        <div class="grid">
          <div class="box box-bionic">
            <h3>BIONIC SYSTEMS</h3>
            <p>Souveräne Infrastrukturen seit 2004. Brückenbau zwischen Vision und Realität.</p>
          </div>
          <div class="box box-3g">
            <h3>3GALAXY WEB3</h3>
            <p>Sovereign Identity & DePIN. Wir validieren die Hardware-Zukunft der dezentralen Welt.</p>
          </div>
          <div class="box box-strat">
            <h3>STRATEGIC GNOSIS</h3>
            <p>Strategische Protokolle und Consulting für digitale Imperien auf höchstem Niveau.</p>
          </div>
          <div class="box box-hub">
            <h3>PROJECT HUB // LAB</h3>
            <p>Direkter Zugang zu Simulationen und Apps. Validiert nach <strong>422 CC Compliance Protocol</strong>.</p>
            <a href="${CONFIG.links.hub}" style="display:inline-block; margin-top:15px; color:var(--hub-green); font-size:0.7rem; text-decoration:none; letter-spacing:1px;">[ ZUM LABOR ]</a>
          </div>
        </div>

        <footer>
          <a href="${CONFIG.impressum}" target="_blank">IMPRESSUM</a>
          <span style="opacity:0.2;">|</span>
          <a href="${CONFIG.datenschutz}" target="_blank">DATENSCHUTZ</a>
          <br><br>
          <div style="font-size: 0.6rem; opacity: 0.5; letter-spacing: 1px;">DESIGN // STRATEGIC PROTOCOL // BY CHRISTOF SCHZYRBA</div>
        </footer>

        <script>
          const f=document.getElementById('s'); 
          for(let i=0;i<100;i++){
            const s=document.createElement('div'); s.className='star';
            s.style.left=Math.random()*100+'%'; s.style.top=Math.random()*100+'%';
            const z=Math.random()*2+1+'px'; s.style.width=z; s.style.height=z;
            s.style.animationDelay=Math.random()*15+'s'; f.appendChild(s);
          }
          const c = document.getElementById('bionic-cursor');
          document.addEventListener('mousemove', (e) => {
            c.style.left = e.clientX + 'px'; c.style.top = e.clientY + 'px';
          });
        </script>
      </body>
      </html>
    `;

    return new Response(html, { headers: { "Content-Type": "text/html;charset=UTF-8" } });
  }
};
