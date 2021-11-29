import data from './data'

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a href="/" className="brand"> amazona </a>
        </div>
        <div>
          <a href="/cart">  Cart </a>
          <a href="/signin"> Sign In</a>
        </div>
      </header>
      <main>
        <div className=" row center">
          {/* Card start */}

          {

            data.products.map((product) => (
              <div className="card" key={product._id}>
                <a href={`product/${product._id}`}>
                  {/* image size 680px by 830px */}
                  <img className="medium" src={product.image} alt="product" />
                </a>
                <div className="card-body">
                  <h2><a href={`product/${product._id}`}> {product.name}
                  </a>  </h2>
                  <div className="rating">
                    <span>
                      <i className="fa fa-star" />
                    </span>
                    <span>
                      <i className="fa fa-star" />
                    </span>
                    <span>
                      <i className="fa fa-star" />
                    </span>
                    <span>
                      <i className="fa fa-star" />
                    </span>
                    <span>
                      <i className="fa fa-star" />
                    </span>
                  </div>
                  <div className="price">
                    ${product.price}
                  </div>
                </div>
              </div>
            ))
          }

          {/* Card end*/}

        </div>
      </main>
      <footer className="row center">
        All  right reserved
      </footer>
    </div >
  );
}

export default App;
