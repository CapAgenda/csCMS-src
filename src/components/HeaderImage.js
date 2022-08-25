const headerImage = require("../images/header-art.png");

function HeaderImage() {
    return (
    <div className="header-image">
        <img src={headerImage} alt="Comic Header" />
    </div>
    )
}

export default HeaderImage