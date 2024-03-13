class Slide {
  constructor(tag) {
    this.tag = tag;
  }

  init() {
    new Splide(`${this.tag}`, {
      type: 'loop',
      pagination: false,
      arrows: false,
/*       autoplay: true,
 */      easing: 'cubic-bezier(.91,.03,0,1.22)',
    }).mount()
  }
}

export default Slide