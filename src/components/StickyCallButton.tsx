import { Phone } from "lucide-react";

/**
 * Sticky Mobile Call Button
 * Appears only on mobile screens (below 768px)
 */
const StickyCallButton = () => {
    return (
        <a
            href="tel:+918008717779"
            className="fixed bottom-0 left-0 right-0 z-[100] flex items-center justify-center gap-2 bg-gold py-4 font-bold text-primary shadow-[0_-4px_20px_rgba(0,0,0,0.15)] transition-transform active:scale-95 md:hidden"
        >
            <Phone size={20} className="fill-current" />
            <span>CALL NOW FOR BEST OFFERS</span>
        </a>
    );
};

export default StickyCallButton;
