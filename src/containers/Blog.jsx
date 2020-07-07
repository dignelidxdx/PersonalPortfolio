import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { blogSearch } from '../actions';
import '../assets/styles/components/Blog.scss';
import Blog1 from '../components/Blog1';
import Blog2 from '../components/Blog2';

const Blog = ({ blogs, myBlog, blogSearch }) => {

  const handleOnChange = (event) => {
    blogSearch(event.target.value);
  };

  return (

    <div className="blogs">
      <div>
        <section className="main">
          <h2 className="main__title">¿Qué quieres leer hoy?</h2>
          <input type="text" className="input" placeholder="Buscar..." onChange={handleOnChange} />
        </section>
      </div>

      {myBlog.length > 0 && (
          <Blog2>
            {myBlog.map(({ id, title, paragraph }) => {
              return (
                <Blog1
                  key={id}
                  id={id}
                  title={title}
                  paragraph={paragraph}
                />
              );
            }) }
            ;
          </Blog2>
      ) || myBlog.length <= 0 && (
        <h1 className='p-5'>Busqueda no encontrada...</h1>
      )}
      ;

      <h4 className='Education-ability'>Blog</h4>
      <hr />
      
      <Blog2>
        {blogs.map(item =>
          <Blog1 key={item.id} {...item} />
        )}
      </Blog2>
    </div>
  );
}

const mapDispatchToProps = {
  blogSearch,
};

const mapStateToProps = state => {
  return {
    blogs: state.blogs,
    myBlog: state.myBlog,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);