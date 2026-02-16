'use client';

import { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: false,
  theme: 'neutral',
  securityLevel: 'loose',
});

export default function MermaidChart({ chart, id }) {
  const containerRef = useRef(null);
  const [svg, setSvg] = useState('');

  useEffect(() => {
    if (chart && containerRef.current) {
      const renderChart = async () => {
        try {
          // Unique ID for each chart render to prevent conflicts
          const uniqueId = `mermaid-${id}-${Date.now()}`; 
          const { svg } = await mermaid.render(uniqueId, chart);
          setSvg(svg);
        } catch (error) {
          console.error("Mermaid render error:", error);
          setSvg('<div class="text-red-500">Error rendering chart</div>');
        }
      };

      renderChart();
    }
  }, [chart, id]);

  return (
    <div 
      ref={containerRef} 
      className="mermaid flex justify-center w-full overflow-x-auto py-4"
      dangerouslySetInnerHTML={{ __html: svg }} 
    />
  );
}
