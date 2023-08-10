import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps = {
        country: "in",
        pagesize: 15,
        category: "General"

    }
    static propTypes = {
        country: PropTypes.string,
        pagesize: PropTypes.number,
        category: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResult: 1
        }
        document.title = `${this.props.category} - FastNewS`
    }

    async componentDidMount() {
        let URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3b8b2056a5eb4e66bb2e0a74762ef29a&page=1&pageSize=${this.props.pagesize}`
        this.setState({ loading: true })
        let data = await fetch(URL)
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({ articles: parsedData.articles, totalResult: parsedData.totalResults, loading: false })
    }

    handlePREVclick = async () => {
        let URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3b8b2056a5eb4e66bb2e0a74762ef29a&page=${this.state.page - 1}&pageSize=${this.props.pagesize}`
        this.setState({ loading: true })
        let data = await fetch(URL)
        let parsedData = await data.json()
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
    }
    handleNEXTclick = async () => {
        let URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3b8b2056a5eb4e66bb2e0a74762ef29a&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`
        this.setState({ loading: true })
        let data = await fetch(URL)
        let parsedData = await data.json()
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            loading: false
        })
    }

    render() {
        return (
            <div className='container my-3' style={{ width: "75%" }}>
                <h1 className='text-center'>FastNewS - Quick Summary</h1>
                {this.state.loading && <Spinner />}
                <div className='row'>
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className='col-md-4' key={element.url}>
                            <NewsItem title={element.title} description={element.description} ImgURL={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>
                <div className='d-flex justify-content-between'>
                    <button disabled={this.state.page <= 1} type="button" class="btn btn-secondary" onClick={this.handlePREVclick} > &larr; Previous</button>
                    <button disabled={this.state.page >= Math.ceil(this.state.totalResult / this.props.pagesize)} type="button" class="btn btn-secondary" onClick={this.handleNEXTclick} > Next &rarr; </button>
                </div>
            </div>
        )
    }
}

export default News