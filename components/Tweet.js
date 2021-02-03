import React from 'react';

class Tweet extends React.Component {
  render() {
    return <div className="p-1">
      <div className="w-full relative inline-block shadow mx-auto rounded-lg border bg-white text-gray-800 py-5 hover:bg-blue-50 hover:bg-opacity-20">
        <div className="w-full flex px-5">
          <div className="overflow-hidden rounded-full w-12 h-12">
            <a href="https://twitter.com/ModernAfflatus" target="_blank" rel="noreferrer">
              <img src="https://pbs.twimg.com/profile_images/856250864385884164/uno9_c3A_normal.jpg" alt="" />
            </a>
          </div>
          <div className="flex-grow pl-3">
            <div className="flex justify-between"><div>
              <h6 className="font-bold text-md inline">
                <a className="hover:underline" href="https://twitter.com/ModernAfflatus" target="_blank" rel="noreferrer">Ash</a>
              </h6>
            </div>
              <div>
                <a href="https://twitter.com/ModernAfflatus/status/1334288155378409474" target="_blank" rel="noreferrer">
                  <svg className="w-5 h-5 text-twitter" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="none"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
                </a>
              </div>
            </div>
            <div className="text-xs text-gray-600">
              <a className="hover:underline" href="https://twitter.com/ModernAfflatus" target="_blank" rel="noreferrer">@ModernAfflatus</a>
            </div>
          </div>
        </div>
        <div className="w-full flex px-5 mt-2">
          <p>a</p>
        </div>
        <div className="w-full flex px-5 mt-2">
          <div className="inline-flex items-center text-sm text-gray-400 mt-2">
            <svg className="w-5 h-5 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            <a className="hover:underline" href="https://twitter.com/ModernAfflatus/status/1334288155378409474" target="_blank" rel="noreferrer">5</a><p className="text-sm text-gray-400 ml-4"><a className="hover:underline" href="https://twitter.com/ModernAfflatus/status/1334288155378409474" target="_blank" rel="noreferrer">4:07 PM · Dec 2, 2020</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  }
}

export default Tweet;