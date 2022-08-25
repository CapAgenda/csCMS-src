const headerImage = require("../images/header-art.png");

function HeaderImage() {
    return (
    <div className="header-image">
        <img src={headerImage} alt="Comic Header Image" />
    </div>
    )
}

export default HeaderImage