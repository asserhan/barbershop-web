
import Header from './components/Header';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="py-8">{children}</main>
      </body>
    </html>
  );
};

export default Layout;

