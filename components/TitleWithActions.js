import React, { useCallback } from 'react';

const TitleWithActions = ({ title, actions }) => (
  <div className="flex items-center justify-center">
    <div className="max-w-screen-xl w-full flex items-center justify-between">
      <h1 className="text-3xl font-bold text-primary">{title}</h1>
      <div>
        {actions.map(action => (
          action.active && (
            <button className="mt-4 px-4 pb-2 border-b border-secondary font-bold text-primary text-sm hover:border-secondary">
              {action.text}
            </button>
          ) || (
            <button className="mt-4 px-4 pb-2 border-b border-gray-300 font-bold text-gray-300 text-sm hover:border-secondary hover:text-primary">
              {action.text}
            </button>
          )
        ))}
      </div>
    </div>
  </div>
)

export default TitleWithActions;