/**
 * useRipple — attaches a material-style ripple effect to a click handler.
 * Usage:  const ripple = useRipple();
 *         <button onClick={ripple} className="btn btn-glass">Click</button>
 */
export default function useRipple() {
  return function ripple(e) {
    const button = e.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    const rect = button.getBoundingClientRect();

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - rect.left - radius}px`;
    circle.style.top = `${e.clientY - rect.top - radius}px`;
    circle.classList.add("ripple-span");

    const prev = button.getElementsByClassName("ripple-span")[0];
    if (prev) prev.remove();

    button.style.position = button.style.position || "relative";
    button.style.overflow = "hidden";
    button.appendChild(circle);

    setTimeout(() => circle.remove(), 600);
  };
}
