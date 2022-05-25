/** @jsxImportSource theme-ui */

const ContentBlock = ({ children }) => (
  <div
    sx={{
      color: 'var(--text)',
      backgroundColor: '#fff',
      borderRadius: '4px',
      boxSizing: 'border-box',
      padding: ['18px', '20px', '20px'],
      boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
      mb: ['12px', '24px', '24px'],
      width: ['100%', 'auto', 'auto'],
      minWidth: ['0', '500px', '500px'],
    }}
  >
    {children}
  </div>
);

export default ContentBlock;
