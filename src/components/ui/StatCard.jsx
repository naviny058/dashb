import React from 'react'

function StatCard({ title, subtitle, value, trend }) {
  const isPositive = trend >= 0;

  return (
    <div>
      <p>
        {title}
      </p>
      <h2>
        {value}
      </h2>

      {subtitle &&
        <p>
          {subtitle}
        </p>
      }
      {trend !== undefined && (
        <p>
          {isPositive ? "▲" : "▼"}{Math.abs(trend)}%
        </p>
      )
      }
    </div>
  )
}

export default StatCard