/** @jsxImportSource theme-ui */

const HeaderButton = ({ url, image, text, alt }) => (
  <a
    href={url}
    className="headerButton"
    target="_blank"
    rel="noopener noreferrer"
    sx={{
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#fff',
      height: ['36px', '50px', '50px'],
      borderRadius: '4px',
      px: ['10px', '18px', '18px'],
      boxShadow: 'rgb(0 0 0 / 10%) 0px 4px 12px',
      fontSize: ['13px', '15px', '15px'],
      textDecoration: 'none',
      color: '#000',
      ':hover': {
        backgroundColor: 'white90',
      },
    }}
  >
    <img
      src={image}
      alt={alt}
      sx={{
        marginRight: ['5px', '8px', '8px'],
        height: ['22px', '28px', '28px'],
        width: ['22px', '28px', '28px'],
      }}
    />
    {text}
  </a>
);

export default HeaderButton;
