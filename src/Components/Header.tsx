/**
 * Day 5: use  context
 */

import ThemeToggle from "./ThemeToggle";

export default function SiteHeader() {
  return (
    <header className="site-header fixed w-90 bg-white/90 rounded-3xl inset-x-0 mx-auto top-3">
      <ThemeToggle />
    </header>
  );
}
