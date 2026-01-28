const SectionTitle = ({ subtitle, title, alignment = 'center' }) => {
    const alignClass = alignment === 'left' ? 'text-left' : 'text-center mx-auto';

    return (
        <div className={`max-w-3xl mb-16 ${alignClass}`}>
            {subtitle && (
                <span className="text-accent font-semibold tracking-wide uppercase text-sm mb-3 block">
                    {subtitle}
                </span>
            )}
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 leading-tight">
                {title}
            </h2>
            <div className={`h-1.5 w-20 bg-accent rounded-full ${alignment === 'center' ? 'mx-auto' : ''}`} />
        </div>
    );
};

export default SectionTitle;
