<!-- LANGUAGE SWITCHER -->
<div id="lang-switch"
style="
position:fixed;
top:65px;
right:15px;
z-index:9999;
font-family:Arial,sans-serif;
"></div>

<!-- LOAD LANGUAGE MAP -->
<script src="https://cdn.jsdelivr.net/gh/bloghubmedia/cdn/lang/pipheroes-map.js"></script>

<script>
(function() {

  // =========================
  // DETECT CURRENT LANGUAGE
  // =========================
  var host = location.hostname;

  var currentLang =
    host.includes("id.") ? "id" :
    host.includes("en.") ? "en" :
    host.includes("my.") ? "my" :
    "id";

  // =========================
  // CURRENT PATH
  // =========================
  var path = location.pathname.split("?")[0];

  // =========================
  // FIND TRANSLATION PAIRS
  // =========================
  var pair =
    window.langMap &&
    window.langMap[currentLang] &&
    window.langMap[currentLang][path]
      ? window.langMap[currentLang][path]
      : {};

  // =========================
  // TARGET LINKS
  // =========================
  var idUrl = pair.id || null;
  var enUrl = pair.en || null;
  var myUrl = pair.my || null;

  // =========================
  // ACTIVE FLAG
  // =========================
  var activeFlag =
    currentLang === "id" ? "🇮🇩" :
    currentLang === "en" ? "🇬🇧" :
    "🇲🇾";

  // =========================
  // BUILD HTML
  // =========================
  var html = `
  <div style="position:relative; display:inline-block;">

    <button id="lang-btn" style="
      width:48px;
      height:42px;
      border:none;
      border-radius:10px;
      background:#fff;
      box-shadow:0 2px 10px rgba(0,0,0,0.15);
      font-size:18px;
      cursor:pointer;
    ">
      ${activeFlag}
    </button>

    <div id="flag-dd" style="
      display:none;
      position:absolute;
      top:50px;
      right:0;
      background:#fff;
      border-radius:10px;
      box-shadow:0 2px 10px rgba(0,0,0,0.15);
      min-width:140px;
      overflow:hidden;
    ">

      ${
        currentLang === "id"
        ? `
        <div style="
          padding:10px;
          background:#eee;
        ">
          🇮🇩 Indonesia (Active)
        </div>
        `
        : (
          idUrl
          ? `
          <a href="${idUrl}" style="
            display:block;
            padding:10px;
            text-decoration:none;
            color:#333;
          ">
            🇮🇩 Indonesia
          </a>
          `
          : `
          <div style="
            padding:10px;
            color:#999;
            background:#fafafa;
            cursor:not-allowed;
          ">
            🇮🇩 Indonesia
          </div>
          `
        )
      }

      ${
        currentLang === "en"
        ? `
        <div style="
          padding:10px;
          background:#eee;
        ">
          🇬🇧 English (Active)
        </div>
        `
        : (
          enUrl
          ? `
          <a href="${enUrl}" style="
            display:block;
            padding:10px;
            text-decoration:none;
            color:#333;
          ">
            🇬🇧 English
          </a>
          `
          : `
          <div style="
            padding:10px;
            color:#999;
            background:#fafafa;
            cursor:not-allowed;
          ">
            🇬🇧 English
          </div>
          `
        )
      }

      ${
        currentLang === "my"
        ? `
        <div style="
          padding:10px;
          background:#eee;
        ">
          🇲🇾 Melayu (Active)
        </div>
        `
        : (
          myUrl
          ? `
          <a href="${myUrl}" style="
            display:block;
            padding:10px;
            text-decoration:none;
            color:#333;
          ">
            🇲🇾 Melayu
          </a>
          `
          : `
          <div style="
            padding:10px;
            color:#999;
            background:#fafafa;
            cursor:not-allowed;
          ">
            🇲🇾 Melayu
          </div>
          `
        )
      }

    </div>
  </div>

  <style>
    #flag-dd.show {
      display:block !important;
    }

    #flag-dd a:hover {
      background:#f2f2f2;
    }
  </style>
  `;

  // =========================
  // RENDER WIDGET
  // =========================
  document.getElementById("lang-switch").innerHTML = html;

  // =========================
  // TOGGLE DROPDOWN
  // =========================
  document.getElementById("lang-btn")
    .addEventListener("click", function(e) {

      e.stopPropagation();

      document.getElementById("flag-dd")
        .classList.toggle("show");

    });

  // =========================
  // CLOSE OUTSIDE CLICK
  // =========================
  document.addEventListener("click", function(e) {

    var dd = document.getElementById("flag-dd");

    if (dd && !e.target.closest("#lang-switch")) {
      dd.classList.remove("show");
    }

  });

})();
</script>
