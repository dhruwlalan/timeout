import dom from './dom';

export const updateTheme = (theme) => {
   dom.body.removeAttribute('class');
   dom.body.classList.add(`theme-${theme}`);
   if (theme === 'light') {
      dom.themeSvg.setAttribute('src', './assets/svg/icon-dark.svg');
   } else if (theme === 'dark') {
      dom.themeSvg.setAttribute('src', './assets/svg/icon-light.svg');
   }
};

export const changeTheme = () => {
   const src = dom.themeSvg.getAttribute('src');
   if (src.includes('light')) {
      updateTheme('light');
      localStorage.setItem('timeoutTheme', 'light');
   } else if (src.includes('dark')) {
      updateTheme('dark');
      localStorage.setItem('timeoutTheme', 'dark');
   }
};
