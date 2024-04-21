import Header from "components/organisms/Header";

const MainTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="main-template">
      <Header />
      <main>{children}</main>
      <footer>© 2023 My Store</footer>
    </div>
  );
};

export default MainTemplate;
