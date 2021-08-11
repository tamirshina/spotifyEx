import React, { useState, useEffect } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import makeRequest from "../../api/MakeRequest"
import '../styles/_discover.scss';

function FunctionDiscover() {

    const [newReleases, setNewReleases] = useState([]);
    const [playlists, setPlaylists] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {

        getAllData();
    }, []);

    // Example POST method implementation:
    async function getAllData() {

        let releasesData = await makeRequest("new-releases");
        setNewReleases(releasesData.albums.items);
        let playlistsData = await makeRequest("featured-playlists");
        await setPlaylists(playlistsData.playlists.items);
        let categoriesData = await makeRequest("categories");
        await setCategories(categoriesData.categories.items);


    }

    return (
        <div className="discover">
            <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
            <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
            <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
        </div>
    );

}
export default FunctionDiscover;