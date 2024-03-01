import '../style/Price.css';

export default function Price() {
  return (
    <>

      <div className="container marketing">

        <hr className="featurette-divider" />

        <header>
          <div className="pricing-header p-3 pb-md-4 mx-auto text-center" id='price'>
            <h1 className="display-4 fw-normal text-body-emphasis">Pricing</h1>
            <p className="fs-5 text-body-secondary">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p>
          </div>
        </header>

        <main>
          <div className="row justify-content-center row-cols-1 row-cols-md-3 mb-3 text-center">
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal">Free</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">$0<small className="text-body-secondary fw-light">/mo</small></h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>10 users included</li>
                    <li>2 GB of storage</li>
                    <li>Email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button type="button" className="w-100 btn btn-lg btn-outline-primary">
                    <a href='#contacts'>Sign up for frees</a>
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal">Pro</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">$15<small className="text-body-secondary fw-light">/mo</small></h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>20 users included</li>
                    <li>10 GB of storage</li>
                    <li>Priority email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button type="button" className="w-100 btn btn-lg btn-outline-primary">Get started</button>
                </div>
              </div>
            </div>
            {/* <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm border-primary">
                <div className="card-header py-3 text-bg-primary border-primary">
                  <h4 className="my-0 fw-normal">Enterprise</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">$29<small className="text-body-secondary fw-light">/mo</small></h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>30 users included</li>
                    <li>15 GB of storage</li>
                    <li>Phone and email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button type="button" className="w-100 btn btn-lg btn-primary">Contact us</button>
                </div>
              </div>
            </div> */}
          </div>
        </main>

        <hr className="featurette-divider" />

      </div>


    </>
  )
}
