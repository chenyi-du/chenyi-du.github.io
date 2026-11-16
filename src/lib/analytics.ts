import fs from 'fs';
import path from 'path';

export interface AnalyticsConfig {
  websiteId: string;
  domain: string;
}
const UUID_RE = /^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/;

export function getAnalyticsConfig(): AnalyticsConfig | null {
  try {
    const file = path.join(process.cwd(), 'content', 'data', 'analytics.json');
    const json: unknown = JSON.parse(fs.readFileSync(file, 'utf8'));
    if (!json || typeof json !== 'object') return null;
    const fields = json as Record<string, unknown>;
    const id = typeof fields.websiteId === 'string' ? fields.websiteId.trim() : '';
    const domain = typeof fields.domain === 'string' ? fields.domain.trim() : '';
    if (!UUID_RE.test(id) || domain !== 'chenyi-du.github.io') return null;
    return {websiteId: id, domain};
  } catch (err) {
    console.warn('Umami analytics is not configured:', err);
    return null;
  }
}
