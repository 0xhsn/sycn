import "@testing-library/jest-dom"

global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.DOMRect = class DOMRect {
  x = 0; y = 0; width = 0; height = 0; top = 0; right = 0; bottom = 0; left = 0;
  constructor(x = 0, y = 0, width = 0, height = 0) {
    this.x = x; this.y = y; this.width = width; this.height = height;
    this.top = y; this.right = x + width; this.bottom = y + height; this.left = x;
  }
  toJSON() { return JSON.stringify(this) }
  static fromRect() { return new DOMRect() }
} as any
