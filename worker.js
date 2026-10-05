export default {
  async fetch(request) {
    return new Response(HTML, {
      headers: { "content-type": "text/html;charset=UTF-8" }
    });
  }
};

const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="FURY — a gaming-first network for games, guilds, rankings, projects and community." />
  <title>FURY — Gaming Network</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=IBM+Plex+Serif:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>:root{
  --bg:#090a0c;--panel:#111216;--panel2:#15171b;--line:#25272d;--text:#f2f2f0;--muted:#858890;
  --red:#c62828;--red2:#e13a35;--green:#66c985;--sidebar:238px;
}
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--bg);color:var(--text);font-family:"Space Grotesk",sans-serif}
button,input{font:inherit}button{cursor:pointer}a{color:inherit;text-decoration:none}
.app-shell{min-height:100vh;display:flex}.sidebar{position:fixed;inset:0 auto 0 0;width:var(--sidebar);border-right:1px solid var(--line);background:#0b0c0e;padding:26px 17px 18px;display:flex;flex-direction:column;z-index:10}
.brand{display:flex;align-items:center;gap:11px;padding:0 8px 34px}.brand-mark{width:32px;height:32px;background:var(--red);display:grid;place-items:center;font-family:"Archivo Black";font-size:18px;transform:skew(-7deg)}.brand-name{font:22px "Archivo Black";letter-spacing:.5px}.brand-sub{font-size:8px;letter-spacing:3px;color:#777a82;margin-top:1px}
.nav{display:flex;flex-direction:column;gap:3px}.nav-label{font-size:9px;color:#666a72;letter-spacing:1.8px;font-weight:700;margin:17px 9px 7px}.nav-item{display:flex;align-items:center;gap:12px;height:38px;padding:0 10px;border:1px solid transparent;color:#999ca4;font-size:13px;font-weight:600}.nav-item:hover{color:#fff;background:#121317}.nav-item.active{color:#fff;background:#17181c;border-color:#292b31}.nav-item.active:before{content:"";position:absolute;left:0;width:2px;height:38px;background:var(--red)}.icon{width:16px;text-align:center;color:#6e727b;font-size:15px}.active .icon{color:var(--red2)}
.sidebar-bottom{margin-top:auto}.status{font-size:9px;color:#70747c;letter-spacing:1px;padding:12px 9px;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}.dot{display:inline-block;width:6px;height:6px;border-radius:50%;background:var(--green);margin-right:7px;box-shadow:0 0 0 3px #16301f}.discord-btn{width:100%;margin-top:12px;background:#17181c;border:1px solid #2b2d33;color:#ddd;height:38px;text-align:left;padding:0 11px;font-size:10px;font-weight:700;letter-spacing:1px}.discord-btn span{float:right;color:#777}.version{font-size:8px;color:#50535a;letter-spacing:1.5px;margin:15px 9px 0}
.main{margin-left:var(--sidebar);width:calc(100% - var(--sidebar));min-width:0}.topbar{height:68px;border-bottom:1px solid var(--line);display:flex;align-items:center;justify-content:space-between;padding:0 34px;position:sticky;top:0;background:rgba(9,10,12,.94);backdrop-filter:blur(12px);z-index:8}.crumb{font-size:10px;color:#686b73;letter-spacing:1.4px}.crumb b{padding:0 8px;color:#3c3f45}.crumb strong{color:#ddd;font-weight:600}.top-actions{display:flex;gap:9px;align-items:center}.icon-btn,.profile-btn{background:#121317;border:1px solid var(--line);color:#a4a7ad;height:35px}.icon-btn{width:35px;font-size:18px}.profile-btn{padding:0 10px;display:flex;align-items:center;gap:8px;font-size:9px;font-weight:700;letter-spacing:1px}.profile-avatar{width:22px;height:22px;display:grid;place-items:center;background:#292b31;color:#fff;font-family:"Archivo Black"}.chev{color:#666}
.content{max-width:1450px;margin:auto;padding:40px 44px 70px}.page-section{display:none}.active-section{display:block}.page-heading{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:28px}.eyebrow{font-size:9px;color:#777b83;letter-spacing:2px;font-weight:700}.page-heading h1,.generic-heading h1{font:48px/1.02 "Archivo Black";letter-spacing:-1.5px;margin:11px 0 0}.page-heading h1 em{font:48px "IBM Plex Serif";font-style:italic;font-weight:400;letter-spacing:-2px}.heading-note{font-size:9px;letter-spacing:1.7px;color:#686b72}.heading-note span{color:var(--red2)}
.search-row{display:flex;gap:9px;margin-bottom:14px}.search-box{height:43px;border:1px solid var(--line);background:#101115;display:flex;align-items:center;flex:1;max-width:650px}.search-box span{padding:0 13px;color:#666a72;font-size:19px}.search-box input{background:none;border:0;outline:0;color:#fff;width:100%;font-size:12px}.search-box input::placeholder{color:#5f6269}.filter-btn{height:43px;padding:0 15px;background:#101115;border:1px solid var(--line);color:#9b9ea5;font-size:9px;font-weight:700;letter-spacing:1px}
.stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:10px}.stat-card{background:var(--panel);border:1px solid var(--line);padding:18px 19px 16px;min-height:125px}.stat-top{display:flex;justify-content:space-between;color:#858890;font-size:9px;font-weight:700;letter-spacing:1px}.stat-top i{font-style:normal;color:#555860;font-size:8px}.stat-card strong{display:block;font:31px "Archivo Black";margin:18px 0 5px}.stat-card small{font-size:9px;color:#666970}
.dashboard-grid{display:grid;grid-template-columns:1.25fr .75fr;gap:10px}.panel{background:var(--panel);border:1px solid var(--line);min-width:0}.featured{min-height:268px}.panel-head{display:flex;align-items:flex-start;justify-content:space-between;padding:20px 20px 14px;border-bottom:1px solid #202228}.panel-head h2{font:19px "Archivo Black";margin:6px 0 0;letter-spacing:.2px}.panel-head a{font-size:9px;color:#8e9198;letter-spacing:1px;margin-top:8px}.live-tag{font-size:8px;color:#8b8e96;border:1px solid #292c31;padding:6px 8px}.featured-body{display:flex;align-items:center;gap:19px;padding:22px 20px}.game-emblem{width:82px;height:82px;flex:0 0 82px;background:#1b1d22;border:1px solid #30323a;display:grid;place-items:center;font:42px "Archivo Black";color:#c7c8ca}.game-copy h3{font:21px "Archivo Black";margin:5px 0 7px}.game-copy p{font-size:11px;color:#8c8f96;margin:0 0 7px}.game-copy .muted{max-width:490px;line-height:1.55;color:#676a72}.mini-stats{display:flex;gap:22px;margin-top:15px;color:#666970;font-size:8px;letter-spacing:1px}.mini-stats b{color:#ddd;font-size:11px;margin-right:3px}.arrow-btn{margin-left:auto;width:40px;height:40px;background:#1a1c21;border:1px solid #2b2e34;color:#ddd}.events-panel{min-height:268px}.event-list{padding:3px 20px}.event{display:grid;grid-template-columns:43px 1fr 15px;align-items:center;gap:11px;padding:13px 0;border-bottom:1px solid #202228}.event:last-child{border:0}.date{border-left:2px solid var(--red);padding-left:7px}.date b{display:block;font:18px "Archivo Black"}.date span{font-size:7px;color:#70737b;letter-spacing:1px}.event strong{display:block;font-size:10px;letter-spacing:.4px}.event small{display:block;color:#656870;font-size:8px;margin-top:4px}.event-arrow{color:#666a72}.activity-panel{grid-column:1}.activity-list{padding:4px 20px}.activity{display:grid;grid-template-columns:10px 1fr auto;gap:11px;align-items:center;padding:13px 0;border-bottom:1px solid #202228;font-size:10px}.activity:last-child{border:0}.activity-dot{width:5px;height:5px;border-radius:50%;background:#60636a}.activity-dot.red{background:var(--red2)}.activity small{display:block;color:#5e6168;font-size:8px;margin-top:4px}.activity-type{font-size:8px;color:#5f6269;letter-spacing:1px}.rankings-preview{grid-column:2}.table{padding:2px 20px 9px}.tr{display:grid;grid-template-columns:35px 1fr 45px 65px;gap:7px;align-items:center;padding:12px 0;border-bottom:1px solid #202228;font-size:10px}.tr:last-child{border:0}.tr span:first-child{color:#656870}.tr.th{color:#5f6269;font-size:8px;letter-spacing:1px;padding:10px 0}.tr b{font-weight:700}.section-divider{border-top:1px solid var(--line);margin:38px 0 13px;padding-top:15px}.section-divider span{font-size:8px;color:#666970;letter-spacing:2px}.game-strip{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}.game-tile{background:#101115;border:1px solid var(--line);display:grid;grid-template-columns:24px 42px 1fr auto;gap:10px;align-items:center;padding:12px 13px}.game-tile>span{font-size:8px;color:#555860}.tile-icon{width:40px;height:40px;background:#1b1d22;border:1px solid #2b2d33;display:grid;place-items:center;font:16px "Archivo Black"}.game-tile strong{font-size:10px}.game-tile small{display:block;color:#62656d;font-size:7px;margin-top:4px}.game-tile>b{font-size:7px;color:#6d7078;letter-spacing:1px}
.generic-heading{border-bottom:1px solid var(--line);padding-bottom:28px;margin-bottom:15px}.generic-heading h1{font-size:54px;margin-top:8px}.generic-heading p{color:#777a82;font-size:12px;margin:10px 0 0;max-width:580px;line-height:1.6}.placeholder-grid,.market-grid,.event-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.info-card,.market-card,.event-card{background:var(--panel);border:1px solid var(--line);padding:22px;min-height:170px}.info-card .big,.market-card .big{font:28px "Archivo Black";margin:20px 0 6px}.info-card p,.market-card p,.event-card p{color:#74777f;font-size:10px;line-height:1.6}.tag{display:inline-block;border:1px solid #2b2d33;color:#777b83;padding:5px 7px;font-size:7px;letter-spacing:1px}.large-table{background:var(--panel);border:1px solid var(--line);padding:5px 20px}.large-row{display:grid;grid-template-columns:55px 1fr 100px 100px 100px;gap:15px;padding:17px 0;border-bottom:1px solid #202228;align-items:center;font-size:11px}.large-row:last-child{border:0}.large-row.header{font-size:8px;color:#666970;letter-spacing:1px}.market-card .change{color:var(--green);font-size:10px}.community-box,.recruit-card{background:var(--panel);border:1px solid var(--line);padding:35px;display:flex;justify-content:space-between;align-items:center;min-height:260px}.community-box h2,.recruit-card h2{font:31px "Archivo Black";margin:10px 0}.community-box p,.recruit-card p{color:#777a82;font-size:11px;max-width:580px;line-height:1.7}.primary-btn{background:var(--red);border:0;color:white;padding:13px 17px;font-size:9px;font-weight:700;letter-spacing:1px}.recruit-big{font:100px "Archivo Black";color:#1b1d21;letter-spacing:-7px;margin-right:40px}
.toast{position:fixed;right:25px;bottom:25px;background:#e8e8e6;color:#111;padding:12px 16px;font-size:10px;font-weight:700;transform:translateY(20px);opacity:0;pointer-events:none;transition:.2s;z-index:30}.toast.show{transform:none;opacity:1}.mobile-brand{display:none}
@media(max-width:1000px){:root{--sidebar:205px}.content{padding:32px 25px}.stats-grid{grid-template-columns:repeat(2,1fr)}.dashboard-grid{grid-template-columns:1fr}.activity-panel,.rankings-preview{grid-column:auto}.game-strip{grid-template-columns:repeat(2,1fr)}}
@media(max-width:700px){.sidebar{position:fixed;transform:translateX(-100%);transition:.2s;width:245px}.main{margin-left:0;width:100%}.topbar{padding:0 16px}.mobile-brand{display:block;font:18px "Archivo Black"}.crumb{display:none}.content{padding:28px 16px}.page-heading{display:block}.page-heading h1,.page-heading h1 em{font-size:36px}.heading-note{margin-top:18px}.stats-grid,.game-strip,.placeholder-grid,.market-grid,.event-cards{grid-template-columns:1fr}.community-box,.recruit-card{display:block;padding:24px}.recruit-big{font-size:60px;margin:0 0 20px}.top-actions .profile-btn span:not(.profile-avatar){display:none}.featured-body{align-items:flex-start;flex-wrap:wrap}.arrow-btn{margin-left:0}.large-row{grid-template-columns:35px 1fr 65px}.large-row>*:nth-child(4),.large-row>*:nth-child(5){display:none}}
</style>
</head>
<body>
  <div class="app-shell">
    <aside class="sidebar">
      <div class="brand">
        <div class="brand-mark">F</div>
        <div>
          <div class="brand-name">FURY</div>
          <div class="brand-sub">NETWORK</div>
        </div>
      </div>

      <nav class="nav">
        <div class="nav-label">NETWORK</div>
        <a class="nav-item active" href="#dashboard" data-section="dashboard"><span class="icon">⌂</span>Dashboard</a>
        <a class="nav-item" href="#games" data-section="games"><span class="icon">◈</span>Games</a>
        <a class="nav-item" href="#guilds" data-section="guilds"><span class="icon">◆</span>Guilds</a>
        <a class="nav-item" href="#rankings" data-section="rankings"><span class="icon">↗</span>Rankings</a>

        <div class="nav-label">MARKET</div>
        <a class="nav-item" href="#market" data-section="market"><span class="icon">⌁</span>Market</a>
        <a class="nav-item" href="#projects" data-section="projects"><span class="icon">▦</span>Projects</a>

        <div class="nav-label">COMMUNITY</div>
        <a class="nav-item" href="#community" data-section="community"><span class="icon">◎</span>Community</a>
        <a class="nav-item" href="#events" data-section="events"><span class="icon">◷</span>Events</a>
        <a class="nav-item" href="#recruitment" data-section="recruitment"><span class="icon">+</span>Recruitment</a>
      </nav>

      <div class="sidebar-bottom">
        <div class="status"><span class="dot"></span> NETWORK ONLINE</div>
        <button class="discord-btn" id="discordBtn">JOIN DISCORD <span>↗</span></button>
        <div class="version">FURY / 01.0</div>
      </div>
    </aside>

    <main class="main">
      <header class="topbar">
        <div class="mobile-brand">FURY</div>
        <div class="crumb"><span>FURY NETWORK</span><b>/</b><strong id="pageName">DASHBOARD</strong></div>
        <div class="top-actions">
          <button class="icon-btn" title="Search" id="focusSearch">⌕</button>
          <button class="profile-btn"><span class="profile-avatar">F</span><span>PLAYER</span><span class="chev">⌄</span></button>
        </div>
      </header>

      <div class="content">
        <section class="page-section active-section" id="dashboard">
          <div class="page-heading">
            <div>
              <div class="eyebrow">FURY NETWORK · OVERVIEW</div>
              <h1>THE NETWORK<br><em>AT A GLANCE.</em></h1>
            </div>
            <div class="heading-note">GAMING FIRST. <span>COMMUNITY ALWAYS.</span></div>
          </div>

          <div class="search-row">
            <div class="search-box"><span>⌕</span><input id="searchInput" placeholder="Search games, guilds, projects..." /></div>
            <button class="filter-btn">ALL NETWORK <span>⌄</span></button>
          </div>

          <div class="stats-grid">
            <article class="stat-card"><div class="stat-top"><span>ACTIVE GAMES</span><i>LIVE</i></div><strong>24</strong><small>+3 this month</small></article>
            <article class="stat-card"><div class="stat-top"><span>FURY MEMBERS</span><i>NETWORK</i></div><strong>1,842</strong><small>+126 this month</small></article>
            <article class="stat-card"><div class="stat-top"><span>PVP WINS</span><i>TRACKED</i></div><strong>18.6K</strong><small>Across supported games</small></article>
            <article class="stat-card"><div class="stat-top"><span>MARKET PROJECTS</span><i>WATCHING</i></div><strong>37</strong><small>Community tracked</small></article>
          </div>

          <div class="dashboard-grid">
            <article class="panel featured">
              <div class="panel-head"><div><span class="eyebrow">FEATURED GAME</span><h2>KINTARA</h2></div><span class="live-tag"><span class="dot"></span> ACTIVE</span></div>
              <div class="featured-body">
                <div class="game-emblem">K</div>
                <div class="game-copy">
                  <p>Web3 MMO · PVP · RPG</p>
                  <h3>FURY OPERATIONS</h3>
                  <p class="muted">Track guild activity, rivalries, events and player rankings across the network.</p>
                  <div class="mini-stats"><span><b>243</b> PLAYERS</span><span><b>18</b> GUILDS</span><span><b>92%</b> ACTIVITY</span></div>
                </div>
                <button class="arrow-btn" data-toast="Kintara game page coming next">↗</button>
              </div>
            </article>

            <article class="panel events-panel">
              <div class="panel-head"><div><span class="eyebrow">UPCOMING</span><h2>EVENTS</h2></div><a href="#events">VIEW ALL</a></div>
              <div class="event-list">
                <div class="event"><div class="date"><b>12</b><span>OCT</span></div><div><strong>FURY WAR ROOM</strong><small>Guild briefing · 20:00 IST</small></div><span class="event-arrow">→</span></div>
                <div class="event"><div class="date"><b>18</b><span>OCT</span></div><div><strong>KINTARA PVP NIGHT</strong><small>Open network event</small></div><span class="event-arrow">→</span></div>
                <div class="event"><div class="date"><b>24</b><span>OCT</span></div><div><strong>GUILD SHOWDOWN</strong><small>Registration opens soon</small></div><span class="event-arrow">→</span></div>
              </div>
            </article>

            <article class="panel activity-panel">
              <div class="panel-head"><div><span class="eyebrow">NETWORK FEED</span><h2>RECENT ACTIVITY</h2></div><span class="muted">LIVE</span></div>
              <div class="activity-list">
                <div class="activity"><span class="activity-dot red"></span><div><strong>FURY</strong> won a guild skirmish against <b>ROT</b><small>8 minutes ago</small></div><span class="activity-type">PVP</span></div>
                <div class="activity"><span class="activity-dot"></span><div><strong>GOLD</strong> opened recruitment for active players<small>31 minutes ago</small></div><span class="activity-type">GUILD</span></div>
                <div class="activity"><span class="activity-dot"></span><div><strong>SolForge</strong> was added to the project watchlist<small>1 hour ago</small></div><span class="activity-type">MARKET</span></div>
                <div class="activity"><span class="activity-dot"></span><div><strong>FURY NETWORK</strong> crossed 1,800 members<small>3 hours ago</small></div><span class="activity-type">NETWORK</span></div>
              </div>
            </article>

            <article class="panel rankings-preview">
              <div class="panel-head"><div><span class="eyebrow">LEADERBOARD</span><h2>TOP GUILDS</h2></div><a href="#rankings">FULL RANKING →</a></div>
              <div class="table">
                <div class="tr th"><span>#</span><span>GUILD</span><span>W</span><span>POINTS</span></div>
                <div class="tr"><span>01</span><strong>FURY</strong><span>248</span><b>9,842</b></div>
                <div class="tr"><span>02</span><strong>GOLD</strong><span>231</span><b>9,114</b></div>
                <div class="tr"><span>03</span><strong>ROT</strong><span>219</span><b>8,760</b></div>
                <div class="tr"><span>04</span><strong>MOSSAD</strong><span>193</span><b>7,921</b></div>
              </div>
            </article>
          </div>

          <div class="section-divider"><span>DISCOVER</span></div>
          <div class="game-strip">
            <article class="game-tile"><span>01</span><div class="tile-icon">K</div><div><strong>KINTARA</strong><small>MMO · PVP</small></div><b>ACTIVE</b></article>
            <article class="game-tile"><span>02</span><div class="tile-icon">W</div><div><strong>WARFRAME</strong><small>CO-OP · ACTION</small></div><b>ACTIVE</b></article>
            <article class="game-tile"><span>03</span><div class="tile-icon">M</div><div><strong>MINECRAFT</strong><small>SURVIVAL · PVP</small></div><b>ACTIVE</b></article>
            <article class="game-tile"><span>04</span><div class="tile-icon">R</div><div><strong>ROBLOX</strong><small>COMMUNITY</small></div><b>ACTIVE</b></article>
          </div>
        </section>

        <section class="page-section" id="games"><div class="generic-heading"><span class="eyebrow">NETWORK / 01</span><h1>GAMES</h1><p>Discover the games where FURY players compete, build and dominate.</p></div><div class="placeholder-grid" id="gamesGrid"></div></section>
        <section class="page-section" id="guilds"><div class="generic-heading"><span class="eyebrow">NETWORK / 02</span><h1>GUILDS</h1><p>Guilds, alliances, rivalries and the people behind them.</p></div><div class="placeholder-grid" id="guildsGrid"></div></section>
        <section class="page-section" id="rankings"><div class="generic-heading"><span class="eyebrow">NETWORK / 03</span><h1>RANKINGS</h1><p>Performance tracked across the FURY network.</p></div><div class="large-table" id="rankingTable"></div></section>
        <section class="page-section" id="market"><div class="generic-heading"><span class="eyebrow">MARKET / 01</span><h1>MARKET</h1><p>Community-focused project and market information. Not financial advice.</p></div><div class="market-grid" id="marketGrid"></div></section>
        <section class="page-section" id="projects"><div class="generic-heading"><span class="eyebrow">MARKET / 02</span><h1>PROJECTS</h1><p>Projects being built, watched and discussed by the network.</p></div><div class="placeholder-grid" id="projectsGrid"></div></section>
        <section class="page-section" id="community"><div class="generic-heading"><span class="eyebrow">COMMUNITY / 01</span><h1>COMMUNITY</h1><p>The people, conversations and culture behind FURY.</p></div><div class="community-box"><div><span class="eyebrow">FURY DISCORD</span><h2>THE NETWORK HAS A VOICE.</h2><p>Join the community for guild recruitment, events, game discussion and project updates.</p></div><button class="primary-btn" id="discordBtn2">JOIN DISCORD ↗</button></div></section>
        <section class="page-section" id="events"><div class="generic-heading"><span class="eyebrow">COMMUNITY / 02</span><h1>EVENTS</h1><p>Upcoming tournaments, guild operations and community nights.</p></div><div class="event-cards" id="eventCards"></div></section>
        <section class="page-section" id="recruitment"><div class="generic-heading"><span class="eyebrow">COMMUNITY / 03</span><h1>RECRUITMENT</h1><p>Find a guild. Find your squad. Build your reputation.</p></div><div class="recruit-card"><div class="recruit-big">FURY</div><div><h2>WE ARE LOOKING FOR PLAYERS.</h2><p>Active PvP players, strategists and community members can apply to join the network.</p><button class="primary-btn" id="applyBtn">OPEN APPLICATION ↗</button></div></div></section>
      </div>
    </main>
  </div>

  <div class="toast" id="toast"></div>
  <script>const sections = [...document.querySelectorAll(".page-section")];
const navItems = [...document.querySelectorAll(".nav-item")];
const pageName = document.getElementById("pageName");
const toast = document.getElementById("toast");

function showToast(message){
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.__toast);
  window.__toast = setTimeout(()=>toast.classList.remove("show"), 2600);
}

function navigate(id){
  sections.forEach(s=>s.classList.toggle("active-section", s.id===id));
  navItems.forEach(n=>n.classList.toggle("active", n.dataset.section===id));
  pageName.textContent = id.toUpperCase();
  window.scrollTo({top:0,behavior:"smooth"});
  history.replaceState(null,"","#"+id);
}

navItems.forEach(item=>{
  item.addEventListener("click", e=>{
    e.preventDefault();
    navigate(item.dataset.section);
  });
});

document.querySelectorAll("[data-toast]").forEach(btn=>{
  btn.addEventListener("click",()=>showToast(btn.dataset.toast));
});

document.getElementById("focusSearch").addEventListener("click",()=>{
  navigate("dashboard");
  setTimeout(()=>document.getElementById("searchInput").focus(),100);
});

document.getElementById("searchInput").addEventListener("keydown", e=>{
  if(e.key==="Enter" && e.target.value.trim()) showToast(\`Searching the FURY network for "\${e.target.value.trim()}"\`);
});

document.querySelectorAll("#discordBtn,#discordBtn2").forEach(btn=>{
  btn.addEventListener("click",()=>showToast("Add your FURY Discord invite link in script.js"));
});
document.getElementById("applyBtn").addEventListener("click",()=>showToast("Recruitment form coming next"));

const games = [
  ["KINTARA","MMO · PVP","FURY operations and guild warfare."],
  ["WARFRAME","CO-OP · ACTION","Squads, builds and missions."],
  ["MINECRAFT","SURVIVAL · PVP","Servers, builds and communities."],
  ["ROBLOX","COMMUNITY","Player-made worlds and groups."],
  ["BLOODSTRIKE","FPS · PVP","Competitive squads and rankings."],
  ["CODM","FPS · MOBILE","Competitive mobile gaming."]
];
const guilds = [
  ["FURY","9,842","248 wins","Primary network guild"],
  ["GOLD","9,114","231 wins","Established alliance"],
  ["ROT","8,760","219 wins","Rival guild"],
  ["MOSSAD","7,921","193 wins","Competitive guild"],
  ["RED ARMY","6,430","161 wins","Community guild"]
];
const projects = [
  ["SolForge","Trading / analytics","WATCHING","Community market dashboard concept."],
  ["FURY Network","Gaming platform","BUILDING","The website you are currently viewing."],
  ["Atlas Imperium","Strategy","CONCEPT","Large-scale country strategy prototype."]
];
const markets = [
  ["SolForge","$SOLFORGE","$—","—","Community project"],
  ["FURY","FURY","—","—","Network ecosystem"],
  ["Mango","$MANGOO","—","—","Community token project"]
];

function fillCards(target, data, type){
  const el=document.getElementById(target);
  el.innerHTML=data.map((x,i)=>\`
    <article class="\${type==="market"?"market-card":"info-card"}">
      <span class="tag">\${type==="game"?"GAME":type==="guild"?"GUILD":"PROJECT"}</span>
      <div class="big">\${x[0]}</div>
      <p>\${type==="game"?x[1]:type==="guild"?\`\${x[1]} points · \${x[2]}\`:x[1]}</p>
      <p>\${type==="guild"?x[3]:x[2]||""}</p>
    </article>\`).join("");
}
fillCards("gamesGrid",games,"game");
fillCards("guildsGrid",guilds,"guild");
fillCards("projectsGrid",projects,"project");

document.getElementById("marketGrid").innerHTML=markets.map(x=>\`
  <article class="market-card"><span class="tag">WATCHLIST</span><div class="big">\${x[0]}</div>
  <p>\${x[1]} · \${x[4]}</p><p class="change">DATA PENDING</p></article>\`).join("");

const rankData=[
 ["01","FURY","9,842","248","98%"],
 ["02","GOLD","9,114","231","94%"],
 ["03","ROT","8,760","219","91%"],
 ["04","MOSSAD","7,921","193","87%"],
 ["05","RED ARMY","6,430","161","83%"],
 ["06","KINGS OF KINTARA","6,018","149","79%"]
];
document.getElementById("rankingTable").innerHTML=
\`<div class="large-row header"><span>#</span><span>GUILD</span><span>POINTS</span><span>WINS</span><span>ACTIVITY</span></div>\`+
rankData.map(r=>\`<div class="large-row"><span>\${r[0]}</span><strong>\${r[1]}</strong><b>\${r[2]}</b><span>\${r[3]}</span><span>\${r[4]}</span></div>\`).join("");

const events=[
 ["12 OCT","FURY WAR ROOM","Guild briefing · 20:00 IST"],
 ["18 OCT","KINTARA PVP NIGHT","Open network event"],
 ["24 OCT","GUILD SHOWDOWN","Registration opens soon"],
 ["31 OCT","FURY NETWORK NIGHT","Community games"]
];
document.getElementById("eventCards").innerHTML=events.map(e=>\`
 <article class="event-card"><span class="tag">\${e[0]}</span><h2 style="font:18px 'Archivo Black';margin:22px 0 8px">\${e[1]}</h2><p>\${e[2]}</p></article>\`).join("");

const initial = location.hash.slice(1);
if(initial && document.getElementById(initial)) navigate(initial);
</script>
</body>
</html>`;
