import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaTwitterSquare } from 'react-icons/fa';
import { AiTwotoneLike, AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { getBlogToRead } from '../actions/index';
import '../assets/styles/components/BlogPage.scss';
import img from '../assets/static/Cover.png';

const BlogPage = (props) => {
  const { id } = props.match.params;
  const hasBlog = Object.keys(props.readBlog).length > 0;

  useEffect(() => {
    props.getBlogToRead(id);
  }, []);

  return (
    <section className='BlogPage'>
      <div className='BlogPage-first'>
        <img src={img} alt='img-fondo' />
        <h4 className='About-ability'>{props.readBlog.title}</h4>
      </div>
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
          <div className='col-sm-12 BlogPage-paragraph'>
            <h2 className='About-ability'>
              {props.readBlog.titleSecond}
              {' '}
            </h2>
            <p>
              {props.readBlog.paragraphSecond}

            </p>
            { props.readBlog.codigo ? (
              <p className='codigo-text'>
                {props.readBlog.codigo}
                {' '}
              </p>
            ) : (
              null
            )}
          </div>
        </div>
      </div>

      { props.readBlog.titleThree ? (
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12  BlogPage-paragraph'>
              <h2 className='About-ability'>
                {props.readBlog.titleTree}
                {' '}
              </h2>
              <p>
                {props.readBlog.paragraphTree}
                {' '}
              </p>
              { props.readBlog.codigoTwo ? (
                <p className='codigo-text'>
                  {props.readBlog.codigoTwo}
                  {' '}
                </p>
              ) : (
                <p />
              )}
            </div>
          </div>
        </div>
      ) : (
        null
      )}
      { props.readBlog.titleFour ? (
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12  BlogPage-paragraph'>
              <h2 className='About-ability'>
                {props.readBlog.titleFour}
                {' '}
              </h2>
              <p>
                {props.readBlog.paragraphFour}
                {' '}
              </p>
              { props.readBlog.codigoFour ? (
                <p className='codigo-text'>
                  {props.readBlog.codigoFour}
                  {' '}
                </p>
              ) : (
                <p />
              )}
            </div>
          </div>
        </div>
      ) : (
        null
      )}

      { props.readBlog.titleFive ? (
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12  BlogPage-paragraph'>
              <h2 className='About-ability'>
                {props.readBlog.titleFive}
                {' '}
              </h2>
              <p>
                {props.readBlog.paragraphFive}
                {' '}
              </p>
              { props.readBlog.codigoFive ? (
                <p className='codigo-text'>
                  {props.readBlog.codigoFive}
                  {' '}
                </p>
              ) : (
                <p />
              )}
            </div>
          </div>
        </div>
      ) : (
        null
      )}

      { props.readBlog.titleSix ? (
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12  BlogPage-paragraph'>
              <h2 className='About-ability'>
                {props.readBlog.titleSix}
                {' '}
              </h2>
              <p>
                {props.readBlog.paragraphSix}
                {' '}
              </p>
              { props.readBlog.codigoSix ? (
                <p className='codigo-text'>
                  {props.readBlog.codigoSix}
                  {' '}
                </p>
              ) : (
                <p />
              )}
            </div>
          </div>
        </div>
      ) : (
        null
      )}

      <div className='container'>
        <div className='row'>
          <div className='col-mg-12'>
            <strong>Digneli Dávila,</strong>
            {' '}
            Desarrolladora Java en ADA.
          </div>
        </div>
        <div className='row'>
          <div className='etiquetas d-flex col-mg-12'>
            <p>React.JS</p>
            <p>Good Practices</p>
            <p>Programming</p>
            <p>Never stop learning</p>
          </div>
        </div>
        <div className='row d-flex justify-content-around'>
          <div className='col-mg-6 BlogPage-paragraph'>
            <p>
              <AiTwotoneLike />
              {'  '}
              30 Likes
              {' '}
            </p>

          </div>
          <div className='col-mg-6 BlogPage-paragraph'>
            <p>
              <FaTwitterSquare size={30} color='purple' />
              {' '}
              <AiOutlineGithub size={30} color='purple' />
              {' '}
              <AiFillLinkedin size={30} color='purple' />
              {' '}
            </p>
          </div>
        </div>
      </div>

      <div className='last-part-blog container'>
        <h2>Si te siguen interesando hay blogs sugeridos para ti</h2>
        <hr />
        <div className='d-flex justify-content-around row'>
          <div className='d-flex p-4 mb-3 col-mg-3'>
            <p className='p-2'>
              {props.readBlog.title}
            </p>
            <div>
              <img width='100' src={props.readBlog.img} alt='' />
            </div>
          </div>
          <div className='d-flex  p-4 mb-3  col-mg-3'>
            <p className='p-2'>
              {props.readBlog.title}
            </p>
            <div>
              <img width='100' src={props.readBlog.img} alt='' />
            </div>
          </div>
          <div className='d-flex p-4 mb-3 col-mg-3'>
            <p className='p-2'>
              {props.readBlog.title}
            </p>
            <div>
              <img width='100' src={props.readBlog.img} alt='' />
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
