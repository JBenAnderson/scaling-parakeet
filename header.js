function Header(props) {
  return (
    <>
      <header>
        <PlusMinus section="header" handle={props.handle} />

        <em>
          <div className="section">Header:{props.data.header}</div>
        </em>

        <Data data={props.data} />
      </header>
    </>
  );
}
