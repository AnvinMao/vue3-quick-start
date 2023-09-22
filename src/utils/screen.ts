const screen = {
  checkVH() {
    const vh: number = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', vh + 'px');
  },
  addListener() {
    document.onreadystatechange = () => {
      if (document.readyState === 'complete') {
        const loader = document.getElementById('loader');
        if (loader) {
          setTimeout(() => {loader.style.display = 'none'}, 500);
        }
      }
    }
  
    this.checkVH();
    window.addEventListener('resize', this.checkVH);
    window.addEventListener('orientationchange', this.checkVH);
  }
}

export default screen;