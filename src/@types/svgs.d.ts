declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement & { color?: string; secondaryColor?: string }>>;
  export default ReactComponent;
}
