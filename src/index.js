import Background from './modules/Background';

export function create(canvasID, settings) {
  return new Background(canvasID, settings);
};
