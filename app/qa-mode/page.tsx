import type { Metadata } from "next";
import QaModeClient from "./QaModeClient";

export const metadata: Metadata = {
  title: "QA Mode",
  robots: { index: false, follow: false },
};

export default function QaModePage() {
  return <QaModeClient />;
}
