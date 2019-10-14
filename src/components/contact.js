import React, { Component } from 'react';
import resumeData from '../resumeData';

export default class ContactUs extends Component {
  render() {
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead" style={{color:'white'}}>
                Feel free to contact me for any work or suggestion:
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>LinkedIn:&nbsp;<a target="_blank" rel="noopener noreferrer" href={`https://www.linkedin.com/in/${resumeData.linkedinId}`}>{resumeData.linkedinId}</a></h4>
                <h4>Email: <a href={"mailto:" + this.props.email}>{resumeData.email}</a></h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}
