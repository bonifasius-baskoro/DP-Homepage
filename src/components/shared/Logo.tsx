import React from "react"
import { SVGProps } from "react"

interface SvgComponentProps extends SVGProps<SVGSVGElement> {
  color?: string
  size?: number
}

const SvgComponent: React.FC<SvgComponentProps> = ({ color = "#000", size = 500, ...props }) => {
  const originalSize = 500
  const scale = size / originalSize

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox={`0 0 ${originalSize} ${originalSize}`}
      {...props}
    >
      <g transform={`scale(${scale})`}>
        <path
          d="M11.972 9.174h473.301v483.751H11.972z"
          style={{
            stroke: color,
            fill: "none",
            strokeWidth: 2 / scale,
          }}
        />
        <path
          d="M314.046 9.311 161.427 491.762M12.694 315.423l205.406-3.689M258.909 185.602l226.573-.594"
          style={{
            fill: "#d8d8d8",
            stroke: color,
            strokeWidth: 1 / scale,
          }}
        />
      </g>
    </svg>
  )
}

export default SvgComponent