export const metadata = {
  title: "Secret Number Concert",
  description: "Join us for an unforgettable night with Secret Number!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">{children}</body>
    </html>
  );
}
