import { css } from 'styled-components';

const colors = css`
  --palette-irisBlue: 248 73% 60%;
  --colors-irisBlue: hsl(var(--palette-irisBlue));
  --colors-irisBlue-boxShadow: hsl(var(--palette-irisBlue) / 0.3);
  --colors-irisBlue-light: hsl(249 100% 64%);
  --colors-irisBlue-lighter: hsl(248 74% 88%);
  --colors-spindle: hsl(239 57% 82%);
  --colors-darkBlue: #00234b;
  --colors-redPink: #ff4a5a;
  --colors-cosmos: #ffdbde;

  --colors-bayoux: #525f7f;
  --colors-lynch: #617798;
  --colors-pigeon: #a8bdd4;
  --colors-heather: #b1becd;
  --colors-mischka: #e8ecee;
  --colors-catskillWhite: #eaf0f6;
  --colors-linkWater: #f4f7fc;
  --colors-blank: #ffffff;
`;

export default colors;
