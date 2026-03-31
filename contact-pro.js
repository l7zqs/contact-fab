(function () {
  class ContactPro {
    constructor(options = {}) {
      this.whatsapp = options.whatsapp || "880XXXXXXXXXX";
      this.telegram = options.telegram || "yourusername";
      this.init();
    }

    init() {
      // جلوگیری duplicate
      if (document.getElementById("contactPro")) return;

      // Create container
      const container = document.createElement("div");
      container.id = "contactPro";
      container.innerHTML = `
        <div class="cp-btn cp-main">💬</div>

        <a href="https://wa.me/${this.whatsapp}" target="_blank" class="cp-btn cp-wa">📱</a>
        <a href="https://t.me/${this.telegram}" target="_blank" class="cp-btn cp-tg">✈️</a>
      `;
      document.body.appendChild(container);

      // Add styles ONCE
      if (!document.getElementById("contactProStyle")) {
        const style = document.createElement("style");
        style.id = "contactProStyle";
        style.innerHTML = `
          #contactPro {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 9999;
          }

          .cp-btn {
            width: 55px;
            height: 55px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 22px;
            cursor: pointer;
            position: absolute;
            right: 0;
            bottom: 0;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            text-decoration: none;
          }

          .cp-main {
            background: #00c853;
            color: #fff;
            z-index: 2;
          }

          .cp-wa {
            background: #25D366;
            color: #fff;
            opacity: 0;
          }

          .cp-tg {
            background: #0088cc;
            color: #fff;
            opacity: 0;
          }

          #contactPro.active .cp-wa {
            transform: translateY(-70px);
            opacity: 1;
          }

          #contactPro.active .cp-tg {
            transform: translateY(-140px);
            opacity: 1;
          }

          .cp-btn:hover {
            transform: scale(1.1);
          }

          .cp-main::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: rgba(0,200,83,0.4);
            animation: cpPulse 2s infinite;
            z-index: -1;
          }

          @keyframes cpPulse {
            0% { transform: scale(1); opacity: 0.7; }
            70% { transform: scale(1.6); opacity: 0; }
            100% { transform: scale(1); opacity: 0; }
          }
        `;
        document.head.appendChild(style);
      }

      // Toggle
      container.querySelector(".cp-main").onclick = () => {
        container.classList.toggle("active");
      };
    }
  }

  // ✅ AUTO INIT (CDN style)
  window.addEventListener("load", () => {
    const script = document.currentScript;

    if (script) {
      new ContactPro({
        whatsapp: script.getAttribute("data-whatsapp"),
        telegram: script.getAttribute("data-telegram")
      });
    } else {
      new ContactPro();
    }
  });

  // Global access
  window.ContactPro = ContactPro;
})();        opacity: 1;
      }

      #contactPro.active .cp-tg {
        transform: translateY(-140px);
        opacity: 1;
      }

      /* Hover effect */
      .cp-btn:hover {
        transform: scale(1.1);
      }

      /* Pulse animation */
      .cp-main::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: rgba(0,200,83,0.4);
        animation: pulse 2s infinite;
        z-index: -1;
      }

      @keyframes pulse {
        0% { transform: scale(1); opacity: 0.7; }
        70% { transform: scale(1.6); opacity: 0; }
        100% { transform: scale(1); opacity: 0; }
      }
    `;
    document.head.appendChild(style);

    // Toggle logic
    const mainBtn = container.querySelector(".cp-main");

    mainBtn.onclick = () => {
      container.classList.toggle("active");
    };
  }
}

// Global access
window.ContactPro = ContactPro;
