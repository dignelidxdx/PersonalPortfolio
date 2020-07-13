import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getBlogToRead } from '../actions/index';
import '../assets/styles/components/Blog.scss';

const BlogPage = (props) => {
  const { id } = props.match.params;
  const hasBlog = Object.keys(props.readBlog).length > 0;

  useEffect(() => {
    props.getBlogToRead(id);
  }, []);

  return (
    <section className='BlogPage'>
      <h4 className='About-ability'>{props.readBlog.title}</h4>
      <hr />
      <div className='container'>
        <div className='row'>
          <div className='col-sm-4'>

            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>
                  {props.readBlog.title}
                  {' '}
                </h5>
                <p className='card-text'>
                  {props.readBlog.paragraph}
                  {' '}
                </p>
                <Link to='/' className='btn btn-outline-primary'>Leer Más</Link>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>

  );

};
BlogPage.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    readBlog: state.readBlog,
  };
};

const mapDispatchToProps = {
  getBlogToRead,
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogPage);
