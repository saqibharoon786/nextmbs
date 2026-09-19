import "./globals.css";

export const metadata = {
  title: {
    default: "NEXTMBS | Medical Billing Solutions",
    template: "%s | NEXTMBS",
  },
  description:
    "HIPAA-compliant medical billing, coding, credentialing, and revenue cycle management for healthcare practices.",
  icons: {
    icon: "/images/nextmbs-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
