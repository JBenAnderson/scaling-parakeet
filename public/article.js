function Article(props) {
  return (
    <>
      <article>
        <PlusMinus section="article" handle={props.handle} />
        <div className="section">
          Article:{props.data.article}
          <div className="card">
            <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <Data data={props.data} />
      </article>
    </>
  );
}
