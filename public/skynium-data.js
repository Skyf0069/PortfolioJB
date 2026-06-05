/**
 * SKYNIUM DATA — Consent Management Platform
 * Thème Portfolio "United By Music" (Eurovision 2025) — Dark / cœur rouge
 * Logique inchangée (Matomo, consentement, cookies). Style + bilingue FR/EN.
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
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', showBanner);
        } else {
            showBanner();
        }
    }

    // 4. Affichage dynamique du bandeau (thème Portfolio Eurovision)
    function showBanner() {
        // Injection du CSS
        const style = document.createElement('style');
        style.innerHTML = `
            #sk-data-banner {
                position: fixed;
                left: 16px; right: 16px; bottom: 16px;
                z-index: 99999;
                background: linear-gradient(160deg, rgba(19,19,29,.94), rgba(8,8,12,.94));
                backdrop-filter: blur(16px);
                -webkit-backdrop-filter: blur(16px);
                border: 1px solid rgba(255,17,38,.35);
                border-radius: 18px;
                box-shadow: 0 24px 60px -18px rgba(0,0,0,.85), 0 0 40px -12px rgba(255,17,38,.4);
                padding: 18px 20px;
                box-sizing: border-box;
                color: #aeaec4;
                font-family: "Manrope", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                transform: translateY(12px);
                opacity: 0;
                transition: opacity .4s cubic-bezier(.2,.7,.2,1), transform .4s cubic-bezier(.2,.7,.2,1);
            }
            #sk-data-banner.sk-in { transform: none; opacity: 1; }
            #sk-data-banner::before {
                content: "";
                position: absolute; left: 0; top: 0; height: 3px; width: 100%;
                border-radius: 18px 18px 0 0;
                background: linear-gradient(115deg, #ff2d44, #ff2bd6);
                opacity: .9;
            }
            .sk-data-container {
                max-width: 1180px;
                margin: 0 auto;
                display: flex;
                flex-direction: column;
                gap: 16px;
                align-items: center;
                justify-content: space-between;
            }
            .sk-data-head {
                display: flex; align-items: center; gap: 9px;
                font-family: "Space Grotesk", ui-sans-serif, system-ui, sans-serif;
                font-weight: 700; color: #fff; font-size: .98rem; letter-spacing: -.01em;
                margin: 0 0 4px;
            }
            .sk-data-heart { width: 18px; height: 18px; color: #ff1126; flex: none; animation: sk-beat 1.35s ease-in-out infinite; }
            @keyframes sk-beat {
                0%, 100% { transform: scale(1); }
                10% { transform: scale(1.22); }
                20% { transform: scale(1); }
                30% { transform: scale(1.12); }
                42% { transform: scale(1); }
            }
            @media (prefers-reduced-motion: reduce) { .sk-data-heart { animation: none; } }
            .sk-data-text {
                font-size: .85rem;
                line-height: 1.5;
                margin: 0;
                text-align: center;
            }
            .sk-data-text strong { color: #f6f6fb; font-weight: 700; }
            .sk-data-ubm {
                font-family: "Newsreader", Georgia, serif;
                font-style: italic; color: #ff2d44;
            }
            .sk-data-buttons {
                display: flex;
                gap: 10px;
                flex-wrap: wrap;
                justify-content: center;
                flex: none;
            }
            .sk-btn {
                padding: 10px 20px;
                border-radius: 999px;
                font-family: "Space Grotesk", ui-sans-serif, system-ui, sans-serif;
                font-weight: 600;
                cursor: pointer;
                border: 1px solid transparent;
                font-size: .82rem;
                text-decoration: none;
                white-space: nowrap;
                transition: transform .25s cubic-bezier(.2,.7,.2,1), box-shadow .25s, background .25s, border-color .25s, color .25s;
            }
            .sk-btn-accept {
                background: linear-gradient(115deg, #ff2d44, #ff2bd6);
                color: #fff;
                box-shadow: 0 14px 36px -14px rgba(255,17,38,.7);
            }
            .sk-btn-accept:hover { transform: translateY(-2px); box-shadow: 0 18px 44px -12px rgba(255,17,38,.8); }
            .sk-btn-refuse {
                background: rgba(255,255,255,.04);
                color: #aeaec4;
                border: 1px solid rgba(255,255,255,.18);
            }
            .sk-btn-refuse:hover { transform: translateY(-2px); border-color: rgba(255,17,38,.6); color: #fff; }
            .sk-btn-link {
                background: transparent; color: #7d7d96; padding: 10px 6px; align-self: center;
            }
            .sk-btn-link:hover { color: #ff2d44; }

            /* Bilingue : suit le bouton FR/EN du site (html[data-lang]) */
            html[data-lang="fr"] #sk-data-banner [lang="en"],
            html[data-lang="en"] #sk-data-banner [lang="fr"] { display: none; }

            @media (min-width: 820px) {
                #sk-data-banner { left: 24px; right: 24px; bottom: 24px; padding: 18px 26px; }
                .sk-data-container { flex-direction: row; gap: 28px; }
                .sk-data-textwrap { text-align: left; max-width: 64%; }
                .sk-data-text { text-align: left; }
                .sk-data-buttons { justify-content: flex-end; }
            }
        `;
        document.head.appendChild(style);

        // Injection du HTML (bilingue)
        const bannerHTML = `
            <div id="sk-data-banner" role="dialog" aria-label="Gestion des cookies / Cookie settings">
                <div class="sk-data-container">
                    <div class="sk-data-textwrap">
                        <p class="sk-data-head">
                            <svg class="sk-data-heart" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 21s-7.5-4.9-10-9.6C.3 8 1.8 4.6 5.2 4.1 7.5 3.8 9.6 5 12 7.4 14.4 5 16.5 3.8 18.8 4.1c3.4.5 4.9 3.9 3.2 7.3C19.5 16.1 12 21 12 21z"/></svg>
                            <span lang="fr">Respect de votre vie privée</span><span lang="en">Respecting your privacy</span>
                        </p>
                        <p class="sk-data-text">
                            <span lang="fr">J'utilise <strong>Matomo</strong> — hébergé en France sur mon infrastructure <strong>IRIS</strong> — pour mesurer l'audience de façon anonyme. M'autorisez-vous ce suivi pour m'aider à améliorer ce portfolio&nbsp;? <span class="sk-data-ubm">United By Music&nbsp;♥</span></span>
                            <span lang="en">I use <strong>Matomo</strong> — self-hosted in France on my own <strong>IRIS</strong> infrastructure — for anonymous audience measurement. Do you allow this tracking to help me improve this portfolio? <span class="sk-data-ubm">United By Music&nbsp;♥</span></span>
                        </p>
                    </div>
                    <div class="sk-data-buttons">
                        <button id="sk-data-refuse" class="sk-btn sk-btn-refuse"><span lang="fr">Refuser</span><span lang="en">Decline</span></button>
                        <button id="sk-data-accept" class="sk-btn sk-btn-accept"><span lang="fr">Accepter Matomo</span><span lang="en">Accept Matomo</span></button>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', bannerHTML);

        const banner = document.getElementById('sk-data-banner');
        // entrée animée
        requestAnimationFrame(() => requestAnimationFrame(() => banner.classList.add('sk-in')));

        function dismiss() {
            banner.classList.remove('sk-in');
            setTimeout(() => banner.style.display = 'none', 400);
        }

        // Actions des boutons
        document.getElementById('sk-data-accept').addEventListener('click', () => {
            setCookie('skynium_data_consent', 'accepted', 365); // Expire dans 1 an
            dismiss();
            triggerTrackingScripts();
        });

        document.getElementById('sk-data-refuse').addEventListener('click', () => {
            setCookie('skynium_data_consent', 'refused', 365);
            dismiss();
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
