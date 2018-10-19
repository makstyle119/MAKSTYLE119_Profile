import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    if(this.props.data){
      var portfolio = this.props.data.projects.map(function(project){
        var imageUrl = 'images/portfolio/'+project.image;
        return <div className="columns portfolio-item">
           <div className="item-wrap">
              <a href={project.url} title="" target="_Blank">
                 <img alt="" src={imageUrl} />
                 <div className="overlay">
                    <div className="portfolio-item-meta">
                  <h5>Title: {project.title}</h5>
                  <br />
                    <p>Category: {project.category}</p>
                    <p>Description: {project.description}</p>                    
                </div>
                 </div>
                 
              </a>

           </div>
       </div>
      });
    }
    return (
      <section id="portfolio">
      <div className="row">
         <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          	   {portfolio}
            </div>
         </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
