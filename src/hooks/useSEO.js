import { useEffect } from 'react';

/**
 * Sets document title and meta description/keywords for SEO.
 * Restores previous title on unmount.
 * @param {{ title: string, description: string, keywords: string }} seo
 */
const useSEO = ({ title, description, keywords }) => {
    useEffect(() => {
        if (!title && !description && !keywords) return;

        const prevTitle = document.title;

        if (title) document.title = title;

        const setMeta = (name, content) => {
            if (!content) return;
            let el = document.querySelector(`meta[name="${name}"]`);
            if (!el) {
                el = document.createElement('meta');
                el.setAttribute('name', name);
                document.head.appendChild(el);
            }
            el.setAttribute('content', content);
        };
        if (description) setMeta('description', description);
        if (keywords) setMeta('keywords', keywords);

        return () => {
            document.title = prevTitle;
        };
    }, [title, description, keywords]);
};

export default useSEO;
