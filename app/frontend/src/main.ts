import { GoalStreamApp } from './app.element';

if (!customElements.get(GoalStreamApp.tagName)) {
  customElements.define(GoalStreamApp.tagName, GoalStreamApp);
}
