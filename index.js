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
      @keyframes textice {
        0%, 100% { text-shadow: 0 0 10px var(--ice-blue); color: var(--ice-blue); }
        50% { text-shadow: 0 0 25px #fff; color: #fff; }
      }
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { background: var(--bg); color: #fff; font-family: 'Orbitron', sans-serif; min-height: 100vh; display: flex; flex-direction: column; align-items: center; overflow-x: hidden; }
      .stars { position: fixed; width: 100%; height: 100%; z-index: 1; perspective: 1000px; top: 0; left: 0; }
      .star { position: absolute; background: #fff; border-radius: 50%; animation: moveStars 10s infinite linear; }
      @keyframes moveStars { from { transform: translateZ(-1000px); opacity: 0; } to { transform: translateZ(500px); opacity: 0.8; } }
      
      .frame { margin-top: 60px; padding: 40px; border: 2px solid var(--ice-blue); border-radius: 30px; background: rgba(255, 255, 255, 0.01); backdrop-filter: blur(15px); text-align: center; animation: icePulse 3s infinite ease-in-out; z-index: 10; width: 90%; max-width: 700px; }
      h1.title { font-size: clamp(1.8rem, 6vw, 3.5rem); font-weight: 900; letter-spacing: 10px; animation: textice 5s infinite ease-in-out; text-transform: uppercase; }
      .imp-suffix { font-size: 0.4em; opacity: 0.7; margin-left: 10px; vertical-align: super; }
      
      .btn-container { margin-top: 40px; display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; }
      .btn { display: inline-block; padding: 12px 25px; border: 1px solid var(--ice-blue); color: var(--ice-blue); text-decoration: none; border-radius: 8px; transition: 0.3s; font-size: 0.75rem; letter-spacing: 2px; font-weight: bold; text-transform: uppercase; background: rgba(165, 242, 255, 0.05); }
      .btn:hover { background: var(--ice-blue); color: var(--bg); box-shadow: 0 0 25px var(--ice-blue); transform: translateY(-3px); }
      
      .info-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; width: 90%; max-width: 1000px; z-index: 10; margin: 60px 0; }
      .info-box { padding: 25px; background: rgba(165, 242, 255, 0.03); border: 1px solid rgba(165, 242, 255, 0.2); border-radius: 15px; text-align: left; transition: 0.4s; }
      .info-box:hover { border-color: var(--ice-blue); background: rgba(165, 242, 255, 0.08); }
      .info-box h3 { color: var(--ice-blue); margin-bottom: 15px; font-size: 1.1rem; letter-spacing: 2px; }
      .info-box p { font-size: 0.85rem; line-height: 1.6; opacity: 0.8; }
      
      footer { padding: 50px 20px; opacity: 0.5; font-size: 0.7rem; letter-spacing: 2px; text-align: center; width: 100%; z-index: 10; border-top: 1px solid rgba(165, 242, 255, 0.1); }
      footer a { color: var(--ice-blue); text-decoration: none; margin: 0 15px; border-bottom: 1px solid transparent; transition: 0.3s; }
      footer a:hover { border-color: var(--ice-blue); opacity: 1; }
    `;

    const mainHTML = `
      <!DOCTYPE html>
      <html lang="de">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>OSTpole IMP // BUSINESS & WEB ARCHITECH</title>
        <style>${sharedCSS}</style>
      </head>
      <body>
        <div class="stars" id="s"></div>
        
        <main class="frame">
          <h1 class="title">OSTpole<span class="imp-suffix">IMP</span></h1>
          <p style="color:var(--ice-blue); letter-spacing: 5px; opacity:0.8; margin-top:15px; font-size:0.7rem;">WWW STRATEGIC GNOSIS // EST. 2004</p>
          <p style="margin-top:25px; font-size:0.95rem; letter-spacing:1px; line-height:1.4;">Digitale Souveränität & Bionische Infrastruktur.<br>Ihre Vision, unsere Architektur.</p>
          
          <div class="btn-container">
            <a href="https://app-api.beq.com/visit?referral=FLddufm8V8YDuPWp7XMXagupB1L6adYk31rNtP0r0G83Uhhd2dHbOR9d1ihr39RA" class="btn" target="_blank">beq App | iQ-CONNECT</a>
            <a href="https://www.youtube.com/@ostpole" class="btn" target="_blank">YouTube | Channel</a>
          </div>
        </main>

        <div class="info-grid">
          <div class="info-box">
            <h3>BIONIC SYSTEMS</h3>
            <p>Architektur souveräner Infrastrukturen. Seit 2004 bauen wir Brücken zwischen komplexen Visionen und digitaler Realität – sicher, performant und absolut unabhängig.</p>
          </div>
          <div class="info-box">
            <h3>3GALAXY & WEB3</h3>
            <p>Integration von Sovereign Identity Layer und DePIN-Lösungen. Wir validieren Hardware und sichern Ihre Position im dezentralen Ökosystem der Zukunft.</p>
          </div>
          <div class="info-box">
            <h3>STRATEGIC SOLUTIONS</h3>
            <p>Von der Cloud-Optimierung bis zum Quanten-bereiten Protokoll: Wir liefern keine Standardware, sondern bionische Präzisionsarbeit für Ihr digitales Imperium.</p>
          </div>
        </div>

        <footer>
          <div style="margin-bottom: 20px;">
            <a href="https://raw.githubusercontent.com/OSTpole/web-ostpole-xyz/main/OSTpole_IMP_ressum_2026.pdf" target="_blank">IMPRESSUM</a>
            <a href="https://raw.githubusercontent.com/OSTpole/web-ostpole-xyz/main/OSTpole_IMP_Datenschutzerklärung_DSGVO.pdf" target="_blank">DATENSCHUTZ</a>
          </div>
          OSTpole IMP // THE STRATEGIC PROTOCOL // BY CHRISTOF SCHZYRBA
        </footer>

        <script>
          const f=document.getElementById('s'); 
          for(let i=0;i<120;i++){
            const s=document.createElement('div');
            s.className='star';
            s.style.left=Math.random()*100+'%';
            s.style.top=Math.random()*100+'%';
            const z=Math.random()*2+1+'px';
            s.style.width=z;s.style.height=z;
            s.style.animationDelay=Math.random()*10+'s';
            f.appendChild(s);
          }
        </script>
      </body>
      </html>
    `;

    return new Response(mainHTML, { headers: { "Content-Type": "text/html;charset=UTF-8" } });
  }
};
