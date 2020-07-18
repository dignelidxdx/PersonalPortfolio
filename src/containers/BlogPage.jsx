import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getBlogToRead } from '../actions/index';
import '../assets/styles/components/BlogPage.scss';

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
          <div className='col-sm-6 BlogPage-text'>
            <h4>
              {props.readBlog.paragraph}
              {' '}
            </h4>
          </div>
          <div className='col-sm-6 BlogPage-img'>
            <img src={props.readBlog.img} alt='' />
          </div>

        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12'>
            <p>Aqui va el parrafo principal</p>
            <p>Aqui va el parrafo secundario</p>
            <p>Aqui va el parrafo terciario</p>
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
