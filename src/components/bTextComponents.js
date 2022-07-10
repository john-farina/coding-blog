export function BHeader1({ text, className }) {
    return <p className={'bHeader1 ' + className}>{text}</p>;
}
export function BHeader2({ text, className }) {
    return <p className={'bHeader2 ' + className}>{text}</p>;
}
export function BImage({ image, desc, className }) {
    return (
        <>
            <img
                alt="this is a image lol"
                src={image}
                className={'bImage ' + className}
            />
            <div className="bImageDesc">
                <p>{desc}</p>
            </div>
        </>
    );
}
