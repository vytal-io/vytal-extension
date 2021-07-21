import { useEffect } from 'react';
import ScanBlock from './ScanBlock';
import fontList from '../fontList.json';

const FontsBlock = () => {
  useEffect(() => {
    const families = ['serif', 'sans-serif', 'monospace', 'cursive', 'fantasy'];
    const famLen = families.length;
    const fontsEl = document.querySelector('.fonts');
    const width = [];
    const height = [];
    const span = document.createElement('span');

    span.innerHTML = 'AaBbCcWwLl:/!@';
    span.style.fontSize = '100px';

    for (let i = 0; i < famLen; i++) {
      span.style.fontFamily = families[i];
      fontsEl.appendChild(span);
      width[i] = span.offsetWidth;
      height[i] = span.offsetHeight;
      fontsEl.removeChild(span);
    }

    function detect(font) {
      let detected = false;
      for (let i = 0; i < famLen; i++) {
        span.style.fontFamily = `"${font}" ,${families[i]}`;
        fontsEl.appendChild(span);
        if (span.offsetWidth !== width[i] || span.offsetHeight !== height[i]) {
          detected = true;
        }
        fontsEl.removeChild(span);
      }
      return detected;
    }

    let fontStr = '';
    fontList.forEach((item) => {
      if (detect(item.font)) {
        fontStr += `${item.font}, `;
      }
    });
    fontsEl.textContent = fontStr.slice(0, -2);
  }, []);

  return (
    <ScanBlock>
      <h1>System Fonts</h1>
      <div className="fonts boxWrap" />
      <p>
        <b>Explanation:</b> JavaScript can be used to read various information
        about your hardware. This information can be used to create a
        fingerprint.
      </p>
    </ScanBlock>
  );
};

export default FontsBlock;
