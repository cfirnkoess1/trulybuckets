import React from 'react'
import {Link} from 'react-router-dom'




function Home() {
    return (
        <>
  <header>
    
    <div className="navbar navbar-dark bg-dark box-shadow">
      <div className="container d-flex justify-content-between">
        <a href="#" className="navbar-brand d-flex align-items-center">
          <svg
            
            width={20}
            height={20}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
          >
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 8 2a" />
            <circle cx={18} cy={13} r={1} />
            <circle cx={7} cy={11} r={2}/>
          </svg>
          <strong>Trulybuckets</strong>
        </a>
        
      </div>
    </div>
  </header>
  <main role="main">
    <section className="jumbotron text-center">
      <div className="container">
        <h1 className="jumbotron-heading">Welcome</h1>
        <p className="lead text-muted">
          On one fateful day, a young man had his arm snapped on the opening kickoff of the second half.
           Although he was out of commission for many weeks, he found a way to continue in his tradition of 
           being exemplary. This is <strong>TRULYBUCKETS</strong>.
        </p>
        <p>
          <a href="https://www.youtube.com/channel/UCuWHguP068Gq0P8Dz0xv2dg" margin="2px" className="btn btn-primary my-2">
            Take me to greatness
          </a>                     
          <a href="https://www.youtube.com/watch?v=G1IbRujko-A" className="btn btn-secondary my-4">
            Take me to joy
          </a>
        </p>
        <p>
            <a href="/refined" className= "btn btn-info my-2">
                For the more <i>refined</i> palate
                </a>
        </p>
      </div>
    </section>
    <div className="album py-5 bg-secondary">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4 box-shadow">
              <img
                className="card-img-top"
                data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=The Beginning"
                alt="The Beginning"
              />
              <div className="card-body">
                <p className="card-text">
                  Witness the inception of what experts consider "the best new content seen in years".
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      
                    >
                        <a href="https://www.youtube.com/watch?v=b_5rLsM4OEw" style ={{textDecoration: "none", color: "#55595C"}}>Take me</a>
                      
                    </button>
                  </div>
                  <small className="text-muted">Prepare for performance</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 box-shadow">
              <img
                className="card-img-top"
                data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=The Sequel"
                alt="The Sequel"
              />
              <div className="card-body">
                <p className="card-text">
                  The only sequel <strong>EVER</strong> to have a higher score on rotten tomatoes than the original.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                    <a href="https://www.youtube.com/watch?v=DGa1RksC8c8" style ={{textDecoration: "none", color: "#55595C"}}>Take me</a>
                    </button>
                   
                  </div>
                  <small className="text-muted">Don't fact check that</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 box-shadow">
              <img
                className="card-img-top"
                data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=The Trilogy"
                alt="The Trilogy"
              />
              <div className="card-body">
                <p className="card-text">
                  Short but sweet. The director clearly had a plan, and the brilliance shines through every second.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      <a href="https://youtube.com/shorts/vAPkkNqnndk" style ={{textDecoration: "none", color: "#55595C"}}>Take me</a>
                    </button>
                    
                  </div>
                  <small className="text-muted">Audrey steals the show</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 box-shadow">
              <img
                className="card-img-top"
                data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=The Spin Off"
                alt="The Spin Off"
              />
              <div className="card-body">
                <p className="card-text">
                  View what could be talked about for <strong>centuries</strong> to come.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      <a href="https://youtu.be/1W7cBeQ88y0?si=d25rWuJ9xzzAL4lk" style ={{textDecoration: "none", color: "#55595C"}}>Take me</a>
                    </button>
                  </div>
                  <small className="text-muted">Nutshot in the first 8 seconds</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 box-shadow">
              <img
                className="card-img-top"
                data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=The Fall"
                alt="The Fall"
              />
              <div className="card-body">
                <p className="card-text">
                 A masterclass in it's own right. Film makers have been following this template for years.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                         <a href="https://youtu.be/HS5gwFZf1mg?si=4qTzBRc0K35Fm_iN" style ={{textDecoration: "none", color: "#55595C"}}>Take me</a>

                    </button>
                  </div>
                  <small className="text-muted">Not making fun of anyone you know</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 box-shadow">
              <img
                className="card-img-top"
                data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=The Commentary"
                alt="The Commentary"
              />
              <div className="card-body">
                <p className="card-text">
                  Considered one of the best social commentaries on the modern state of the NBA in the last 50 years.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                    <a href="https://youtu.be/a_3Kb86eLZ8?si=tAwBNyNiKzh1-rAf" style ={{textDecoration: "none", color: "#55595C"}}>Take me</a>

                    </button>
                  </div>
                  <small className="text-muted">Special Guest!</small>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </main>
  <footer className="text-muted">
    <div className="container">
      <p className="float-right">
        <a href="#">Back to top</a>
      </p>
      <p>
        All rights reserved. TrulyBucketsCO
      </p>
    </div>
  </footer>
</>

    )
}
export default Home;