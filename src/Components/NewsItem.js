import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, ImgURL, newsurl, author, date, source } = this.props
        return (
            <div className='my-3'>
                <div class="card">
                    <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: "90%", zIndex:"1"}}>
                        {source}<span class="visually-hidden">unread messages</span>
                    </span>
                    <img src={ImgURL} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">{description}</p>
                        <p class="card-text"><small class="text-danger">By {author ? author : "Unknown"} on {new Date(date).toUTCString()}</small></p>
                        <a href={newsurl} target="_blank" rel='noreferrer' class="btn btn-sn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem