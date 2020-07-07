/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../assets/styles/components/Blog.scss';

const Blog2 = (props) => (

    <div className="container">
        <div class="row">
            {props.children}
        </div>
    </div>
);

export default Blog2;