import React, { useState } from 'react';
import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { LoremIpsum } from 'react-lorem-ipsum';
import { Row, Col, Image } from 'react-bootstrap';

export default function Home() {
  const [content, setContent] = useState('home');

  const updateContent = (content) => {
    console.log(content);
    setContent(content);
  };

  const back = () => {
    setContent('home');
  };

  return (
    <div className='nobs-container'>
      <Head>
        <title>Appamondo - FAQ</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Header />
        <section className='hero'>
          <h1 className='hero-title'>Got questions? We have answers.</h1>
          <h4 className='hero-description'>
            Can't find the answer you're looking for?{' '}
            <a href='#'>Get in touch.</a>
          </h4>
        </section>
        <section className='content-wrapper'>
          {content === 'home' ? (
            <div className='container'>
              <Row className='d-flex justify-content-between mt-5'>
                <section
                  className='content-card left'
                  onClick={() => updateContent('left')}
                >
                  <h2 className='content-title'>
                    <img
                      className='icon'
                      src='/images/icons/white/BESPOKE.png'
                    />
                    Custom Solutions
                  </h2>
                  <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Eget
                    dictum quisque hendrerit torquent semper posuere arcu
                    nostra.
                  </p>
                  <button>View Article</button>
                </section>
                <section
                  className='content-card middle'
                  onClick={() => updateContent('middle')}
                >
                  <h2>
                    <img className='icon' src='/images/icons/white/SCOPE.png' />
                    Zendesk Products
                  </h2>
                  <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Eget
                    dictum quisque hendrerit torquent semper posuere arcu
                    nostra.
                  </p>
                  <button>View Article</button>
                </section>
                <section className='content-card right'>
                  <h2>
                    <img
                      className='icon'
                      src='/images/icons/white/SUPPORT.png'
                    />
                    Client Support
                  </h2>
                  <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Eget
                    dictum quisque hendrerit torquent semper posuere arcu
                    nostra.
                  </p>
                  <button disabled>View Article</button>
                </section>
              </Row>
            </div>
          ) : content === 'left' ? (
            <div className='container' style={{ paddingTop: 20 }}>
              <span onClick={() => back()}>Back</span>
              <h1 className='article-title'>Custom Solutions</h1>
              <p className='article-date'>
                Posted 04/08/2020 | Updated 24/03/2021
              </p>
              <hr />
              <LoremIpsum p={5} />
            </div>
          ) : content === 'middle' ? (
            <div className='container' style={{ paddingTop: 20 }}>
              <span onClick={() => back()}>Back</span>
              <h1 className='article-title'>Zendesk Products</h1>
              <p className='article-date'>
                Posted 01/05/2020 | Updated 22/03/2021
              </p>
              <hr />
              <LoremIpsum p={5} />
            </div>
          ) : null}
        </section>
      </main>

      <Footer />
    </div>
  );
}
