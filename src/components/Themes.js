import light from '../img/light.jpg';
import dark from '../img/dark.jpg';


export const lightTheme = {
  body: `#2b3e50 url(${light}) center/cover no-repeat`,
  text: '#000',
  toggleButton: '#000',
  background: '#dad7dc',
  borderColor: '#000',
  right: '#dad7dc',
  hover: '#fff',
  shadow: '0 0 15px 0 rgba(255,255,255,.8)'
}
export const darkTheme = {
  body: `#2b3e50 url(${dark}) center/cover no-repeat`,
  text: '#fff',
  toggleButton: '#fff',
  background: '#212f3e',
  borderColor: '#fff',
  right: '#4e5d6c',
  hover: '#212f3e',
  shadow: '0 0 25px 0 rgba(255,0,0,.8)'
}
