import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = (props) => {
  return (
    <div className="Parent">
      <div className="card">
        <div className="top">
          <div className="brand-block">
            <div className="logo-wrapper">
              <img src={props.img} alt={`${props.company} logo`} />
            </div>
            <div className="brand-meta">
              <p className="company-name">{props.company}</p>
              <span className="date-posted">{props.datePosted || 'Just now'}</span>
            </div>
          </div>

          <button className="save-btn">
            Save <Bookmark size={16} />
          </button>
        </div>

        <div className="center">
          <h2>{props.post}</h2>
          <div className="badges">
            <span className="badge primary">{props.tag1}</span>
            <span className="badge secondary">{props.level}</span>
          </div>
        </div>

        <div className="bottom">
          <div className="job-meta">
            <p className="salary">${props.salary || 120}/hr</p>
            <p className="location">{props.location}</p>
          </div>
          <button className="apply-btn">Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default Card
