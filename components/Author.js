import React from 'react';
import i18n from '../lib/i18n';

class Author extends React.Component {
  render() {
    i18n.locale = this.props.locale;

    return <div className="bg-gray-50">
      <div className="max-w-screen-xl mx-auto py-16">
        <h2 className="text-5xl mb-4 font-semibold text-gray-900 px-4">
          {i18n.t('author.titleFirstPart')}&nbsp;<span className="underline">{i18n.t('author.titleSecondPart')}</span>
        </h2>
        <div className="flex-none sm:flex">
          <div className="sm:flex-1 px-4">
            <img className="mb-4 rounded-md" src="/static/img/author.jpg" alt="Zeno Rocha" />
          </div>
          <div className="text-lg text-gray-600 sm:flex-1 px-4">
            <p className="mb-4">{i18n.t('author.part1')}</p>
            <p className="mb-4">{i18n.t('author.part2')}</p>
            <p className="mb-4">{i18n.t('author.part3')}</p>
            <p className="mb-4">{i18n.t('author.part4')}</p>
            <p className="text-sm italic text-gray-500">{i18n.t('author.location')}</p>
            <div className="flex flex-row my-2">
              <a href="https://github.com/zenorocha" target="_blank">
                <svg className="w-5 h-5 mr-2 fill-current text-book-gray hover:text-gray-500 transition ease-in-out duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z" /></svg>
              </a>
              <a href="https://twitter.com/zenorocha" target="_blank">
                <svg className="w-5 h-5 mr-2 fill-current text-book-gray hover:text-gray-500 transition ease-in-out duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z" /></svg>
              </a>
              <a href="https://linkedin.com/in/zenorocha" target="_blank">
                <svg className="w-5 h-5 mr-2 fill-current text-book-gray hover:text-gray-500 transition ease-in-out duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>ionicons-v5_logos</title><path d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}

export default Author;