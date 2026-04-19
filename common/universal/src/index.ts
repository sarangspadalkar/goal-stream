export const PRODUCT_NAME = 'GoalStream' as const;

export type MatchId = string & { readonly __brand: 'MatchId' };

export function createMatchId(value: string): MatchId {
  return value as MatchId;
}

export type MatchScorePayload = {
  matchId: MatchId;
  home: number;
  away: number;
};

export type MatchEventPayload = {
  matchId: MatchId;
  type: 'goal' | 'card' | 'period' | 'info';
  message: string;
};
