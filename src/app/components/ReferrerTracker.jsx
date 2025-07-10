'use client';

import { useEffect } from 'react';

export default function ReferrerTracker() {
    useEffect(() => {
        const ref = document.referrer || 'direct';

        if (typeof window.gtag === 'function') {
            window.gtag('event', 'custom_referrer', {
                event_category: 'traffic_source',
                event_label: ref,
            });
            console.log('📊 Sent to GA:', ref);
        } else {
            console.log('⚠️ gtag not ready');
        }
    }, []);

    return null;
}
