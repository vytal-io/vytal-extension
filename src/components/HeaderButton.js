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
      height: '50px',
      borderRadius: '4px',
      padding: '0 18px',
      boxShadow: 'rgb(0 0 0 / 10%) 0px 4px 12px',
      fontSize: '15px',
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
      height="28"
      width="28"
      style={{
        marginRight: '8px',
      }}
    />
    {text}
  </a>
);

export default HeaderButton;
