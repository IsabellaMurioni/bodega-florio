/** Async feature loader for <LazyMotion features={loadMotionFeatures}>. */
export const loadMotionFeatures = () => import('./motionFeatures').then((mod) => mod.default);
