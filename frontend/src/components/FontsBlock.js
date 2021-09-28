import { useEffect } from 'react';
import Block from './Block';
import fontList from '../fontList.json';

const FontsBlock = () => {
  useEffect(() => {
    const families = ['serif', 'sans-serif', 'monospace', 'cursive', 'fantasy'];
    const famLen = families.length;
    const fontsEl = document.querySelector('.fonts');
    const width = [];
    const height = [];
    const span = document.createElement('span');

    span.innerHTML = 'AaBbCcWwLl:/!@的下ㅏㅎ平片';
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
    <Block>
      <h1>System Fonts</h1>
      <div className="fonts boxWrap" />
      <p>
        <b>Explanation:</b> The fonts you have installed on your computer are
        generally linked to operating systems, language and system age. Any
        fonts that you have installed that aren&apos;t common for your system
        can make you easily identifiable.
      </p>
    </Block>
  );
};

export default FontsBlock;
