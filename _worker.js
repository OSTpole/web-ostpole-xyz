export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const domain = url.searchParams.get("domain");

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

    return new Response(`
      <!DOCTYPE html>
      <html lang="de">
      <head>
          <meta charset="UTF-8">
          <title>OSTpole IMP | 422Hz</title>
          <style>
              @keyframes flow { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
              @keyframes pulse { 0%, 100% { transform: scale(1); opacity: 0.8; } 50% { transform: scale(1.05); opacity: 1; } }
              body {
                  margin: 0; height: 100vh; display: flex; justify-content: center; align-items: center;
                  background: linear-gradient(-45deg, #000, #00E5FF, #FFEA00, #FF8F00, #D500F9, #000);
                  background-size: 400% 400%; animation: flow 15s ease infinite; overflow: hidden; font-family: serif;
              }
              .frame {
                  border: 2px solid #D4AF37; padding: 60px; text-align: center;
                  background: rgba(0,0,0,0.85); backdrop-filter: blur(10px);
                  animation: pulse 5s infinite ease-in-out; box-shadow: 0 0 50px rgba(212,175,55,0.3);
              }
              h1 { color: #D4AF37; letter-spacing: 15px; font-size: 3.5em; text-transform: uppercase; margin: 0; }
              p { color: #fff; letter-spacing: 5px; margin-top: 20px; font-family: sans-serif; }
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
