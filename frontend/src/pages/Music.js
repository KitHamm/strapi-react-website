const Music = () => {
    return (
        <div className="container fade-in">
            <div className="row">
                <div className="col-12 music splash project col-lg-8 offset-lg-2 intro">
                    <div className="col-12">
                        <h1>Music</h1>
                        <hr className="home-line" />
                    </div>
                    <iframe
                        title="KMT Productions"
                        width="100%"
                        height="450"
                        allow="autoplay"
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/449546940&color=%2354aa2f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                    />
                </div>
            </div>
        </div>
    );
};
export default Music;
