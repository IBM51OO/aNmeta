export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.directive('click-outside', {
	  mounted (el, binding, vnode) {
		const clickOutsideHandler = (event: Event) => {
			if (!el.contains(event.target) && el !== event.target) {
			  binding.value();
			}
		  };
	  
		  document.addEventListener('click', clickOutsideHandler);
	  
		  el._clickOutsideHandler = clickOutsideHandler;

	  },
	  unmounted: (el) => {
		document.removeEventListener('click', el._clickOutsideHandler);
	  },
	  getSSRProps (binding, vnode) {
		// you can provide SSR-specific props here
		return {}
	  }
	})
  })