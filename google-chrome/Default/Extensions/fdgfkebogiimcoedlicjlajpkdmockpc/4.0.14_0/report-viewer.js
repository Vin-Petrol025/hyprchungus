(async function () {
  const REPORT_STORAGE_KEY = 'automation_report';
  const iframe = document.getElementById('report-frame');

  const params = new URLSearchParams(window.location.search);
  const anchor = params.get('anchor');

  const result = await chrome.storage.local.get(REPORT_STORAGE_KEY);
  const report = result[REPORT_STORAGE_KEY];
  if (report == null || typeof report.html !== 'string') {
    document.body.innerHTML = '<p style="font-family:sans-serif;padding:24px;">No report available.</p>';
    return;
  }

  document.title =
    typeof report.automationName === 'string' && report.automationName !== ''
      ? report.automationName + ' — Report'
      : 'Automation Report';

  function postPayload() {
    iframe.contentWindow.postMessage({ type: 'sbe-report-html', html: report.html, anchor: anchor }, '*');
  }

  window.addEventListener('message', function (event) {
    if (event.source !== iframe.contentWindow) return;
    if (event.data != null && event.data.type === 'sbe-report-frame-ready') {
      postPayload();
    }
    if (
      event.data != null &&
      event.data.type === 'sbe-open-external-url' &&
      typeof event.data.url === 'string' &&
      /^https?:\/\//.test(event.data.url)
    ) {
      window.open(event.data.url, '_blank', 'noopener,noreferrer');
    }
  });
})();
