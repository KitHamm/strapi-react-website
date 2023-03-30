const Arrows = (props) => {
    if (props.scroll < 10)
        return (
            <div className="fade-in arrow-container">
                <div className="scroll-arrow"></div>
                <div className="scroll-arrow"></div>
                <div className="scroll-arrow"></div>
            </div>
        );
    else
        return (
            <div className="fade-out arrow-container">
                <div className="scroll-arrow"></div>
                <div className="scroll-arrow"></div>
                <div className="scroll-arrow"></div>
            </div>
        );
};
export default Arrows;
