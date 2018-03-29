import React, {Component} from 'react';

class News extends Component {
  render() {
    return(
      <section className="content">
        <div className="box" id="news">
          <h1>NEWS</h1>
          <ol>
            <li>
              I motsättning till vad många tror, är inte Lorem Ipsum slumpvisa ord. Det har sina rötter i ett stycke klassiskt litteratur på latin från 45 år före år 0, och är alltså över 2000 år gammalt.
            </li>
            <li>
              Richard McClintock, en professor i latin på Hampden-Sydney College i Virginia, översatte ett av de mer ovanliga orden, consectetur, från ett stycke Lorem Ipsum och fann dess ursprung genom att studera användningen av dessa ord i klassisk litteratur.
            </li>
          </ol>
        </div>
        <div className="box">
        <h2>Today's lessons</h2><br />
          <div className="today-sch">
            <div className="table-row header">
              <div className="wrapper text-4">
                <div className="wrapper text-2">
                  <div className="text">First Name</div>
                </div>
                <div className="wrapper text-2">
                  <div className="text">Email</div>
                </div>
              </div>
              <div className="wrapper num-4">
                <div className="wrapper num-2">
                  <div className="num">Min</div>
                </div>
                <div className="wrapper num-2">
                  <div className="num">Avg</div>
                </div>
              </div>
            </div>

            <div>
              <p>Tango</p>
              <p>11:00</p>
            </div>
            <div>
              <p>Tango</p>
              <p>13:00</p>
            </div>
            <div>
              <p>Salasa</p>
              <p>13:00</p>
            </div>
          </div>

        </div>
      </section>
    );
  }
}

export default News;
