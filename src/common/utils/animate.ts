export function animate (duration: number, onFrame: (progress: number) => void): void {
  const start = performance.now()

  function loop (now: number): void {
    const elapsed = now - start
    const progress = Math.min(elapsed / duration, 1)
    onFrame(progress)
    if (progress < 1) requestAnimationFrame(loop)
  }
  requestAnimationFrame(loop)
}
