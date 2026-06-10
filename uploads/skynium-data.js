/**
 * SKYNIUM DATA - Consent Management Platform
 * Adapté pour le Portfolio - Design discret & Dark Mode
 */

(function() {
    'use strict';

    // 1. Configuration (Adapté au nom de domaine du portfolio)
    const skyniumDataConfig = {
        domain: window.location.hostname.includes('groupe-skynium.com') ? '.groupe-skynium.com' : '' 
    };

    // 2. Fonctions de gestion des Cookies Partagés
    function setCookie(name, value, days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        let domainStr = skyniumDataConfig.domain ? "domain=" + skyniumDataConfig.domain + ";" : "";
        document.cookie = name + "=" + value + "; expires=" + date.toUTCString() + "; " + domainStr + " path=/; SameSite=Lax";
    }

    function getCookie(name) {
        let nameEQ = name + "=";
        let ca = document.cookie.split(';');
        for(let i=0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    // 3. Vérifier le consentement actuel
    const consentValue = getCookie('skynium_data_consent');

    if (consentValue === 'accepted') {
        triggerTrackingScripts();
    } else if (!consentValue) {
        showBanner();
    }

    // 4. Affichage dynamique du bandeau (Design discret Dark Mode)
    function showBanner() {
        // Injection du CSS
        const style = document.createElement('style');
        style.innerHTML = `
            #sk-data-banner {
                position: fixed;
                bottom: 0;
                left: 0;
                width: 100%;
                background-color: rgba(10, 10, 15, 0.85);
                backdrop-filter: blur(12px);
                -webkit-backdrop-filter: blur(12px);
                border-top: 1px solid rgba(255, 255, 255, 0.1);
                z-index: 99999;
                font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
                padding: 12px 20px;
                box-sizing: border-box;
                color: rgba(255, 255, 255, 0.8);
            }
            .sk-data-container {
                max-width: 1200px;
                margin: 0 auto;
                display: flex;
                flex-direction: column;
                gap: 12px;
                align-items: center;
                justify-content: space-between;
            }
            .sk-data-text {
                font-size: 0.8rem;
                line-height: 1.4;
                margin: 0;
                text-align: center;
            }
            .sk-data-text strong {
                color: #fff;
            }
            .sk-data-buttons {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
                justify-content: center;
            }
            .sk-btn {
                padding: 6px 14px;
                border-radius: 8px;
                font-weight: 600;
                cursor: pointer;
                border: none;
                font-size: 0.75rem;
                text-decoration: none;
                transition: all 0.2s ease;
            }
            .sk-btn-accept { 
                background: linear-gradient(to bottom right, #ffffff, #e0e0e0); 
                color: #000; 
            }
            .sk-btn-accept:hover { opacity: 0.9; transform: scale(1.02); }
            
            .sk-btn-refuse { 
                background-color: rgba(255, 255, 255, 0.05); 
                color: rgba(255, 255, 255, 0.7); 
                border: 1px solid rgba(255, 255, 255, 0.1); 
            }
            .sk-btn-refuse:hover { background-color: rgba(255, 255, 255, 0.1); color: #fff;}
            
            @media (min-width: 768px) {
                #sk-data-banner { padding: 12px 24px; }
                .sk-data-container { flex-direction: row; }
                .sk-data-text { text-align: left; max-width: 60%; }
                .sk-data-buttons { justify-content: flex-end; }
            }
        `;
        document.head.appendChild(style);

        // Injection du HTML
        const bannerHTML = `
            <div id="sk-data-banner" role="dialog" aria-label="Gestion des cookies">
                <div class="sk-data-container">
                    <p class="sk-data-text">
                        <strong>🍪 Respect de votre vie privée</strong> — Nous utilisons Matomo (hébergé en France sur notre infrastructure IRIS) pour analyser le trafic de manière anonyme. Acceptez-vous d'être suivi(e) pour m'aider à améliorer ce portfolio ?
                    </p>
                    <div class="sk-data-buttons">
                        <button id="sk-data-refuse" class="sk-btn sk-btn-refuse">Refuser</button>
                        <button id="sk-data-accept" class="sk-btn sk-btn-accept">Accepter Matomo</button>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', bannerHTML);

        // Actions des boutons
        document.getElementById('sk-data-accept').addEventListener('click', () => {
            setCookie('skynium_data_consent', 'accepted', 365); // Expire dans 1 an
            document.getElementById('sk-data-banner').style.opacity = '0';
            setTimeout(() => document.getElementById('sk-data-banner').style.display = 'none', 300);
            triggerTrackingScripts();
        });

        document.getElementById('sk-data-refuse').addEventListener('click', () => {
            setCookie('skynium_data_consent', 'refused', 365);
            document.getElementById('sk-data-banner').style.opacity = '0';
            setTimeout(() => document.getElementById('sk-data-banner').style.display = 'none', 300);
        });
    }

    // 5. Fonction qui charge MATOMO (Seulement si accepté)
    function triggerTrackingScripts() {
        console.log("✅ [Skynium DATA] Consentement accordé. Chargement de Matomo (Site ID: 4).");
        
        if (window._paq && window._paq.length > 0) return;

        var _paq = window._paq = window._paq || [];
        _paq.push(['trackPageView']);
        _paq.push(['enableLinkTracking']);
        
        (function() {
            var u="https://analytics.iris.skynium.fr/";
            _paq.push(['setTrackerUrl', u+'matomo.php']);
            _paq.push(['setSiteId', '4']);
            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
            g.async=true; g.src=u+'matomo.js'; 
            if(s && s.parentNode) {
                s.parentNode.insertBefore(g,s);
            } else {
                document.head.appendChild(g);
            }
        })();
    }

})();