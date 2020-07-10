import React from 'react';
import i18n from '../lib/i18n';

class Toc extends React.Component {
  render() {
    i18n.locale = this.props.locale;

    return <div className="bg-gray-900 relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto py-15 text-lg">
        <div class="hidden sm:block sm:absolute sm:inset-0">
          <svg class="absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0" width="364" height="384" viewBox="0 0 364 384" fill="none">
            <defs>
              <pattern id="eab71dd9-9d7a-47bd-8044-256344ee00d0" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="364" height="384" fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)" />
          </svg>
        </div>
        <h2 className="text-5xl mb-10 font-semibold text-gray-50 px-4">
          What's <span className="text-purple-400">inside?</span>
        </h2>
        <div className="flex-none sm:flex">
          <div className="text-base sm:flex-1 px-4">
            <p className="text-gray-100 font-semibold">Part One: Principles</p>
            <ol className="text-gray-400 ml-4 mb-4">
              <li>Hello World</li>
              <li>Methodology</li>
              <li>Why Habits?</li>
            </ol>
            <p className="text-gray-100 font-semibold">Part Two: Learning Habits</p>
            <ol className="text-gray-400 ml-4 mb-4">
              <li>Habit 1: Look For The Signals</li>
              <li>Habit 2: Focus On The Fundamentals</li>
              <li>Habit 3: Teaching Equals Learning</li>
            </ol>
            <p className="text-gray-100 font-semibold">Part Three: Daily Habits</p>
            <ol className="text-gray-400 ml-4 mb-4">
              <li>Habit 4: Be Boring</li>
              <li>Habit 5: Do It For Your Future Self</li>
              <li>Habit 6: Your 9-to-5 Is Not Enough</li>
            </ol>
            <p className="text-gray-100 font-semibold">Part Four: Career Habits</p>
            <ol className="text-gray-400 ml-4 mb-4">
              <li>Habit 7: Master The Dark Side</li>
              <li>Habit 8: Side Projects</li>
              <li>Habit 9: Mario or Sonic?</li>
            </ol>
            <p className="text-gray-100 font-semibold">Part Five: Team Habits</p>
            <ol className="text-gray-400 ml-4 mb-4">
              <li>Habit 10: Active Listening</li>
              <li>Habit 11: Don't Underestimate</li>
              <li>Habit 12: Specialist vs. Generalist</li>
            </ol>
            <p className="text-gray-100 font-semibold">Part Six: Life Habits</p>
            <ol className="text-gray-400 ml-4 mb-4">
              <li>Habit 13: Control Your Variables</li>
              <li>Habit 14: Stop Waiting</li>
            </ol>
          </div>
          <div className="sm:flex-1 px-4">
            <img className="mt-16 rounded-md relative z-10" src="/static/img/kindle.png" alt="Kindle" />
          </div>
        </div>
      </div>
    </div>
  }
}

export default Toc;