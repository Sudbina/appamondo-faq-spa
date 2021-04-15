import React, { useState } from 'react';
import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { LoremIpsum } from 'react-lorem-ipsum';
import { Row } from 'react-bootstrap';
import { articleData } from '../article-meta.js';
import { Icon, InlineIcon } from '@iconify/react';
import arrowLeftAlt2 from '@iconify/icons-dashicons/arrow-left-alt2';

export default function Home() {
  const [content, setContent] = useState('home');
  const [selectedArticle, setSelectedArticle] = useState('home');

  const updateContent = (key, articleItem) => {
    console.log('Updating content to ', articleItem);
    setContent(key);
    setSelectedArticle(articleItem);
    window.scrollTo(0, 0);
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
      <Header />
      <main>
        <section className='hero'>
          <h1 className='hero-title'>Got questions? We have answers.</h1>
          <h4 className='hero-description'>
            Can't find the answer you're looking for?
            <a href='#'> Get in touch.</a>
          </h4>
        </section>
        <section className='content-wrapper'>
          {content === 'home' ? (
            <div className='container'>
              <Row className='d-flex justify-content-between mt-5'>
                {articleData.map((articleItem, key) => (
                  <div
                    className={`content-card-${articleItem.key}`}
                    key={articleItem.key}
                    onClick={
                      !articleItem.disabled
                        ? () => updateContent(key, articleItem)
                        : null
                    }
                  >
                    <h2 className='content-title'>
                      <img className='icon' src={articleItem.icon} />
                      {articleItem.title}
                    </h2>
                    <p>
                      Lorem ipsum odor amet, consectetuer adipiscing elit. Eget
                      dictum quisque hendrerit torquent semper posuere arcu
                      nostra.
                    </p>
                    <button disabled={articleItem.disabled}>
                      {articleItem.disabled ? 'Coming Soon...' : 'View Article'}
                    </button>
                  </div>
                ))}
              </Row>
            </div>
          ) : (
            <div className='container' style={{ paddingTop: 20 }}>
              <span className='article-back' onClick={() => back()}>
                {' '}
                <Icon icon={arrowLeftAlt2} style={{ fontSize: '20px' }} />
                Back
              </span>
              <h1 className='article-title'>{selectedArticle.title}</h1>
              <p className='article-date'>
                Posted {selectedArticle.created} | Updated{' '}
                {selectedArticle.lastUpdated}
              </p>
              <hr />
              <LoremIpsum p={5} />
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
