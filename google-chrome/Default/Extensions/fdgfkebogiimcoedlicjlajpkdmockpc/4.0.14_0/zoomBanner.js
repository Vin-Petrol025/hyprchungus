/* eslint-disable no-restricted-globals */
const BANNER_ID = 'myext-zoom-banner';
const BANNER_TEXT = "We've adjusted your browser's zoom to support automation and will reset it when completed.";

async function shouldShow() {
  const { zoomBannerDismissed, zoomBannerEnabled } = await chrome.storage.local.get([
    'zoomBannerDismissed',
    'zoomBannerEnabled',
  ]);

  return {
    enabled: zoomBannerEnabled === true,
    dismissed: zoomBannerDismissed === true,
  };
}

function ensureBanner() {
  if (window.top !== window) return;

  let bar = document.getElementById(BANNER_ID);
  if (bar) return;

  bar = document.createElement('div');
  bar.id = BANNER_ID;

  Object.assign(bar.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    height: '44px',
    display: 'flex',
    alignItems: 'center',
    padding: '0 16px',
    background: '#f1f3f4',
    borderBottom: '1px solid #dadce0',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif',
    fontSize: '14px',
    color: '#202124',
    zIndex: '2147483647',

    // shadow
    boxShadow: '0 2px 6px rgba(0,0,0,.15)',
    gap: '10px',
  });

  const icon = document.createElement('div');
  Object.assign(icon.style, {
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    border: '1px solid #5f6368',
    color: '#5f6368',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    fontWeight: '600',
    flexShrink: '0',
  });
  icon.textContent = 'i';

  const msg = document.createElement('div');
  msg.textContent = BANNER_TEXT;

  const dismiss = document.createElement('a');
  dismiss.textContent = 'Dismiss';
  dismiss.href = '#';

  Object.assign(dismiss.style, {
    color: '#1a73e8',
    marginLeft: '6px',
    cursor: 'pointer',
    textDecoration: 'none',
    fontWeight: '500',
  });

  dismiss.onmouseenter = () => (dismiss.style.textDecoration = 'underline');
  dismiss.onmouseleave = () => (dismiss.style.textDecoration = 'none');

  dismiss.onclick = async e => {
    e.preventDefault();
    await chrome.storage.local.set({
      zoomBannerDismissed: true,
    });
    removeBanner();
  };

  bar.appendChild(icon);
  bar.appendChild(msg);
  bar.appendChild(dismiss);

  document.documentElement.appendChild(bar);
  setTimeout(() => {
    removeBanner();
  }, 7000);
}

function removeBanner() {
  document.getElementById('myext-zoom-banner')?.remove();
}

async function sync() {
  const { enabled, dismissed } = await shouldShow();
  if (enabled && !dismissed) ensureBanner();
  else await removeBanner();
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg?.type === 'PING_ZOOM_BANNER') {
    sendResponse({ ok: true });
    return;
  }
  if (msg?.type === 'SHOW_ZOOM_BANNER') {
    sync();
    sendResponse({ ok: true });
    return;
  }
  if (msg?.type === 'HIDE_ZOOM_BANNER') {
    removeBanner();
    sendResponse({ ok: true });
    return;
  }
});
