import React from 'react';

const galleryData = [
  // Column 1
  [
    { id: 1, ratio: '4/3' },
    { id: 2, ratio: '1/1' },
    { id: 3, ratio: '1/1' },
  ],
  // Column 2
  [
    { id: 4, ratio: '1/1' },
    { id: 5, ratio: '1/1' },
    { id: 6, ratio: '1/1' },
  ],
  // Column 3
  [
    { id: 7, ratio: '1/1' },
    { id: 8, ratio: '1/1' },
    { id: 9, ratio: '4/3' },
  ]
];

const GallerySection = () => {
  return (
    <section id="gallery" className="home-section" style={{ minHeight: '100vh', padding: '8rem 0', position: 'relative', zIndex: 1 }}>
      <div className="projects-grid">
        
        {/* Top Label */}
        <div className="project-header">
          <span className="project-label">.gallery</span>
          <div className="project-line"></div>
        </div>

        {/* Masonry Grid */}
        <div style={{ gridColumn: '2 / 8' }}>
          <div className="gallery-grid-main">
            {galleryData.map((column, colIdx) => (
              <div key={colIdx} className="gallery-col">
                {column.map((item) => (
                  <div 
                    key={item.id} 
                    className="gallery-item-placeholder" 
                    style={{ 
                      aspectRatio: item.ratio,
                      backgroundImage: `url(https://picsum.photos/seed/${item.id * 15}/600/800)`
                    }}
                  >
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default GallerySection;
