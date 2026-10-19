import type { SkillDTO } from '../api/skill';

export function getTemplateName(skillId: string, skills: SkillDTO[]): string {
  return skills.find(s => s.id === skillId)?.name || skillId;
}
/**
 * 构建语音面试 WebSocket 连接地址。
 * 优先按当前页面的协议和域名推导，避免后端写死 localhost 导致部署后连不上。
 */
export function buildWebSocketUrl(
  serverProvidedUrl: string | undefined,
  sessionId: number
): string {
  const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
  return `${protocol}//${window.location.host}/ws/voice-interview/${sessionId}`;
}
