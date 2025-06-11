/**
 * Day 5: use  context
 */

import ThemeToggle from "./ThemeToggle";

export default function SiteHeader() {
  return (
    <header className="site-header fixed w-full">
      <ThemeToggle />
    </header>
  );
}
