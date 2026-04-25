export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const domain = url.searchParams.get("domain");

    // SCANNER-LOGIK
    if (domain) {
      const res = await fetch(`https://unstoppabledomains.com/api/v1/resellers/mega-jaguar-yy35d9/domains/${domain}`, {
        method: 'GET',
        headers: { "Authorization": "Bearer drgp9p33p6755uxtv39z65a0b9w185675y81c" }
      });
      const data = await res.json();
      return new Response(JSON.stringify(data), { 
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } 
      });
    }

    // LANDINGPAGE-LOGIK MIT SPEZIALEFFEKTEN
    return new Response(`
      <!DOCTYPE html>
      <html lang="de">
      <head>
          <meta charset="UTF-8">
          <title>OSTpole IMP | Strategic Gnosis</title>
          <style>
              @keyframes flow { 
                  0% { background-position: 0% 50%; } 
                  50% { background-position: 100% 50%; } 
                  100% { background-position: 0% 50%; } 
              }
              @keyframes pulse { 
                  0%, 100% { box-shadow: 0 0 20px rgba(212, 175, 55, 0.4); transform: scale(1); } 
                  50% { box-shadow: 0 0 60px rgba(212, 175, 55, 0.8); transform: scale(1.02); } 
              }
              body {
                  margin: 0; height: 100vh; display: flex; justify-content: center; align-items: center;
                  /* DEINE FARBEN: Hellblau, Gelb, Orange, Lila pulsierend */
                  background: linear-gradient(-45deg, #000, #00f2ff, #ffff00, #ffa500, #800080, #000);
                  background-size: 400% 400%; 
                  animation: flow 12s ease infinite; 
                  overflow: hidden;
              }
              .frame {
                  border: 2px solid #D4AF37; padding: 60px 80px; text-align: center;
                  background: rgba(0,0,0,0.9); backdrop-filter: blur(15px);
                  animation: pulse 4s infinite ease-in-out;
              }
              h1 { color: #D4AF37; letter-spacing: 15px; font-size: 3.5em; text-transform: uppercase; margin: 0; text-shadow: 0 0 20px rgba(212, 175, 55, 0.6); }
              p { color: #fff; letter-spacing: 6px; margin-top: 30px; font-family: sans-serif; font-size: 0.9em; text-transform: uppercase; opacity: 0.8; }
          </style>
      </head>
      <body>
          <div class="frame">
              <h1>OSTpole IMP</h1>
              <p>STRATEGIC GNOSIS // EST. 2004</p>
          </div>
      </body>
      </html>
    `, { headers: { "Content-Type": "text/html" } });
  }
};
