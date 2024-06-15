export const pageScrollTop = () => {
  return window.pageYOffset || document.documentElement.scrollTop || 0;
};

export const pageScrollLeft = () => {
  return window.pageXOffset || document.documentElement.scrollLeft || 0;
};

export const checkPageScrolled = () => {
  return pageScrollTop() > 10;
};

export const getDelay = ({
  refContentCurrent,
  delayEnter = 0,
  delayTrigger = 0,
}) => {
  if (!refContentCurrent) return 0;

  const { top, left } = refContentCurrent.getBoundingClientRect();
  if (
    pageScrollTop() + top > window.innerHeight ||
    pageScrollLeft() + left > window.innerWidth
  ) {
    return delayTrigger;
  }
  return delayEnter;
};

export const getDelayHr = ({
  lenis,
  refContentCurrent,
  delayEnter = 0,
  delayTrigger = 0,
}) => {
  if (!refContentCurrent || !lenis) return 0;

  const scrollLeft = lenis.scroll || 0;
  const { left } = refContentCurrent.getBoundingClientRect();

  if (scrollLeft + left > window.innerWidth) {
    return delayTrigger;
  }
  return delayEnter;
};

export const getSpaceTrigger = (el) => {
  const trigger = window.innerHeight / 5;
  if (!el) return trigger;

  const { height } = el.getBoundingClientRect();
  if (height < trigger) return height;
  return trigger;
};

export function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    const context = this;

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

export const MathMap = (x, a, b, c, d) => {
  return parseFloat((((x - a) * (d - c)) / (b - a) + c).toFixed(3));
};
