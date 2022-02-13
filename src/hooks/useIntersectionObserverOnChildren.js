import { useEffect } from 'react';

const useIntersectionObserverOnChildren = (ref, opts = {
    root: null,
    rootMargin: `0px`,
    threshold: 0
}) => {

    useEffect(() => {

        let observerRefValues = []

        const callback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('set-visible')
                }
            });
        };

        const oberserver = new IntersectionObserver(callback, opts);
        if (ref.current) {
            for (let i = 0; i < ref.current.children.length; i++) {
                ref.current.children[i].classList.add('set-invisible')
                oberserver.observe(ref.current.children[i])
                observerRefValues.push(ref.current);
            }
        }


        return () => {
            if (observerRefValues) {
                for (let i = 0; i <
                    observerRefValues.length; i++) {
                    oberserver.unobserve(observerRefValues[i])
                }
            }
        }

    }, [ref, opts])
}

export default useIntersectionObserverOnChildren;