import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/Blog.scss';

const Blog1 = (props) => {
    const { title, paragraph } = props;
        return (

        <div class="col-sm-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{title} </h5>
                    <p class="card-text">{paragraph} </p>
                    <a href="#" class="btn btn-outline-primary">Leer Más</a>
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