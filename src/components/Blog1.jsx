import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Blog.scss';
import imagen from '../assets/static/digneli-hero.png';
import reloj from '../assets/static/reloj.png';

const Blog1 = (props) => {
    const { id, title, paragraph, img } = props;
    return (
        <div class="col-md-4">
            <div class="card card-blog">
                <div class="card-img">
                    <Link to={`/blog/${id}`}><img src={img} alt="" class="img-fluid" /></Link>
                </div>
                <div class="card-body">
                    <div class="card-category-box">
                        <div class="card-category">
                            <h6 class="category">Categoría </h6>
                        </div>
                    </div>
                    <h3 class="card-title"><a href="blog-single.html">{title} </a></h3>
                    <p class="card-description">
                        {paragraph}
              </p>
                </div>
                <div class="card-footer">
                    <div class="post-author">
                        <a href="#">
                            <img src={imagen} alt="" class="avatar rounded-circle" />
                            <span class="author">Digneli Dávila</span>
                        </a>
                    </div>
                    <div class="post-date">
                        <img width="17" height="17" src={reloj} alt="" /> 10 min
              </div>
            </div>
        </div>
    </div>

    );

}
Blog1.propTypes = {
    title: PropTypes.string,
    paragraph: PropTypes.string,
}

export default Blog1;