export default function ApplicationLogo({src, alt, ...props}) {
    return (
        <img src={src} alt={alt} {...props} />
    );
}
