export const doubleclick = {
    mounted(el, binding) {
        el.addEventListener('click', () => {
            if (!el.disabled) {
                el.disabled = true;
                setTimeout(() => {
                    el.disabled = false;
                }, binding.value || 1000);
            }
        });
    }
};
//# sourceMappingURL=index.js.map