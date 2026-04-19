import { defineElement, html } from 'element-vir';
import { PRODUCT_NAME } from '@goal-stream/universal';

export const GoalStreamApp = defineElement()({
  tagName: 'goal-stream-app',
  render(_) {
    return html`
      <main>
        <h1>${PRODUCT_NAME}</h1>
        <p>Real-time match updates will stream over WebSockets.</p>
      </main>
    `;
  },
});
