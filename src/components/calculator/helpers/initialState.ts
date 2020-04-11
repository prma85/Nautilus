import { MapKeys } from './mapKeys';

interface IHistoryDisplay {
  operations: string;
  total: number;
}

export const defaultStore = {
  historyDisplay: [] as Array<IHistoryDisplay>,
  history: [[]] as Array<Array<string>>,
  displayValue: '0',
  keyDown: '',
  calculated: false,
  keys: MapKeys,
  total: 0,
  reset: false,
};

export type DefaultStoreType = typeof defaultStore;
