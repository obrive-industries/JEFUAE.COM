const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export function cleanText(value, maxLength = 200) {
  return String(value ?? '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, maxLength)
}

export function isValidEmail(value) {
  return EMAIL_REGEX.test(String(value ?? '').trim())
}

export function isAllowedOrigin(request) {
  const requestOrigin = request.headers.get('origin')

  if (!requestOrigin) {
    return false
  }

  const allowedOrigins = new Set(
    [
      process.env.SITE_URL,
      'https://www.jefuae.com',
      'https://jefuae.com',
      'http://localhost:3000',
    ].filter(Boolean),
  )

  return allowedOrigins.has(requestOrigin)
}
