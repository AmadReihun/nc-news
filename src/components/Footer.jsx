export default function Footer() {
  return (
    <>
      <footer
        id="sticky-footer"
        
        className="flex-shrink-0 py-3 bg-dark text-white-50"
        style={{
          position: "fixed",

          left: 0,
          bottom: 0,
          width: "100%",
          textAlign: "center",
        }}>
        <div className="container text-center">
          <small>Copyright &copy; NC News</small>
        </div>
      </footer>
    </>
  );
}
